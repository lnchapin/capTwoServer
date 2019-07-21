require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PORT = process.env.PORT || 8080;
const app = express();

//Middleware
app.use(cors());
app.use(morgan('dev'));

//Sequelize Models
const db = require('./models');
const Category = db.Category;
const Product = db.Product;
const ProductDetail = db.ProductDetail;

//Router files


//Routes
app.get('/api/categories', (req, res, next)=>{
  Category.findAll({
    include:[{ model : Product }]
  })
    .then(categories => {
      res.json({ categories });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/products', (req, res, next)=>{
  Product.findAll({
    include:[{model: Category}, {model: ProductDetail}]
  })
    .then(products => {
      res.json({ products });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/categories/:category', (req, res, next)=>{
  Category.findAll({
    where:{
      name: req.params.category
    },
    include:[{ model : Product }]
  })
    .then(products => {
      res.json({ products });
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/products/:id', (req, res, next)=>{
  Product.findByPk(req.params.id,{
    include:[{model: Category}, {model: ProductDetail}]
  })
    .then(products => {
      res.json({ products });
    })
    .catch(error => {
      next(error);
    });
});

app.post('/api/checkout', async (req, res, next)=>{
  const lineItems = [{
    name: 'T-shirt',
    description: 'Comfortable cotton t-shirt',
    images: ['http://lorempixel.com/400/200/'],
    amount: 500,
    currency: 'usd',
    quantity: 1
  }];
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    });
    res.json({ session });
  } catch (error){
    next(error);
  }
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
