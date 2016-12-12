import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Teleport, { DelayRenderFactory } from '../../lib/Teleport';

class App extends Component {
    handleMouseMove = () => {
        console.log(`mousemove ${this.iamhere} Hello`);
    };

    iamhere = 'Something is here';

    render = () => {
        const {
            active,
        } = this.props;

        return active ? (
            <Teleport>
                <section
                    className="app">
                    Hello There
                </section>
            </Teleport>
            ) : null;
    }
};

const AppDelay = DelayRenderFactory()(App);

class MyApp extends Component {
    state = {
        activeWith: false,
        activeWithout: false,
    };

    _toggleStateWith = () => {
        this.setState({
            activeWith: !this.state.activeWith,
        });
    };

    _toggleStateWithout = () => {
        this.setState({
            activeWithout: !this.state.activeWithout,
        });
    };

    render = () => {
        return (
            <section
                className="app">
                <button
                    className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black"
                    onClick={this._toggleStateWith}
                    >
                    Show {this.props.title}, With Delay
                </button>

                <button
                    className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-black"
                    onClick={this._toggleStateWithout}
                    >
                    Show {this.props.title}, Without Delay
                </button>

                <AppDelay active={this.state.activeWith} />
                <App active={this.state.activeWithout} />
            </section>
        );
    }
}

ReactDOM.render(<MyApp title={"Hello"} />, document.getElementById('container'));
