import React from 'react';
import {
    // TODO
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// mui
import {CircularProgress} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
injectTapEventPlugin()

import '../styles/main.sass';

import Home from './Home.jsx';
import About from './About.jsx';
import DatePicker from './DatePicker';

const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <Home/>
    },
    {
        path: '/about',
        sidebar: () => <div>about!</div>,
        main: () => <About/>
    },
    {
        path: '/date_picker',
        sidebar: () => <div>DatePicker!</div>,
        main: () => <DatePicker/>
    }
];

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router>
                    <div style={{display: 'flex'}}>
                        <div id="side-bar">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/date_picker">DatePicker</Link></li>
                            </ul>

                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.sidebar}
                                />
                            ))}
                        </div>

                        <div id="content-area">
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}
