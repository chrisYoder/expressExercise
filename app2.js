const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hi there, this is on port 4200'));

app.listen(4200, process.env.IP, () => console.log('running on 4200'));