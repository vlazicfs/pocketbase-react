import * as React from 'react';
import PocketBase from 'pocketbase';
export declare const ClientContext: React.Context<PocketBase | null>;
export type ClientProviderProps = {
    children: React.ReactNode;
    client: PocketBase;
};
export declare const ClientProvider: (props: ClientProviderProps) => React.JSX.Element;
