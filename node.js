const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Load SSL cert and key
const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt')
  // If you have a fullchain, use it instead of just cert
  // cert: fs.readFileSync('path/to/fullchain.crt')
};

// Serve your app
app.use(express.static('public_folder_path')); // or wherever your HTML is

// Start HTTPS server
https.createServer(options, app).listen(443, '127.0.0.1', () => {
  console.log('HTTPS Server running at https://portfolio.run.place');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
