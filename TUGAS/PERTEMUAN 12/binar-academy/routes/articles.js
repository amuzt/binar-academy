var router = require('express').Router();

var articles = require('../controllers/articlesController')
var detail = require('../controllers/articlesController')
var category = require('../controllers/articlesController')

// localhost:3000/articles
router.get('/', articles.index);

//localhost:3000/articles/detail
router.get('/detail', articles.detail);
//localhost:3000/articles/category
router.get('/category', articles.category);

module.exports = router
