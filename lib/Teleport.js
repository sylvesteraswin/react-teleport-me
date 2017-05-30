Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DelayRenderFactory = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; //eslint-disable-line no-unused-vars


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DelayRenderFactory2 = require('./DelayRenderFactory');

var _DelayRenderFactory3 = _interopRequireDefault(_DelayRenderFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getContainer = function getContainer(container) {
    var _container = typeof container === 'function' ? container() : container;
    return _reactDom2.default.findDOMNode(_container) || document.body;
};

function getScrollbarWidth() {
    var outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    var inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

var BASE_CLASS = 'zvui';

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
            _this._scrollbarWidth = getScrollbarWidth();
            if (_this.props.lockBody) _this._lockBody();
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
            if (_this.props.lockBody) _this._unlockBody();
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
                _this._overlayTarget.className = (0, _classnames2.default)(BASE_CLASS, _this.props.className);
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

    _createClass(Teleport, [{
        key: '_lockBody',
        value: function _lockBody() {
            this._scrollPosition = window.scrollY;
            window.document.body.style.position = 'fixed';
            window.document.body.style.width = '100vw';
            window.document.body.style['margin-top'] = '-' + this._scrollPosition + 'px';
            window.document.body.classList.add(BASE_CLASS + '_teleport-lock');
            window.document.body.style['padding-right'] = this._scrollbarWidth + 'px';
        }
    }, {
        key: '_unlockBody',
        value: function _unlockBody() {
            window.document.body.style.position = 'initial';
            window.document.body.style.width = 'initial';
            window.document.body.style['margin-top'] = 'initial';
            window.scrollTo(0, this._scrollPosition);
            window.document.body.classList.remove(BASE_CLASS + '_teleport-lock');
            window.document.body.style['padding-right'] = 'initial';
        }
    }]);

    return Teleport;
}(_react.Component), _class.propTypes = {
    children: _react.PropTypes.any,
    container: _react.PropTypes.any,
    lockBody: _react.PropTypes.bool,
    className: _react.PropTypes.string
}, _class.defaultProps = {
    lockBody: false,
    className: ''
}, _temp2);
exports.default = Teleport;
exports.DelayRenderFactory = _DelayRenderFactory3.default;