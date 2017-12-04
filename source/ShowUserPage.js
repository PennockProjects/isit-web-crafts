import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';

const buttonStyle = {
    margin: '10px 10px 10px 0',
    dislay: "inline-block"
};

class ShowUserPage extends Component {

    constructor(props) {
        console.log("ShowUserPage constructor");

        super(props);

    }

    render() {
        let userProps = this.props.userProps[this.props.userNames[this.props.userIndex]];
        let baseDir = userProps["base-dir"];
        let bootswatch = userProps.bootswatch;
        return (
            <div>

                <h1>User: {this.props.userNames[this.props.userIndex]}</h1>
                <p><strong>baseDir:</strong> {baseDir}</p>
                <p><strong>bootswatch:</strong> {bootswatch}</p>

            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        userProps: state.userProps,
        userNames: state.userNames,
        userIndex: state.userIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
};

ShowUserPage = connect(mapStateToProps, mapDispatchToProps)(ShowUserPage);

export default ShowUserPage;