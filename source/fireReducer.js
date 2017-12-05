import { GETTING_USERS, HAVE_USERS, GETTING_INSERT_CONFIG, HAVE_INSERT_CONFIG } from './actionFireBaseFile';

const initialState = {
    loggedIn: true,
    signInLabel: 'Sign Out',
    component: 'app',
    isOpen: false,
    configured: false,
    userProps: {},
    userNames: [],
    userIndex: null
};

const fireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_COMPONENT':
            return {
                ...state,
                configured: true,
                component: action.component,
                userIndex: action.userIndex
            };
        case 'GET_LOGIN_STATUS':
            return {...state};
        case 'LOGIN_STATUS':
            return {
                ...state,
                loggedIn: action.loggedIn,
                signInLabel: action.loggedIn ? 'Sign Out' : 'Sign In'
            };
        case GETTING_USERS:
            return {
                ...state
            };
        case HAVE_USERS:
            return {
                ...state,
                userProps: action.userProps,
                userNames: action.userNames
            };
        case GETTING_INSERT_CONFIG:
            return {
                ...state
            };

        case HAVE_INSERT_CONFIG:
            return {
                ...state,
                config: action
            };
        default:
            return state;
    }
};

export default fireReducer;