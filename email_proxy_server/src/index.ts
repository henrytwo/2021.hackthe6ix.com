/**
 * Email proxy server
 */
import axios from "axios";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import querystring from "querystring";
import escape from 'escape-html';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('sanitize').middleware);

// Subscribe to mailing list
app.post('/subscribe', (req: express.Request, res: express.Response) => {

  res.send(process.env);

});

// Contact form
app.post('/contact', async (req: express.Request, res: express.Response) => {


  try {
    const [name, email, message] = [req.body.name, req.body.email, req.body.message];

    console.log(`[${new Date()}] New contact form message: ${ req.body }`);

    if (!name || !email || !message) {
      return res.status(400).send('Invalid request! Must specify name, email, and message!');
    }

    const tags: any = {
      'TAGS[USER_NAME]': escape(name),
      'TAGS[USER_EMAIL]': escape(email),
      'TAGS[BODY]': escape(message)
    };

    const path = `${process.env.MAILTRAIN_PUBLIC_ROOT_PATH}/api/templates/${process.env.MAILTRAIN_CONTACT_TEMPLATE_CID}/send?access_token=${process.env.MAILTRAIN_API_KEY}`;

    const result = await axios.post(path, querystring.stringify({
      EMAIL: process.env.CONTACT_EMAIL,
      SUBJECT: 'Contact form message',
      ...tags,
    }));

    if (result.status != 200 || !result.data) {
      console.log(`[${new Date()}] Error: Mailtrain error Request: ${req.body}`);
      return res.status(500).send('Mail server failure - please try again later');
    }

    return res.status(200).send('success');

  } catch (e) {
    console.log(`[${new Date()}] Error: ${e} Request: ${JSON.stringify(req.body)}`);
    return res.status(500).send('Something went wrong - please try again later');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Sewvew wunnying on powt owo ${process.env.PORT}`);
});
