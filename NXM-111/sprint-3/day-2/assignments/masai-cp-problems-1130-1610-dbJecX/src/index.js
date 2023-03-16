//  import required modules from nodejs and build the server

const express = require('express');
const app = express();
const {validatorfunction}=require("./middlewares/validator")
app.use(express.json())


// POST route for creating a new TODO
app.post('/', validatorfunction, (req, res) => {
  res.status(200).send('data received\n');
});

// Export the app
module.exports = app;
// export the server

