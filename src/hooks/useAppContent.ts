import { useContext, useEffect, useState } from 'react';
import { ContentContext } from '../context';
import { Record } from '../interfaces/Record';
import { useAppSelector } from '../store';

export type SubscribeType = () => Promise<void | undefined>;
export type UnsubscribeType = () => Promise<void | undefined>;
export type FetchType = (opts: any) => Promise<void | undefined>;
export type CreateType = (record: {}) => Promise<void | Record | undefined>;
export type UpdateType = (id: string, record: {}) => Promise<void | Record | undefined>;
export type DeleteType = (id: string) => Promise<void | boolean | undefined>;

export interface Actions {
  subscribe: SubscribeType;
  unsubscribe: UnsubscribeType;
  fetch: FetchType;
  create: CreateType;
  update: UpdateType;
  delete: DeleteType;
}

export function useAppContent<T extends Record>(
  collectionName: string,
  initialFetch: boolean = false
): { records: T[]; actions: Actions; isSubscribed: boolean } {
  const records = useAppSelector((state) => state.reducer.records[collectionName]) as T[];
  const subscriptions = useAppSelector((state) => state.reducer.subscriptions);
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

  const actions: Actions = {
    subscribe: async () => await context.subscribe(collectionName),
    unsubscribe: async () => await context.unsubscribe(collectionName),
    fetch: async (opts: any) => await context.fetch(collectionName, opts),
    create: async (record: {}) => await context.create(collectionName, record),
    update: async (id: string, record: {}) => await context.update(collectionName, id, record),
    delete: async (id: string) => await context.delete(collectionName, id),
  };

  return { records, actions, isSubscribed };
}
