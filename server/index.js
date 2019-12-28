// require('dotenv').config();

// // IMPORT PACKAGES
// const   express = require('express'),
//         { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
//         reviewCtrl = require('./controllers/reviewController'),
//         authCtrl = require('./controllers/authController'),
//         session = require('express-session'),
//         massive  = require('massive'),
//         app = express();

// app.use(express.json());

// // SETUP SESSION
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {maxAge: 1000 * 60 * 60 * 24}
// }));

// // SETUP MASSIVE (CONNECTION BETWEEN SERVER AND DB)
// massive(CONNECTION_STRING).then(db => {
//     app.set('db', db)
//     console.log('db connected')
// })

// // ENDPOINTS
// app.post('auth/login', authCtrl.login);
// app.post('auth/register', authCtrl.register);
// // app.post('auth/logout', authCtrl.logout);

// // app.get('api/reviews', reviewCtrl.getAllReviews);
// // app.get('api/reviews/:user_id', reviewCtrl.getUserReviews)


// const port = SERVER_PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));

require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      authCtrl = require('./controllers/authController'),
    //   cartCtrl = require('./cartController'),
      app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

//auth endpoints
// app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
// app.post('/auth/logout', authCtrl.logout);

// app.get('/api/products', cartCtrl.getProducts);
// app.post('/api/cart', cartCtrl.addToCart);
// app.get('/api/cart/:id', cartCtrl.getCart);

const port = SERVER_PORT || 4040;
app.listen(port, () => console.log(`Server running on port ${port}`));