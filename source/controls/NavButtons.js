import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import {connect} from 'react-redux';

export class NavButtons extends React.Component {
    constructor() {
        super();

        this.state = {
            home: 'Home',
            makeImage: "Make Image",
            makeHtml: "Make HTML",
            showUsers: 'Show Users',
        };

        this.goHome = this.goHome.bind(this);
        this.makeHtml = this.makeHtml.bind(this);
        this.makeImage = this.makeImage.bind(this);
        this.showUsers = this.showUsers.bind(this);
    }

    goHome() {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "app",
            userIndex: null
        });
    }

    makeHtml() {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_make_html",
            userIndex: null
        });
    }

    makeImage() {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_make_image",
            userIndex: null
        });
    }

    showUsers() {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_users",
            userIndex: null
        });
    }

    createGoHomeButton() {
        if(this.props.component !== 'app') {
            return (<FlatButton
                    id="goHome"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.goHome}
                >
                    {this.state.home}
                </FlatButton>
            );
        }
    }

    createMakeHtmlButton() {
        if(this.props.component !== 'show_make_html') {
            return (<FlatButton
                        id="makeHtml"
                        style={buttonStyle}
                        primary={true}
                        onClick={this.makeHtml}
                    >
                        {this.state.makeHtml}
                    </FlatButton>
            );
        }
    }

    createMakeImageButton() {
        if(this.props.component !== 'show_make_image') {
            return (<FlatButton
                    id="makeImage"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.makeImage}
                >
                    {this.state.makeImage}
                </FlatButton>
            );
        }
    }

    createShowUsersButton() {
        if(this.props.component !== 'show_users') {
            return (<FlatButton
                    id="showUsers"
                    style={buttonStyle}
                    primary={true}
                    onClick={this.showUsers}
                >
                    {this.state.showUsers}
                </FlatButton>
            );
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <hr />
                    {this.createGoHomeButton()}
                    {this.createMakeHtmlButton()}
                    {this.createMakeImageButton()}
                    {this.createShowUsersButton()}
                </div>
            </MuiThemeProvider>
        );
    }
}

var buttonStyle = {
    margin: "15px"
};

const mapStateToProps = (state) => {
    return {
        component: state.component
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavButtons);
