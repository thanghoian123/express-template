"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _ErrorHandler = require("../helpers/ErrorHandler.js");
var _RequestWrapper = require("../utils/RequestWrapper.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const apiV1Router = _express.default.Router();
apiV1Router.get("/home", (0, _RequestWrapper.RequestWrapper)((req, res, next) => {
  next(_ErrorHandler.errors.Forbiden("Forbiden"));
}));
var _default = apiV1Router;
exports.default = _default;