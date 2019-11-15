exports.home = function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
};

exports.about = function (req, res, next) {
    res.render('about');
};

exports.profile = function (req, res, next) {
    res.render('profile');
};

exports.articles = function (req, res, next) {
    res.render('articles');
};