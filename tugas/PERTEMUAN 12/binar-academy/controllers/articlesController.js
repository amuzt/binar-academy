let Articles = require('../models/articles');

// exports.index = function (req, res, next) {
//     Articles.find({}, function (err, results) {
//         console.log(results);
//         if (err) throw err;
//         res.render('articles.index', {
//             data: 'results'
//         });
//     })
// };

//DISPLAY LIST ARTICLE
exports.articles = function (req, res, next) {
    res.render('articles');
};

exports.index = function (req, res, next) {
    Articles.find({}, function (err, results) {
        if (err) throw err;
        res.render('articles/index', {
            articles: results
        });
    });
};

exports.detail = function (req, res, next) {
    console.log(req.params)
    let params = req.params;
    Articles.find({
        _id: params.articleId
    }, function (err, result) {
        res.render('articles/detail', {
            article: result
        });
        console.log(result);
    });
};

exports.update = function (req, res, next) {
    let params = req.params;
    Articles.find({
        _id: params.articleId
    }, function (err, result) {
        res.render('articles/update', {
            article: result
        });
    });
};


exports.delete = function (req, res, next) {
    let params = req.params;
    Articles.deleteOne({
        _id: params.articleId
    }, function (err, result) {
        res.redirect('/articles');
    });
};

exports.form = function (req, res, next) {
    res.render('articles/form');
};

exports.create_article = function (req, res, next) {
    console.log(req.body)
    let articles = new Articles(req.body)
    articles.save(function (err, results) {
        if (err) {
            console.log(err.message)
        } else {
            res.redirect('/articles')
        }
    })
};



//exports.index = function (req, res, next) {
//res.redirect('/articles');
//console.log(req.body)
//   };