"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestWrapper = exports.AsyncRequestWrapper = void 0;
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const RequestWrapper = fn => {
  return (req, res, next) => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
exports.RequestWrapper = RequestWrapper;
const AsyncRequestWrapper = fn => {
  return async (req, res, next) => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
exports.AsyncRequestWrapper = AsyncRequestWrapper;