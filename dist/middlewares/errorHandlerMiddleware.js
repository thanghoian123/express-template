"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorMiddleWare = void 0;
const errorMiddleWare = (err, req, res, next) => {
  return res.status(err.statusCode).json({
    msg: err.message
  });
};
exports.errorMiddleWare = errorMiddleWare;