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

const TrainQuote = ({ active, containerWrapper }) => active ? (
    <Teleport
        container={containerWrapper()}>
        <div
            className="pa4">
            <blockquote
                className="athelas ml0 mt0 pl4 black-90 bl bw2 b--blue">
                <p
                    className="f5 f4-m f3-l lh-copy measure mt0">
                    The holes in your life are permanent.
                    You have to grow around them, like tree roots
                    around concrete; you mould yourself
                    through the gaps.
                </p>
                <cite
                    className="f6 ttu tracked fs-normal">
                    ―Paula Hawkins
                </cite>
            </blockquote>
        </div>
    </Teleport>
) : null;

const Footer = ({ active }) => active ? (
    <Teleport>
        <footer
            className="pv4 ph3 ph5-ns tc">
            <a
                className="link dim gray dib h2 w2 br-100 mr3 "
                href="https://twitter.com/sylvesteraswin"
                title="">
                <svg
                    dataIcon="twitter"
                    viewBox="0 0 32 32"
                    style={{
                        fill: 'currentcolor'
                    }}>
                <title>twitter icon</title>
                <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
                </svg>
            </a>
            <a
                className="link dim gray dib br-100 h2 w2 mr3 "
                href="https://github.com/sylvesteraswin"
                title="">
                <svg
                    dataIcon="github"
                    viewBox="0 0 32 32"
                    style={{
                        fill: 'currentcolor'
                    }}>
                    <title>github icon</title>
                    <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
                </svg>
            </a>
        </footer>
    </Teleport>
) : null;

class MyApp extends Component {
    state = {
        activeWith: false,
        activeWithout: false,
        footerActive: false,
        trainQuoteActive: false,
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

    _toggleStateFooter = () => {
        this.setState({
            footerActive: true,
        });
    };

    _toggleStateQuote = () => {
        this.setState({
            trainQuoteActive: true,
        });
    }

    getRefContainer = () => {
        return this.refs.wrapperContainer;
    };

    render = () => {
        return (
            <section
                className="app">
                <article
                    className="pa3 pa5-ns pb0 pb0-ns">
                    <h1
                        className="f3 f2-m f1-l">
                        Title
                    </h1>
                    <p
                        className="measure lh-copy">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <p
                        className="measure lh-copy">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <div
                        ref={'wrapperContainer'}
                        className="pa2 georgia mw9-l center">
                    </div>

                    <p
                        className="tc">
                        {
                            !this.state.footerActive && (
                                <a
                                className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray mv3 pointer mr3"
                                onClick={this._toggleStateFooter}>
                                    Add Footer
                                </a>
                            )
                        }
                        {
                            !this.state.trainQuoteActive && (
                                <a
                                className="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray mv3 pointer mr3"
                                onClick={this._toggleStateQuote}>
                                    Add Quote
                                </a>
                            )
                        }
                    </p>
                </article>

                <Footer active={this.state.footerActive} />
                <TrainQuote
                    active={this.state.trainQuoteActive}
                    containerWrapper={this.getRefContainer} />
            </section>
        );
    }
}

ReactDOM.render(<MyApp title={"Hello"} />, document.getElementById('container'));
