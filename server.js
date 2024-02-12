/* This script allows serving presentations outside the Reveal.js source folder without making any changes to the Reveal.js files. */
const express = require('express');
const path = require('path');
const app = express();
const port = 8000; // You can use any available port

app.use(express.static(path.join(__dirname, process.argv[2])));
// presentations contain paths that lead up to root and then down in reveal.js folder
app.use(express.static("."));


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port} with static dir ${path.join(__dirname, process.argv[2])}`);
});