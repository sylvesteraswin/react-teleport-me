import React, {Component, PropTypes} from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import cn from 'classnames';

const getContainer = (container) => {
    const _container = typeof container === 'function' ? container() : container;
    return ReactDOM.findDOMNode(_container) || document.body;
};

const BASE_CLASS = 'zvui';

class Teleport extends Component {
    static propTypes = {
        children: PropTypes.any,
        container: PropTypes.any,
        lockBody: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        lockBody: false,
        className: '',
    };

    componentDidMount = () => {
        if (this.props.lockBody) this._lockBody();
        this._renderOverlay();
    };

    componentWillReceiveProps = (nextProps) => {
        if (this._overlayTarget && nextProps.container !== this.props.container) {
            this._teleportContainerNode.removeChild(this._overlayTarget);
            this._teleportContainerNode = getContainer(nextProps.container);
            this._teleportContainerNode.appendChild(this._overlayTarget);
        }
    };

    componentDidUpdate = () => {
        this._renderOverlay();
    };

    componentWillUnmount = () => {
        this._unrenderOverlay();
        this._unmountOverlayTarget();
        if (this.props.lockBody) this._unlockBody();
    };

    _lockBody() {
        window.document.body.classList.add(`${BASE_CLASS}_teleport-lock`)
    }

    _unlockBody() {
        window.document.body.classList.remove(`${BASE_CLASS}_teleport-lock`)
    }

    _renderOverlay = () => {
        const overlay = !this.props.children ? null : React.Children.only(this.props.children);

        if (overlay !== null) {
            this._mountOverlayTarget();
            this._overlayInstance = ReactDOM.unstable_renderSubtreeIntoContainer(
                this, overlay, this._overlayTarget
            );
        } else {
            this._unrenderOverlay();
            this._unmountOverlayTarget();
        }
    };

    _mountOverlayTarget = () => {
        if (!this._overlayTarget) {
            this._overlayTarget = document.createElement('div');
            this._overlayTarget.className = cn(BASE_CLASS, this.props.className);
            this._teleportContainerNode = getContainer(this.props.container);
            this._teleportContainerNode.appendChild(this._overlayTarget);
        }
    };

    _unrenderOverlay = () => {
        if (this._overlayTarget) {
            ReactDOM.unmountComponentAtNode(this._overlayTarget);
            this._overlayInstance = null;
        }
    };

    _unmountOverlayTarget = () => {
        if (this._overlayTarget) {
            this._teleportContainerNode.removeChild(this._overlayTarget);
            this._overlayTarget = null;
        }
        this._teleportContainerNode = null;
    };

    getMountNode = () => {
        return this._overlayTarget;
    };

    getOverlayDOMNode = () => {
        if (!this.isMounted()) {
            throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');
        }

        if (this._overlayInstance) {
            if (this._overlayTarget.getWrappedDOMNode) {
                return this._overlayInstance.getWrappedDOMNode();
            } else {
                return ReactDOM.findDOMNode(this._overlayInstance);
            }
        }
        return null;
    };

    render = () => {
        return null;
    }
}

export default Teleport;
export DelayRenderFactory from './DelayRenderFactory';
