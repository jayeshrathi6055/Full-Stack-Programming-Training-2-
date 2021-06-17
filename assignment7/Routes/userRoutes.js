const express = require('express');
const router = express();
const userController = require('../controller/userController');
const tokenValidation = require('../middleware/tokenValidation');

router.use(express.urlencoded({extended:false}));
router.use(express.json());

// Home page
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

// Get user by id page
router.get('/getuser:id',userController.getUser);

// Update user by id page
router.get('/updateuser:id',tokenValidation.tokenValidation,userController.updateUser);

module.exports = router;