import * as React from 'react';
import { Record } from '../interfaces/Record';
type SubscribeType = (collectionName: string) => Promise<void>;
type UnsubscribeType = (collectionName?: string) => Promise<void>;
type FetchType = (collectionName: string, opts?: any) => Promise<void>;
type CreateType = (collectionName: string, record: {}) => Promise<void | Record | undefined>;
type UpdateType = (collectionName: string, recordId: string, record: {}) => Promise<void | Record | undefined>;
type DeleteType = (collectionName: string, recordId: string) => Promise<void | boolean | undefined>;
interface ContentActions {
    subscribe: SubscribeType;
    unsubscribe: UnsubscribeType;
    fetch: FetchType;
    create: CreateType;
    update: UpdateType;
    delete: DeleteType;
}
export declare const ContentContext: React.Context<ContentActions>;
export type ContentProviderProps = {
    children: React.ReactNode;
    collections?: string[];
};
export declare const ContentProvider: (props: ContentProviderProps) => React.JSX.Element;
export {};
