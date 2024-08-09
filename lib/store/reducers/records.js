"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.records = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var ReduxType = _interopRequireWildcard(require("../types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function appendRecord(record, records) {
  return [...records, record];
}
function appendRecords(recordsToAppend, records) {
  return [...records, ...recordsToAppend];
}
function updateRecord(record, records) {
  return records.map(r => {
    if (r.id === record.id) {
      return record;
    }
    return r;
  });
}
function deleteRecord(record, records) {
  return records.filter(r => r.id !== record.id);
}
function deleteRecords(recordsToDelete, records) {
  return records.filter(r => !recordsToDelete.includes(r));
}
const records = (state = {}, action) => {
  var _state$action$key;
  const list = (_state$action$key = state[action.key]) != null ? _state$action$key : [];
  switch (action.type) {
    case ReduxType.SET_RECORDS:
      if (Array.isArray(action.payload)) {
        return (0, _extends2.default)({}, state, {
          [action.key]: action.payload
        });
      }
    case ReduxType.ADD_RECORD:
      return (0, _extends2.default)({}, state, {
        [action.key]: appendRecord(action.payload, list)
      });
    case ReduxType.ADD_RECORDS:
      return (0, _extends2.default)({}, state, {
        [action.key]: appendRecords(action.payload, list)
      });
    case ReduxType.DELETE_RECORD:
      return (0, _extends2.default)({}, state, {
        [action.key]: deleteRecord(action.payload, list)
      });
    case ReduxType.DELETE_RECORDS:
      return (0, _extends2.default)({}, state, {
        [action.key]: deleteRecords(action.payload, list)
      });
    case ReduxType.UPDATE_RECORD:
      return (0, _extends2.default)({}, state, {
        [action.key]: updateRecord(action.payload, list)
      });
    default:
      return state;
  }
};
exports.records = records;