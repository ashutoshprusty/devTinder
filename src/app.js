const express = require('express');
const app = express();


app.get('/user', (req, res) => {
    res.send({fn:'As', ln:'pr'});
});

app.post('/user', (req, res) => {
    res.send('Data received');
});
app.delete('/user', (req, res) => {
    res.send('deleted data');
});
app.use('/test',(req, res) => {
    res.send('Hello World');
});
// app.use('/hello',(req, res) => {
//     res.send('Hello World12');
// });
app.listen(7777, ()=> {
    console.log('Server is running on port 7777');
} );