import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../context';
import { useAppSelector } from '../store';
export function useAppContent(collectionName, initialFetch = false) {
  const records = useAppSelector(state => state.reducer.records[collectionName]);
  const subscriptions = useAppSelector(state => state.reducer.subscriptions);
  const context = useContext(ContentContext);
  useEffect(() => {
    if (initialFetch) {
      (async () => {
        await context.fetch(collectionName);
      })();
    }
  }, [collectionName, initialFetch]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  useEffect(() => {
    setIsSubscribed(subscriptions.includes(collectionName));
  }, [subscriptions]);
  const actions = {
    subscribe: async () => await context.subscribe(collectionName),
    unsubscribe: async () => await context.unsubscribe(collectionName),
    fetch: async opts => await context.fetch(collectionName, opts),
    create: async record => await context.create(collectionName, record),
    update: async (id, record) => await context.update(collectionName, id, record),
    delete: async id => await context.delete(collectionName, id)
  };
  return {
    records,
    actions,
    isSubscribed
  };
}