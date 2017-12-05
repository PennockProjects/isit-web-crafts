import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PairedDropDowns from "../controls/PairedDropDowns";
import MakeHtmlHomeButton from "../MakeHtmlHomeButton";
import MUIButton from "../controls/MUIButton";
import PreObjectKeys from "../controls/PreObjectKeys";

class MakeHtmlContainer extends React.Component {
    constructor(props) {
        console.log("MakeHtmlContainer constructor");

        super(props);
    }

    render() {
        console.log(
            "MakeHtmlContainer render stage " + this.props.configLoading
        );
        if (this.props.configLoading === 1) {
            return <h1>Loading...</h1>;
        } else if (this.props.configLoading === 2) {
            return (
                <MuiThemeProvider>
                    <div>
                        <h1>Webcraft Make Html Page</h1>

                        <MakeHtmlHomeButton />
                        <PairedDropDowns
                            onChangeLeft={this.props.changeSite}
                            onChangeRight={this.props.changeDest}
                            pairArrayLeft={this.props.siteDirs}
                            pairArrayRight={this.props.destDirs}
                            value={this.props.value}
                        />
                        <MUIButton
                            id={"fooBar"}
                            onClick={this.props.generateHtml}
                            buttonLabel={" Generate Html "}
                        />
                        <PreObjectKeys
                            loadingStage={this.props.generateHtmlLoading}
                            objectKeys={this.props.generateHtmlResult}
                        />
                    </div>
                </MuiThemeProvider>
            );
        } else {
            return null;
        }
    }
}

export default MakeHtmlContainer;
