var router = require('express').Router();
//article cont
var articles_controller = require('../controllers/articlesController')
//var detail = require('../controllers/articlesController')
//var category = require('../controllers/articlesController')

// localhost:3000/articles
router.get('/', articles_controller.index); // list article

//localhost:3000/articles/detail
router.get('/form', articles_controller.form); // form insert

//create article
router.post('/create_article', articles_controller.create_article); // form uda jadi 
// Detail Article
router.get('/detail/:articleId', articles_controller.detail);

// Update Article
router.get('/update/:articleId', articles_controller.update);

// Delete Article
router.get('/delete/:articleId', articles_controller.delete);





module.exports = router
