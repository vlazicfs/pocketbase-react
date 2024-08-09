"use strict";

exports.__esModule = true;
exports.appReducer = void 0;
var _redux = require("redux");
var _records = require("./records");
var _subscriptions = require("./subscriptions");
const appReducer = exports.appReducer = (0, _redux.combineReducers)({
  records: _records.records,
  subscriptions: _subscriptions.subscriptions
});