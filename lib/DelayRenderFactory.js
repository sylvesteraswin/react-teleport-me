Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line no-unused-vars

var DelayRenderFactory = function DelayRenderFactory() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { delay: 500 };
    return function (DelayComponent) {
        var _class, _temp2;

        // eslint-disable-line no-unused-vars
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