const fs = require("fs");

// make the validator function and export it.
// Custom validation middleware
const validatorfunction = (req, res, next) => {
  const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  const errors = [];
  if (
    typeof ID === 'number' &&
    typeof Name === 'string' &&
    !/\d/.test(Name) &&
    typeof Rating === 'number' &&
    typeof Description === 'string' &&
    typeof Genre === 'string' &&
    Array.isArray(Cast) &&
    Cast.every((actor) => typeof actor === 'string')
  ) {
    next();
  } else {
    res.status(400).send('bad request.some data is incorrect.\n');
  }

  if (typeof ID === 'number') {
    errors.push("ID is a number")
  }
  if (typeof ID !== 'number') {
    errors.push("bad request.some data is incorrect.")
  }
  if (typeof Name === 'string') {
    errors.push("Name is a string")
  }
  if (typeof Name === 'string' &&
  !/\d/.test(Name)) {
    errors.push("bad request.some data is incorrect.")
  }
  if (typeof Rating === 'number') {
    
    errors.push("Rating is a number")
  }

  if (typeof Rating!== 'number') {
    
    errors.push("bad request.some data is incorrect.")
  }

  if (typeof Description === 'string') {
    errors.push("Description is a string")
  }

  if (typeof Description !== 'string') {
    errors.push("bad request.some data is incorrect.")
  }

  if (typeof Genre === 'string') {
    errors.push("Genre is a string")
  }


  if (typeof Genre !== 'string') {
    errors.push("bad request.some data is incorrect.")
  }

  if (Array.isArray(Cast) && Cast.every((actor) => typeof actor === 'string')) {
    errors.push("Cast is a array of string")
  }

  if (!Array.isArray(Cast) && !Cast.every((actor) => typeof actor !== 'string')) {
    errors.push("bad request.some data is incorrect.")
  }
  if (errors.length > 0) {
    const errorMessage = errors.join('\n');
    const err = new Error('Bad Request. Some data is incorrect.');
    err.status = 400;
    // Appending the error message to a file named 'res.txt'
    fs.appendFileSync('res.txt', errorMessage + '\n');
    next(err);
  } else {
    next();
  }
  res.end();
};
 module.exports = {validatorfunction};
