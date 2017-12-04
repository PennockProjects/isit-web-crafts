import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import * as firebase from 'firebase';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

const defaultState = {
    googleApiToken: 'Unknown',
    elfUser: "Unknown",
    signInStatus: 'Not Logged In',
    email: 'Unknown',
    emailVerified: false,
    isAnonymous: false,
    providerData: 'Unknown',
    photoURL: "favicon.png",
    uid: 0
};

class FireBaseLogin extends Component {

    constructor(props) {
        super(props);
        if (!this.props.configured) {
            this.elfConfigure();
        } else {
            this.elfSignIn();
        }

        this.state = defaultState;
        this.elfUser = {};
    }

    // Handle Login/Logout button.
    toggleSignIn() {
        if (!firebase.auth().currentUser) {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login');
            firebase.auth().signInWithRedirect(provider);
        } else {
            firebase.auth().signOut();
        }
        document.getElementById('elf-sign-in').disabled = true;
    }

    elfConfigure = () => {
        const config = {
            apiKey: "AIzaSyBoVn6Jt0m9ocp_s2wO6cxtl6dc_6paDRw",
            authDomain: "fir-express-isit320-pennock.firebaseapp.com",
            databaseURL: "https://fir-express-isit320-pennock.firebaseio.com",
            projectId: "fir-express-isit320-pennock",
            storageBucket: "fir-express-isit320-pennock.appspot.com",
            messagingSenderId: "976958039102"
        };
        firebase.initializeApp(config);
        this.elfSignIn();
    };

    elfSignIn = (showLoginStatus) => {
        const that = this;
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                that.setState({googleApiToken: result.credential.accessToken})
            } else {
                that.setState({googleApiToken: 'Unknown'})
            }
            that.elfUser = result.user;
        }).catch(function (error) {
            // const fireBaseAuthCredential = error.credential;
            if (error.code === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you use multiple auth providers handle linking accounts here.
            } else {
                console.error(error);
            }
        });

        firebase.auth().onAuthStateChanged(function (user) {
            that.props.dispatch({type: 'LOGIN_STATUS', loggedIn: user});

            if (user) {
                // User is signed in.
                that.elfUser = user;
                that.setState({
                    elfUser: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    signInStatus: 'Logged In',
                    isAnonymous: user.isAnonymous,
                    providerData: user.providerData,
                    photoURL: user.photoURL,
                    uid: user.uid
                })
            } else {
                that.setState(defaultState)
            }

            document.getElementById('elf-sign-in').disabled = false;
        });

    };

    render() {
        return (
            <div>
                <p>FireBaseLogin</p>
                <RaisedButton
                    id="elf-sign-in"
                    label={this.props.signInLabel}
                    style={buttonStyle}
                    primary={true}
                    onClick={this.toggleSignIn}
                />

                <p><span>{this.state.signInStatus}</span></p>
                <pre><code>{this.state.elfUser}</code></pre>
                <pre><code>{this.state.email}</code></pre>

                <img id="elfPhoto" src={this.state.photoURL} alt='' width="10%" min-width="120px"/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        signInLabel: state.signInLabel,
        configured: state.configured
    }
};

FireBaseLogin = connect(mapStateToProps)(FireBaseLogin);

export default FireBaseLogin;