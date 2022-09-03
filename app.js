const express =require('express');

const app =express();

const mongoose = require('mongoose');

//Let's Connect the DataBase...
const database = module.exports = () => {
    const connectionParams = {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    }
    try{
mongoose.connect('mongodb+srv://Paras:007paras@node-rest-shop.p0wshox.mongodb.net/?retryWrites=true&w=majority', connectionParams)
console.log('Database Connected Succesfully');
    } catch(error) {
console.log(error);
console.log('Database Connction Failed');
    }
} 

database();

module.exports =app;