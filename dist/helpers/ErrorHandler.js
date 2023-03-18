"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = void 0;
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// 400 Bad Request (The server could not understand the request due to invalid syntax).
const BadRequest = customMessage => {
  return new CustomAPIError(customMessage, 400);
};
// 401 Unauthorized (Authentication failed for the requested resource).
const Unauthorized = customMessage => {
  return new CustomAPIError(customMessage, 401);
};
// 403 Forbidden (Access is denied to the requested resource).
const Forbiden = customMessage => {
  return new CustomAPIError(customMessage, 403);
};
// 404 Not Found (The server could not find the requested resource).
const NotFound = customMessage => {
  return new CustomAPIError(customMessage, 404);
};
// 500 Internal Server Error (Unexpected condition encountered on the server while processing the request).

const InternalServerError = customMessage => {
  return new CustomAPIError(customMessage, 500);
};
const errors = {
  NotFound,
  Forbiden,
  BadRequest,
  InternalServerError,
  Unauthorized
};
exports.errors = errors;