import { Record } from '../interfaces/Record';
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
export declare function useAppContent<T extends Record>(collectionName: string, initialFetch?: boolean): {
    records: T[];
    actions: Actions;
    isSubscribed: boolean;
};
