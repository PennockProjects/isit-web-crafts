import React, {Component} from 'react';
import {connect} from 'react-redux';

import ConfigLogin from './containers/ConfigLoginPage';
import ShowUsers from './containers/ShowUsersPage';
import ShowUser from './containers/ShowUserPage';
import MakeHtml from './MakeHtml';
import MakeImage from './MakeImage';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';

const paperStyle = {
    width: "85%",
    margin: "20px 7% 0 7%",
    paddingBottom: "20px",
    textAlign: 'center',
    display: 'inline-block',
};

export class App extends Component {
    constructor(props) {
        console.log("App constructor");

        super(props);

        this.state = {isOpen: false};
        this.handleToggle = this.handleToggle.bind(this);
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleShowUsers = this.handleShowUsers.bind(this);
        this.handleShowMakeHtml = this.handleShowMakeHtml.bind(this);
        this.handleShowMakeImage = this.handleShowMakeImage.bind(this);
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

    handleShowMakeHtml() {
        this.setState({isOpen: false});
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_make_html",
            userIndex: null
        });
    }

    handleShowMakeImage() {
        this.setState({isOpen: false});
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_make_image",
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

            case 'show_make_html':
                content = <MakeHtml/>;
                break;

            case 'show_make_image':
                content = <MakeImage/>;
                break;

            default:
                content = <ConfigLogin/>

        }

        return (
            <div>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Isit 320 Final - Pennock"
                    onLeftIconButtonTouchTap={this.handleToggle}
                />

                <Paper style={paperStyle} zDepth={5}>

                    <Toolbar style={{"justifyContent": "center"}}>
                        <ToolbarTitle text={this.props.component}/>
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
                    <MenuItem onClick={this.handleShowMakeHtml}>Make HTML</MenuItem>
                    <MenuItem onClick={this.handleShowMakeImage}>Make Image</MenuItem>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);