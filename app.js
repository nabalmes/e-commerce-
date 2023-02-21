const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config')


app.use(cors());
app.options('*', cors())

//* Middleware
app.use(express.json())
app.use(morgan('tiny'));

//*Routes
const categoryRoutes = require('./routers/r-category');
const productsRoutes = require('./routers/r-products');
const usersRoutes = require('./routers/r-users');
const ordersRoutes = require('./routers/r-orders');

const api = process.env.API_URL;

app.use(`${api}/category`, categoryRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);


mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING)


    .then(() => {
        console.log('database ready');
    })
    .catch((err) => {
        console.log(err, 'database error');
    })

app.listen(9000, () => {
    console.log('server is running http://localhost:9000');
})