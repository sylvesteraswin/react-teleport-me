(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["Teleport"] = factory(require("react"), require("react-dom"));
	else
		root["Teleport"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DelayRenderFactory = undefined;

	var _class, _temp2; //eslint-disable-line no-unused-vars


	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsShallowCompare = __webpack_require__(4);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _DelayRenderFactory2 = __webpack_require__(7);

	var _DelayRenderFactory3 = _interopRequireDefault(_DelayRenderFactory2);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var getContainer = function getContainer(container) {
	    var _container = typeof container === 'function' ? container() : container;
	    return _reactDom2.default.findDOMNode(_container) || document.body;
	};

	var Teleport = (_temp2 = _class = function (_Component) {
	    _inherits(Teleport, _Component);

	    function Teleport() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Teleport);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Teleport.__proto__ || Object.getPrototypeOf(Teleport)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
	            _this._renderOverlay();
	        }, _this.componentWillReceiveProps = function (nextProps) {
	            if (_this._overlayTarget && nextProps.container !== _this.props.container) {
	                _this._teleportContainerNode.removeChild(_this._overlayTarget);
	                _this._teleportContainerNode = getContainer(nextProps.container);
	                _this._teleportContainerNode.appendChild(_this._overlayTarget);
	            }
	        }, _this.componentDidUpdate = function () {
	            _this._renderOverlay();
	        }, _this.componentWillUnmount = function () {
	            _this._unrenderOverlay();
	            _this._unmountOverlayTarget();
	        }, _this._renderOverlay = function () {
	            var overlay = !_this.props.children ? null : _react2.default.Children.only(_this.props.children);

	            if (overlay !== null) {
	                _this._mountOverlayTarget();
	                _this._overlayInstance = _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, overlay, _this._overlayTarget);
	            } else {
	                _this._unrenderOverlay();
	                _this._unmountOverlayTarget();
	            }
	        }, _this._mountOverlayTarget = function () {
	            if (!_this._overlayTarget) {
	                _this._overlayTarget = document.createElement('div');
	                _this._teleportContainerNode = getContainer(_this.props.container);
	                _this._teleportContainerNode.appendChild(_this._overlayTarget);
	            }
	        }, _this._unrenderOverlay = function () {
	            if (_this._overlayTarget) {
	                _reactDom2.default.unmountComponentAtNode(_this._overlayTarget);
	                _this._overlayInstance = null;
	            }
	        }, _this._unmountOverlayTarget = function () {
	            if (_this._overlayTarget) {
	                _this._teleportContainerNode.removeChild(_this._overlayTarget);
	                _this._overlayTarget = null;
	            }
	            _this._teleportContainerNode = null;
	        }, _this.getMountNode = function () {
	            return _this._overlayTarget;
	        }, _this.getOverlayDOMNode = function () {
	            if (!_this.isMounted()) {
	                throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
	            }

	            if (_this._overlayInstance) {
	                if (_this._overlayTarget.getWrappedDOMNode) {
	                    return _this._overlayInstance.getWrappedDOMNode();
	                } else {
	                    return _reactDom2.default.findDOMNode(_this._overlayInstance);
	                }
	            }
	            return null;
	        }, _this.render = function () {
	            return null;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    return Teleport;
	}(_react.Component), _class.propTypes = {
	    children: _react.PropTypes.any,
	    container: _react.PropTypes.any,
	    lockBody: _react.PropTypes.bool
	}, _class.defaultProps = {
	    lockBody: true
	}, _temp2);
	exports.default = Teleport;
	exports.DelayRenderFactory = _DelayRenderFactory3.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowEqual = __webpack_require__(6);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	//eslint-disable-line no-unused-vars

	var DelayRenderFactory = function DelayRenderFactory() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
	    return function (DelayComponent) {
	        var _class, _temp2;

	        return _temp2 = _class = function (_Component) {
	            _inherits(DelayComponentRenderer, _Component);

	            function DelayComponentRenderer() {
	                var _ref;

	                var _temp, _this, _ret;

	                _classCallCheck(this, DelayComponentRenderer);

	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DelayComponentRenderer.__proto__ || Object.getPrototypeOf(DelayComponentRenderer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	                    active: _this.props.active,
	                    rendered: _this.props.active
	                }, _this.componentWillReceiveProps = function (nextProps) {
	                    if (nextProps.active && !_this.props.active) {
	                        _this.renderAndActivate();
	                    }
	                    if (!nextProps.active && _this.props.active) {
	                        _this.deactivateAndUnrender();
	                    }
	                }, _this.renderAndActivate = function () {
	                    if (_this.unrenderTimeout) {
	                        clearTimeout(_this.unrenderTimeout);
	                    }
	                    _this.setState({
	                        rendered: true,
	                        active: false
	                    }, function () {
	                        setTimeout(function () {
	                            return _this.setState({
	                                active: true
	                            });
	                        }, _this.props.delay);
	                    });
	                }, _this.deactivateAndUnrender = function () {
	                    _this.setState({
	                        rendered: true,
	                        active: false
	                    }, function () {
	                        _this.unrenderTimeout = setTimeout(function () {
	                            _this.setState({
	                                rendered: false
	                            });
	                            _this.unrenderTimeout = null;
	                        }, _this.props.delay);
	                    });
	                }, _this.render = function () {
	                    var _this$props = _this.props,
	                        delay = _this$props.delay,
	                        others = _objectWithoutProperties(_this$props, ['delay']);

	                    var _this$state = _this.state,
	                        active = _this$state.active,
	                        rendered = _this$state.rendered;

	                    return rendered ? _react2.default.createElement(DelayComponent, _extends({}, others, { active: active })) : null;
	                }, _temp), _possibleConstructorReturn(_this, _ret);
	            }

	            return DelayComponentRenderer;
	        }(_react.Component), _class.propTypes = {
	            active: _react.PropTypes.bool.isRequired,
	            children: _react.PropTypes.any,
	            delay: _react.PropTypes.number
	        }, _class.defaultProps = {
	            delay: options.delay
	        }, _temp2;
	    };
	};

	exports.default = DelayRenderFactory;

/***/ }
/******/ ])
});
;