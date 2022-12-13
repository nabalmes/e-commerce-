const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');




require('dotenv/config')

const api = process.env.API_URL;

//* Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get(`${api}/products`, (req, res)=>{
   const product = {
    id: 1,
    name: "neil",
    age: 10
   }
   res.send(product)
})

app.post(`${api}/products`, (req, res)=> {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct)
})
mongoose.set('strictQuery', false);
mongoose.connect(process.env.CONNECTION_STRING)


.then(()=> {
    console.log('database ready');
})
.catch((err)=>{
    console.log(err, 'anu na');
})

app.listen(3000, ()=> {
    console.log('server is running http://localhost:3000');
})