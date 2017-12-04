import firebase from 'firebase';

/*
 * action types
 */

export const GETTING_CONFIG = 'GETTING_CONFIG';
export const HAVE_CONFIG = 'HAVE_CONFIG';
export const GETTING_USERS = 'GETTING_USERS';
export const HAVE_USERS = 'HAVE_USERS';


/*
 * action creators
 */

export function gettingConfig() {
    return { type: GETTING_CONFIG }
}

export function haveConfig(config) {
    return { type: HAVE_CONFIG, config }
}

export function fetchConfig(dispatch) {
    dispatch(gettingConfig('config'));
    fetch('/makers/config')
        .then(function (response) {
            return response.json();
        }).then(function (json) {
        console.log('parsed json', json);
        dispatch(haveConfig(json));
    }).catch(function (ex) {
        console.log('parsing failed', ex);
    });
}

export function gettingUsers() {
    return { type: GETTING_USERS }
}

export function haveUsers(userProps, userNames) {
    return { type: HAVE_USERS, userProps, userNames }
}

export function fetchUsers(dispatch) {
    dispatch(gettingUsers());
    return firebase.database().ref('/config/users').once('value').then(function(snapshot) {
        const userProps = snapshot.val();
        const userNames = Object.keys(userProps);
        console.log("actionFireBase fetchUsers=>success");
        for (let i = 0; i < userNames.length; i++) {
            console.log("user " + userNames[i]);
        }
        dispatch(haveUsers(userProps, userNames));
    });
}