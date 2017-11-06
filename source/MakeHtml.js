import React from "react";
import MakeHtmlContainer from "./container/MakeHtmlContainer";

class MakeHtml extends React.Component {
    constructor(props) {
        console.log("MakeHtml constructor");

        super(props);

        this.state = {
            walk: "Generate HTML",
            siteDir: "unknown",
            siteDirs: [],
            destDir: "unknown",
            destDirs: [],
            configLoading: 1,
            configSummary: {
                baseDir: "unknown",
                mostRecentDate: new Date(),
                siteDirs: [],
                destinationDirs: []
            },
            htmlFilesWritten: [],
            generateHtmlResult: {},
            generateHtmlLoading: 0,
            value: 1
        };

        this.changeSite = this.changeSite.bind(this);
        this.changeDest = this.changeDest.bind(this);
        this.changeConfigSummary = this.changeConfigSummary.bind(this);
        this.generateHtml = this.generateHtml.bind(this);

        this.loadConfig();
    }

    /**
     * @typedef {Object} configSummary
     * @property {Object} siteDirs
     * @property {Object} destinationDirs
     * @property {String} baseDir
     * @property {String} mostRecentDate
     */
    loadConfig() {
        console.log("MakeHtml loadConfig");
        const that = this;
        fetch("/makers/config")
            .then(function(response) {
                return response.json();
            })
            .then(function(configSummary) {
                console.log("MakeHtml loadConfig...success");
                console.log(
                    "parsed json",
                    JSON.stringify(configSummary, null, 4)
                );
                that.changeConfigSummary(configSummary);
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    }

    // componentDidMount() {
    //     console.log("MakeHtml componentDidMount");
    // }

    changeConfigSummary(configSummary) {
        console.log("MakeHtml changeConfigSummary");
        this.setState({
            configSummary: configSummary,
            configLoading: 2,
            siteDirs: configSummary.siteDirs.slice(),
            destDirs: configSummary.destinationDirs.slice()
        });
    }

    changeSite(changedSite) {
        console.log("MakeHtml changeSite");
        this.setState({
            value: changedSite.value,
            generateHtmlLoading:
                changedSite.value !== this.state.value
                    ? 0
                    : this.state.generateHtmlLoading,
            siteDir: changedSite.siteDir,
            destDir: this.state.configSummary.destinationDirs[changedSite.value]
        });
    }

    changeDest(changedDest) {
        console.log("MakeHtml changeDest");
        this.setState({
            value: changedDest.value,
            generateHtmlLoading:
                changedDest.value !== this.state.value
                    ? 0
                    : this.state.generateHtmlLoading,
            siteDir: this.state.configSummary.siteDirs[changedDest.value],
            destDir: changedDest.destDir
        });
    }

    changeGenerateHtmlResult(generateHtmlResult) {
        console.log("MakeHtml changeGenerateHtmlResult");
        this.setState({
            htmlFilesWritten: generateHtmlResult.htmlFilesWritten,
            generateHtmlResult: generateHtmlResult,
            generateHtmlLoading: 2
        });
    }

    generateHtml() {
        console.log("MakeHtml generateHtml");
        this.setState({
            generateHtmlLoading: 1
        });
        console.log(this.state.value);
        console.log(this.state.configSummary.siteDirs[this.state.value]);
        //walking.runWalkReact('qSingle', this.state.siteDir, this.state.destDir);
        const query = "/makers/walk?siteDirsIndex=" + this.state.value;
        var that = this;
        fetch(query)
            .then(function(response) {
                return response.json();
            })
            .then(function(generateHtmlResult) {
                console.log("MakeHtml generateHtml->success");
                console.log(JSON.stringify(generateHtmlResult, null, 4));
                // CALL that.setState to **state.configSummary** to configSummary.htmlFilesWritten
                that.changeGenerateHtmlResult(generateHtmlResult);
            })
            .catch(function(ex) {
                console.log("parsing failed", ex);
            });
    }

    render() {
        console.log("MakeHtml render");
        return (
            <MakeHtmlContainer
                configLoading={this.state.configLoading}
                changeSite={this.changeSite}
                changeDest={this.changeDest}
                siteDirs={this.state.siteDirs}
                destDirs={this.state.destDirs}
                value={this.state.value}
                generateHtml={this.generateHtml}
                generateHtmlLoading={this.state.generateHtmlLoading}
                generateHtmlResult={this.state.generateHtmlResult}
            />
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 0"
};

export default MakeHtml;
