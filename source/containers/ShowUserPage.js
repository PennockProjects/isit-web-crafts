import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavButtons from '../controls/NavButtons';

const buttonStyle = {
    margin: '10px 10px 10px 0',
    dislay: "inline-block"
};

export class ShowUserPage extends Component {

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
                <NavButtons/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserPage);