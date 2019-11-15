let Articles = require('../models/articles');

// DISPLAY LIST ARTICLE
exports.articles = function (req, res, next) {
    res.render('articles');
};

exports.index = function(req, res, next){
    res.render('articles/index');
};

exports.detail = function(req, res, next){
    res.render('articles/detail');
};

exports.category = function(req, res, next){
    res.render('articles/category');
};