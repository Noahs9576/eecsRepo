const express = require('express');
const app = express();
app.use(express.json());

const port = 9000;

var username = "admin";
var password = "admin";
var answer = "blue";

var docMap = {};

//localhost:9000
app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/login.html');
    
});
app.get('/login.css', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/login.css');
    
});
app.get('/login.js', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/login.js');

});
app.get('/passwordrecovery.html', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/passwordrecovery.html');

});
app.get('/passwordrecovery.css', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/passwordrecovery.css');

});
app.get('/passwordrecovery.js', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/passwordrecovery.js');

});
app.get('/main.html', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/main.html');

});
app.get('/main.css', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/main.css');

});
app.get('/main.js', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/main.js');

});
app.get('/editor.html', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/editor.html');

});
app.get('/editor.css', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/editor.css');

});
app.get('/editor.js', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.sendFile(__dirname + '/resources/editor.js');

});

app.post('/upload', (req, res) => {
    docMap[req.body.name.text] = req.body;
    res.send("Document uploaded");
});

app.get('/getDoc', (req, res) => {
    res.send(docMap);
});

app.get('/getUserName', (req, res) => {
    res.send(username);
    });

app.post('/getPassword', (req, res) => {
    res.send(password);
});

app.post('/login', (req, res) => {
    if (req.body.username == username && req.body.password == password){
        res.send({success : true});
    } else {
        res.send({success : false});
    }
});

app.post('/forgotPassword', (req, res) => {
    if (req.body.answer == answer){
        res.send({success : true , password : password});
    } else {
        res.send({success : false , password : password});
    }
});

app.listen(port , () => {
    console.log(`Backend is running on port ${port}`);
});