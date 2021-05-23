This is a small proxy server used to handle requests from the contact form and mailing list subscriptions.
We are using Mailtrain (https://github.com/hack-the-6ix/hackthe6ix-internal-docs/blob/main/mailtrain.md) to handle our mailing list and will use their transactional API to send out emails on demand.

Populate the `.env` file prior to starting the node server.

## API Documentation

### Subscribe
POST - `/subscribe`

Input body:
```
{
  "email": "<user email>"
}
```

Response:
```
success
```
or error message on failure

### Contact form
POST - `/contact`


Input body:
```
{
  "name": "<user name>",
  "email": "<user email>",
  "message": "<user message>"
}
```

Response:
```
success
```
or error message on failure
