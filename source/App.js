import React, {Component} from 'react';
import {connect} from 'react-redux';

import ConfigLogin from './ConfigLoginPage';
import ShowUsers from './ShowUsersPage';
import ShowUser from './ShowUserPage';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
//import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
//import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'

const paperStyle = {
    margin: "7%",
    width: "85%",
    textAlign: 'center',
    display: 'inline-block',
};

const paperStyle1 = {
    width: "85%",
    margin: "7%",
    textAlign: 'center',
    display: 'inline-block',
};

class App extends Component {
    constructor(props) {
        console.log("App constructor");

        super(props);

        this.state = {isOpen: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleShowUsers = this.handleShowUsers.bind(this);
    }

    handleToggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleShowLogin() {
        this.setState({isOpen: false});
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "app",
            userIndex: null
        });
    }

    handleShowUsers() {
        this.setState({isOpen: false});
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_users",
            userIndex: null
        });
    }

    render() {
        let content = null;
        switch (this.props.component) {
            case 'app':
                content = <ConfigLogin/>;
                break;

            case 'show_users':
                content = <ShowUsers/>;
                break;

            case 'show_user':
                content = <ShowUser/>;
                break;

            default:
                content = <ConfigLogin/>

        }

        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Week11-FireBaseReactServer"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />

                <Paper style={paperStyle1} zDepth={5}>

                    <Toolbar style={{"justifyContent": "center"}}>
                        <ToolbarTitle text="Material UI"/>
                    </Toolbar>
                    {content}
                </Paper>
                < Drawer
                    docked={false}
                    width={200}
                    open={this.state.isOpen}
                    onRequestChange={(isOpen) => this.setState({isOpen})}>

                    <AppBar title="AppBar"/>
                    <MenuItem onClick={this.handleShowLogin}>Show Login</MenuItem>
                    <MenuItem onClick={this.handleShowUsers}>Show Users</MenuItem>

                </Drawer>


            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        signInLabel: state.signInLabel,
        configured: state.configured,
        isOpen: state.isOpen,
        component: state.component
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;