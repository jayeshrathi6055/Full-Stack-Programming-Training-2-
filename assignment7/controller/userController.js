const User = require('../Models/userModel');
const Blog = require('../Models/blogModel');
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');

exports.signup = (req, res) => {
    let { firstName, lastName, email, password, dob } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
        dob
    });
    user.save().then(() => {
        res.status(200).send(user);
    }).catch((error) => {
        console.log(error);
        res.status(404).send('Something is not right');
    });
};

exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email }).then((user) => {
        if (password == user.password) {
            let token = getToken(user);
            console.log(token);
            return res.status(200).send({user, token});
        }
        return res.status(401).send('Your password is incorrect');
    }).catch((error) => {
        console.log(error);
        return res.status(404).send('Your email and password is incorrect');
    });
};

exports.postBlog = (req, res) => {
    let { heading, blog } = req.body;
    let user = new Blog({
        heading,
        blog
    });
    user.save().then(() => {
        res.status(200).send('Your blog is successfully posted');
    }).catch((error) => {
        console.log(error);
        res.status(404).send('Something is not right');
    });
};

exports.getBlog = (req, res) => {
    let { heading } = req.body;
    Blog.find({ heading: heading }).then((blog) => {
        res.status(200).send(blog);
    }).catch((error) => {
        console.log(error);
        res.status(404).send('This blog is not found');
    });
};

exports.getUser = (req, res) => {
    console.log(req);
    let { id } = req.params;
    id = mongoose.Types.ObjectId(id);
    User.findOne({ _id: id }).then((user) => {
        res.status(200).send(user);
    }).catch((error) => {
        console.log(error);
        res.status(404).send('User not found');
    })
}

exports.updateUser = (req, res) => {
    let id = mongoose.Types.ObjectId(req.params.id);
    let { firstName, lastName, email } = req.body;
    User.updateOne({ _id: id }, { $set: { firstName, lastName, email } })
        .then((updateResult) => {
            if (
                updateResult.nModified >= 0 &&
                updateResult.n >= 1 &&
                updateResult.ok >= 1
            ) {
                return res.status(200).send("User was successfully updated.");
            }
            return res.status(404).send(`User with ID: ${id} doesn't exist!`);
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).send("ERROR");
        });
};

function getToken(user) {
    return JWT.sign(
        {
            email: user.email,
        },
        "assignment7UserSecretKey",
        {
            expiresIn: "1h",
        }
    )
} 