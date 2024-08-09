import * as store from '../store/store';
import * as React from 'react';
import { createContext, useEffect } from 'react';
import { useClientContext } from '../hooks/useClientContext';
import { recordsAction } from '../store/actions';
import { subscriptionsAction } from '../store/actions';
export const ContentContext = createContext({});
export const ContentProvider = props => {
  const client = useClientContext();
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
            dispatch(recordsAction.addRecord(collectionName, event.record));
            break;
          case 'update':
            dispatch(recordsAction.updateRecord(collectionName, event.record));
            break;
          case 'delete':
            dispatch(recordsAction.deleteRecord(collectionName, event.record));
            break;
          default:
            break;
        }
      }).then(() => {
        dispatch(subscriptionsAction.addSubscription(collectionName));
      }).catch(tempErrorHandler));
    },
    unsubscribe: async collectionName => {
      if (collectionName) {
        await (client == null ? void 0 : client.realtime.unsubscribe(collectionName).then(() => {
          dispatch(subscriptionsAction.deleteSubscription(collectionName));
        }).catch(tempErrorHandler));
      } else {
        await (client == null ? void 0 : client.realtime.unsubscribe().then(() => {
          dispatch(subscriptionsAction.setSubscriptions([]));
        }).catch(tempErrorHandler));
      }
    },
    fetch: async (collectionName, opts = {}) => {
      await (client == null ? void 0 : client.collection(collectionName).getFullList(200, opts).then(records => {
        dispatch(recordsAction.setRecords(collectionName, records));
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
  useEffect(() => {
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