const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'server.html'));
  //This is another way of createing a path:
  // res.sendFile(__dirname + /server.html');
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
