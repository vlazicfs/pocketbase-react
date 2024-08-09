(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-dom'), require('pocketbase')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react-dom', 'pocketbase'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.PocketbaseReact = {}, global.reactDom, global["@tobicrain/pocketbase"]));
})(this, (function (exports, reactDom, PocketBase) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var PocketBase__default = /*#__PURE__*/_interopDefaultLegacy(PocketBase);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var react_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var ReactVersion = '18.0.0-fc46dba67-20220329';

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	/**
	 * Keeps track of the current dispatcher.
	 */
	var ReactCurrentDispatcher = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	/**
	 * Keeps track of the current batch's configuration such as how long an update
	 * should suspend for if it needs to.
	 */
	var ReactCurrentBatchConfig = {
	  transition: null
	};

	var ReactCurrentActQueue = {
	  current: null,
	  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
	  isBatchingLegacy: false,
	  didScheduleLegacyUpdate: false
	};

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	};

	var ReactDebugCurrentFrame = {};
	var currentExtraStackFrame = null;
	function setExtraStackFrame(stack) {
	  {
	    currentExtraStackFrame = stack;
	  }
	}

	{
	  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
	    {
	      currentExtraStackFrame = stack;
	    }
	  }; // Stack implementation injected by the current renderer.


	  ReactDebugCurrentFrame.getCurrentStack = null;

	  ReactDebugCurrentFrame.getStackAddendum = function () {
	    var stack = ''; // Add an extra top frame while an element is being validated

	    if (currentExtraStackFrame) {
	      stack += currentExtraStackFrame;
	    } // Delegate to the injected renderer-specific implementation


	    var impl = ReactDebugCurrentFrame.getCurrentStack;

	    if (impl) {
	      stack += impl() || '';
	    }

	    return stack;
	  };
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var ReactSharedInternals = {
	  ReactCurrentDispatcher: ReactCurrentDispatcher,
	  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
	  ReactCurrentOwner: ReactCurrentOwner
	};

	{
	  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
	  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
	}

	// by calls to these methods by a Babel plugin.
	//
	// In PROD (or in packages without access to React internals),
	// they are left as they are instead.

	function warn(format) {
	  {
	    {
	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      printWarning('warn', format, args);
	    }
	  }
	}
	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	var didWarnStateUpdateForUnmountedComponent = {};

	function warnNoop(publicInstance, callerName) {
	  {
	    var _constructor = publicInstance.constructor;
	    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
	    var warningKey = componentName + "." + callerName;

	    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
	      return;
	    }

	    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

	    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
	  }
	}
	/**
	 * This is the abstract API for an update queue.
	 */


	var ReactNoopUpdateQueue = {
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },

	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance, callback, callerName) {
	    warnNoop(publicInstance, 'forceUpdate');
	  },

	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} callerName name of the calling function in the public API.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
	    warnNoop(publicInstance, 'replaceState');
	  },

	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @param {?function} callback Called after component is updated.
	   * @param {?string} Name of the calling function in the public API.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
	    warnNoop(publicInstance, 'setState');
	  }
	};

	var assign = Object.assign;

	var emptyObject = {};

	{
	  Object.freeze(emptyObject);
	}
	/**
	 * Base class helpers for the updating state of a component.
	 */


	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
	  // renderer.

	  this.updater = updater || ReactNoopUpdateQueue;
	}

	Component.prototype.isReactComponent = {};
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */

	Component.prototype.setState = function (partialState, callback) {
	  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
	    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
	  }

	  this.updater.enqueueSetState(this, partialState, callback, 'setState');
	};
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */


	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
	};
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */


	{
	  var deprecatedAPIs = {
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
	  };

	  var defineDeprecationWarning = function (methodName, info) {
	    Object.defineProperty(Component.prototype, methodName, {
	      get: function () {
	        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

	        return undefined;
	      }
	    });
	  };

	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}

	function ComponentDummy() {}

	ComponentDummy.prototype = Component.prototype;
	/**
	 * Convenience component with default shallow equality check for sCU.
	 */

	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context; // If a component has string refs, we will assign a different object later.

	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}

	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;

	// an immutable object with a single mutable value
	function createRef() {
	  var refObject = {
	    current: null
	  };

	  {
	    Object.seal(refObject);
	  }

	  return refObject;
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  var warnAboutAccessingKey = function () {
	    {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingKey.isReactWarning = true;
	  Object.defineProperty(props, 'key', {
	    get: warnAboutAccessingKey,
	    configurable: true
	  });
	}

	function defineRefPropWarningGetter(props, displayName) {
	  var warnAboutAccessingRef = function () {
	    {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    }
	  };

	  warnAboutAccessingRef.isReactWarning = true;
	  Object.defineProperty(props, 'ref', {
	    get: warnAboutAccessingRef,
	    configurable: true
	  });
	}

	function warnIfStringRefCannotBeAutoConverted(config) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * Create and return a new ReactElement of the given type.
	 * See https://reactjs.org/docs/react-api.html#createelement
	 */

	function createElement(type, config, children) {
	  var propName; // Reserved names are extracted

	  var props = {};
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      ref = config.ref;

	      {
	        warnIfStringRefCannotBeAutoConverted(config);
	      }
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    {
	      if (Object.freeze) {
	        Object.freeze(childArray);
	      }
	    }

	    props.children = childArray;
	  } // Resolve default props


	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;

	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  {
	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }
	  }

	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	  return newElement;
	}
	/**
	 * Clone and return a new ReactElement using element as the starting point.
	 * See https://reactjs.org/docs/react-api.html#cloneelement
	 */

	function cloneElement(element, config, children) {
	  if (element === null || element === undefined) {
	    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
	  }

	  var propName; // Original props are copied

	  var props = assign({}, element.props); // Reserved names are extracted

	  var key = element.key;
	  var ref = element.ref; // Self is preserved since the owner is preserved.

	  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.

	  var source = element._source; // Owner will be preserved, unless ref is overridden

	  var owner = element._owner;

	  if (config != null) {
	    if (hasValidRef(config)) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    } // Remaining properties override existing props


	    var defaultProps;

	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }

	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  } // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.


	  var childrenLength = arguments.length - 2;

	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);

	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }

	    props.children = childArray;
	  }

	  return ReactElement(element.type, key, ref, self, source, owner, props);
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */

	function isValidElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}

	var SEPARATOR = '.';
	var SUBSEPARATOR = ':';
	/**
	 * Escape and wrap key so it is safe to use as a reactid
	 *
	 * @param {string} key to be escaped.
	 * @return {string} the escaped key.
	 */

	function escape(key) {
	  var escapeRegex = /[=:]/g;
	  var escaperLookup = {
	    '=': '=0',
	    ':': '=2'
	  };
	  var escapedString = key.replace(escapeRegex, function (match) {
	    return escaperLookup[match];
	  });
	  return '$' + escapedString;
	}
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */


	var didWarnAboutMaps = false;
	var userProvidedKeyEscapeRegex = /\/+/g;

	function escapeUserProvidedKey(text) {
	  return text.replace(userProvidedKeyEscapeRegex, '$&/');
	}
	/**
	 * Generate a key string that identifies a element within a set.
	 *
	 * @param {*} element A element that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */


	function getElementKey(element, index) {
	  // Do some typechecking here since we call this blindly. We want to ensure
	  // that we don't block potential future ES APIs.
	  if (typeof element === 'object' && element !== null && element.key != null) {
	    // Explicit key
	    {
	      checkKeyStringCoercion(element.key);
	    }

	    return escape('' + element.key);
	  } // Implicit key determined by the index in the set


	  return index.toString(36);
	}

	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;

	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }

	  var invokeCallback = false;

	  if (children === null) {
	    invokeCallback = true;
	  } else {
	    switch (type) {
	      case 'string':
	      case 'number':
	        invokeCallback = true;
	        break;

	      case 'object':
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	        }

	    }
	  }

	  if (invokeCallback) {
	    var _child = children;
	    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows:

	    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

	    if (isArray(mappedChild)) {
	      var escapedChildKey = '';

	      if (childKey != null) {
	        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
	      }

	      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
	        return c;
	      });
	    } else if (mappedChild != null) {
	      if (isValidElement(mappedChild)) {
	        {
	          // The `if` statement here prevents auto-disabling of the safe
	          // coercion ESLint rule, so we must manually disable it below.
	          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
	            checkKeyStringCoercion(mappedChild.key);
	          }
	        }

	        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
	        // traverseAllChildren used to do for objects as children
	        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
	        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
	        // eslint-disable-next-line react-internal/safe-string-coercion
	        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
	      }

	      array.push(mappedChild);
	    }

	    return 1;
	  }

	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.

	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

	  if (isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getElementKey(child, i);
	      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);

	    if (typeof iteratorFn === 'function') {
	      var iterableChildren = children;

	      {
	        // Warn about using Maps as children
	        if (iteratorFn === iterableChildren.entries) {
	          if (!didWarnAboutMaps) {
	            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
	          }

	          didWarnAboutMaps = true;
	        }
	      }

	      var iterator = iteratorFn.call(iterableChildren);
	      var step;
	      var ii = 0;

	      while (!(step = iterator.next()).done) {
	        child = step.value;
	        nextName = nextNamePrefix + getElementKey(child, ii++);
	        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
	      }
	    } else if (type === 'object') {
	      // eslint-disable-next-line react-internal/safe-string-coercion
	      var childrenString = String(children);
	      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
	    }
	  }

	  return subtreeCount;
	}

	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
	 *
	 * The provided mapFunction(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }

	  var result = [];
	  var count = 0;
	  mapIntoArray(children, result, '', '', function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrencount
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */


	function countChildren(children) {
	  var n = 0;
	  mapChildren(children, function () {
	    n++; // Don't return anything
	  });
	  return n;
	}

	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  mapChildren(children, function () {
	    forEachFunc.apply(this, arguments); // Don't return anything.
	  }, forEachContext);
	}
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
	 */


	function toArray(children) {
	  return mapChildren(children, function (child) {
	    return child;
	  }) || [];
	}
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection.
	 *
	 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
	 *
	 * The current implementation of this function assumes that a single child gets
	 * passed without a wrapper, but the purpose of this helper function is to
	 * abstract away the particular structure of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactElement} The first and only `ReactElement` contained in the
	 * structure.
	 */


	function onlyChild(children) {
	  if (!isValidElement(children)) {
	    throw new Error('React.Children.only expected to receive a single React element child.');
	  }

	  return children;
	}

	function createContext(defaultValue) {
	  // TODO: Second argument used to be an optional `calculateChangedBits`
	  // function. Warn to reserve for future use?
	  var context = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    // As a workaround to support multiple concurrent renderers, we categorize
	    // some renderers as primary and others as secondary. We only expect
	    // there to be two concurrent renderers at most: React Native (primary) and
	    // Fabric (secondary); React DOM (primary) and React ART (secondary).
	    // Secondary renderers store their context values on separate fields.
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    // Used to track how many concurrent renderers this context currently
	    // supports within in a single renderer. Such as parallel server rendering.
	    _threadCount: 0,
	    // These are circular
	    Provider: null,
	    Consumer: null,
	    // Add these to use same hidden class in VM as ServerContext
	    _defaultValue: null,
	    _globalName: null
	  };
	  context.Provider = {
	    $$typeof: REACT_PROVIDER_TYPE,
	    _context: context
	  };
	  var hasWarnedAboutUsingNestedContextConsumers = false;
	  var hasWarnedAboutUsingConsumerProvider = false;
	  var hasWarnedAboutDisplayNameOnConsumer = false;

	  {
	    // A separate object, but proxies back to the original context object for
	    // backwards compatibility. It has a different $$typeof, so we can properly
	    // warn for the incorrect usage of Context as a Consumer.
	    var Consumer = {
	      $$typeof: REACT_CONTEXT_TYPE,
	      _context: context
	    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

	    Object.defineProperties(Consumer, {
	      Provider: {
	        get: function () {
	          if (!hasWarnedAboutUsingConsumerProvider) {
	            hasWarnedAboutUsingConsumerProvider = true;

	            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
	          }

	          return context.Provider;
	        },
	        set: function (_Provider) {
	          context.Provider = _Provider;
	        }
	      },
	      _currentValue: {
	        get: function () {
	          return context._currentValue;
	        },
	        set: function (_currentValue) {
	          context._currentValue = _currentValue;
	        }
	      },
	      _currentValue2: {
	        get: function () {
	          return context._currentValue2;
	        },
	        set: function (_currentValue2) {
	          context._currentValue2 = _currentValue2;
	        }
	      },
	      _threadCount: {
	        get: function () {
	          return context._threadCount;
	        },
	        set: function (_threadCount) {
	          context._threadCount = _threadCount;
	        }
	      },
	      Consumer: {
	        get: function () {
	          if (!hasWarnedAboutUsingNestedContextConsumers) {
	            hasWarnedAboutUsingNestedContextConsumers = true;

	            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
	          }

	          return context.Consumer;
	        }
	      },
	      displayName: {
	        get: function () {
	          return context.displayName;
	        },
	        set: function (displayName) {
	          if (!hasWarnedAboutDisplayNameOnConsumer) {
	            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

	            hasWarnedAboutDisplayNameOnConsumer = true;
	          }
	        }
	      }
	    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

	    context.Consumer = Consumer;
	  }

	  {
	    context._currentRenderer = null;
	    context._currentRenderer2 = null;
	  }

	  return context;
	}

	var Uninitialized = -1;
	var Pending = 0;
	var Resolved = 1;
	var Rejected = 2;

	function lazyInitializer(payload) {
	  if (payload._status === Uninitialized) {
	    var ctor = payload._result;
	    var thenable = ctor(); // Transition to the next state.
	    // This might throw either because it's missing or throws. If so, we treat it
	    // as still uninitialized and try again next time. Which is the same as what
	    // happens if the ctor or any wrappers processing the ctor throws. This might
	    // end up fixing it if the resolution was a concurrency bug.

	    thenable.then(function (moduleObject) {
	      if (payload._status === Pending || payload._status === Uninitialized) {
	        // Transition to the next state.
	        var resolved = payload;
	        resolved._status = Resolved;
	        resolved._result = moduleObject;
	      }
	    }, function (error) {
	      if (payload._status === Pending || payload._status === Uninitialized) {
	        // Transition to the next state.
	        var rejected = payload;
	        rejected._status = Rejected;
	        rejected._result = error;
	      }
	    });

	    if (payload._status === Uninitialized) {
	      // In case, we're still uninitialized, then we're waiting for the thenable
	      // to resolve. Set it as pending in the meantime.
	      var pending = payload;
	      pending._status = Pending;
	      pending._result = thenable;
	    }
	  }

	  if (payload._status === Resolved) {
	    var moduleObject = payload._result;

	    {
	      if (moduleObject === undefined) {
	        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
	        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
	      }
	    }

	    {
	      if (!('default' in moduleObject)) {
	        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
	        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
	      }
	    }

	    return moduleObject.default;
	  } else {
	    throw payload._result;
	  }
	}

	function lazy(ctor) {
	  var payload = {
	    // We use these fields to store the result.
	    _status: Uninitialized,
	    _result: ctor
	  };
	  var lazyType = {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: payload,
	    _init: lazyInitializer
	  };

	  {
	    // In production, this would just set it on the object.
	    var defaultProps;
	    var propTypes; // $FlowFixMe

	    Object.defineProperties(lazyType, {
	      defaultProps: {
	        configurable: true,
	        get: function () {
	          return defaultProps;
	        },
	        set: function (newDefaultProps) {
	          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          defaultProps = newDefaultProps; // Match production behavior more closely:
	          // $FlowFixMe

	          Object.defineProperty(lazyType, 'defaultProps', {
	            enumerable: true
	          });
	        }
	      },
	      propTypes: {
	        configurable: true,
	        get: function () {
	          return propTypes;
	        },
	        set: function (newPropTypes) {
	          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

	          propTypes = newPropTypes; // Match production behavior more closely:
	          // $FlowFixMe

	          Object.defineProperty(lazyType, 'propTypes', {
	            enumerable: true
	          });
	        }
	      }
	    });
	  }

	  return lazyType;
	}

	function forwardRef(render) {
	  {
	    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
	      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
	    } else if (typeof render !== 'function') {
	      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
	    } else {
	      if (render.length !== 0 && render.length !== 2) {
	        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
	      }
	    }

	    if (render != null) {
	      if (render.defaultProps != null || render.propTypes != null) {
	        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
	      }
	    }
	  }

	  var elementType = {
	    $$typeof: REACT_FORWARD_REF_TYPE,
	    render: render
	  };

	  {
	    var ownName;
	    Object.defineProperty(elementType, 'displayName', {
	      enumerable: false,
	      configurable: true,
	      get: function () {
	        return ownName;
	      },
	      set: function (name) {
	        ownName = name; // The inner component shouldn't inherit this display name in most cases,
	        // because the component may be used elsewhere.
	        // But it's nice for anonymous functions to inherit the name,
	        // so that our component-stack generation logic will display their frames.
	        // An anonymous function generally suggests a pattern like:
	        //   React.forwardRef((props, ref) => {...});
	        // This kind of inner function is not used elsewhere so the side effect is okay.

	        if (!render.name && !render.displayName) {
	          render.displayName = name;
	        }
	      }
	    });
	  }

	  return elementType;
	}

	var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function memo(type, compare) {
	  {
	    if (!isValidElementType(type)) {
	      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
	    }
	  }

	  var elementType = {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: compare === undefined ? null : compare
	  };

	  {
	    var ownName;
	    Object.defineProperty(elementType, 'displayName', {
	      enumerable: false,
	      configurable: true,
	      get: function () {
	        return ownName;
	      },
	      set: function (name) {
	        ownName = name; // The inner component shouldn't inherit this display name in most cases,
	        // because the component may be used elsewhere.
	        // But it's nice for anonymous functions to inherit the name,
	        // so that our component-stack generation logic will display their frames.
	        // An anonymous function generally suggests a pattern like:
	        //   React.memo((props) => {...});
	        // This kind of inner function is not used elsewhere so the side effect is okay.

	        if (!type.name && !type.displayName) {
	          type.displayName = name;
	        }
	      }
	    });
	  }

	  return elementType;
	}

	function resolveDispatcher() {
	  var dispatcher = ReactCurrentDispatcher.current;

	  {
	    if (dispatcher === null) {
	      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
	    }
	  } // Will result in a null access error if accessed outside render phase. We
	  // intentionally don't throw our own error because this is in a hot path.
	  // Also helps ensure this is inlined.


	  return dispatcher;
	}
	function useContext(Context) {
	  var dispatcher = resolveDispatcher();

	  {
	    // TODO: add a more generic warning for invalid values.
	    if (Context._context !== undefined) {
	      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
	      // and nobody should be using this in existing code.

	      if (realContext.Consumer === Context) {
	        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
	      } else if (realContext.Provider === Context) {
	        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
	      }
	    }
	  }

	  return dispatcher.useContext(Context);
	}
	function useState(initialState) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useState(initialState);
	}
	function useReducer(reducer, initialArg, init) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useReducer(reducer, initialArg, init);
	}
	function useRef(initialValue) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useRef(initialValue);
	}
	function useEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useEffect(create, deps);
	}
	function useInsertionEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useInsertionEffect(create, deps);
	}
	function useLayoutEffect(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useLayoutEffect(create, deps);
	}
	function useCallback(callback, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useCallback(callback, deps);
	}
	function useMemo(create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useMemo(create, deps);
	}
	function useImperativeHandle(ref, create, deps) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useImperativeHandle(ref, create, deps);
	}
	function useDebugValue(value, formatterFn) {
	  {
	    var dispatcher = resolveDispatcher();
	    return dispatcher.useDebugValue(value, formatterFn);
	  }
	}
	function useTransition() {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useTransition();
	}
	function useDeferredValue(value) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useDeferredValue(value);
	}
	function useId() {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useId();
	}
	function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var dispatcher = resolveDispatcher();
	  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	}

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher$1.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher$1.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      setExtraStackFrame(stack);
	    } else {
	      setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}

	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

	    if (name) {
	      return '\n\nCheck the render method of `' + name + '`.';
	    }
	  }

	  return '';
	}

	function getSourceInfoErrorAddendum(source) {
	  if (source !== undefined) {
	    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	    var lineNumber = source.lineNumber;
	    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	  }

	  return '';
	}

	function getSourceInfoErrorAddendumForProps(elementProps) {
	  if (elementProps !== null && elementProps !== undefined) {
	    return getSourceInfoErrorAddendum(elementProps.__source);
	  }

	  return '';
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  var info = getDeclarationErrorAddendum();

	  if (!info) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	    if (parentName) {
	      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	    }
	  }

	  return info;
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }

	  element._store.validated = true;
	  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	    return;
	  }

	  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.

	  var childOwner = '';

	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	  }

	  {
	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }

	  if (isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];

	      if (isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);

	    if (typeof iteratorFn === 'function') {
	      // Entry iterators used to provide implicit keys,
	      // but now we print a separate warning for them later.
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;

	        while (!(step = iterator.next()).done) {
	          if (isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}
	function createElementWithValidation(type, props, children) {
	  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	  // succeed and there will likely be errors in render.

	  if (!validType) {
	    var info = '';

	    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	    }

	    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

	    if (sourceInfo) {
	      info += sourceInfo;
	    } else {
	      info += getDeclarationErrorAddendum();
	    }

	    var typeString;

	    if (type === null) {
	      typeString = 'null';
	    } else if (isArray(type)) {
	      typeString = 'array';
	    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	      info = ' Did you accidentally export a JSX literal instead of a component?';
	    } else {
	      typeString = typeof type;
	    }

	    {
	      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }
	  }

	  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
	  // TODO: Drop this when these are no longer allowed as the type argument.

	  if (element == null) {
	    return element;
	  } // Skip key warning if the type isn't valid since our key validation logic
	  // doesn't expect a non-string/function type and can throw confusing errors.
	  // We don't want exception behavior to differ between dev and prod.
	  // (Rendering will throw with a helpful message and as soon as the type is
	  // fixed, the key warnings will appear.)


	  if (validType) {
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], type);
	    }
	  }

	  if (type === REACT_FRAGMENT_TYPE) {
	    validateFragmentProps(element);
	  } else {
	    validatePropTypes(element);
	  }

	  return element;
	}
	var didWarnAboutDeprecatedCreateFactory = false;
	function createFactoryWithValidation(type) {
	  var validatedFactory = createElementWithValidation.bind(null, type);
	  validatedFactory.type = type;

	  {
	    if (!didWarnAboutDeprecatedCreateFactory) {
	      didWarnAboutDeprecatedCreateFactory = true;

	      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
	    } // Legacy hook: remove it


	    Object.defineProperty(validatedFactory, 'type', {
	      enumerable: false,
	      get: function () {
	        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

	        Object.defineProperty(this, 'type', {
	          value: type
	        });
	        return type;
	      }
	    });
	  }

	  return validatedFactory;
	}
	function cloneElementWithValidation(element, props, children) {
	  var newElement = cloneElement.apply(this, arguments);

	  for (var i = 2; i < arguments.length; i++) {
	    validateChildKeys(arguments[i], newElement.type);
	  }

	  validatePropTypes(newElement);
	  return newElement;
	}

	function startTransition(scope, options) {
	  var prevTransition = ReactCurrentBatchConfig.transition;
	  ReactCurrentBatchConfig.transition = {};
	  var currentTransition = ReactCurrentBatchConfig.transition;

	  {
	    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
	  }

	  try {
	    scope();
	  } finally {
	    ReactCurrentBatchConfig.transition = prevTransition;

	    {
	      if (prevTransition === null && currentTransition._updatedFibers) {
	        var updatedFibersCount = currentTransition._updatedFibers.size;

	        if (updatedFibersCount > 10) {
	          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
	        }

	        currentTransition._updatedFibers.clear();
	      }
	    }
	  }
	}

	var didWarnAboutMessageChannel = false;
	var enqueueTaskImpl = null;
	function enqueueTask(task) {
	  if (enqueueTaskImpl === null) {
	    try {
	      // read require off the module object to get around the bundlers.
	      // we don't want them to detect a require and bundle a Node polyfill.
	      var requireString = ('require' + Math.random()).slice(0, 7);
	      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
	      // version of setImmediate, bypassing fake timers if any.

	      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
	    } catch (_err) {
	      // we're in a browser
	      // we can't use regular timers because they may still be faked
	      // so we try MessageChannel+postMessage instead
	      enqueueTaskImpl = function (callback) {
	        {
	          if (didWarnAboutMessageChannel === false) {
	            didWarnAboutMessageChannel = true;

	            if (typeof MessageChannel === 'undefined') {
	              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
	            }
	          }
	        }

	        var channel = new MessageChannel();
	        channel.port1.onmessage = callback;
	        channel.port2.postMessage(undefined);
	      };
	    }
	  }

	  return enqueueTaskImpl(task);
	}

	var actScopeDepth = 0;
	var didWarnNoAwaitAct = false;
	function act(callback) {
	  {
	    // `act` calls can be nested, so we track the depth. This represents the
	    // number of `act` scopes on the stack.
	    var prevActScopeDepth = actScopeDepth;
	    actScopeDepth++;

	    if (ReactCurrentActQueue.current === null) {
	      // This is the outermost `act` scope. Initialize the queue. The reconciler
	      // will detect the queue and use it instead of Scheduler.
	      ReactCurrentActQueue.current = [];
	    }

	    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
	    var result;

	    try {
	      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
	      // set to `true` while the given callback is executed, not for updates
	      // triggered during an async event, because this is how the legacy
	      // implementation of `act` behaved.
	      ReactCurrentActQueue.isBatchingLegacy = true;
	      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
	      // which flushed updates immediately after the scope function exits, even
	      // if it's an async function.

	      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
	        var queue = ReactCurrentActQueue.current;

	        if (queue !== null) {
	          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
	          flushActQueue(queue);
	        }
	      }
	    } catch (error) {
	      popActScope(prevActScopeDepth);
	      throw error;
	    } finally {
	      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
	    }

	    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
	      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
	      // for it to resolve before exiting the current scope.

	      var wasAwaited = false;
	      var thenable = {
	        then: function (resolve, reject) {
	          wasAwaited = true;
	          thenableResult.then(function (returnValue) {
	            popActScope(prevActScopeDepth);

	            if (actScopeDepth === 0) {
	              // We've exited the outermost act scope. Recursively flush the
	              // queue until there's no remaining work.
	              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	            } else {
	              resolve(returnValue);
	            }
	          }, function (error) {
	            // The callback threw an error.
	            popActScope(prevActScopeDepth);
	            reject(error);
	          });
	        }
	      };

	      {
	        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
	          // eslint-disable-next-line no-undef
	          Promise.resolve().then(function () {}).then(function () {
	            if (!wasAwaited) {
	              didWarnNoAwaitAct = true;

	              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
	            }
	          });
	        }
	      }

	      return thenable;
	    } else {
	      var returnValue = result; // The callback is not an async function. Exit the current scope
	      // immediately, without awaiting.

	      popActScope(prevActScopeDepth);

	      if (actScopeDepth === 0) {
	        // Exiting the outermost act scope. Flush the queue.
	        var _queue = ReactCurrentActQueue.current;

	        if (_queue !== null) {
	          flushActQueue(_queue);
	          ReactCurrentActQueue.current = null;
	        } // Return a thenable. If the user awaits it, we'll flush again in
	        // case additional work was scheduled by a microtask.


	        var _thenable = {
	          then: function (resolve, reject) {
	            // Confirm we haven't re-entered another `act` scope, in case
	            // the user does something weird like await the thenable
	            // multiple times.
	            if (ReactCurrentActQueue.current === null) {
	              // Recursively flush the queue until there's no remaining work.
	              ReactCurrentActQueue.current = [];
	              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	            } else {
	              resolve(returnValue);
	            }
	          }
	        };
	        return _thenable;
	      } else {
	        // Since we're inside a nested `act` scope, the returned thenable
	        // immediately resolves. The outer scope will flush the queue.
	        var _thenable2 = {
	          then: function (resolve, reject) {
	            resolve(returnValue);
	          }
	        };
	        return _thenable2;
	      }
	    }
	  }
	}

	function popActScope(prevActScopeDepth) {
	  {
	    if (prevActScopeDepth !== actScopeDepth - 1) {
	      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
	    }

	    actScopeDepth = prevActScopeDepth;
	  }
	}

	function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
	  {
	    var queue = ReactCurrentActQueue.current;

	    if (queue !== null) {
	      try {
	        flushActQueue(queue);
	        enqueueTask(function () {
	          if (queue.length === 0) {
	            // No additional work was scheduled. Finish.
	            ReactCurrentActQueue.current = null;
	            resolve(returnValue);
	          } else {
	            // Keep flushing work until there's none left.
	            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
	          }
	        });
	      } catch (error) {
	        reject(error);
	      }
	    } else {
	      resolve(returnValue);
	    }
	  }
	}

	var isFlushing = false;

	function flushActQueue(queue) {
	  {
	    if (!isFlushing) {
	      // Prevent re-entrance.
	      isFlushing = true;
	      var i = 0;

	      try {
	        for (; i < queue.length; i++) {
	          var callback = queue[i];

	          do {
	            callback = callback(true);
	          } while (callback !== null);
	        }

	        queue.length = 0;
	      } catch (error) {
	        // If something throws, leave the remaining callbacks on the queue.
	        queue = queue.slice(i + 1);
	        throw error;
	      } finally {
	        isFlushing = false;
	      }
	    }
	  }
	}

	var createElement$1 =  createElementWithValidation ;
	var cloneElement$1 =  cloneElementWithValidation ;
	var createFactory =  createFactoryWithValidation ;
	var Children = {
	  map: mapChildren,
	  forEach: forEachChildren,
	  count: countChildren,
	  toArray: toArray,
	  only: onlyChild
	};

	exports.Children = Children;
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
	exports.cloneElement = cloneElement$1;
	exports.createContext = createContext;
	exports.createElement = createElement$1;
	exports.createFactory = createFactory;
	exports.createRef = createRef;
	exports.forwardRef = forwardRef;
	exports.isValidElement = isValidElement;
	exports.lazy = lazy;
	exports.memo = memo;
	exports.startTransition = startTransition;
	exports.unstable_act = act;
	exports.useCallback = useCallback;
	exports.useContext = useContext;
	exports.useDebugValue = useDebugValue;
	exports.useDeferredValue = useDeferredValue;
	exports.useEffect = useEffect;
	exports.useId = useId;
	exports.useImperativeHandle = useImperativeHandle;
	exports.useInsertionEffect = useInsertionEffect;
	exports.useLayoutEffect = useLayoutEffect;
	exports.useMemo = useMemo;
	exports.useReducer = useReducer;
	exports.useRef = useRef;
	exports.useState = useState;
	exports.useSyncExternalStore = useSyncExternalStore;
	exports.useTransition = useTransition;
	exports.version = ReactVersion;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	});

	var react = createCommonjsModule(function (module) {

	{
	  module.exports = react_development;
	}
	});

	function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];{var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}}function r(n){return !!n&&!!n[Q]}function t(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t;}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r);}function _(){return U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r);}function g(n){O(n),n.p.forEach(S),n.p=null;}function O(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s,v){if(c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1;}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t);}function z(n,r){var t=n[Q];return (t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return (t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1;}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t));})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return f(r),en.get(r,n)},set:function(r){var t=this[Q];f(t),en.set(t,n,r);}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t);}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return !0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return !0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return !0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return !0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return !0;return !1}function f(r){r.g&&n(3,JSON.stringify(p(r)));}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable);}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)));})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t));}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l]);}}}}(n.p[0]),e(n.p));},K:function(n){return 4===n.i?o(n):a(n)}});}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return "length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?g(c):O(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l);}return f}n(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n;},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un;an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);

	function _typeof$2(o) {
	  "@babel/helpers - typeof";

	  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, _typeof$2(o);
	}

	function toPrimitive(t, r) {
	  if ("object" != _typeof$2(t) || !t) return t;
	  var e = t[Symbol.toPrimitive];
	  if (void 0 !== e) {
	    var i = e.call(t, r || "default");
	    if ("object" != _typeof$2(i)) return i;
	    throw new TypeError("@@toPrimitive must return a primitive value.");
	  }
	  return ("string" === r ? String : Number)(t);
	}

	function toPropertyKey(t) {
	  var i = toPrimitive(t, "string");
	  return "symbol" == _typeof$2(i) ? i : i + "";
	}

	function _defineProperty$4(e, r, t) {
	  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
	    value: t,
	    enumerable: !0,
	    configurable: !0,
	    writable: !0
	  }) : e[r] = t, e;
	}

	function ownKeys$3(e, r) {
	  var t = Object.keys(e);
	  if (Object.getOwnPropertySymbols) {
	    var o = Object.getOwnPropertySymbols(e);
	    r && (o = o.filter(function (r) {
	      return Object.getOwnPropertyDescriptor(e, r).enumerable;
	    })), t.push.apply(t, o);
	  }
	  return t;
	}
	function _objectSpread2(e) {
	  for (var r = 1; r < arguments.length; r++) {
	    var t = null != arguments[r] ? arguments[r] : {};
	    r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) {
	      _defineProperty$4(e, r, t[r]);
	    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) {
	      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
	    });
	  }
	  return e;
	}

	// Inlined version of the `symbol-observable` polyfill
	var $$observable = (function () {
	  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
	})();

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var randomString = function randomString() {
	  return Math.random().toString(36).substring(7).split('').join('.');
	};

	var ActionTypes = {
	  INIT: "@@redux/INIT" + randomString(),
	  REPLACE: "@@redux/REPLACE" + randomString(),
	  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
	    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
	  }
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject$1(obj) {
	  if (typeof obj !== 'object' || obj === null) return false;
	  var proto = obj;

	  while (Object.getPrototypeOf(proto) !== null) {
	    proto = Object.getPrototypeOf(proto);
	  }

	  return Object.getPrototypeOf(obj) === proto;
	}

	// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
	function miniKindOf(val) {
	  if (val === void 0) return 'undefined';
	  if (val === null) return 'null';
	  var type = typeof val;

	  switch (type) {
	    case 'boolean':
	    case 'string':
	    case 'number':
	    case 'symbol':
	    case 'function':
	      {
	        return type;
	      }
	  }

	  if (Array.isArray(val)) return 'array';
	  if (isDate(val)) return 'date';
	  if (isError(val)) return 'error';
	  var constructorName = ctorName(val);

	  switch (constructorName) {
	    case 'Symbol':
	    case 'Promise':
	    case 'WeakMap':
	    case 'WeakSet':
	    case 'Map':
	    case 'Set':
	      return constructorName;
	  } // other


	  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
	}

	function ctorName(val) {
	  return typeof val.constructor === 'function' ? val.constructor.name : null;
	}

	function isError(val) {
	  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
	}

	function isDate(val) {
	  if (val instanceof Date) return true;
	  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
	}

	function kindOf(val) {
	  var typeOfVal = typeof val;

	  {
	    typeOfVal = miniKindOf(val);
	  }

	  return typeOfVal;
	}

	/**
	 * @deprecated
	 *
	 * **We recommend using the `configureStore` method
	 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
	 *
	 * Redux Toolkit is our recommended approach for writing Redux logic today,
	 * including store setup, reducers, data fetching, and more.
	 *
	 * **For more details, please read this Redux docs page:**
	 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
	 *
	 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
	 * simplifies setup and helps avoid common bugs.
	 *
	 * You should not be using the `redux` core package by itself today, except for learning purposes.
	 * The `createStore` method from the core `redux` package will not be removed, but we encourage
	 * all users to migrate to using Redux Toolkit for all Redux code.
	 *
	 * If you want to use `createStore` without this visual deprecation warning, use
	 * the `legacy_createStore` import instead:
	 *
	 * `import { legacy_createStore as createStore} from 'redux'`
	 *
	 */

	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
	    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
	  }

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	  /**
	   * This makes a shallow copy of currentListeners so we can use
	   * nextListeners as a temporary list while dispatching.
	   *
	   * This prevents any bugs around consumers calling
	   * subscribe/unsubscribe in the middle of a dispatch.
	   */

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */


	  function getState() {
	    if (isDispatching) {
	      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
	    }

	    return currentState;
	  }
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */


	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
	    }

	    if (isDispatching) {
	      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
	    }

	    var isSubscribed = true;
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      if (isDispatching) {
	        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
	      }

	      isSubscribed = false;
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	      currentListeners = null;
	    };
	  }
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */


	  function dispatch(action) {
	    if (!isPlainObject$1(action)) {
	      throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;

	    for (var i = 0; i < listeners.length; i++) {
	      var listener = listeners[i];
	      listener();
	    }

	    return action;
	  }
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */


	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
	    }

	    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
	    // Any reducers that existed in both the new and old rootReducer
	    // will receive the previous state. This effectively populates
	    // the new state tree with any relevant data from the old one.

	    dispatch({
	      type: ActionTypes.REPLACE
	    });
	  }
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/tc39/proposal-observable
	   */


	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object' || observer === null) {
	          throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return {
	          unsubscribe: unsubscribe
	        };
	      }
	    }, _ref[$$observable] = function () {
	      return this;
	    }, _ref;
	  } // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.


	  dispatch({
	    type: ActionTypes.INIT
	  });
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[$$observable] = observable, _ref2;
	}

	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */


	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	  } catch (e) {} // eslint-disable-line no-empty

	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!isPlainObject$1(inputState)) {
	    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });
	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });
	  if (action && action.type === ActionTypes.REPLACE) return;

	  if (unexpectedKeys.length > 0) {
	    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
	  }
	}

	function assertReducerShape(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, {
	      type: ActionTypes.INIT
	    });

	    if (typeof initialState === 'undefined') {
	      throw new Error("The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
	    }

	    if (typeof reducer(undefined, {
	      type: ActionTypes.PROBE_UNKNOWN_ACTION()
	    }) === 'undefined') {
	      throw new Error("The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
	    }
	  });
	}
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */


	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};

	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    {
	      if (typeof reducers[key] === 'undefined') {
	        warning("No reducer provided for key \"" + key + "\"");
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }

	  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
	  // keys multiple times.

	  var unexpectedKeyCache;

	  {
	    unexpectedKeyCache = {};
	  }

	  var shapeAssertionError;

	  try {
	    assertReducerShape(finalReducers);
	  } catch (e) {
	    shapeAssertionError = e;
	  }

	  return function combination(state, action) {
	    if (state === void 0) {
	      state = {};
	    }

	    if (shapeAssertionError) {
	      throw shapeAssertionError;
	    }

	    {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

	      if (warningMessage) {
	        warning(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};

	    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
	      var _key = finalReducerKeys[_i];
	      var reducer = finalReducers[_key];
	      var previousStateForKey = state[_key];
	      var nextStateForKey = reducer(previousStateForKey, action);

	      if (typeof nextStateForKey === 'undefined') {
	        var actionType = action && action.type;
	        throw new Error("When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
	      }

	      nextState[_key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }

	    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
	    return hasChanged ? nextState : state;
	  };
	}

	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  return funcs.reduce(function (a, b) {
	    return function () {
	      return a(b.apply(void 0, arguments));
	    };
	  });
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function () {
	      var store = createStore.apply(void 0, arguments);

	      var _dispatch = function dispatch() {
	        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
	      };

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch() {
	          return _dispatch.apply(void 0, arguments);
	        }
	      };
	      var chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = compose.apply(void 0, chain)(store.dispatch);
	      return _objectSpread2(_objectSpread2({}, store), {}, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	/** A function that accepts a potential "extra argument" value to be injected later,
	 * and returns an instance of the thunk middleware that uses that value
	 */
	function createThunkMiddleware(extraArgument) {
	  // Standard Redux middleware definition pattern:
	  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
	  var middleware = function middleware(_ref) {
	    var dispatch = _ref.dispatch,
	        getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
	        // If this "action" is really a function, call it and return the result.
	        if (typeof action === 'function') {
	          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
	          return action(dispatch, getState, extraArgument);
	        } // Otherwise, pass the action down the middleware chain as usual


	        return next(action);
	      };
	    };
	  };

	  return middleware;
	}

	var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
	// with whatever "extra arg" they want to inject into their thunks

	thunk.withExtraArgument = createThunkMiddleware;
	var thunk$1 = thunk;

	var __extends = (undefined && undefined.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        if (typeof b !== "function" && b !== null)
	            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
	    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
	        to[j] = from[i];
	    return to;
	};
	var __defProp = Object.defineProperty;
	var __defProps = Object.defineProperties;
	var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
	var __getOwnPropSymbols = Object.getOwnPropertySymbols;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __propIsEnum = Object.prototype.propertyIsEnumerable;
	var __defNormalProp = function (obj, key, value) { return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value }) : obj[key] = value; };
	var __spreadValues = function (a, b) {
	    for (var prop in b || (b = {}))
	        if (__hasOwnProp.call(b, prop))
	            __defNormalProp(a, prop, b[prop]);
	    if (__getOwnPropSymbols)
	        for (var _i = 0, _c = __getOwnPropSymbols(b); _i < _c.length; _i++) {
	            var prop = _c[_i];
	            if (__propIsEnum.call(b, prop))
	                __defNormalProp(a, prop, b[prop]);
	        }
	    return a;
	};
	var __spreadProps = function (a, b) { return __defProps(a, __getOwnPropDescs(b)); };
	var __async = function (__this, __arguments, generator) {
	    return new Promise(function (resolve, reject) {
	        var fulfilled = function (value) {
	            try {
	                step(generator.next(value));
	            }
	            catch (e) {
	                reject(e);
	            }
	        };
	        var rejected = function (value) {
	            try {
	                step(generator.throw(value));
	            }
	            catch (e) {
	                reject(e);
	            }
	        };
	        var step = function (x) { return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected); };
	        step((generator = generator.apply(__this, __arguments)).next());
	    });
	};
	var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
	    if (arguments.length === 0)
	        return void 0;
	    if (typeof arguments[0] === "object")
	        return compose;
	    return compose.apply(null, arguments);
	};
	// src/isPlainObject.ts
	function isPlainObject(value) {
	    if (typeof value !== "object" || value === null)
	        return false;
	    var proto = Object.getPrototypeOf(value);
	    if (proto === null)
	        return true;
	    var baseProto = proto;
	    while (Object.getPrototypeOf(baseProto) !== null) {
	        baseProto = Object.getPrototypeOf(baseProto);
	    }
	    return proto === baseProto;
	}
	// src/tsHelpers.ts
	var hasMatchFunction = function (v) {
	    return v && typeof v.match === "function";
	};
	// src/createAction.ts
	function createAction(type, prepareAction) {
	    function actionCreator() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        if (prepareAction) {
	            var prepared = prepareAction.apply(void 0, args);
	            if (!prepared) {
	                throw new Error("prepareAction did not return an object");
	            }
	            return __spreadValues(__spreadValues({
	                type: type,
	                payload: prepared.payload
	            }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
	        }
	        return { type: type, payload: args[0] };
	    }
	    actionCreator.toString = function () { return "" + type; };
	    actionCreator.type = type;
	    actionCreator.match = function (action) { return action.type === type; };
	    return actionCreator;
	}
	function isActionCreator(action) {
	    return typeof action === "function" && "type" in action && hasMatchFunction(action);
	}
	// src/actionCreatorInvariantMiddleware.ts
	function getMessage(type) {
	    var splitType = type ? ("" + type).split("/") : [];
	    var actionName = splitType[splitType.length - 1] || "actionCreator";
	    return "Detected an action creator with type \"" + (type || "unknown") + "\" being dispatched. \nMake sure you're calling the action creator before dispatching, i.e. `dispatch(" + actionName + "())` instead of `dispatch(" + actionName + ")`. This is necessary even if the action has no payload.";
	}
	function createActionCreatorInvariantMiddleware(options) {
	    if (options === void 0) { options = {}; }
	    var _c = options.isActionCreator, isActionCreator2 = _c === void 0 ? isActionCreator : _c;
	    return function () { return function (next) { return function (action) {
	        if (isActionCreator2(action)) {
	            console.warn(getMessage(action.type));
	        }
	        return next(action);
	    }; }; };
	}
	function getTimeMeasureUtils(maxDelay, fnName) {
	    var elapsed = 0;
	    return {
	        measureTime: function (fn) {
	            var started = Date.now();
	            try {
	                return fn();
	            }
	            finally {
	                var finished = Date.now();
	                elapsed += finished - started;
	            }
	        },
	        warnIfExceeded: function () {
	            if (elapsed > maxDelay) {
	                console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
	            }
	        }
	    };
	}
	var MiddlewareArray = /** @class */ (function (_super) {
	    __extends(MiddlewareArray, _super);
	    function MiddlewareArray() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var _this = _super.apply(this, args) || this;
	        Object.setPrototypeOf(_this, MiddlewareArray.prototype);
	        return _this;
	    }
	    Object.defineProperty(MiddlewareArray, Symbol.species, {
	        get: function () {
	            return MiddlewareArray;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    MiddlewareArray.prototype.concat = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        return _super.prototype.concat.apply(this, arr);
	    };
	    MiddlewareArray.prototype.prepend = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        if (arr.length === 1 && Array.isArray(arr[0])) {
	            return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
	        }
	        return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
	    };
	    return MiddlewareArray;
	}(Array));
	var EnhancerArray = /** @class */ (function (_super) {
	    __extends(EnhancerArray, _super);
	    function EnhancerArray() {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i] = arguments[_i];
	        }
	        var _this = _super.apply(this, args) || this;
	        Object.setPrototypeOf(_this, EnhancerArray.prototype);
	        return _this;
	    }
	    Object.defineProperty(EnhancerArray, Symbol.species, {
	        get: function () {
	            return EnhancerArray;
	        },
	        enumerable: false,
	        configurable: true
	    });
	    EnhancerArray.prototype.concat = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        return _super.prototype.concat.apply(this, arr);
	    };
	    EnhancerArray.prototype.prepend = function () {
	        var arr = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            arr[_i] = arguments[_i];
	        }
	        if (arr.length === 1 && Array.isArray(arr[0])) {
	            return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr[0].concat(this))))();
	        }
	        return new (EnhancerArray.bind.apply(EnhancerArray, __spreadArray([void 0], arr.concat(this))))();
	    };
	    return EnhancerArray;
	}(Array));
	var prefix = "Invariant failed";
	function invariant(condition, message) {
	    if (condition) {
	        return;
	    }
	    throw new Error(prefix + ": " + (message || ""));
	}
	function stringify(obj, serializer, indent, decycler) {
	    return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
	}
	function getSerialize(serializer, decycler) {
	    var stack = [], keys = [];
	    if (!decycler)
	        decycler = function (_, value) {
	            if (stack[0] === value)
	                return "[Circular ~]";
	            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
	        };
	    return function (key, value) {
	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
	            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
	            if (~stack.indexOf(value))
	                value = decycler.call(this, key, value);
	        }
	        else
	            stack.push(value);
	        return serializer == null ? value : serializer.call(this, key, value);
	    };
	}
	function isImmutableDefault(value) {
	    return typeof value !== "object" || value == null || Object.isFrozen(value);
	}
	function trackForMutations(isImmutable, ignorePaths, obj) {
	    var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
	    return {
	        detectMutations: function () {
	            return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
	        }
	    };
	}
	function trackProperties(isImmutable, ignorePaths, obj, path, checkedObjects) {
	    if (ignorePaths === void 0) { ignorePaths = []; }
	    if (path === void 0) { path = ""; }
	    if (checkedObjects === void 0) { checkedObjects = new Set(); }
	    var tracked = { value: obj };
	    if (!isImmutable(obj) && !checkedObjects.has(obj)) {
	        checkedObjects.add(obj);
	        tracked.children = {};
	        for (var key in obj) {
	            var childPath = path ? path + "." + key : key;
	            if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
	                continue;
	            }
	            tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
	        }
	    }
	    return tracked;
	}
	function detectMutations(isImmutable, ignoredPaths, trackedProperty, obj, sameParentRef, path) {
	    if (ignoredPaths === void 0) { ignoredPaths = []; }
	    if (sameParentRef === void 0) { sameParentRef = false; }
	    if (path === void 0) { path = ""; }
	    var prevObj = trackedProperty ? trackedProperty.value : void 0;
	    var sameRef = prevObj === obj;
	    if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
	        return { wasMutated: true, path: path };
	    }
	    if (isImmutable(prevObj) || isImmutable(obj)) {
	        return { wasMutated: false };
	    }
	    var keysToDetect = {};
	    for (var key in trackedProperty.children) {
	        keysToDetect[key] = true;
	    }
	    for (var key in obj) {
	        keysToDetect[key] = true;
	    }
	    var hasIgnoredPaths = ignoredPaths.length > 0;
	    var _loop_1 = function (key) {
	        var nestedPath = path ? path + "." + key : key;
	        if (hasIgnoredPaths) {
	            var hasMatches = ignoredPaths.some(function (ignored) {
	                if (ignored instanceof RegExp) {
	                    return ignored.test(nestedPath);
	                }
	                return nestedPath === ignored;
	            });
	            if (hasMatches) {
	                return "continue";
	            }
	        }
	        var result = detectMutations(isImmutable, ignoredPaths, trackedProperty.children[key], obj[key], sameRef, nestedPath);
	        if (result.wasMutated) {
	            return { value: result };
	        }
	    };
	    for (var key in keysToDetect) {
	        var state_1 = _loop_1(key);
	        if (typeof state_1 === "object")
	            return state_1.value;
	    }
	    return { wasMutated: false };
	}
	function createImmutableStateInvariantMiddleware(options) {
	    if (options === void 0) { options = {}; }
	    var _c = options.isImmutable, isImmutable = _c === void 0 ? isImmutableDefault : _c, ignoredPaths = options.ignoredPaths, _d = options.warnAfter, warnAfter = _d === void 0 ? 32 : _d, ignore = options.ignore;
	    ignoredPaths = ignoredPaths || ignore;
	    var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
	    return function (_c) {
	        var getState = _c.getState;
	        var state = getState();
	        var tracker = track(state);
	        var result;
	        return function (next) { return function (action) {
	            var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
	            measureUtils.measureTime(function () {
	                state = getState();
	                result = tracker.detectMutations();
	                tracker = track(state);
	                invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
	            });
	            var dispatchedAction = next(action);
	            measureUtils.measureTime(function () {
	                state = getState();
	                result = tracker.detectMutations();
	                tracker = track(state);
	                result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
	            });
	            measureUtils.warnIfExceeded();
	            return dispatchedAction;
	        }; };
	    };
	}
	// src/serializableStateInvariantMiddleware.ts
	function isPlain(val) {
	    var type = typeof val;
	    return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
	}
	function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths, cache) {
	    if (path === void 0) { path = ""; }
	    if (isSerializable === void 0) { isSerializable = isPlain; }
	    if (ignoredPaths === void 0) { ignoredPaths = []; }
	    var foundNestedSerializable;
	    if (!isSerializable(value)) {
	        return {
	            keyPath: path || "<root>",
	            value: value
	        };
	    }
	    if (typeof value !== "object" || value === null) {
	        return false;
	    }
	    if (cache == null ? void 0 : cache.has(value))
	        return false;
	    var entries = getEntries != null ? getEntries(value) : Object.entries(value);
	    var hasIgnoredPaths = ignoredPaths.length > 0;
	    var _loop_2 = function (key, nestedValue) {
	        var nestedPath = path ? path + "." + key : key;
	        if (hasIgnoredPaths) {
	            var hasMatches = ignoredPaths.some(function (ignored) {
	                if (ignored instanceof RegExp) {
	                    return ignored.test(nestedPath);
	                }
	                return nestedPath === ignored;
	            });
	            if (hasMatches) {
	                return "continue";
	            }
	        }
	        if (!isSerializable(nestedValue)) {
	            return { value: {
	                    keyPath: nestedPath,
	                    value: nestedValue
	                } };
	        }
	        if (typeof nestedValue === "object") {
	            foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths, cache);
	            if (foundNestedSerializable) {
	                return { value: foundNestedSerializable };
	            }
	        }
	    };
	    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
	        var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
	        var state_2 = _loop_2(key, nestedValue);
	        if (typeof state_2 === "object")
	            return state_2.value;
	    }
	    if (cache && isNestedFrozen(value))
	        cache.add(value);
	    return false;
	}
	function isNestedFrozen(value) {
	    if (!Object.isFrozen(value))
	        return false;
	    for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
	        var nestedValue = _c[_i];
	        if (typeof nestedValue !== "object" || nestedValue === null)
	            continue;
	        if (!isNestedFrozen(nestedValue))
	            return false;
	    }
	    return true;
	}
	function createSerializableStateInvariantMiddleware(options) {
	    if (options === void 0) { options = {}; }
	    var _c = options.isSerializable, isSerializable = _c === void 0 ? isPlain : _c, getEntries = options.getEntries, _d = options.ignoredActions, ignoredActions = _d === void 0 ? [] : _d, _e = options.ignoredActionPaths, ignoredActionPaths = _e === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _e, _f = options.ignoredPaths, ignoredPaths = _f === void 0 ? [] : _f, _g = options.warnAfter, warnAfter = _g === void 0 ? 32 : _g, _h = options.ignoreState, ignoreState = _h === void 0 ? false : _h, _j = options.ignoreActions, ignoreActions = _j === void 0 ? false : _j, _k = options.disableCache, disableCache = _k === void 0 ? false : _k;
	    var cache = !disableCache && WeakSet ? new WeakSet() : void 0;
	    return function (storeAPI) { return function (next) { return function (action) {
	        var result = next(action);
	        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
	        if (!ignoreActions && !(ignoredActions.length && ignoredActions.indexOf(action.type) !== -1)) {
	            measureUtils.measureTime(function () {
	                var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths, cache);
	                if (foundActionNonSerializableValue) {
	                    var keyPath = foundActionNonSerializableValue.keyPath, value = foundActionNonSerializableValue.value;
	                    console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
	                }
	            });
	        }
	        if (!ignoreState) {
	            measureUtils.measureTime(function () {
	                var state = storeAPI.getState();
	                var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths, cache);
	                if (foundStateNonSerializableValue) {
	                    var keyPath = foundStateNonSerializableValue.keyPath, value = foundStateNonSerializableValue.value;
	                    console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
	                }
	            });
	            measureUtils.warnIfExceeded();
	        }
	        return result;
	    }; }; };
	}
	// src/getDefaultMiddleware.ts
	function isBoolean(x) {
	    return typeof x === "boolean";
	}
	function curryGetDefaultMiddleware() {
	    return function curriedGetDefaultMiddleware(options) {
	        return getDefaultMiddleware(options);
	    };
	}
	function getDefaultMiddleware(options) {
	    if (options === void 0) { options = {}; }
	    var _c = options.thunk, thunk = _c === void 0 ? true : _c, _d = options.immutableCheck, immutableCheck = _d === void 0 ? true : _d, _e = options.serializableCheck, serializableCheck = _e === void 0 ? true : _e, _f = options.actionCreatorCheck, actionCreatorCheck = _f === void 0 ? true : _f;
	    var middlewareArray = new MiddlewareArray();
	    if (thunk) {
	        if (isBoolean(thunk)) {
	            middlewareArray.push(thunk$1);
	        }
	        else {
	            middlewareArray.push(thunk$1.withExtraArgument(thunk.extraArgument));
	        }
	    }
	    {
	        if (immutableCheck) {
	            var immutableOptions = {};
	            if (!isBoolean(immutableCheck)) {
	                immutableOptions = immutableCheck;
	            }
	            middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
	        }
	        if (serializableCheck) {
	            var serializableOptions = {};
	            if (!isBoolean(serializableCheck)) {
	                serializableOptions = serializableCheck;
	            }
	            middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
	        }
	        if (actionCreatorCheck) {
	            var actionCreatorOptions = {};
	            if (!isBoolean(actionCreatorCheck)) {
	                actionCreatorOptions = actionCreatorCheck;
	            }
	            middlewareArray.unshift(createActionCreatorInvariantMiddleware(actionCreatorOptions));
	        }
	    }
	    return middlewareArray;
	}
	// src/configureStore.ts
	var IS_PRODUCTION = "development" === "production";
	function configureStore(options) {
	    var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
	    var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
	    var rootReducer;
	    if (typeof reducer === "function") {
	        rootReducer = reducer;
	    }
	    else if (isPlainObject(reducer)) {
	        rootReducer = combineReducers(reducer);
	    }
	    else {
	        throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
	    }
	    var finalMiddleware = middleware;
	    if (typeof finalMiddleware === "function") {
	        finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
	        if (!Array.isArray(finalMiddleware)) {
	            throw new Error("when using a middleware builder function, an array of middleware must be returned");
	        }
	    }
	    if (finalMiddleware.some(function (item) { return typeof item !== "function"; })) {
	        throw new Error("each middleware provided to configureStore must be a function");
	    }
	    var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
	    var finalCompose = compose;
	    if (devTools) {
	        finalCompose = composeWithDevTools(__spreadValues({
	            trace: !IS_PRODUCTION
	        }, typeof devTools === "object" && devTools));
	    }
	    var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
	    var storeEnhancers = defaultEnhancers;
	    if (Array.isArray(enhancers)) {
	        storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
	    }
	    else if (typeof enhancers === "function") {
	        storeEnhancers = enhancers(defaultEnhancers);
	    }
	    var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
	    return createStore(rootReducer, preloadedState, composedEnhancer);
	}
	// src/nanoid.ts
	var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
	var nanoid = function (size) {
	    if (size === void 0) { size = 21; }
	    var id = "";
	    var i = size;
	    while (i--) {
	        id += urlAlphabet[Math.random() * 64 | 0];
	    }
	    return id;
	};
	// src/createAsyncThunk.ts
	var commonProperties = [
	    "name",
	    "message",
	    "stack",
	    "code"
	];
	var RejectWithValue = /** @class */ (function () {
	    function RejectWithValue(payload, meta) {
	        this.payload = payload;
	        this.meta = meta;
	    }
	    return RejectWithValue;
	}());
	var FulfillWithMeta = /** @class */ (function () {
	    function FulfillWithMeta(payload, meta) {
	        this.payload = payload;
	        this.meta = meta;
	    }
	    return FulfillWithMeta;
	}());
	var miniSerializeError = function (value) {
	    if (typeof value === "object" && value !== null) {
	        var simpleError = {};
	        for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
	            var property = commonProperties_1[_i];
	            if (typeof value[property] === "string") {
	                simpleError[property] = value[property];
	            }
	        }
	        return simpleError;
	    }
	    return { message: String(value) };
	};
	((function () {
	    function createAsyncThunk2(typePrefix, payloadCreator, options) {
	        var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) { return ({
	            payload: payload,
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                requestStatus: "fulfilled"
	            })
	        }); });
	        var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) { return ({
	            payload: void 0,
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                requestStatus: "pending"
	            })
	        }); });
	        var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) { return ({
	            payload: payload,
	            error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
	            meta: __spreadProps(__spreadValues({}, meta || {}), {
	                arg: arg,
	                requestId: requestId,
	                rejectedWithValue: !!payload,
	                requestStatus: "rejected",
	                aborted: (error == null ? void 0 : error.name) === "AbortError",
	                condition: (error == null ? void 0 : error.name) === "ConditionError"
	            })
	        }); });
	        var displayedWarning = false;
	        var AC = typeof AbortController !== "undefined" ? AbortController : /** @class */ (function () {
	            function class_1() {
	                this.signal = {
	                    aborted: false,
	                    addEventListener: function () {
	                    },
	                    dispatchEvent: function () {
	                        return false;
	                    },
	                    onabort: function () {
	                    },
	                    removeEventListener: function () {
	                    },
	                    reason: void 0,
	                    throwIfAborted: function () {
	                    }
	                };
	            }
	            class_1.prototype.abort = function () {
	                {
	                    if (!displayedWarning) {
	                        displayedWarning = true;
	                        console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
	                    }
	                }
	            };
	            return class_1;
	        }());
	        function actionCreator(arg) {
	            return function (dispatch, getState, extra) {
	                var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
	                var abortController = new AC();
	                var abortReason;
	                function abort(reason) {
	                    abortReason = reason;
	                    abortController.abort();
	                }
	                var promise2 = function () {
	                    return __async(this, null, function () {
	                        var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
	                        return __generator(this, function (_c) {
	                            switch (_c.label) {
	                                case 0:
	                                    _c.trys.push([0, 4, , 5]);
	                                    conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState: getState, extra: extra });
	                                    if (!isThenable(conditionResult)) return [3 /*break*/, 2];
	                                    return [4 /*yield*/, conditionResult];
	                                case 1:
	                                    conditionResult = _c.sent();
	                                    _c.label = 2;
	                                case 2:
	                                    if (conditionResult === false || abortController.signal.aborted) {
	                                        throw {
	                                            name: "ConditionError",
	                                            message: "Aborted due to condition callback returning false."
	                                        };
	                                    }
	                                    abortedPromise = new Promise(function (_, reject) { return abortController.signal.addEventListener("abort", function () { return reject({
	                                        name: "AbortError",
	                                        message: abortReason || "Aborted"
	                                    }); }); });
	                                    dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId: requestId, arg: arg }, { getState: getState, extra: extra })));
	                                    return [4 /*yield*/, Promise.race([
	                                            abortedPromise,
	                                            Promise.resolve(payloadCreator(arg, {
	                                                dispatch: dispatch,
	                                                getState: getState,
	                                                extra: extra,
	                                                requestId: requestId,
	                                                signal: abortController.signal,
	                                                abort: abort,
	                                                rejectWithValue: function (value, meta) {
	                                                    return new RejectWithValue(value, meta);
	                                                },
	                                                fulfillWithValue: function (value, meta) {
	                                                    return new FulfillWithMeta(value, meta);
	                                                }
	                                            })).then(function (result) {
	                                                if (result instanceof RejectWithValue) {
	                                                    throw result;
	                                                }
	                                                if (result instanceof FulfillWithMeta) {
	                                                    return fulfilled(result.payload, requestId, arg, result.meta);
	                                                }
	                                                return fulfilled(result, requestId, arg);
	                                            })
	                                        ])];
	                                case 3:
	                                    finalAction = _c.sent();
	                                    return [3 /*break*/, 5];
	                                case 4:
	                                    err_1 = _c.sent();
	                                    finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
	                                    return [3 /*break*/, 5];
	                                case 5:
	                                    skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
	                                    if (!skipDispatch) {
	                                        dispatch(finalAction);
	                                    }
	                                    return [2 /*return*/, finalAction];
	                            }
	                        });
	                    });
	                }();
	                return Object.assign(promise2, {
	                    abort: abort,
	                    requestId: requestId,
	                    arg: arg,
	                    unwrap: function () {
	                        return promise2.then(unwrapResult);
	                    }
	                });
	            };
	        }
	        return Object.assign(actionCreator, {
	            pending: pending,
	            rejected: rejected,
	            fulfilled: fulfilled,
	            typePrefix: typePrefix
	        });
	    }
	    createAsyncThunk2.withTypes = function () { return createAsyncThunk2; };
	    return createAsyncThunk2;
	}))();
	function unwrapResult(action) {
	    if (action.meta && action.meta.rejectedWithValue) {
	        throw action.payload;
	    }
	    if (action.error) {
	        throw action.error;
	    }
	    return action.payload;
	}
	function isThenable(value) {
	    return value !== null && typeof value === "object" && typeof value.then === "function";
	}
	var alm = "listenerMiddleware";
	createAction(alm + "/add");
	createAction(alm + "/removeAll");
	createAction(alm + "/remove");
	var promise;
	typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function (cb) { return (promise || (promise = Promise.resolve())).then(cb).catch(function (err) { return setTimeout(function () {
	    throw err;
	}, 0); }); };
	// src/index.ts
	F();

	var KEY_PREFIX = 'persist:';
	var FLUSH = 'persist/FLUSH';
	var REHYDRATE = 'persist/REHYDRATE';
	var PAUSE = 'persist/PAUSE';
	var PERSIST = 'persist/PERSIST';
	var PURGE = 'persist/PURGE';
	var REGISTER = 'persist/REGISTER';
	var DEFAULT_VERSION = -1;

	function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

	function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/*
	  autoMergeLevel1: 
	    - merges 1 level of substate
	    - skips substate if already modified
	*/
	function autoMergeLevel1(inboundState, originalState, reducedState, _ref) {
	  var debug = _ref.debug;

	  var newState = _objectSpread$2({}, reducedState); // only rehydrate if inboundState exists and is an object


	  if (inboundState && _typeof$1(inboundState) === 'object') {
	    Object.keys(inboundState).forEach(function (key) {
	      // ignore _persist data
	      if (key === '_persist') return; // if reducer modifies substate, skip auto rehydration

	      if (originalState[key] !== reducedState[key]) {
	        if (debug) console.log('redux-persist/stateReconciler: sub state for key `%s` modified, skipping.', key);
	        return;
	      } // otherwise hard set the new value


	      newState[key] = inboundState[key];
	    });
	  }

	  if (debug && inboundState && _typeof$1(inboundState) === 'object') console.log("redux-persist/stateReconciler: rehydrated keys '".concat(Object.keys(inboundState).join(', '), "'"));
	  return newState;
	}

	// @TODO remove once flow < 0.63 support is no longer required.
	function createPersistoid(config) {
	  // defaults
	  var blacklist = config.blacklist || null;
	  var whitelist = config.whitelist || null;
	  var transforms = config.transforms || [];
	  var throttle = config.throttle || 0;
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : KEY_PREFIX).concat(config.key);
	  var storage = config.storage;
	  var serialize;

	  if (config.serialize === false) {
	    serialize = function serialize(x) {
	      return x;
	    };
	  } else if (typeof config.serialize === 'function') {
	    serialize = config.serialize;
	  } else {
	    serialize = defaultSerialize;
	  }

	  var writeFailHandler = config.writeFailHandler || null; // initialize stateful values

	  var lastState = {};
	  var stagedState = {};
	  var keysToProcess = [];
	  var timeIterator = null;
	  var writePromise = null;

	  var update = function update(state) {
	    // add any changed keys to the queue
	    Object.keys(state).forEach(function (key) {
	      if (!passWhitelistBlacklist(key)) return; // is keyspace ignored? noop

	      if (lastState[key] === state[key]) return; // value unchanged? noop

	      if (keysToProcess.indexOf(key) !== -1) return; // is key already queued? noop

	      keysToProcess.push(key); // add key to queue
	    }); //if any key is missing in the new state which was present in the lastState,
	    //add it for processing too

	    Object.keys(lastState).forEach(function (key) {
	      if (state[key] === undefined && passWhitelistBlacklist(key) && keysToProcess.indexOf(key) === -1 && lastState[key] !== undefined) {
	        keysToProcess.push(key);
	      }
	    }); // start the time iterator if not running (read: throttle)

	    if (timeIterator === null) {
	      timeIterator = setInterval(processNextKey, throttle);
	    }

	    lastState = state;
	  };

	  function processNextKey() {
	    if (keysToProcess.length === 0) {
	      if (timeIterator) clearInterval(timeIterator);
	      timeIterator = null;
	      return;
	    }

	    var key = keysToProcess.shift();
	    var endState = transforms.reduce(function (subState, transformer) {
	      return transformer.in(subState, key, lastState);
	    }, lastState[key]);

	    if (endState !== undefined) {
	      try {
	        stagedState[key] = serialize(endState);
	      } catch (err) {
	        console.error('redux-persist/createPersistoid: error serializing state', err);
	      }
	    } else {
	      //if the endState is undefined, no need to persist the existing serialized content
	      delete stagedState[key];
	    }

	    if (keysToProcess.length === 0) {
	      writeStagedState();
	    }
	  }

	  function writeStagedState() {
	    // cleanup any removed keys just before write.
	    Object.keys(stagedState).forEach(function (key) {
	      if (lastState[key] === undefined) {
	        delete stagedState[key];
	      }
	    });
	    writePromise = storage.setItem(storageKey, serialize(stagedState)).catch(onWriteFail);
	  }

	  function passWhitelistBlacklist(key) {
	    if (whitelist && whitelist.indexOf(key) === -1 && key !== '_persist') return false;
	    if (blacklist && blacklist.indexOf(key) !== -1) return false;
	    return true;
	  }

	  function onWriteFail(err) {
	    // @TODO add fail handlers (typically storage full)
	    if (writeFailHandler) writeFailHandler(err);

	    if (err && "development" !== 'production') {
	      console.error('Error storing data', err);
	    }
	  }

	  var flush = function flush() {
	    while (keysToProcess.length !== 0) {
	      processNextKey();
	    }

	    return writePromise || Promise.resolve();
	  }; // return `persistoid`


	  return {
	    update: update,
	    flush: flush
	  };
	} // @NOTE in the future this may be exposed via config

	function defaultSerialize(data) {
	  return JSON.stringify(data);
	}

	function getStoredState(config) {
	  var transforms = config.transforms || [];
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : KEY_PREFIX).concat(config.key);
	  var storage = config.storage;
	  var debug = config.debug;
	  var deserialize;

	  if (config.deserialize === false) {
	    deserialize = function deserialize(x) {
	      return x;
	    };
	  } else if (typeof config.deserialize === 'function') {
	    deserialize = config.deserialize;
	  } else {
	    deserialize = defaultDeserialize;
	  }

	  return storage.getItem(storageKey).then(function (serialized) {
	    if (!serialized) return undefined;else {
	      try {
	        var state = {};
	        var rawState = deserialize(serialized);
	        Object.keys(rawState).forEach(function (key) {
	          state[key] = transforms.reduceRight(function (subState, transformer) {
	            return transformer.out(subState, key, rawState);
	          }, deserialize(rawState[key]));
	        });
	        return state;
	      } catch (err) {
	        if (debug) console.log("redux-persist/getStoredState: Error restoring data ".concat(serialized), err);
	        throw err;
	      }
	    }
	  });
	}

	function defaultDeserialize(serial) {
	  return JSON.parse(serial);
	}

	function purgeStoredState(config) {
	  var storage = config.storage;
	  var storageKey = "".concat(config.keyPrefix !== undefined ? config.keyPrefix : KEY_PREFIX).concat(config.key);
	  return storage.removeItem(storageKey, warnIfRemoveError);
	}

	function warnIfRemoveError(err) {
	  if (err && "development" !== 'production') {
	    console.error('redux-persist/purgeStoredState: Error purging data stored state', err);
	  }
	}

	function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
	var DEFAULT_TIMEOUT = 5000;
	/*
	  @TODO add validation / handling for:
	  - persisting a reducer which has nested _persist
	  - handling actions that fire before reydrate is called
	*/

	function persistReducer(config, baseReducer) {
	  {
	    if (!config) throw new Error('config is required for persistReducer');
	    if (!config.key) throw new Error('key is required in persistor config');
	    if (!config.storage) throw new Error("redux-persist: config.storage is required. Try using one of the provided storage engines `import storage from 'redux-persist/lib/storage'`");
	  }

	  var version = config.version !== undefined ? config.version : DEFAULT_VERSION;
	  config.debug || false;
	  var stateReconciler = config.stateReconciler === undefined ? autoMergeLevel1 : config.stateReconciler;
	  var getStoredState$1 = config.getStoredState || getStoredState;
	  var timeout = config.timeout !== undefined ? config.timeout : DEFAULT_TIMEOUT;
	  var _persistoid = null;
	  var _purge = false;
	  var _paused = true;

	  var conditionalUpdate = function conditionalUpdate(state) {
	    // update the persistoid only if we are rehydrated and not paused
	    state._persist.rehydrated && _persistoid && !_paused && _persistoid.update(state);
	    return state;
	  };

	  return function (state, action) {
	    var _ref = state || {},
	        _persist = _ref._persist,
	        rest = _objectWithoutProperties(_ref, ["_persist"]); // $FlowIgnore need to update State type


	    var restState = rest;

	    if (action.type === PERSIST) {
	      var _sealed = false;

	      var _rehydrate = function _rehydrate(payload, err) {
	        // dev warning if we are already sealed
	        if (_sealed) console.error("redux-persist: rehydrate for \"".concat(config.key, "\" called after timeout."), payload, err); // only rehydrate if we are not already sealed

	        if (!_sealed) {
	          action.rehydrate(config.key, payload, err);
	          _sealed = true;
	        }
	      };

	      timeout && setTimeout(function () {
	        !_sealed && _rehydrate(undefined, new Error("redux-persist: persist timed out for persist key \"".concat(config.key, "\"")));
	      }, timeout); // @NOTE PERSIST resumes if paused.

	      _paused = false; // @NOTE only ever create persistoid once, ensure we call it at least once, even if _persist has already been set

	      if (!_persistoid) _persistoid = createPersistoid(config); // @NOTE PERSIST can be called multiple times, noop after the first

	      if (_persist) {
	        // We still need to call the base reducer because there might be nested
	        // uses of persistReducer which need to be aware of the PERSIST action
	        return _objectSpread$1({}, baseReducer(restState, action), {
	          _persist: _persist
	        });
	      }

	      if (typeof action.rehydrate !== 'function' || typeof action.register !== 'function') throw new Error('redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.');
	      action.register(config.key);
	      getStoredState$1(config).then(function (restoredState) {
	        var migrate = config.migrate || function (s, v) {
	          return Promise.resolve(s);
	        };

	        migrate(restoredState, version).then(function (migratedState) {
	          _rehydrate(migratedState);
	        }, function (migrateErr) {
	          if (migrateErr) console.error('redux-persist: migration error', migrateErr);

	          _rehydrate(undefined, migrateErr);
	        });
	      }, function (err) {
	        _rehydrate(undefined, err);
	      });
	      return _objectSpread$1({}, baseReducer(restState, action), {
	        _persist: {
	          version: version,
	          rehydrated: false
	        }
	      });
	    } else if (action.type === PURGE) {
	      _purge = true;
	      action.result(purgeStoredState(config));
	      return _objectSpread$1({}, baseReducer(restState, action), {
	        _persist: _persist
	      });
	    } else if (action.type === FLUSH) {
	      action.result(_persistoid && _persistoid.flush());
	      return _objectSpread$1({}, baseReducer(restState, action), {
	        _persist: _persist
	      });
	    } else if (action.type === PAUSE) {
	      _paused = true;
	    } else if (action.type === REHYDRATE) {
	      // noop on restState if purging
	      if (_purge) return _objectSpread$1({}, restState, {
	        _persist: _objectSpread$1({}, _persist, {
	          rehydrated: true
	        }) // @NOTE if key does not match, will continue to default else below

	      });

	      if (action.key === config.key) {
	        var reducedState = baseReducer(restState, action);
	        var inboundState = action.payload; // only reconcile state if stateReconciler and inboundState are both defined

	        var reconciledRest = stateReconciler !== false && inboundState !== undefined ? stateReconciler(inboundState, state, reducedState, config) : reducedState;

	        var _newState = _objectSpread$1({}, reconciledRest, {
	          _persist: _objectSpread$1({}, _persist, {
	            rehydrated: true
	          })
	        });

	        return conditionalUpdate(_newState);
	      }
	    } // if we have not already handled PERSIST, straight passthrough


	    if (!_persist) return baseReducer(state, action); // run base reducer:
	    // is state modified ? return original : return updated

	    var newState = baseReducer(restState, action);
	    if (newState === restState) return state;
	    return conditionalUpdate(_objectSpread$1({}, newState, {
	      _persist: _persist
	    }));
	  };
	}

	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	var initialState = {
	  registry: [],
	  bootstrapped: false
	};

	var persistorReducer = function persistorReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 ? arguments[1] : undefined;

	  switch (action.type) {
	    case REGISTER:
	      return _objectSpread({}, state, {
	        registry: [].concat(_toConsumableArray(state.registry), [action.key])
	      });

	    case REHYDRATE:
	      var firstIndex = state.registry.indexOf(action.key);

	      var registry = _toConsumableArray(state.registry);

	      registry.splice(firstIndex, 1);
	      return _objectSpread({}, state, {
	        registry: registry,
	        bootstrapped: registry.length === 0
	      });

	    default:
	      return state;
	  }
	};

	function persistStore(store, options, cb) {
	  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
	  {
	    var optionsToTest = options || {};
	    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
	    bannedKeys.forEach(function (k) {
	      if (!!optionsToTest[k]) console.error("redux-persist: invalid option passed to persistStore: \"".concat(k, "\". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer."));
	    });
	  }

	  var boostrappedCb = cb || false;

	  var _pStore = createStore(persistorReducer, initialState, options && options.enhancer ? options.enhancer : undefined);

	  var register = function register(key) {
	    _pStore.dispatch({
	      type: REGISTER,
	      key: key
	    });
	  };

	  var rehydrate = function rehydrate(key, payload, err) {
	    var rehydrateAction = {
	      type: REHYDRATE,
	      payload: payload,
	      err: err,
	      key: key // dispatch to `store` to rehydrate and `persistor` to track result

	    };
	    store.dispatch(rehydrateAction);

	    _pStore.dispatch(rehydrateAction);

	    if (boostrappedCb && persistor.getState().bootstrapped) {
	      boostrappedCb();
	      boostrappedCb = false;
	    }
	  };

	  var persistor = _objectSpread({}, _pStore, {
	    purge: function purge() {
	      var results = [];
	      store.dispatch({
	        type: PURGE,
	        result: function result(purgeResult) {
	          results.push(purgeResult);
	        }
	      });
	      return Promise.all(results);
	    },
	    flush: function flush() {
	      var results = [];
	      store.dispatch({
	        type: FLUSH,
	        result: function result(flushResult) {
	          results.push(flushResult);
	        }
	      });
	      return Promise.all(results);
	    },
	    pause: function pause() {
	      store.dispatch({
	        type: PAUSE
	      });
	    },
	    persist: function persist() {
	      store.dispatch({
	        type: PERSIST,
	        register: register,
	        rehydrate: rehydrate
	      });
	    }
	  });

	  if (!(options && options.manualPersist)) {
	    persistor.persist();
	  }

	  return persistor;
	}

	var useSyncExternalStoreShim_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React = react;

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	// dispatch for CommonJS interop named imports.

	var useState = React.useState,
	    useEffect = React.useEffect,
	    useLayoutEffect = React.useLayoutEffect,
	    useDebugValue = React.useDebugValue;
	var didWarnOld18Alpha = false;
	var didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
	// because of a very particular set of implementation details and assumptions
	// -- change any one of them and it will break. The most important assumption
	// is that updates are always synchronous, because concurrent rendering is
	// only available in versions of React that also have a built-in
	// useSyncExternalStore API. And we only use this shim when the built-in API
	// does not exist.
	//
	// Do not assume that the clever hacks used by this hook also work in general.
	// The point of this shim is to replace the need for hacks by other libraries.

	function useSyncExternalStore(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	// React do not expose a way to check if we're hydrating. So users of the shim
	// will need to track that themselves and return the correct value
	// from `getSnapshot`.
	getServerSnapshot) {
	  {
	    if (!didWarnOld18Alpha) {
	      if (React.startTransition !== undefined) {
	        didWarnOld18Alpha = true;

	        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
	      }
	    }
	  } // Read the current snapshot from the store on every render. Again, this
	  // breaks the rules of React, and only works here because of specific
	  // implementation details, most importantly that updates are
	  // always synchronous.


	  var value = getSnapshot();

	  {
	    if (!didWarnUncachedGetSnapshot) {
	      var cachedValue = getSnapshot();

	      if (!objectIs(value, cachedValue)) {
	        error('The result of getSnapshot should be cached to avoid an infinite loop');

	        didWarnUncachedGetSnapshot = true;
	      }
	    }
	  } // Because updates are synchronous, we don't queue them. Instead we force a
	  // re-render whenever the subscribed state changes by updating an some
	  // arbitrary useState hook. Then, during render, we call getSnapshot to read
	  // the current value.
	  //
	  // Because we don't actually use the state returned by the useState hook, we
	  // can save a bit of memory by storing other stuff in that slot.
	  //
	  // To implement the early bailout, we need to track some things on a mutable
	  // object. Usually, we would put that in a useRef hook, but we can stash it in
	  // our useState hook instead.
	  //
	  // To force a re-render, we call forceUpdate({inst}). That works because the
	  // new object always fails an equality check.


	  var _useState = useState({
	    inst: {
	      value: value,
	      getSnapshot: getSnapshot
	    }
	  }),
	      inst = _useState[0].inst,
	      forceUpdate = _useState[1]; // Track the latest getSnapshot function with a ref. This needs to be updated
	  // in the layout phase so we can access it during the tearing check that
	  // happens on subscribe.


	  useLayoutEffect(function () {
	    inst.value = value;
	    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
	    // commit phase if there was an interleaved mutation. In concurrent mode
	    // this can happen all the time, but even in synchronous mode, an earlier
	    // effect may have mutated the store.

	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }
	  }, [subscribe, value, getSnapshot]);
	  useEffect(function () {
	    // Check for changes right before subscribing. Subsequent changes will be
	    // detected in the subscription handler.
	    if (checkIfSnapshotChanged(inst)) {
	      // Force a re-render.
	      forceUpdate({
	        inst: inst
	      });
	    }

	    var handleStoreChange = function () {
	      // TODO: Because there is no cross-renderer API for batching updates, it's
	      // up to the consumer of this library to wrap their subscription event
	      // with unstable_batchedUpdates. Should we try to detect when this isn't
	      // the case and print a warning in development?
	      // The store changed. Check if the snapshot changed since the last time we
	      // read from the store.
	      if (checkIfSnapshotChanged(inst)) {
	        // Force a re-render.
	        forceUpdate({
	          inst: inst
	        });
	      }
	    }; // Subscribe to the store and return a clean-up function.


	    return subscribe(handleStoreChange);
	  }, [subscribe]);
	  useDebugValue(value);
	  return value;
	}

	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  var prevValue = inst.value;

	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(prevValue, nextValue);
	  } catch (error) {
	    return true;
	  }
	}

	function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
	  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
	  // React do not expose a way to check if we're hydrating. So users of the shim
	  // will need to track that themselves and return the correct value
	  // from `getSnapshot`.
	  return getSnapshot();
	}

	var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');

	var isServerEnvironment = !canUseDOM;

	var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
	var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;

	exports.useSyncExternalStore = useSyncExternalStore$2;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	});

	var shim = createCommonjsModule(function (module) {

	{
	  module.exports = useSyncExternalStoreShim_development;
	}
	});

	var withSelector_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
	}
	          var React = react;
	var shim$1 = shim;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
	  ;
	}

	var objectIs = typeof Object.is === 'function' ? Object.is : is;

	var useSyncExternalStore = shim$1.useSyncExternalStore;

	// for CommonJS interop.

	var useRef = React.useRef,
	    useEffect = React.useEffect,
	    useMemo = React.useMemo,
	    useDebugValue = React.useDebugValue; // Same as useSyncExternalStore, but supports selector and isEqual arguments.

	function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
	  // Use this to track the rendered snapshot.
	  var instRef = useRef(null);
	  var inst;

	  if (instRef.current === null) {
	    inst = {
	      hasValue: false,
	      value: null
	    };
	    instRef.current = inst;
	  } else {
	    inst = instRef.current;
	  }

	  var _useMemo = useMemo(function () {
	    // Track the memoized state using closure variables that are local to this
	    // memoized instance of a getSnapshot function. Intentionally not using a
	    // useRef hook, because that state would be shared across all concurrent
	    // copies of the hook/component.
	    var hasMemo = false;
	    var memoizedSnapshot;
	    var memoizedSelection;

	    var memoizedSelector = function (nextSnapshot) {
	      if (!hasMemo) {
	        // The first time the hook is called, there is no memoized result.
	        hasMemo = true;
	        memoizedSnapshot = nextSnapshot;

	        var _nextSelection = selector(nextSnapshot);

	        if (isEqual !== undefined) {
	          // Even if the selector has changed, the currently rendered selection
	          // may be equal to the new selection. We should attempt to reuse the
	          // current value if possible, to preserve downstream memoizations.
	          if (inst.hasValue) {
	            var currentSelection = inst.value;

	            if (isEqual(currentSelection, _nextSelection)) {
	              memoizedSelection = currentSelection;
	              return currentSelection;
	            }
	          }
	        }

	        memoizedSelection = _nextSelection;
	        return _nextSelection;
	      } // We may be able to reuse the previous invocation's result.


	      // We may be able to reuse the previous invocation's result.
	      var prevSnapshot = memoizedSnapshot;
	      var prevSelection = memoizedSelection;

	      if (objectIs(prevSnapshot, nextSnapshot)) {
	        // The snapshot is the same as last time. Reuse the previous selection.
	        return prevSelection;
	      } // The snapshot has changed, so we need to compute a new selection.


	      // The snapshot has changed, so we need to compute a new selection.
	      var nextSelection = selector(nextSnapshot); // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.

	      // If a custom isEqual function is provided, use that to check if the data
	      // has changed. If it hasn't, return the previous selection. That signals
	      // to React that the selections are conceptually equal, and we can bail
	      // out of rendering.
	      if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
	        return prevSelection;
	      }

	      memoizedSnapshot = nextSnapshot;
	      memoizedSelection = nextSelection;
	      return nextSelection;
	    }; // Assigning this to a constant so that Flow knows it can't change.


	    // Assigning this to a constant so that Flow knows it can't change.
	    var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;

	    var getSnapshotWithSelector = function () {
	      return memoizedSelector(getSnapshot());
	    };

	    var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function () {
	      return memoizedSelector(maybeGetServerSnapshot());
	    };
	    return [getSnapshotWithSelector, getServerSnapshotWithSelector];
	  }, [getSnapshot, getServerSnapshot, selector, isEqual]),
	      getSelection = _useMemo[0],
	      getServerSelection = _useMemo[1];

	  var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
	  useEffect(function () {
	    inst.hasValue = true;
	    inst.value = value;
	  }, [value]);
	  useDebugValue(value);
	  return value;
	}

	exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
	          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
	  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
	    'function'
	) {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
	}
	        
	  })();
	}
	});

	var withSelector = createCommonjsModule(function (module) {

	{
	  module.exports = withSelector_development;
	}
	});

	// Default to a dummy "batch" implementation that just runs the callback
	function defaultNoopBatch(callback) {
	  callback();
	}

	let batch = defaultNoopBatch; // Allow injecting another batching function later

	const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings

	const getBatch = () => batch;

	const ContextKey = Symbol.for(`react-redux-context`);
	const gT = typeof globalThis !== "undefined" ? globalThis :
	/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
	{};

	function getContext() {
	  var _gT$ContextKey;

	  if (!react.createContext) return {};
	  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
	  let realContext = contextMap.get(react.createContext);

	  if (!realContext) {
	    realContext = react.createContext(null);

	    {
	      realContext.displayName = 'ReactRedux';
	    }

	    contextMap.set(react.createContext, realContext);
	  }

	  return realContext;
	}

	const ReactReduxContext = /*#__PURE__*/getContext();

	/**
	 * Hook factory, which creates a `useReduxContext` hook bound to a given context. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useReduxContext` hook bound to the specified context.
	 */
	function createReduxContextHook(context = ReactReduxContext) {
	  return function useReduxContext() {
	    const contextValue = react.useContext(context);

	    if (!contextValue) {
	      throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
	    }

	    return contextValue;
	  };
	}
	/**
	 * A hook to access the value of the `ReactReduxContext`. This is a low-level
	 * hook that you should usually not need to call directly.
	 *
	 * @returns {any} the value of the `ReactReduxContext`
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useReduxContext } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const { store } = useReduxContext()
	 *   return <div>{store.getState()}</div>
	 * }
	 */

	const useReduxContext = /*#__PURE__*/createReduxContextHook();

	const notInitialized = () => {
	  throw new Error('uSES not initialized!');
	};

	let useSyncExternalStoreWithSelector = notInitialized;
	const initializeUseSelector = fn => {
	  useSyncExternalStoreWithSelector = fn;
	};

	const refEquality = (a, b) => a === b;
	/**
	 * Hook factory, which creates a `useSelector` hook bound to a given context.
	 *
	 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
	 * @returns {Function} A `useSelector` hook bound to the specified context.
	 */


	function createSelectorHook(context = ReactReduxContext) {
	  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
	  return function useSelector(selector, equalityFnOrOptions = {}) {
	    const {
	      equalityFn = refEquality,
	      stabilityCheck = undefined,
	      noopCheck = undefined
	    } = typeof equalityFnOrOptions === 'function' ? {
	      equalityFn: equalityFnOrOptions
	    } : equalityFnOrOptions;

	    {
	      if (!selector) {
	        throw new Error(`You must pass a selector to useSelector`);
	      }

	      if (typeof selector !== 'function') {
	        throw new Error(`You must pass a function as a selector to useSelector`);
	      }

	      if (typeof equalityFn !== 'function') {
	        throw new Error(`You must pass a function as an equality function to useSelector`);
	      }
	    }

	    const {
	      store,
	      subscription,
	      getServerState,
	      stabilityCheck: globalStabilityCheck,
	      noopCheck: globalNoopCheck
	    } = useReduxContext$1();
	    const firstRun = react.useRef(true);
	    const wrappedSelector = react.useCallback({
	      [selector.name](state) {
	        const selected = selector(state);

	        {
	          const finalStabilityCheck = typeof stabilityCheck === 'undefined' ? globalStabilityCheck : stabilityCheck;

	          if (finalStabilityCheck === 'always' || finalStabilityCheck === 'once' && firstRun.current) {
	            const toCompare = selector(state);

	            if (!equalityFn(selected, toCompare)) {
	              let stack = undefined;

	              try {
	                throw new Error();
	              } catch (e) {
	                ({
	                  stack
	                } = e);
	              }

	              console.warn('Selector ' + (selector.name || 'unknown') + ' returned a different result when called with the same parameters. This can lead to unnecessary rerenders.' + '\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization', {
	                state,
	                selected,
	                selected2: toCompare,
	                stack
	              });
	            }
	          }

	          const finalNoopCheck = typeof noopCheck === 'undefined' ? globalNoopCheck : noopCheck;

	          if (finalNoopCheck === 'always' || finalNoopCheck === 'once' && firstRun.current) {
	            // @ts-ignore
	            if (selected === state) {
	              let stack = undefined;

	              try {
	                throw new Error();
	              } catch (e) {
	                ({
	                  stack
	                } = e);
	              }

	              console.warn('Selector ' + (selector.name || 'unknown') + ' returned the root state when called. This can lead to unnecessary rerenders.' + '\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.', {
	                stack
	              });
	            }
	          }

	          if (firstRun.current) firstRun.current = false;
	        }

	        return selected;
	      }

	    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
	    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
	    react.useDebugValue(selectedState);
	    return selectedState;
	  };
	}
	/**
	 * A hook to access the redux store's state. This hook takes a selector function
	 * as an argument. The selector is called with the store state.
	 *
	 * This hook takes an optional equality comparison function as the second parameter
	 * that allows you to customize the way the selected state is compared to determine
	 * whether the component needs to be re-rendered.
	 *
	 * @param {Function} selector the selector function
	 * @param {Function=} equalityFn the function that will be used to determine equality
	 *
	 * @returns {any} the selected state
	 *
	 * @example
	 *
	 * import React from 'react'
	 * import { useSelector } from 'react-redux'
	 *
	 * export const CounterComponent = () => {
	 *   const counter = useSelector(state => state.counter)
	 *   return <div>{counter}</div>
	 * }
	 */

	const useSelector = /*#__PURE__*/createSelectorHook();

	function _extends() {
	  return _extends = Object.assign ? Object.assign.bind() : function (n) {
	    for (var e = 1; e < arguments.length; e++) {
	      var t = arguments[e];
	      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
	    }
	    return n;
	  }, _extends.apply(null, arguments);
	}

	var reactIs_development$1 = createCommonjsModule(function (module, exports) {



	{
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	var reactIs = createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development$1;
	}
	});

	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

	var reactIs_development = createCommonjsModule(function (module, exports) {

	{
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.SuspenseList = SuspenseList;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	exports.isSuspenseList = isSuspenseList;
	exports.isValidElementType = isValidElementType;
	exports.typeOf = typeOf;
	  })();
	}
	});

	createCommonjsModule(function (module) {

	{
	  module.exports = reactIs_development;
	}
	});

	// well as nesting subscriptions of descendant components, so that we can ensure the
	// ancestor components re-render before descendants

	function createListenerCollection() {
	  const batch = getBatch();
	  let first = null;
	  let last = null;
	  return {
	    clear() {
	      first = null;
	      last = null;
	    },

	    notify() {
	      batch(() => {
	        let listener = first;

	        while (listener) {
	          listener.callback();
	          listener = listener.next;
	        }
	      });
	    },

	    get() {
	      let listeners = [];
	      let listener = first;

	      while (listener) {
	        listeners.push(listener);
	        listener = listener.next;
	      }

	      return listeners;
	    },

	    subscribe(callback) {
	      let isSubscribed = true;
	      let listener = last = {
	        callback,
	        next: null,
	        prev: last
	      };

	      if (listener.prev) {
	        listener.prev.next = listener;
	      } else {
	        first = listener;
	      }

	      return function unsubscribe() {
	        if (!isSubscribed || first === null) return;
	        isSubscribed = false;

	        if (listener.next) {
	          listener.next.prev = listener.prev;
	        } else {
	          last = listener.prev;
	        }

	        if (listener.prev) {
	          listener.prev.next = listener.next;
	        } else {
	          first = listener.next;
	        }
	      };
	    }

	  };
	}

	const nullListeners = {
	  notify() {},

	  get: () => []
	};
	function createSubscription(store, parentSub) {
	  let unsubscribe;
	  let listeners = nullListeners; // Reasons to keep the subscription active

	  let subscriptionsAmount = 0; // Is this specific subscription subscribed (or only nested ones?)

	  let selfSubscribed = false;

	  function addNestedSub(listener) {
	    trySubscribe();
	    const cleanupListener = listeners.subscribe(listener); // cleanup nested sub

	    let removed = false;
	    return () => {
	      if (!removed) {
	        removed = true;
	        cleanupListener();
	        tryUnsubscribe();
	      }
	    };
	  }

	  function notifyNestedSubs() {
	    listeners.notify();
	  }

	  function handleChangeWrapper() {
	    if (subscription.onStateChange) {
	      subscription.onStateChange();
	    }
	  }

	  function isSubscribed() {
	    return selfSubscribed;
	  }

	  function trySubscribe() {
	    subscriptionsAmount++;

	    if (!unsubscribe) {
	      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
	      listeners = createListenerCollection();
	    }
	  }

	  function tryUnsubscribe() {
	    subscriptionsAmount--;

	    if (unsubscribe && subscriptionsAmount === 0) {
	      unsubscribe();
	      unsubscribe = undefined;
	      listeners.clear();
	      listeners = nullListeners;
	    }
	  }

	  function trySubscribeSelf() {
	    if (!selfSubscribed) {
	      selfSubscribed = true;
	      trySubscribe();
	    }
	  }

	  function tryUnsubscribeSelf() {
	    if (selfSubscribed) {
	      selfSubscribed = false;
	      tryUnsubscribe();
	    }
	  }

	  const subscription = {
	    addNestedSub,
	    notifyNestedSubs,
	    handleChangeWrapper,
	    isSubscribed,
	    trySubscribe: trySubscribeSelf,
	    tryUnsubscribe: tryUnsubscribeSelf,
	    getListeners: () => listeners
	  };
	  return subscription;
	}

	// To get around it, we can conditionally useEffect on the server (no-op) and
	// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
	// subscription callback always has the selector from the latest render commit
	// available, otherwise a store update may happen between render and the effect,
	// which may cause missed updates; we also must ensure the store subscription
	// is created synchronously, otherwise a store update may occur before the
	// subscription is created and an inconsistent state may be observed
	// Matches logic in React's `shared/ExecutionEnvironment` file

	const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
	const useIsomorphicLayoutEffect = canUseDOM ? react.useLayoutEffect : react.useEffect;

	function Provider({
	  store,
	  context,
	  children,
	  serverState,
	  stabilityCheck = 'once',
	  noopCheck = 'once'
	}) {
	  const contextValue = react.useMemo(() => {
	    const subscription = createSubscription(store);
	    return {
	      store,
	      subscription,
	      getServerState: serverState ? () => serverState : undefined,
	      stabilityCheck,
	      noopCheck
	    };
	  }, [store, serverState, stabilityCheck, noopCheck]);
	  const previousState = react.useMemo(() => store.getState(), [store]);
	  useIsomorphicLayoutEffect(() => {
	    const {
	      subscription
	    } = contextValue;
	    subscription.onStateChange = subscription.notifyNestedSubs;
	    subscription.trySubscribe();

	    if (previousState !== store.getState()) {
	      subscription.notifyNestedSubs();
	    }

	    return () => {
	      subscription.tryUnsubscribe();
	      subscription.onStateChange = undefined;
	    };
	  }, [contextValue, previousState]);
	  const Context = context || ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

	  return /*#__PURE__*/react.createElement(Context.Provider, {
	    value: contextValue
	  }, children);
	}

	// The primary entry point assumes we're working with standard ReactDOM/RN, but
	initializeUseSelector(withSelector.useSyncExternalStoreWithSelector);
	// with standard React renderers (ReactDOM, React Native)

	setBatch(reactDom.unstable_batchedUpdates);

	const SET_RECORDS = 'SET_RECORDS';
	const ADD_RECORD = 'ADD_RECORD';
	const ADD_RECORDS = 'ADD_RECORDS';
	const UPDATE_RECORD = 'UPDATE_RECORD';
	const DELETE_RECORD = 'DELETE_RECORD';
	const DELETE_RECORDS = 'DELETE_RECORDS';
	const SET_SUBSCRIPTIONS = 'SET_SUBSCRIPTIONS';
	const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
	const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION';

	function appendRecord(record, records) {
	  return [...records, record];
	}
	function appendRecords(recordsToAppend, records) {
	  return [...records, ...recordsToAppend];
	}
	function updateRecord$1(record, records) {
	  return records.map(r => {
	    if (r.id === record.id) {
	      return record;
	    }
	    return r;
	  });
	}
	function deleteRecord$1(record, records) {
	  return records.filter(r => r.id !== record.id);
	}
	function deleteRecords$1(recordsToDelete, records) {
	  return records.filter(r => !recordsToDelete.includes(r));
	}
	const records$1 = (state = {}, action) => {
	  var _state$action$key;
	  const list = (_state$action$key = state[action.key]) != null ? _state$action$key : [];
	  switch (action.type) {
	    case SET_RECORDS:
	      if (Array.isArray(action.payload)) {
	        return _extends({}, state, {
	          [action.key]: action.payload
	        });
	      }
	    case ADD_RECORD:
	      return _extends({}, state, {
	        [action.key]: appendRecord(action.payload, list)
	      });
	    case ADD_RECORDS:
	      return _extends({}, state, {
	        [action.key]: appendRecords(action.payload, list)
	      });
	    case DELETE_RECORD:
	      return _extends({}, state, {
	        [action.key]: deleteRecord$1(action.payload, list)
	      });
	    case DELETE_RECORDS:
	      return _extends({}, state, {
	        [action.key]: deleteRecords$1(action.payload, list)
	      });
	    case UPDATE_RECORD:
	      return _extends({}, state, {
	        [action.key]: updateRecord$1(action.payload, list)
	      });
	    default:
	      return state;
	  }
	};

	function appendSubscription(subscription, subscriptions) {
	  return subscriptions.includes(subscription) ? subscriptions : [...subscriptions, subscription];
	}
	function deleteSubscription$1(subscription, subscriptions) {
	  return subscriptions.filter(sub => sub !== subscription);
	}
	const subscriptions$1 = (state = [], action) => {
	  switch (action.type) {
	    case SET_SUBSCRIPTIONS:
	      if (Array.isArray(action.payload)) {
	        return action.payload;
	      }
	    case ADD_SUBSCRIPTION:
	      return appendSubscription(action.payload, state);
	    case DELETE_SUBSCRIPTION:
	      return deleteSubscription$1(action.payload, state);
	    default:
	      return state;
	  }
	};

	const appReducer = combineReducers({
	  records: records$1,
	  subscriptions: subscriptions$1
	});

	var isPlainObj = value => {
		if (Object.prototype.toString.call(value) !== '[object Object]') {
			return false;
		}

		const prototype = Object.getPrototypeOf(value);
		return prototype === null || prototype === Object.prototype;
	};

	const {hasOwnProperty} = Object.prototype;
	const {propertyIsEnumerable} = Object;
	const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});

	const globalThis$1 = commonjsGlobal;
	const defaultMergeOptions = {
		concatArrays: false,
		ignoreUndefined: false
	};

	const getEnumerableOwnPropertyKeys = value => {
		const keys = [];

		for (const key in value) {
			if (hasOwnProperty.call(value, key)) {
				keys.push(key);
			}
		}

		/* istanbul ignore else  */
		if (Object.getOwnPropertySymbols) {
			const symbols = Object.getOwnPropertySymbols(value);

			for (const symbol of symbols) {
				if (propertyIsEnumerable.call(value, symbol)) {
					keys.push(symbol);
				}
			}
		}

		return keys;
	};

	function clone(value) {
		if (Array.isArray(value)) {
			return cloneArray(value);
		}

		if (isPlainObj(value)) {
			return cloneOptionObject(value);
		}

		return value;
	}

	function cloneArray(array) {
		const result = array.slice(0, 0);

		getEnumerableOwnPropertyKeys(array).forEach(key => {
			defineProperty(result, key, clone(array[key]));
		});

		return result;
	}

	function cloneOptionObject(object) {
		const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

		getEnumerableOwnPropertyKeys(object).forEach(key => {
			defineProperty(result, key, clone(object[key]));
		});

		return result;
	}

	/**
	 * @param {*} merged already cloned
	 * @param {*} source something to merge
	 * @param {string[]} keys keys to merge
	 * @param {Object} config Config Object
	 * @returns {*} cloned Object
	 */
	const mergeKeys = (merged, source, keys, config) => {
		keys.forEach(key => {
			if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
				return;
			}

			// Do not recurse into prototype chain of merged
			if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
				defineProperty(merged, key, merge$1(merged[key], source[key], config));
			} else {
				defineProperty(merged, key, clone(source[key]));
			}
		});

		return merged;
	};

	/**
	 * @param {*} merged already cloned
	 * @param {*} source something to merge
	 * @param {Object} config Config Object
	 * @returns {*} cloned Object
	 *
	 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
	 */
	const concatArrays = (merged, source, config) => {
		let result = merged.slice(0, 0);
		let resultIndex = 0;

		[merged, source].forEach(array => {
			const indices = [];

			// `result.concat(array)` with cloning
			for (let k = 0; k < array.length; k++) {
				if (!hasOwnProperty.call(array, k)) {
					continue;
				}

				indices.push(String(k));

				if (array === merged) {
					// Already cloned
					defineProperty(result, resultIndex++, array[k]);
				} else {
					defineProperty(result, resultIndex++, clone(array[k]));
				}
			}

			// Merge non-index keys
			result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
		});

		return result;
	};

	/**
	 * @param {*} merged already cloned
	 * @param {*} source something to merge
	 * @param {Object} config Config Object
	 * @returns {*} cloned Object
	 */
	function merge$1(merged, source, config) {
		if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
			return concatArrays(merged, source, config);
		}

		if (!isPlainObj(source) || !isPlainObj(merged)) {
			return clone(source);
		}

		return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
	}

	var mergeOptions = function (...options) {
		const config = merge$1(clone(defaultMergeOptions), (this !== globalThis$1 && this) || {}, defaultMergeOptions);
		let merged = {_: {}};

		for (const option of options) {
			if (option === undefined) {
				continue;
			}

			if (!isPlainObj(option)) {
				throw new TypeError('`' + option + '` is not an Option Object');
			}

			merged = merge$1(merged, {_: option}, config);
		}

		return merged._;
	};

	/**
	 * Copyright (c) Nicolas Gallagher.
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// eslint-disable-next-line @typescript-eslint/ban-types

	// eslint-disable-next-line @typescript-eslint/ban-types

	const merge = mergeOptions.bind({
	  concatArrays: true,
	  ignoreUndefined: true
	});
	function mergeLocalStorageItem(key, value) {
	  const oldValue = window.localStorage.getItem(key);
	  if (oldValue) {
	    const oldObject = JSON.parse(oldValue);
	    const newObject = JSON.parse(value);
	    const nextValue = JSON.stringify(merge(oldObject, newObject));
	    window.localStorage.setItem(key, nextValue);
	  } else {
	    window.localStorage.setItem(key, value);
	  }
	}
	function createPromise(getValue, callback) {
	  return new Promise((resolve, reject) => {
	    try {
	      const value = getValue();
	      callback === null || callback === void 0 ? void 0 : callback(null, value);
	      resolve(value);
	    } catch (err) {
	      callback === null || callback === void 0 ? void 0 : callback(err);
	      reject(err);
	    }
	  });
	}
	function createPromiseAll(promises, callback, processResult) {
	  return Promise.all(promises).then(result => {
	    const value = (processResult === null || processResult === void 0 ? void 0 : processResult(result)) ?? null;
	    callback === null || callback === void 0 ? void 0 : callback(null, value);
	    return Promise.resolve(value);
	  }, errors => {
	    callback === null || callback === void 0 ? void 0 : callback(errors);
	    return Promise.reject(errors);
	  });
	}
	const AsyncStorage = {
	  /**
	   * Fetches `key` value.
	   */
	  getItem: (key, callback) => {
	    return createPromise(() => window.localStorage.getItem(key), callback);
	  },
	  /**
	   * Sets `value` for `key`.
	   */
	  setItem: (key, value, callback) => {
	    return createPromise(() => window.localStorage.setItem(key, value), callback);
	  },
	  /**
	   * Removes a `key`
	   */
	  removeItem: (key, callback) => {
	    return createPromise(() => window.localStorage.removeItem(key), callback);
	  },
	  /**
	   * Merges existing value with input value, assuming they are stringified JSON.
	   */
	  mergeItem: (key, value, callback) => {
	    return createPromise(() => mergeLocalStorageItem(key, value), callback);
	  },
	  /**
	   * Erases *all* AsyncStorage for the domain.
	   */
	  clear: callback => {
	    return createPromise(() => window.localStorage.clear(), callback);
	  },
	  /**
	   * Gets *all* keys known to the app, for all callers, libraries, etc.
	   */
	  getAllKeys: callback => {
	    return createPromise(() => {
	      const numberOfKeys = window.localStorage.length;
	      const keys = [];
	      for (let i = 0; i < numberOfKeys; i += 1) {
	        const key = window.localStorage.key(i) || "";
	        keys.push(key);
	      }
	      return keys;
	    }, callback);
	  },
	  /**
	   * (stub) Flushes any pending requests using a single batch call to get the data.
	   */
	  flushGetRequests: () => undefined,
	  /**
	   * multiGet resolves to an array of key-value pair arrays that matches the
	   * input format of multiSet.
	   *
	   *   multiGet(['k1', 'k2']) -> [['k1', 'val1'], ['k2', 'val2']]
	   */
	  multiGet: (keys, callback) => {
	    const promises = keys.map(key => AsyncStorage.getItem(key));
	    const processResult = result => result.map((value, i) => [keys[i], value]);
	    return createPromiseAll(promises, callback, processResult);
	  },
	  /**
	   * Takes an array of key-value array pairs.
	   *   multiSet([['k1', 'val1'], ['k2', 'val2']])
	   */
	  multiSet: (keyValuePairs, callback) => {
	    const promises = keyValuePairs.map(item => AsyncStorage.setItem(item[0], item[1]));
	    return createPromiseAll(promises, callback);
	  },
	  /**
	   * Delete all the keys in the `keys` array.
	   */
	  multiRemove: (keys, callback) => {
	    const promises = keys.map(key => AsyncStorage.removeItem(key));
	    return createPromiseAll(promises, callback);
	  },
	  /**
	   * Takes an array of key-value array pairs and merges them with existing
	   * values, assuming they are stringified JSON.
	   *
	   *   multiMerge([['k1', 'val1'], ['k2', 'val2']])
	   */
	  multiMerge: (keyValuePairs, callback) => {
	    const promises = keyValuePairs.map(item => AsyncStorage.mergeItem(item[0], item[1]));
	    return createPromiseAll(promises, callback);
	  }
	};

	class StorageService {
	  static async get(key) {
	    return typeof document !== 'undefined' ? localStorage.getItem(key) : await AsyncStorage.getItem(key);
	  }
	  static async set(key, value) {
	    if (typeof document !== 'undefined') {
	      return localStorage.setItem(key, value);
	    } else {
	      return await AsyncStorage.setItem(key, value);
	    }
	  }
	  static async remove(key) {
	    if (typeof document !== 'undefined') {
	      return localStorage.removeItem(key);
	    } else {
	      return await AsyncStorage.removeItem(key);
	    }
	  }
	}
	StorageService.Constants = {
	  SUBSCRIBED: 'subscribed',
	  COOKIE: 'cookie'
	};

	const CustomStorage = {
	  getItem: async (key, ..._args) => {
	    return await StorageService.get(key);
	  },
	  setItem: async (key, value, ..._args) => {
	    return await StorageService.set(key, value);
	  },
	  removeItem: async (key, ..._args) => {
	    return await StorageService.remove(key);
	  }
	};
	const persistConfig = {
	  key: 'root',
	  storage: CustomStorage
	};
	const reducer = combineReducers({
	  reducer: persistReducer(persistConfig, appReducer)
	});
	const store = configureStore({
	  reducer,
	  middleware: [thunk$1]
	});
	const useAppDispatch = store.dispatch;
	const useAppSelector = useSelector;
	const persistor = persistStore(store);

	const useClientContext = () => {
	  const context = react.useContext(ClientContext);
	  return context;
	};

	const setRecords = (key, payload) => ({
	  type: SET_RECORDS,
	  key,
	  payload
	});
	const addRecord = (key, payload) => ({
	  type: ADD_RECORD,
	  key,
	  payload
	});
	const addRecords = (key, payload) => ({
	  type: ADD_RECORDS,
	  key,
	  payload
	});
	const deleteRecord = (key, payload) => ({
	  type: DELETE_RECORD,
	  key,
	  payload
	});
	const deleteRecords = (key, payload) => ({
	  type: DELETE_RECORDS,
	  key,
	  payload
	});
	const updateRecord = (key, payload) => ({
	  type: UPDATE_RECORD,
	  key,
	  payload
	});

	var records = /*#__PURE__*/Object.freeze({
		__proto__: null,
		setRecords: setRecords,
		addRecord: addRecord,
		addRecords: addRecords,
		deleteRecord: deleteRecord,
		deleteRecords: deleteRecords,
		updateRecord: updateRecord
	});

	const setSubscriptions = payload => ({
	  type: SET_SUBSCRIPTIONS,
	  payload
	});
	const addSubscription = payload => ({
	  type: ADD_SUBSCRIPTION,
	  payload
	});
	const deleteSubscription = payload => ({
	  type: DELETE_SUBSCRIPTION,
	  payload
	});

	var subscriptions = /*#__PURE__*/Object.freeze({
		__proto__: null,
		setSubscriptions: setSubscriptions,
		addSubscription: addSubscription,
		deleteSubscription: deleteSubscription
	});

	const ContentContext = react.createContext({});
	const ContentProvider = props => {
	  const client = useClientContext();
	  const dispatch = useAppDispatch;
	  function tempErrorHandler(error) {
	    var _error$originalError;
	    // TODO: Handle error
	    // IDEA: Create new ErrorContext and Update it with error
	    if ((error == null || (_error$originalError = error.originalError) == null ? void 0 : _error$originalError.name) !== 'AbortError') {
	      console.log('Error in content provider', JSON.stringify(error));
	    }
	  }
	  const actions = {
	    subscribe: async collectionName => {
	      await (client == null ? void 0 : client.realtime.subscribe(collectionName, event => {
	        switch (event.action) {
	          case 'create':
	            dispatch(addRecord(collectionName, event.record));
	            break;
	          case 'update':
	            dispatch(updateRecord(collectionName, event.record));
	            break;
	          case 'delete':
	            dispatch(deleteRecord(collectionName, event.record));
	            break;
	        }
	      }).then(() => {
	        dispatch(addSubscription(collectionName));
	      }).catch(tempErrorHandler));
	    },
	    unsubscribe: async collectionName => {
	      if (collectionName) {
	        await (client == null ? void 0 : client.realtime.unsubscribe(collectionName).then(() => {
	          dispatch(deleteSubscription(collectionName));
	        }).catch(tempErrorHandler));
	      } else {
	        await (client == null ? void 0 : client.realtime.unsubscribe().then(() => {
	          dispatch(setSubscriptions([]));
	        }).catch(tempErrorHandler));
	      }
	    },
	    fetch: async (collectionName, opts = {}) => {
	      await (client == null ? void 0 : client.collection(collectionName).getFullList(200, opts).then(records$1 => {
	        dispatch(setRecords(collectionName, records$1));
	      }).catch(tempErrorHandler));
	    },
	    create: async (collectionName, record) => {
	      return await (client == null ? void 0 : client.collection(collectionName).create(record).catch(tempErrorHandler));
	    },
	    update: async (collectionName, recordId, record) => {
	      return await (client == null ? void 0 : client.collection(collectionName).update(recordId, record).catch(tempErrorHandler));
	    },
	    delete: async (collectionName, recordId) => {
	      return await (client == null ? void 0 : client.collection(collectionName).delete(recordId).catch(tempErrorHandler));
	    }
	  };
	  react.useEffect(() => {
	    if (props.collections) {
	      props.collections.forEach(async collectionName => {
	        await actions.fetch(collectionName);
	        await actions.subscribe(collectionName);
	      });
	    }
	    return () => {
	      (async () => {
	        await actions.unsubscribe();
	      })();
	    };
	  }, [props.collections]);
	  return /*#__PURE__*/react.createElement(ContentContext.Provider, {
	    value: actions
	  }, props.children);
	};

	const ClientContext = react.createContext(null);
	const ClientProvider = props => {
	  return /*#__PURE__*/react.createElement(ClientContext.Provider, {
	    value: props.client
	  }, props.children);
	};

	const AuthContext = react.createContext({});
	const AuthProvider = props => {
	  const client = useClientContext();
	  const [authProviders, setAuthProviders] = react.useState();
	  const actions = {
	    registerWithEmail: async (email, password) => {
	      await (client == null ? void 0 : client.collection('users').create({
	        email: email,
	        password: password,
	        passwordConfirm: password,
	        emailVisibility: true
	      }));
	    },
	    signInWithEmail: async (email, password) => {
	      await (client == null ? void 0 : client.collection('users').authWithPassword(email, password));
	    },
	    signInWithProvider: async provider => {
	      const authProvider = authProviders == null ? void 0 : authProviders.find(p => p.name === provider);
	      const redirectURL = typeof document !== 'undefined' ? props.webRedirectUrl : props.mobileRedirectUrl;
	      const url = (authProvider == null ? void 0 : authProvider.authUrl) + redirectURL;
	      await StorageService.set('provider', JSON.stringify(authProviders));
	      await props.openURL(url);
	    },
	    submitProviderResult: async url => {
	      const params = new URLSearchParams(url.split('?')[1]);
	      const code = params.get('code');
	      const state = params.get('state');
	      const providersString = await StorageService.get('provider');
	      if (providersString) {
	        const providers = JSON.parse(providersString);
	        const authProvider = providers == null ? void 0 : providers.find(p => p.state === state);
	        if (authProvider && code) {
	          await (client == null ? void 0 : client.collection('users').authWithOAuth2(authProvider.name, code, authProvider.codeVerifier, typeof document !== 'undefined' ? props.webRedirectUrl : props.mobileRedirectUrl));
	        }
	      }
	    },
	    signOut: () => {
	      client == null || client.authStore.clear();
	    },
	    sendPasswordResetEmail: async email => {
	      await (client == null ? void 0 : client.collection('users').requestPasswordReset(email));
	    },
	    sendEmailVerification: async email => {
	      await (client == null ? void 0 : client.collection('users').requestVerification(email));
	    },
	    updateProfile: async (id, record) => {
	      await (client == null ? void 0 : client.collection('profiles').update(id, record));
	    },
	    updateEmail: async email => {
	      await (client == null ? void 0 : client.collection('users').requestEmailChange(email));
	    },
	    deleteUser: async id => {
	      await (client == null ? void 0 : client.collection('users').delete(id));
	    }
	  };
	  react.useEffect(() => {
	    (async () => {
	      const methods = await (client == null ? void 0 : client.collection('users').listAuthMethods());
	      setAuthProviders(methods == null ? void 0 : methods.authProviders);
	    })();
	  }, [props.webRedirectUrl, props.mobileRedirectUrl]);
	  return /*#__PURE__*/react.createElement(AuthContext.Provider, {
	    value: actions
	  }, props.children);
	};

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var PersistGate =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inherits(PersistGate, _PureComponent);

	  function PersistGate() {
	    var _getPrototypeOf2;

	    var _this;

	    _classCallCheck(this, PersistGate);

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PersistGate)).call.apply(_getPrototypeOf2, [this].concat(args)));

	    _defineProperty(_assertThisInitialized(_this), "state", {
	      bootstrapped: false
	    });

	    _defineProperty(_assertThisInitialized(_this), "_unsubscribe", void 0);

	    _defineProperty(_assertThisInitialized(_this), "handlePersistorState", function () {
	      var persistor = _this.props.persistor;

	      var _persistor$getState = persistor.getState(),
	          bootstrapped = _persistor$getState.bootstrapped;

	      if (bootstrapped) {
	        if (_this.props.onBeforeLift) {
	          Promise.resolve(_this.props.onBeforeLift()).finally(function () {
	            return _this.setState({
	              bootstrapped: true
	            });
	          });
	        } else {
	          _this.setState({
	            bootstrapped: true
	          });
	        }

	        _this._unsubscribe && _this._unsubscribe();
	      }
	    });

	    return _this;
	  }

	  _createClass(PersistGate, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
	      this.handlePersistorState();
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      this._unsubscribe && this._unsubscribe();
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      {
	        if (typeof this.props.children === 'function' && this.props.loading) console.error('redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored.');
	      }

	      if (typeof this.props.children === 'function') {
	        return this.props.children(this.state.bootstrapped);
	      }

	      return this.state.bootstrapped ? this.props.children : this.props.loading;
	    }
	  }]);

	  return PersistGate;
	}(react.PureComponent);

	_defineProperty(PersistGate, "defaultProps", {
	  children: null,
	  loading: null
	});

	const PocketbaseContext = react.createContext(null);
	const Pocketbase = props => {
	  const [client, setClient] = react.useState(null);
	  const [initialCollections, setInitialCollections] = react.useState();
	  react.useEffect(() => {
	    const client = new PocketBase__default["default"](props.serverURL);
	    client.authStore.onChange(async () => {
	      await StorageService.set(StorageService.Constants.COOKIE, client.authStore.exportToCookie());
	      setInitialCollections([]);
	      setInitialCollections(props.initialCollections);
	    });
	    StorageService.get(StorageService.Constants.COOKIE).then(cookie => {
	      if (cookie) {
	        client.authStore.loadFromCookie(cookie);
	        setInitialCollections([]);
	        setInitialCollections(props.initialCollections);
	      }
	      setClient(client);
	    });
	  }, [props.serverURL]);
	  return client ? /*#__PURE__*/react.createElement(ClientProvider, {
	    client: client
	  }, /*#__PURE__*/react.createElement(Provider, {
	    store: store
	  }, /*#__PURE__*/react.createElement(PersistGate, {
	    persistor: persistor
	  }, /*#__PURE__*/react.createElement(AuthProvider, {
	    webRedirectUrl: props.webRedirectUrl,
	    mobileRedirectUrl: props.mobileRedirectUrl,
	    openURL: props.openURL
	  }, /*#__PURE__*/react.createElement(ContentProvider, {
	    collections: initialCollections
	  }, props.children))))) : null;
	};

	function useAppContent(collectionName, initialFetch = false) {
	  const records = useAppSelector(state => state.reducer.records[collectionName]);
	  const subscriptions = useAppSelector(state => state.reducer.subscriptions);
	  const context = react.useContext(ContentContext);
	  react.useEffect(() => {
	    if (initialFetch) {
	      (async () => {
	        await context.fetch(collectionName);
	      })();
	    }
	  }, [collectionName, initialFetch]);
	  const [isSubscribed, setIsSubscribed] = react.useState(false);
	  react.useEffect(() => {
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

	function useAuth() {
	  const client = useClientContext();
	  const actions = react.useContext(AuthContext);
	  const [isSignedIn, setIsSignedIn] = react.useState(null);
	  const [user, setUser] = react.useState(null);
	  function updateAuth() {
	    var _client$authStore$mod;
	    setIsSignedIn((client == null ? void 0 : client.authStore.token) !== '');
	    setUser((_client$authStore$mod = client == null ? void 0 : client.authStore.model) != null ? _client$authStore$mod : null);
	  }
	  react.useEffect(() => {
	    updateAuth();
	    client == null || client.authStore.onChange(() => {
	      updateAuth();
	    });
	  }, []);
	  return {
	    actions: actions,
	    isSignedIn: isSignedIn,
	    user: user
	  };
	}

	exports.ADD_RECORD = ADD_RECORD;
	exports.ADD_RECORDS = ADD_RECORDS;
	exports.ADD_SUBSCRIPTION = ADD_SUBSCRIPTION;
	exports.AuthContext = AuthContext;
	exports.AuthProvider = AuthProvider;
	exports.ClientContext = ClientContext;
	exports.ClientProvider = ClientProvider;
	exports.ContentContext = ContentContext;
	exports.ContentProvider = ContentProvider;
	exports.DELETE_RECORD = DELETE_RECORD;
	exports.DELETE_RECORDS = DELETE_RECORDS;
	exports.DELETE_SUBSCRIPTION = DELETE_SUBSCRIPTION;
	exports.Pocketbase = Pocketbase;
	exports.PocketbaseContext = PocketbaseContext;
	exports.SET_RECORDS = SET_RECORDS;
	exports.SET_SUBSCRIPTIONS = SET_SUBSCRIPTIONS;
	exports.UPDATE_RECORD = UPDATE_RECORD;
	exports.appReducer = appReducer;
	exports.persistConfig = persistConfig;
	exports.persistor = persistor;
	exports.recordsAction = records;
	exports.store = store;
	exports.subscriptionsAction = subscriptions;
	exports.useAppContent = useAppContent;
	exports.useAppDispatch = useAppDispatch;
	exports.useAppSelector = useAppSelector;
	exports.useAuth = useAuth;
	exports.useClientContext = useClientContext;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
