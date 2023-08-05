var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var app = express();
var bodyParser = require("body-parser");
const  mongoose  = require('mongoose');
const { MongoClient } = require('mongodb');
//API
const userAPIRouter = require("./routes/api/UserAPI");
const subjectAPIRouter = require("./routes/api/SubjectAPI");
const scheduleAPIRouter=require("./routes/api/ScheduleAPI");
const examScheduleAPIRouter=require("./routes/api/ExamScheduleAPI");

//Cpanel
const subjectCpanelRouter= require("./routes/cpanel/SubjectCpanel");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
 //http://localhost:3000/api/user
 app.use('/api/user',userAPIRouter);
 //http://localhost:3000/api/subject
 app.use('/api/subject',subjectAPIRouter);
 //http://localhost:3000/api/schedule
 app.use('/api/schedule',scheduleAPIRouter);
  //http://localhost:3000/api/exam-schedule
  app.use('/api/exam-schedule',examScheduleAPIRouter);




//http://localhost:3000/cpanel/subject
 app.use('/cpanel/subject',subjectCpanelRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
async function connectDB(){
  const uri="mongodb+srv://duonggiabao19102003:190203gb@cluster0.9glnrh0.mongodb.net/?retryWrites=true&w=majority";
  try{
      // const client = new MongoClient(uri);
      // await client.connect(); 
      mongoose.set('strictQuery', false);
      await mongoose.connect(uri);    
      console.log("Kết nối DATA thành công!");
  }catch(e){
      console.error(e);
  }
}
connectDB();

module.exports = app;