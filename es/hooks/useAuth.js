import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth';
import { useClientContext } from './useClientContext';
export function useAuth() {
  const client = useClientContext();
  const actions = useContext(AuthContext);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [user, setUser] = useState(null);
  function updateAuth() {
    var _client$authStore$mod;
    setIsSignedIn((client == null ? void 0 : client.authStore.token) !== '');
    setUser((_client$authStore$mod = client == null ? void 0 : client.authStore.model) != null ? _client$authStore$mod : null);
  }
  useEffect(() => {
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