"use strict";

exports.__esModule = true;
exports.useAuth = useAuth;
var _react = require("react");
var _auth = require("../context/auth");
var _useClientContext = require("./useClientContext");
function useAuth() {
  const client = (0, _useClientContext.useClientContext)();
  const actions = (0, _react.useContext)(_auth.AuthContext);
  const [isSignedIn, setIsSignedIn] = (0, _react.useState)(null);
  const [user, setUser] = (0, _react.useState)(null);
  function updateAuth() {
    var _client$authStore$mod;
    setIsSignedIn((client == null ? void 0 : client.authStore.token) !== '');
    setUser((_client$authStore$mod = client == null ? void 0 : client.authStore.model) != null ? _client$authStore$mod : null);
  }
  (0, _react.useEffect)(() => {
    updateAuth();
    client == null || client.authStore.onChange(() => {
      updateAuth();
    });
  }, []);
  return {
    actions: actions,
    isSignedIn: isSignedIn,
    user: user
  };
}