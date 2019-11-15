var createError = require('http-errors');
var express = require('express');
var path = require('path'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose'); // REQUIRE MONGOOSE
var Schema = mongoose.Schema; // REQUIRE SCHEMA FROM MONGOOSE


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');

var app = express();

// SET CONNECTION MONGODB
let mongo_db_url = 'mongodb+srv://amuzt:mustafiyah93@binar-academy-yeylg.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongo_db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Get default connection
var db = mongoose.connection;
//check connection error and open
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', function () {
  console.log('Successfully connect to database.')
});

// Example Use Model, Schema and Method Mongoose
//const CatScheme = new Schema({
//  name: String,
//  age: {
//    type: Number,
//   required: true,
//   min: [5, `terlalu kecil miaw`],
//    max: 15
//  }
// });
//virtual
//CatScheme.virtual(`speak`).get(function(){
//  return console.log(`${this.name} can speak , Miaoww!!,`)
//});
// methods
//CatScheme.methods.hello = function () {
//  let teks = `Hello, my name ${this.name}, age ${this.age}, Miaoow...`;
//  console.log(teks);
//};
// create model
//const Cat = mongoose.model('Cat', CatScheme)
// set data info model
//const anca = new Cat({
//  name: 'Anca',
//  age: 6
//});
// call virtual in model
//anca.speak
//call methods in model
//anca.hello()

//saving data
//anca.save(function (err, result) {
//  if (err) console.log(err.message);
//  anca.hello()
//});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles' , articlesRouter);

// serve static file from folder assets
// add url /assets before find assets
//app.use('/assets', express.static('assets'))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// profile page
// http://localhost:3000/profile?name=ana
app.get('/profile', (req, res) => {
  let myJobs = ['Freelancer', 'Mentor', 'Penulis']
  console.log(req.query.name)
  res.render('profile', {
    data: req.query,
    jobs: myJobs
  })
})

module.exports = app;