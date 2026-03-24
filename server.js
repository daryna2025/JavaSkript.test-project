
const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const consultants = require('./public/consultants.json');


const polkku = path.join(__dirname, 'public');

app.use(express.static(polkku));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
