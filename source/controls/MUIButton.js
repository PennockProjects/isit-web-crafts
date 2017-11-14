import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";

class MUIButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {
        return (
            <MuiThemeProvider>
                <RaisedButton
                    id={this.props.buttonId || ""}
                    style={buttonStyle}
                    primary={true}
                    onClick={this.handleClick}
                >
                    {this.props.buttonLabel || "default"}
                </RaisedButton>
            </MuiThemeProvider>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 0"
};

export default MUIButton;
