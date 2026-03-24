
const path = require('path');
const express = require('express');


const app = express();

const consultants = require('./consultants.json');


const polkku = path.join(__dirname, 'public');

app.use(express.static(polkku));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
