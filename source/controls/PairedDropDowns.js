import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import 'whatwg-fetch';

const styles = {
    customWidth: {
        width: 500,
    }
};

class PairedDropDowns extends React.Component {

    constructor(props) {
        super(props);

        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
    }

    handleLeft(event, index, value) {
        this.props.onChangeLeft({
            value: value,
            siteDir: event.target.innerHTML,
        });
    }

    handleRight(event, index, value) {
        this.props.onChangeRight({
            value: value,
            destDir: event.target.innerHTML
        });
    }

    renderMenuItems(directoryArray) {
        let menuItemsArray = [];
        for (let i = 0; i < directoryArray.length; i++) {
            menuItemsArray.push(<MenuItem value={i} key={i} primaryText={directoryArray[i]} />);
        }
        return menuItemsArray;
    }

    render() {
        console.log("PairedDropDowns render");

        return <MuiThemeProvider>
            <div>
                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleLeft}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.renderMenuItems(this.props.pairArrayLeft || [])}
                </DropDownMenu>

                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleRight}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.renderMenuItems(this.props.pairArrayRight || [])}
                </DropDownMenu>
            </div>
        </MuiThemeProvider>
    };
}

var buttonStyle = {
    margin: '15px'
};

export default PairedDropDowns;