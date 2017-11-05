import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

class MakeHtmlGenerateButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

    render() {

        return <MuiThemeProvider>
            <div>
                <RaisedButton
                    style={buttonStyle}
                    primary={true}
                    onClick={this.handleClick}>
                    Generate HTML
                </RaisedButton>
            </div>
        </MuiThemeProvider>;
    };
}

export default MakeHtmlGenerateButton;