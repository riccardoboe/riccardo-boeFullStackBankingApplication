const express = require('express');
const app=express();
const cors=require('cors');
const dal =require('./dal.js');

app.use(express.static('public'));
app.use(cors());


// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(
        req.params.name,
        req.params.email,
        req.params.password
    ).then((user) => {
        console.log('express app sends this user to the front end. ', user)
        res.send(user);
    });
});

// Login User Route
app.get('/account/login/:email/:password', function(req, res) {
    dal.login(
        req.params.email,
        req.params.password
    ).then((document) => {
        console.log('this is the mongoDB document for the logged in user. It is beinging sent from index.js express server application to the front end client. ', document);
        res.send(document);
    });
});

// Return all accounts route
app.get('/account/all', function(req, res) {
    dal.all().then((documents) => {
        console.log('these are all the mongoDB documents beinging sent from index.js express server application to the front end client. ', documents);
        res.send(documents);

    });
});

// Update balance route for deposit and withdraw
app.get('/account/balance/:email/:amount', function(req, res) {
    dal.depositOrWithdraw(
        req.params.email,
        Number(req.params.amount)
    ).then((document) => {
        console.log('this is the mongoDB document for the logged in user. It is beinging sent from index.js express server application to the front end client. ', document);
        res.send(document);
    });
});


const port = 3000;
app.listen(port);
console.log('Running on port: ' + port + '!');