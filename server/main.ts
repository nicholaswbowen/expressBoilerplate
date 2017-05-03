import * as express from "express";
import * as mongoose from "mongoose";
//mongoose's promise is deprecated, therefore you set it to the global promise
(<any> mongoose).Promise = global.Promise;

require('dotenv').config();
let app = express();


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //run database dependent methods here.
  })