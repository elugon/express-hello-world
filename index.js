const express = require('express');
// This document is a JSON file with student data that will serve as a fake API for the exercises
const fakeApi = require('./data');

const app = express();

/* Your code goes here */

// Server listening
app.listen(3000, () => console.log('🚀 My first app listening on port 3000! '));