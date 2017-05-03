import * as express from "express";
import * as mongoose from "mongoose";
(<any> mongoose).Promise = global.Promise;
require('dotenv').config();
let app = express();
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('sup')
  })