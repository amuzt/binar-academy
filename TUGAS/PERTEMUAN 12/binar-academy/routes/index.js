var express = require('express');
var router = express.Router();

// REQUIRE CONTROLLER
var article_controller = require('../controllers/articlesController.js');
var application_controller = require('../controllers/applicationController.js');

// routes //
router.get('/', application_controller.home);

router.get('/profile', application_controller.profile);

router.get('/about', application_controller.about);

router.get('/articles', article_controller.articles);

module.exports = router;