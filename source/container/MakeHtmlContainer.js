import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeHtmlGenerateButton from '../MakeHtmlGenerateButton';
import PreObjectKeys from '../PreObjectKeys';


class MakeHtmlContainer extends React.Component {

    constructor(props) {
        console.log("MakeHtmlContainer constructor");

        super(props);

        this.state = {
            walk: 'Generate HTML',
            siteDir: 'unknown',
            destDir: 'unknown',
            configSummary: {
                baseDir: "unknown",
                mostRecentDate: new Date(),
                siteDirs: [],
                destinationDirs: []
            },
            htmlFilesWritten:[],
            generateHtmlResult: {},
            isGenerated: false,
            value: 1
        };

        this.changeSite = this.changeSite.bind(this);
        this.changeDest = this.changeDest.bind(this);
        this.changeConfigSummary = this.changeConfigSummary.bind(this);
        this.generateHtml = this.generateHtml.bind(this);

        this.loadConfig();
    }

    changeSite(changedSite) {
        console.log("MakeHtmlContainer changeSite");
        this.setState({
            value: changedSite.value,
            siteDir: changedSite.siteDir,
            destDir: this.state.configSummary.destinationDirs[changedSite.value]
        });
    }

    changeDest(changedDest) {
        console.log("MakeHtmlContainer changeDest");
        this.setState({
            value: changedDest.value,
            siteDir: this.state.configSummary.siteDirs[changedDest.value],
            destDir: changedDest.destDir
        });
    }

    changeGenerateHtmlResult(generateHtmlResult) {
        console.log("MakeHtmlContainer changeGenerateHtmlResult");
        this.setState({
            htmlFilesWritten: generateHtmlResult.htmlFilesWritten,
            generateHtmlResult: generateHtmlResult,
            isGenerated: true
        })
    }

    generateHtml() {
        console.log("MakeHtmlContainer generateHtml");
        console.log(this.state.value);
        console.log(this.state.configSummary.siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = '/makers/walk?siteDirsIndex=' + this.state.value;
        var that = this;
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(generateHtmlResult) {
                console.log("MakeHtmlContainer generateHtml->success");
                console.log(JSON.stringify(generateHtmlResult, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
                that.changeGenerateHtmlResult(generateHtmlResult);
            })
            .catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }

    changeConfigSummary(configSummary) {
        console.log("MakeHtmlContainer changeConfigSummary");
        this.setState({
            configSummary: configSummary
        })
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
                that.changeConfigSummary(configSummary);
            })
            .catch(function (ex) {
                console.log('parsing failed', ex);
            });
    }

    // componentDidMount() {
    //     console.log("MakeHtmlContainer componentDidMount");
    // }

    render() {
        console.log("MakeHtmlContainer render");
        return <MuiThemeProvider>
            <div>
                <MakeHtmlHomeButton/>
                <MakeHtmlDropDowns
                    onChangeSite={this.changeSite}
                    onChangeDest={this.changeDest}
                    configSummary={this.state.configSummary}
                    value={this.state.value}
                />
                <MakeHtmlGenerateButton
                    onClick={this.generateHtml}
                />
                <PreObjectKeys objectKeys={this.state.generateHtmlResult}/>
            </div>
        </MuiThemeProvider>;
    };
}

const buttonStyle = {
    margin: '10px 10px 10px 0'
};

export default MakeHtmlContainer;