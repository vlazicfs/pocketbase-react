import * as React from 'react';
import { createContext } from 'react';
import { useClientContext } from '../hooks/useClientContext';
import { StorageService } from '../service/Storage';
export const AuthContext = createContext({});
export const AuthProvider = props => {
  const client = useClientContext();
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
      await StorageService.set('provider', JSON.stringify(authProviders));
      await props.openURL(url);
    },
    submitProviderResult: async url => {
      const params = new URLSearchParams(url.split('?')[1]);
      const code = params.get('code');
      const state = params.get('state');
      const providersString = await StorageService.get('provider');
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