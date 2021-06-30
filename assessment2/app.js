const express = require('express');
const app = express();
const router = require('./routes/userRoute');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(router)

// Listen port
app.listen(8000,()=>{
    console.log('http://localhost:8000/');
});