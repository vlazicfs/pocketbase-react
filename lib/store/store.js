"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useAppSelector = exports.useAppDispatch = exports.store = exports.persistor = exports.persistConfig = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _reduxPersist = require("redux-persist");
var _reactRedux = require("react-redux");
var _reducers = require("./reducers");
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
var _Storage = require("../service/Storage");
const CustomStorage = {
  getItem: async (key, ..._args) => {
    return await _Storage.StorageService.get(key);
  },
  setItem: async (key, value, ..._args) => {
    return await _Storage.StorageService.set(key, value);
  },
  removeItem: async (key, ..._args) => {
    return await _Storage.StorageService.remove(key);
  }
};
const persistConfig = exports.persistConfig = {
  key: 'root',
  storage: CustomStorage
};
const reducer = (0, _toolkit.combineReducers)({
  reducer: (0, _reduxPersist.persistReducer)(persistConfig, _reducers.appReducer)
});
const store = exports.store = (0, _toolkit.configureStore)({
  reducer,
  middleware: [_reduxThunk.default]
});
const useAppDispatch = exports.useAppDispatch = store.dispatch;
const useAppSelector = exports.useAppSelector = _reactRedux.useSelector;
const persistor = exports.persistor = (0, _reduxPersist.persistStore)(store);