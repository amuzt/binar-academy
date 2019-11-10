const express = require('express')
const app = express()
const port = 3000

// serve static file from folder assets
// add url /assets before find assets
app.use('/assets', express.static('assets'))

//setup template engine with ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index') // render template
});

app.get('/about', (req, res) => {
    res.render('about') // render template
});

app.get('/contact', (req, res) => {
    res.render('contact') // render template
});

/* param hanya bisa menampilkan 1 query */
app.get('/profile', (req, res) => {
    let data = req.params
    res.render(`profile`) // render template
});

app.get('/me', (req, res) => {
    let list_hobby = ['mancing', 'ngetik', 'menulis']
    res.render(`profile`, {
        data: req.query,
        hobby: list_hobby
    })
});

//http://localhost:3000/profile/?category=coding&title=hackaton-bsd
app.get('/:name/article', (req, res) => {
    let data = req.query
    res.send(`Hello ${req.params.name} , Article with category ${data.category} and title ${data.title}`)
});

//http://localhost:3000/profile/coding/hackaton-bsd
app.get('/article/:category/:title', (req, res) => {
    let data = req.params
    res.send(`Article with category ${data.category} and title ${data.title}`)
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});