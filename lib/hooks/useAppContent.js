"use strict";

exports.__esModule = true;
exports.useAppContent = useAppContent;
var _react = require("react");
var _context = require("../context");
var _store = require("../store");
function useAppContent(collectionName, initialFetch = false) {
  const records = (0, _store.useAppSelector)(state => state.reducer.records[collectionName]);
  const subscriptions = (0, _store.useAppSelector)(state => state.reducer.subscriptions);
  const context = (0, _react.useContext)(_context.ContentContext);
  (0, _react.useEffect)(() => {
    if (initialFetch) {
      (async () => {
        await context.fetch(collectionName);
      })();
    }
  }, [collectionName, initialFetch]);
  const [isSubscribed, setIsSubscribed] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
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