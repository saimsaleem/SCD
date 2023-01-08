console.log("Hemlo");

const express = require('express');
const path = require('path');
const app = express();


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/lab4.html'));
});

// app.get('/', (req, res) => { 
//   res.send();
// });

app.listen(8080, () => {
  console.log('Express application running on localhost:8080');
});
