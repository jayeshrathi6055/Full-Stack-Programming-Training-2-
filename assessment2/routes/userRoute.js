const express = require('express');
const router = express();
const axios = require('axios');
const cors = require('cors');

function axiosTest(url) {
    // create a promise for the axios request
    const promise = axios.get(url)

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    // return it
    return dataPromise
}
 
// It will convert json into object
router.use(express.urlencoded({extended:false}));
router.use(express.json());

router.use(cors); 

// Get all posts
router.get('/allPosts',(req,res)=>{
    axiosTest('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        return res.status(200).send(data)
    })
    .catch(err => {
        console.log(err);
        return res.status(404).send('Something is not right');
    })
}); 

// Get post by postId
router.get('/comments:postId',(req,res)=>{ 
    let {postId} = req.params;
    console.log(postId)
    axiosTest(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(data=>{
        return res.status(200).send(data);
    }).catch(err=>{
        console.log(err);
        return res.status(404).send('something is not right');
    })
})

// Export all routes
module.exports = router;