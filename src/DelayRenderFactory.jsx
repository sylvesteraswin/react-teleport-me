import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars

const DelayRenderFactory = (options = { delay: 500 }) => (DelayComponent) => { // eslint-disable-line no-unused-vars
    return class DelayComponentRenderer extends Component {
        static propTypes = {
            active: PropTypes.bool.isRequired,
            children: PropTypes.any,
            delay: PropTypes.number,
        };

        static defaultProps = {
            delay: options.delay,
        };

        state = {
            active: this.props.active,
            rendered: this.props.active,
        };

        componentWillReceiveProps = (nextProps) => {
            if (nextProps.active && !this.props.active) { this.renderAndActivate(); }
            if (!nextProps.active && this.props.active) { this.deactivateAndUnrender(); }
        };

        renderAndActivate = () => {
            if (this.unrenderTimeout) { clearTimeout(this.unrenderTimeout); }
            this.setState({
                rendered: true,
                active: false,
            }, () => {
                setTimeout(() => this.setState({
                    active: true,
                }), this.props.delay);
            });
        };

        deactivateAndUnrender = () => {
            this.setState({
                rendered: true,
                active:false,
            }, () => {
                this.unrenderTimeout = setTimeout(() => {
                    this.setState({
                        rendered: false,
                    });
                    this.unrenderTimeout = null;
                }, this.props.delay);
            });
        };

        render = () => {
            const {
                delay, // eslint-disable-line no-unused-vars
                ...others
            } = this.props;
            const {
                active,
                rendered,
            } = this.state;
            return rendered ? <DelayComponent {...others} active={active} /> : null;
        };
    };
};

export default DelayRenderFactory;
