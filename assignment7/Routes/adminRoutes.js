const express = require('express');
const router = express();
const adminController = require('../controller/adminController')

router.use(express.urlencoded({extended:false}));
router.use(express.json());

// Sign Up page
router.post('/admin-signup',adminController.adminSignUp);

// Login page
router.post('/admin-login',adminController.adminLogin);

module.exports = router;