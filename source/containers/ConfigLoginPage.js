import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import FireBaseLogin from "../FireBaseLogin";
import firebase from 'firebase';
import {insertConfig} from "../actionFireBaseFile";
import NavButtons from '../controls/NavButtons';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class ConfigLoginPage extends Component {

    constructor(props) {
        console.log("ConfigLoginPage constructor");

        super(props);

        this.clickedInsertConfig = this.clickedInsertConfig.bind(this);
    }

    setUsersToBCUser() {
        // Change the value of the base-dir for the user.
        // You write the code.
        firebase.database().ref('/config/users/calvert/base-dir').set("/home/bcuser");
        firebase.database().ref('/config/users/pennock/base-dir').set("/home/bcuser");
    }

    setUsersToUbuntu() {
        // Change the value of the base-dir for the user.
        // You write the code.
        firebase.database().ref('/config/users/calvert/base-dir').set("/home/ubuntu");
        firebase.database().ref('/config/users/pennock/base-dir').set("/home/ubuntu");
    }

    clickedInsertConfig(index) {
        console.log('ConfigLoginPage click insert config');
        insertConfig(this.props.dispatch);
    }

    render() {
        return (

            <div>
                <h1>FireBase Config and Login</h1>

                <RaisedButton
                    label='Insert Config'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.clickedInsertConfig}
                />

                <RaisedButton
                    label='Update users to /ubuntu'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.setUsersToUbuntu}
                />

                <RaisedButton
                    label='Update users to /bcuser'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.setUsersToBCUser}
                />

                <FireBaseLogin/>
                <NavButtons/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        signInLabel: state.signInLabel,
        configured: state.configured,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

ConfigLoginPage = connect(mapStateToProps, mapDispatchToProps)(ConfigLoginPage);

export default ConfigLoginPage;