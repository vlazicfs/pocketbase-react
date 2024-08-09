"use strict";

exports.__esModule = true;
exports.AuthProvider = exports.AuthContext = void 0;
var _react = _interopRequireWildcard(require("react"));
var React = _react;
var _useClientContext = require("../hooks/useClientContext");
var _Storage = require("../service/Storage");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const AuthContext = exports.AuthContext = (0, _react.createContext)({});
const AuthProvider = props => {
  const client = (0, _useClientContext.useClientContext)();
  const [authProviders, setAuthProviders] = React.useState();
  const actions = {
    registerWithEmail: async (email, password) => {
      await (client == null ? void 0 : client.collection('users').create({
        email: email,
        password: password,
        passwordConfirm: password,
        emailVisibility: true
      }));
    },
    signInWithEmail: async (email, password) => {
      await (client == null ? void 0 : client.collection('users').authWithPassword(email, password));
    },
    signInWithProvider: async provider => {
      const authProvider = authProviders == null ? void 0 : authProviders.find(p => p.name === provider);
      const redirectURL = typeof document !== 'undefined' ? props.webRedirectUrl : props.mobileRedirectUrl;
      const url = (authProvider == null ? void 0 : authProvider.authUrl) + redirectURL;
      await _Storage.StorageService.set('provider', JSON.stringify(authProviders));
      await props.openURL(url);
    },
    submitProviderResult: async url => {
      const params = new URLSearchParams(url.split('?')[1]);
      const code = params.get('code');
      const state = params.get('state');
      const providersString = await _Storage.StorageService.get('provider');
      if (providersString) {
        const providers = JSON.parse(providersString);
        const authProvider = providers == null ? void 0 : providers.find(p => p.state === state);
        if (authProvider && code) {
          await (client == null ? void 0 : client.collection('users').authWithOAuth2(authProvider.name, code, authProvider.codeVerifier, typeof document !== 'undefined' ? props.webRedirectUrl : props.mobileRedirectUrl));
        }
      }
    },
    signOut: () => {
      client == null || client.authStore.clear();
    },
    sendPasswordResetEmail: async email => {
      await (client == null ? void 0 : client.collection('users').requestPasswordReset(email));
    },
    sendEmailVerification: async email => {
      await (client == null ? void 0 : client.collection('users').requestVerification(email));
    },
    updateProfile: async (id, record) => {
      await (client == null ? void 0 : client.collection('profiles').update(id, record));
    },
    updateEmail: async email => {
      await (client == null ? void 0 : client.collection('users').requestEmailChange(email));
    },
    deleteUser: async id => {
      await (client == null ? void 0 : client.collection('users').delete(id));
    }
  };
  React.useEffect(() => {
    (async () => {
      const methods = await (client == null ? void 0 : client.collection('users').listAuthMethods());
      setAuthProviders(methods == null ? void 0 : methods.authProviders);
    })();
  }, [props.webRedirectUrl, props.mobileRedirectUrl]);
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: actions
  }, props.children);
};
exports.AuthProvider = AuthProvider;