import { combineReducers } from 'redux';
import { records } from './records';
import { subscriptions } from './subscriptions';
export const appReducer = combineReducers({
  records,
  subscriptions
});