const express = require('express');
const router = express();
const userController = require('../controller/userController');

router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.get('/',(req,res)=>{
    res.status(200).send('This is home page')
})

// Sign Up page
router.post('/signup',userController.signup);


// Login page
router.post('/login',userController.login);

// Post blog page
router.post('/postblog',userController.postBlog);

// Get blog page
router.get('/getblog',userController.getBlog);

// Get user page
router.get('/getuser:id',userController.getUser);

module.exports = router;