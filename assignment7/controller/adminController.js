const Admin = require('../Models/adminModel');

exports.adminSignUp = (req,res)=>{
    let {firstName,lastName,email,password} = req.body;
    let user = new Admin({
        firstName,
        lastName,
        email,
        password
    });
    user.save().then(()=>{
        res.status(200).send(user);
    }).catch((error)=>{
        console.log(error);
        res.status(404).send('Something is not right');
    });
};

exports.adminLogin = (req,res)=>{
    let {email,password} = req.body;
    Admin.findOne({email:email}).then((user)=>{
        if (password == user.password){
            return res.status(200).send(user);
        }
        return res.status(401).send('Your password is incorrect');
    }).catch((error)=>{
        console.log(error);
        return res.status(404).send('Your email and password is incorrect');
    });
};