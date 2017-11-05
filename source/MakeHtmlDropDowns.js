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

    render() {
        return <MuiThemeProvider>
            <div>
                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleSiteDir}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.props.siteDirs}
                </DropDownMenu>

                <DropDownMenu
                    value={this.props.value}
                    onChange={this.handleDestDir}
                    style={styles.customWidth}
                    autoWidth={true}
                >
                    {this.props.destDirs}
                </DropDownMenu>
            </div>
        </MuiThemeProvider>
    };
}

var buttonStyle = {
    margin: '15px'
};

export default MakeHtmlDropDowns;