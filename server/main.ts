import * as express from "express";
import * as mongoose from "mongoose";
import * as ejs from "ejs";
import * as path from 'path';
import routes from './routes';
//mongoose's promise is deprecated, therefore you set it to the global promise
(<any> mongoose).Promise = global.Promise;
require('dotenv').config();
let app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/client', express.static('client'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //run database dependent methods here.
  })

app.get('/*', function(req, res, next) {
  if (/.js|.html|.css|templates|js|scripts/.test(req.path) || req.xhr) {
    return next({ status: 404, message: 'Not Found' });
  } else {
    // return isDev ? res.render('dist') : res.render('dist');
    return res.render('index');
  }
});

app.use((req, res, next) => {
  let err = new Error('Not Found');
  err['status'] = 404;
  next(err);
});

export = app;