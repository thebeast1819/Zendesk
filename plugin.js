const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint to receive Zendesk webhooks
app.post('/zendesk-webhook', async (req, res) => {
  try {
    // The message query of end user
    const zendeskPayload = req.body;

    // Forwarding the payload to backend. Here, I am just sending Hello from Admin as a response
    // const apiUrl = 'BACKEND_URL';
    // const response = await axios.post(apiUrl, zendeskPayload);

    res.status(200).send({message: "Helllo from admin"} );
  } catch (error) {
    console.error('Error processing Zendesk webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});
