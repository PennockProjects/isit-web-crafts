import React from 'react';


class PreObjectKeys extends React.Component {
    constructor(props) {
        super(props);

        this.renderObjectKeys = this.renderObjectKeys.bind(this);
    }

    renderObjectKeys(objectKeys) {
        return (JSON.stringify(objectKeys, null, 4));
        // Object.keys(objectKeys).map(function (key) {
        //     return objectKeys[key]
        // });
    }

    render() {
        console.log("PreObjectKeys render stage " + this.props.loadingStage);

        if(this.props.loadingStage === 1) {
            return <pre>loading....</pre>
        } else if (this.props.loadingStage === 2) {
            return <pre>{this.renderObjectKeys(this.props.objectKeys)}</pre>;
        } else {
            return null;
        }
    };
}


export default PreObjectKeys;