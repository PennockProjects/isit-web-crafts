import firebase from 'firebase';

/*
 * action types
 */

export const GETTING_CONFIG = 'GETTING_CONFIG';
export const HAVE_CONFIG = 'HAVE_CONFIG';
export const GETTING_USERS = 'GETTING_USERS';
export const HAVE_USERS = 'HAVE_USERS';
export const GETTING_INSERT_CONFIG = 'GETTING_INSERT_CONFIG';
export const HAVE_INSERT_CONFIG = 'HAVE_INSERT_CONFIG';
export const FIREBASE_INSERT_CONFIG = 'FIREBASE_INSERT_CONFIG';


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

export function gettingInsertConfig() {
    return { type: GETTING_INSERT_CONFIG }
}

export function haveInsertConfig(config) {
    return { type: HAVE_INSERT_CONFIG, config }
}

export function insertConfig(dispatch) {
    dispatch(gettingInsertConfig());
    fetch('/makers/getConfig')
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
            dispatch(haveInsertConfig(configuration));
            firebase.database().ref('/config/').set(configuration);
        })
        .catch(function (ex) {
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

export function fetchUserDirs(dispatch, user, cbSuccess) {
    //dispatch(gettingUsers());
    return firebase.database().ref('/config/users/' + user).once('value').then(function(snapshot) {

        const userDirs = snapshot.val();

        var configSummary = {
            'baseDir': userDirs["base-dir"],
            'mostRecentDate': userDirs["most-recent-date"],
            'siteDirs': userDirs["site-dirs"],
            'destinationDirs': userDirs["destination-dirs"]
        };

        console.log("actionFireBase fetchUserDirs=>success");
        cbSuccess(configSummary);
    });
}


