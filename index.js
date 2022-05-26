const express = require('express');
const { get } = require('express/lib/response');
// This document is a JSON file with student data that will serve as a fake API for the exercises
const fakeApi = require('./data');

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>');
})

app.get('/loan',(req,res)=>{
    res.json(fakeApi);
})

app.get('/score',(req,res)=>{
    let num=0;
    for(let i=0;i<fakeApi.length;i++){
        num+=fakeApi[i].avgScore
    }
    num=num/fakeApi.length;
    num=num.toFixed(2)
    console.log(num);
    res.send(`<h2>The group's average score is ${num}</h2>`);
})

// Server listening
app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));