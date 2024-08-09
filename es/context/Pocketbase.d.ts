import * as React from 'react';
import PocketBase from 'pocketbase';
export declare const PocketbaseContext: React.Context<PocketBase | null>;
export type PocketbaseProviderProps = {
    children: React.ReactNode;
    serverURL: string;
    webRedirectUrl: string;
    mobileRedirectUrl: string;
    openURL: (url: string) => Promise<void>;
    initialCollections?: string[];
};
export declare const Pocketbase: (props: PocketbaseProviderProps) => React.JSX.Element | null;
