/// <reference types="redux-persist/types/persistReducer" />
/// <reference types="redux-persist/types/types" />
/// <reference types="redux-persist" />
import { TypedUseSelectorHook } from 'react-redux';
import { RecordAction } from './reducers/records';
interface Storage {
    getItem(key: string, ...args: Array<any>): any;
    setItem(key: string, value: any, ...args: Array<any>): any;
    removeItem(key: string, ...args: Array<any>): any;
}
export declare const persistConfig: {
    key: string;
    storage: Storage;
};
declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    reducer: import("redux").EmptyObject & {
        records: import("./reducers/records").ReduxRecord;
        subscriptions: string[];
    } & import("redux-persist/es/persistReducer").PersistPartial;
}, RecordAction | import("./reducers/subscriptions").SubscriptionAction, (import("redux-thunk").ThunkMiddleware<any, import("redux").AnyAction, undefined> & {
    withExtraArgument<ExtraThunkArg, State = any, BasicAction extends import("redux").Action<any> = import("redux").AnyAction>(extraArgument: ExtraThunkArg): import("redux-thunk").ThunkMiddleware<State, BasicAction, ExtraThunkArg>;
})[]>;
type AppDispatch = typeof store.dispatch<RecordAction>;
declare const useAppDispatch: import("redux").Dispatch<RecordAction | import("./reducers/subscriptions").SubscriptionAction>;
type RootState = ReturnType<typeof store.getState>;
declare const useAppSelector: TypedUseSelectorHook<RootState>;
declare const persistor: import("redux-persist").Persistor;
export { AppDispatch, RootState, useAppDispatch, useAppSelector, store, persistor };
