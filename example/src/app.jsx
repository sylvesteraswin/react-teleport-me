import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { DelayRenderFactory } from '../../lib/Teleport';

class App extends Component {
    handleMouseMove = () => {
        console.log(`mousemove ${this.iamhere} Hello`);
    };

    iamhere = 'Something is here';

    render = () => {
        const {
            active,
        } = this.props;

        return active ? (<section
            className="app">
            Hello There
        </section>) : null;
    }
};

const AppDelay = DelayRenderFactory()(App);

class MyApp extends Component {
    state = {
        active: false
    };
    _toggleState = () => {
        this.setState({
            active: !this.state.active,
        });
    };

    render = () => {
        return (
            <section
                className="app">
                <button
                    className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black"
                    onClick={this._toggleState}
                    >
                    Show {this.props.title}
                </button>

                <AppDelay active={this.state.active} />
            </section>
        );
    }
}

ReactDOM.render(<MyApp title={"Hello"} />, document.getElementById('container'));
