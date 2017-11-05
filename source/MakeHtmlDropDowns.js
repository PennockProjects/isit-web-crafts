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

class MakeHtmlDropDowns extends React.Component {

    constructor(props) {
        super(props);

        this.handleSiteDir = this.handleSiteDir.bind(this);
        this.handleDestDir = this.handleDestDir.bind(this);
    }

    handleSiteDir(event, index, value) {
        this.props.onChangeSite({
            value: value,
            siteDir: event.target.innerHTML,
        });
    }

    handleDestDir(event, index, value) {
        this.props.onChangeDest({
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
        console.log("MakeHtmlDropDowns render");
        console.log(this.props.configSummary);

        return <MuiThemeProvider>
            <div>
                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleSiteDir}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.renderMenuItems(this.props.configSummary.siteDirs)}
                </DropDownMenu>

                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleDestDir}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.renderMenuItems(this.props.configSummary.destinationDirs)}
                </DropDownMenu>
            </div>
        </MuiThemeProvider>
    };
}

var buttonStyle = {
    margin: '15px'
};

export default MakeHtmlDropDowns;