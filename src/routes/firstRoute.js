import express from "express";
import { errors } from "../helpers/ErrorHandler.js";
import {RequestWrapper} from "../utils/RequestWrapper.js";

const apiV1Router = express.Router();

apiV1Router.get(
  "/home",
  RequestWrapper((req, res,next) => {
    next(errors.Forbiden("Forbiden"))
  })
);

export default apiV1Router;
