"use strict";

exports.__esModule = true;
exports.updateRecord = exports.setRecords = exports.deleteRecords = exports.deleteRecord = exports.addRecords = exports.addRecord = void 0;
var ReduxType = _interopRequireWildcard(require("../types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const setRecords = (key, payload) => ({
  type: ReduxType.SET_RECORDS,
  key,
  payload
});
exports.setRecords = setRecords;
const addRecord = (key, payload) => ({
  type: ReduxType.ADD_RECORD,
  key,
  payload
});
exports.addRecord = addRecord;
const addRecords = (key, payload) => ({
  type: ReduxType.ADD_RECORDS,
  key,
  payload
});
exports.addRecords = addRecords;
const deleteRecord = (key, payload) => ({
  type: ReduxType.DELETE_RECORD,
  key,
  payload
});
exports.deleteRecord = deleteRecord;
const deleteRecords = (key, payload) => ({
  type: ReduxType.DELETE_RECORDS,
  key,
  payload
});
exports.deleteRecords = deleteRecords;
const updateRecord = (key, payload) => ({
  type: ReduxType.UPDATE_RECORD,
  key,
  payload
});
exports.updateRecord = updateRecord;