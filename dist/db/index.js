"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _pg = require("pg");
const pool = new _pg.Pool({
  user: "root",
  host: "localhost",
  database: "test_app",
  password: "123456a@",
  port: 5432
});
exports.pool = pool;