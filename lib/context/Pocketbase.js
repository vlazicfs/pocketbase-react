"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PocketbaseContext = exports.Pocketbase = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _pocketbase = _interopRequireDefault(require("pocketbase"));
var _reactRedux = require("react-redux");
var _react2 = require("redux-persist/integration/react");
var _store = require("../store/store");
var _client = require("./client");
var _content = require("./content");
var _auth = require("./auth");
var _Storage = require("../service/Storage");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PocketbaseContext = exports.PocketbaseContext = (0, _react.createContext)(null);
const Pocketbase = props => {
  const [client, setClient] = React.useState(null);
  const [initialCollections, setInitialCollections] = React.useState();
  (0, _react.useEffect)(() => {
    const client = new _pocketbase.default(props.serverURL);
    client.authStore.onChange(async () => {
      await _Storage.StorageService.set(_Storage.StorageService.Constants.COOKIE, client.authStore.exportToCookie());
      setInitialCollections([]);
      setInitialCollections(props.initialCollections);
    });
    _Storage.StorageService.get(_Storage.StorageService.Constants.COOKIE).then(cookie => {
      if (cookie) {
        client.authStore.loadFromCookie(cookie);
        setInitialCollections([]);
        setInitialCollections(props.initialCollections);
      }
      setClient(client);
    });
  }, [props.serverURL]);
  return client ? /*#__PURE__*/React.createElement(_client.ClientProvider, {
    client: client
  }, /*#__PURE__*/React.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/React.createElement(_react2.PersistGate, {
    persistor: _store.persistor
  }, /*#__PURE__*/React.createElement(_auth.AuthProvider, {
    webRedirectUrl: props.webRedirectUrl,
    mobileRedirectUrl: props.mobileRedirectUrl,
    openURL: props.openURL
  }, /*#__PURE__*/React.createElement(_content.ContentProvider, {
    collections: initialCollections
  }, props.children))))) : null;
};
exports.Pocketbase = Pocketbase;