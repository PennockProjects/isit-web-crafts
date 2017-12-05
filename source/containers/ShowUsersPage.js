import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {fetchUsers} from '../actionFireBaseFile';

const buttonStyle = {
    margin: '10px 10px 10px 0',
    dislay: "inline-block"
};

class ShowUsersPage extends Component {

    constructor(props) {
        console.log("ShowUsersPage constructor");

        super(props);

        this.clickedUserButton = this.clickedUserButton.bind(this);
    }

    clickedUserButton(index) {
        console.log('click user '+ index);
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "show_user",
            userIndex: index
        });
    }

    createUserButton(userName, index, userNames) {
        return <RaisedButton
            key={"userNameIndex"+index}
            label={userName}
            style={buttonStyle}
            primary={true}
            onClick={() => this.clickedUserButton(index)}
        />;
    }

    createUserButtons (userNames) {
        return userNames.map(this.createUserButton, this);
    }


    componentDidMount() {
        console.log("ShowUsersPage componentDidMount");

        fetchUsers(this.props.dispatch);
    }

    render() {
        return (
            <div>

                <h1>Users</h1>
                <p>Click a button to see additional information on a user.</p>
                <div>
                    {this.createUserButtons(this.props.userNames)}
                </div>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProps: state.userProps,
        userNames: state.userNames
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

ShowUsersPage = connect(mapStateToProps, mapDispatchToProps)(ShowUsersPage);

export default ShowUsersPage;