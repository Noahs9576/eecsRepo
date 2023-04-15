const express = require('express');
const app = express();
const port = 9000;

//localhost:9000
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ping: 'pong'});
});

app.listen(port , () => {
    console.log(`Backend is running on port ${port}`);
});