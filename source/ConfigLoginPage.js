import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import FireBaseLogin from "./FireBaseLogin";
import firebase from 'firebase';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class ConfigLoginPage extends Component {

    setConfig() {
        // Change the value of the base-dir for the user.
        // You write the code.
        firebase.database().ref('/config/users/calvert/base-dir').set("ET/go/home");
    }

    insertConfig() {
        fetch('/getConfig')
            .then(function (response) {
                return response.json();
            })
            .then(function (configuration) {
                console.log(configuration);
                // convert old config to new format for the database
                // note, I didn't want to change the ElvenConfig file directly
                // as this would affect other assignements.
                if(configuration.calvert && !configuration.users) {
                    configuration.users = {};
                    configuration.users.calvert = configuration.calvert;
                    delete configuration.calvert;
                }
                firebase.database().ref('/config/').set(configuration);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    render() {
        return (

            <div>
                <p>React Stuff</p>

                <RaisedButton
                    label='Insert Config'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.insertConfig}
                />

                <RaisedButton
                    label='Update user'
                    style={buttonStyle}
                    primary={true}
                    onClick={this.setConfig}
                />

                <FireBaseLogin/>
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

ConfigLoginPage = connect(mapStateToProps)(ConfigLoginPage);

export default ConfigLoginPage;