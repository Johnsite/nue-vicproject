const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home');
})
app.get('/business', (req, res) => {
    res.render('business');
})

app.get('/career', (req, res) => {
    res.render('career');
})
app.get('/post-thread', (req, res) => {
    res.render('post-thread');
})
app.get('/relations', (req, res) => {
    res.render('relations');
})
app.get('/thread', (req, res) => {
    res.render('thread');
})

const server = app.listen(3001, () => {
    console.log(`The application started on port ${server.address().port}`);
});