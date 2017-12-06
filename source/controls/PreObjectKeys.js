import React from "react";

class PreObjectKeys extends React.Component {
    constructor(props) {
        super(props);
   }

    renderObjectKeys(objectKeys) {
        return JSON.stringify(objectKeys, null, 4);
    }

    render() {
        console.log("PreObjectKeys render stage " + this.props.loadingStage);

        if (this.props.loadingStage === 1 || this.props.loadingStage === 3) {
            return <pre>loading....</pre>;
        } else if (
            this.props.loadingStage === 2 ||
            this.props.loadingStage === 4
        ) {
            return <pre id={this.props.preId}>{this.renderObjectKeys(this.props.objectKeys)}</pre>;
        } else {
            return null;
        }
    }
}

export default PreObjectKeys;
