"use strict";

exports.__esModule = true;
exports.ContentProvider = exports.ContentContext = void 0;
var store = _interopRequireWildcard(require("../store/store"));
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _useClientContext = require("../hooks/useClientContext");
var _actions = require("../store/actions");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ContentContext = exports.ContentContext = (0, _react.createContext)({});
const ContentProvider = props => {
  const client = (0, _useClientContext.useClientContext)();
  const dispatch = store.useAppDispatch;
  function tempErrorHandler(error) {
    var _error$originalError;
    // TODO: Handle error
    // IDEA: Create new ErrorContext and Update it with error
    if ((error == null || (_error$originalError = error.originalError) == null ? void 0 : _error$originalError.name) !== 'AbortError') {
      console.log('Error in content provider', JSON.stringify(error));
    }
  }
  const actions = {
    subscribe: async collectionName => {
      await (client == null ? void 0 : client.realtime.subscribe(collectionName, event => {
        switch (event.action) {
          case 'create':
            dispatch(_actions.recordsAction.addRecord(collectionName, event.record));
            break;
          case 'update':
            dispatch(_actions.recordsAction.updateRecord(collectionName, event.record));
            break;
          case 'delete':
            dispatch(_actions.recordsAction.deleteRecord(collectionName, event.record));
            break;
          default:
            break;
        }
      }).then(() => {
        dispatch(_actions.subscriptionsAction.addSubscription(collectionName));
      }).catch(tempErrorHandler));
    },
    unsubscribe: async collectionName => {
      if (collectionName) {
        await (client == null ? void 0 : client.realtime.unsubscribe(collectionName).then(() => {
          dispatch(_actions.subscriptionsAction.deleteSubscription(collectionName));
        }).catch(tempErrorHandler));
      } else {
        await (client == null ? void 0 : client.realtime.unsubscribe().then(() => {
          dispatch(_actions.subscriptionsAction.setSubscriptions([]));
        }).catch(tempErrorHandler));
      }
    },
    fetch: async (collectionName, opts = {}) => {
      await (client == null ? void 0 : client.collection(collectionName).getFullList(200, opts).then(records => {
        dispatch(_actions.recordsAction.setRecords(collectionName, records));
      }).catch(tempErrorHandler));
    },
    create: async (collectionName, record) => {
      return await (client == null ? void 0 : client.collection(collectionName).create(record).catch(tempErrorHandler));
    },
    update: async (collectionName, recordId, record) => {
      return await (client == null ? void 0 : client.collection(collectionName).update(recordId, record).catch(tempErrorHandler));
    },
    delete: async (collectionName, recordId) => {
      return await (client == null ? void 0 : client.collection(collectionName).delete(recordId).catch(tempErrorHandler));
    }
  };
  (0, _react.useEffect)(() => {
    if (props.collections) {
      props.collections.forEach(async collectionName => {
        await actions.fetch(collectionName);
        await actions.subscribe(collectionName);
      });
    }
    return () => {
      (async () => {
        await actions.unsubscribe();
      })();
    };
  }, [props.collections]);
  return /*#__PURE__*/React.createElement(ContentContext.Provider, {
    value: actions
  }, props.children);
};
exports.ContentProvider = ContentProvider;