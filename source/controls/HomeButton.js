import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import {connect} from 'react-redux';

class HomeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            home: "Firebase Config and Login"
        };

        this.goHome = this.goHome.bind(this);
    }

    goHome() {
        this.props.dispatch({
            type: 'SWITCH_COMPONENT',
            component: "app",
            userIndex: null
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <RaisedButton
                        style={buttonStyle}
                        primary={true}
                        onClick={this.goHome}
                    >
                        {this.state.home}
                    </RaisedButton>
                    <p>Select button to return to the home page.</p>
                </div>
            </MuiThemeProvider>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 0"
};

HomeButton = connect()(HomeButton);

export default HomeButton;
