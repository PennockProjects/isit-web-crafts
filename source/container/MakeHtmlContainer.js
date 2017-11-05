import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeHtmlGenerateButton from '../MakeHtmlGenerateButton';

const siteDirs = [];
const destDirs = [];


class MakeHtmlContainer extends React.Component {

    constructor(props) {
        console.log("MakeHtmlContainer constructor");

        super(props);

        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            configSummary: [],
            value: 1
        };

        this.changeSite = this.changeSite.bind(this);
        this.changeDest = this.changeDest.bind(this);
        this.generateHtml = this.generateHtml.bind(this);

        this.loadConfig();
    }

    changeSite(changedSite) {
        console.log("MakeHtmlContainer changeSite");
        this.setState({
            value: changedSite.value,
            siteDir: changedSite.siteDir,
            destDir: destDirs[changedSite.value].props.primaryText
        });
    }

    changeDest(changedDest) {
        console.log("MakeHtmlContainer changeDest");
        this.setState({
            value: changedDest.value,
            siteDir: siteDirs[changedDest.value].props.primaryText,
            destDir: changedDest.destDir
        });
    }

    generateHtml() {
        console.log("MakeHtmlContainer generateHtml");
        console.log(this.state.value);
        console.log(siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirsIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(configSummary) {
                console.log(JSON.stringify(configSummary, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    /**
     * @typedef {Object} configSummary
     * @property {Object} siteDirs
     * @property {Object} destinationDirs
     * @property {String} baseDir
     * @property {String} mostRecentDate
     */
    loadConfig() {
        console.log("MakeHtmlContainer loadConfig");
        const that = this;
        fetch('/makers/config')
            .then(function (response) {
                return response.json();
            })
            .then(function (configSummary) {
                console.log("MakeHtmlContainer loadConfig...success");
                console.log('parsed json', JSON.stringify(configSummary, null, 4));
                var newSiteDirs = [];
                var newDestDirs = [];

                siteDirs.length = 0;
                configSummary.siteDirs.forEach(function (dir, index) {
                    const showDir = configSummary.baseDir + dir;
                    siteDirs.push(<MenuItem value={index} key={index} primaryText={showDir} />);
                });
                configSummary.destinationDirs.forEach(function (dir, index) {
                    const destDir = configSummary.baseDir + dir;
                    destDirs.push(<MenuItem value={index} key={index} primaryText={destDir} />);
                });
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    componentDidMount() {
        console.log("MakeHtmlContainer componentDidMount");
    }

    render() {
        console.log("MakeHtmlContainer render");
        return <MuiThemeProvider>
            <div>
                <MakeHtmlHomeButton/>
                <MakeHtmlDropDowns
                    onChangeSite={this.changeSite}
                    onChangeDest={this.changeDest}
                    siteDirs={siteDirs}
                    destDirs={destDirs}
                    value={this.state.value}
                />
                <MakeHtmlGenerateButton
                    onClick={this.generateHtml}
                />
            </div>
        </MuiThemeProvider>;
    };
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeHtmlContainer;