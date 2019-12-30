const express = require('express');
const app = express();
const port = 3000;

//middleware
app.use('/posts', () => {
    //res.send("Welcome to ROOT ROUTE my very first HTTP server! OMG!!!!!!!!!!!");
    console.log("/posts triggered middleware");
})

app.get('/', (req, res) => {
    res.send("Welcome to ROOT ROUTE my very first HTTP server! OMG!!!!!!!!!!!");
})

app.get('/search', (req, res) => {
    res.send("Welcome to SEARCH ROUTE my very first HTTP server! ");
})

app.get('/posts', (req, res) => {
    res.send("Welcome to POST ROUTE my very first HTTP server! ");
})




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});