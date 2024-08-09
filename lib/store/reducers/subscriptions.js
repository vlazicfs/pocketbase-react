"use strict";

exports.__esModule = true;
exports.subscriptions = void 0;
var ReduxType = _interopRequireWildcard(require("../types"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function appendSubscription(subscription, subscriptions) {
  return subscriptions.includes(subscription) ? subscriptions : [...subscriptions, subscription];
}
function deleteSubscription(subscription, subscriptions) {
  return subscriptions.filter(sub => sub !== subscription);
}
const subscriptions = (state = [], action) => {
  switch (action.type) {
    case ReduxType.SET_SUBSCRIPTIONS:
      if (Array.isArray(action.payload)) {
        return action.payload;
      }
    case ReduxType.ADD_SUBSCRIPTION:
      return appendSubscription(action.payload, state);
    case ReduxType.DELETE_SUBSCRIPTION:
      return deleteSubscription(action.payload, state);
    default:
      return state;
  }
};
exports.subscriptions = subscriptions;