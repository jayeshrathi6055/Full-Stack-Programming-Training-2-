const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require("./Routes/userRoutes");
const adminRoute = require("./Routes/adminRoutes");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Connection to mongodb
mongoose.connect('mongodb://localhost:27017/assignment7',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}).then(()=>{
    console.log('connection successful');
}).catch(()=>{
    console.log('connection unsuccessful');
});
app.use(userRoute);
app.use(adminRoute);

app.listen(8000,()=>{
    console.log('http://localhost:8000/');
});