/**
 * Email proxy server
 */
import axios from "axios";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import querystring from "querystring";
import validator from "email-validator"
import escape from 'escape-html';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('sanitize').middleware);

// Subscribe to mailing list
app.post('/api/subscribe', async (req: express.Request, res: express.Response) => {
  try {
    const email = req.body.email;
    const mailingListCID = process.env.MAILTRAIN_MAILING_LIST_ID;

    console.log(`[${new Date()}] New contact form message: ${ req.body }`);

    if (!email || !validator.validate(email)) {
      console.log(`[${new Date()} - Subscribe] Error: Invalid request - Request: ${req.body}`);
      return res.status(400).send('Invalid request! Must specify valid email!');
    }

    // STEP 1: Fetch the user's current subscriptions and verify they haven't already subscribed
    const resultGetSubscriptions = await axios.get(`${process.env.MAILTRAIN_PUBLIC_ROOT_PATH}/api/lists/${email}?access_token=${process.env.MAILTRAIN_API_KEY}`);

    if (resultGetSubscriptions.status != 200 || !resultGetSubscriptions.data) {
      console.log(`[${new Date()} - Subscribe] Error: Mailtrain error - Request: ${req.body}`);
      return res.status(500).send('Mail server failure - please try again later');
    }

    for (const sub of resultGetSubscriptions.data.data) {
      if (sub.cid === mailingListCID && sub.status == 1) {
        return res.status(401).send('You have already subscribed!');
      }
    }

    // STEP 2: Subscribe the user
    const resultSubscribe = await axios.post(`${process.env.MAILTRAIN_PUBLIC_ROOT_PATH}/api/subscribe/${mailingListCID}?access_token=${process.env.MAILTRAIN_API_KEY}`, querystring.stringify({
      EMAIL: email,
      REQUIRE_CONFIRMATION: false,
      FORCE_SUBSCRIBE: true
    }));

    if (resultSubscribe.status != 200 || !resultSubscribe.data) {
      console.log(`[${new Date()} - Subscribe] Error: Mailtrain error - Request: ${req.body}`);
      return res.status(500).send('Mail server failure - please try again later');
    }

    return res.status(200).send('You have been added to the mailing list!');

  } catch (e) {
    console.log(`[${new Date()} - Subscribe] Error: ${e} - Request: ${JSON.stringify(req.body)}`);
    return res.status(500).send('Something went wrong - please try again later');
  }
});

// Contact form
app.post('/api/contact', async (req: express.Request, res: express.Response) => {
  try {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message];

    console.log(`[${new Date()}] New contact form message: ${ req.body }`);

    if (!name || !email || !validator.validate(email) || !message) {
      console.log(`[${new Date()} - Contact form] Error: Invalid request - Request: ${req.body}`);
      return res.status(400).send('Invalid request! Must specify name, email, and message!');
    }

    if (name.length > 128 || email.length > 128 || message.length > 2056) {
      console.log(`[${new Date()} - Contact form] Error: Message length exceeded - Request: ${req.body}`);
      return res.status(400).send('Invalid request! Maximum message length exceeded!');
    }

    const tags: any = {
      'TAGS[USER_NAME]': escape(name),
      'TAGS[USER_EMAIL]': escape(email),
      'TAGS[BODY]': escape(message)
    };

    const result = await axios.post(`${process.env.MAILTRAIN_PUBLIC_ROOT_PATH}/api/templates/${process.env.MAILTRAIN_CONTACT_TEMPLATE_CID}/send?access_token=${process.env.MAILTRAIN_API_KEY}`, querystring.stringify({
      EMAIL: process.env.CONTACT_EMAIL,
      SUBJECT: 'Contact form message',
      ...tags,
    }));

    if (result.status != 200 || !result.data) {
      console.log(`[${new Date()} - Contact form] Error: Mailtrain error - Request: ${req.body}`);
      return res.status(500).send('Mail server failure - please try again later');
    }

    return res.status(200).send('Your message has been sent!');

  } catch (e) {
    console.log(`[${new Date()} - Contact form] Error: ${e} - Request: ${JSON.stringify(req.body)}`);
    return res.status(500).send('Something went wrong - please try again later');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Sewvew wunnying on powt owo ${process.env.PORT}`);
});
