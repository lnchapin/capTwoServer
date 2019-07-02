const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));

//Sequelize Models
const db = require('./models')
const Category = db.Category

//Router files


//Routes
app.get('/api/categories', (req, res, next)=>{
  Category.findAll()
    .then(categories => {
      res.json({ categories });
    })
    .catch(error => {
      next(error);
    });
});

//Error Handling
// // The following 2 `app.use`'s MUST follow ALL your routes/middleware right before `app.listen`
app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl});
}

// The 4 arguments tells exoress that this is our error handler. this also says hey if we're in production give us the stack if not to protect our stack from hackers and the like. Also this allows us to fail gracefully as it doesn't break our app.
// eslint-disable-next-line.
function errorHandler(err, req, res, next) {
  console.error('ERROR', err);
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined;
  res.status(500).send({error: err.message, stack, url: req.originalUrl});
}


app.listen(PORT, ()=>{
  console.log(`Server is listening on ${PORT}`);
});
