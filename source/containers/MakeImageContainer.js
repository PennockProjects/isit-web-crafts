import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavButtons from "../controls/NavButtons";
import MUIButton from "../controls/MUIButton";
import PreObjectKeys from "../controls/PreObjectKeys";

class MakeImageContainer extends React.Component {
    constructor(props) {
        console.log("MakeImageContainer constructor");

        super(props);
    }

    render() {
        console.log("MakeImageContainer render");
        return (
            <MuiThemeProvider>
                <div>
                    <MUIButton
                        onClick={this.props.createImage}
                        buttonLabel={"Create Image"}
                    />
                    <MUIButton
                        onClick={this.props.deleteImage}
                        buttonLabel={"Delete Image Page"}
                    />
                    <PreObjectKeys
                        loadingStage={this.props.imageOperationStage}
                        objectKeys={this.props.imageOperationResult}
                    />
                </div>
                <NavButtons />
            </MuiThemeProvider>
        );
    }
}

export default MakeImageContainer;
