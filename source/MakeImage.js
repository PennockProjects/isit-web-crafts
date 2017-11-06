import React from "react";
import MakeImageContainer from "./container/MakeImageContainer";

class MakeImage extends React.Component {
    constructor(props) {
        console.log("MakeImage constructor");

        super(props);

        this.state = {
            imageOperationStage: 0, // 0 = no results, 1 = creating image, 2 = created image, 3 = deleting image, 4 = deleted image
            imageOperationResult: {}
        };

        this.createImage = this.createImage.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
    }

    createImage(changedSite) {
        console.log("MakeImage createImage");

        this.setState({
            imageOperationStage: 1
        });

        let that = this;
        $.getJSON("/makers/makeImages", function(result) {
            console.log(JSON.stringify(result, null, 4));
            that.setState({
                imageOperationResult: result,
                imageOperationStage: 2
            });
        })
            .done(function() {
                console.log(
                    "MakeImage createImage.done Make Markdown loaded second success"
                );
            })
            .fail(function(jqxhr, textStatus, error) {
                console.log(
                    "MakeImage createImage.Make Markdown load error: " +
                        jqxhr.status +
                        " " +
                        textStatus +
                        " " +
                        error
                );
            })
            .always(function() {
                console.log(
                    "MakeImage createImage.Make Markdown loaded complete"
                );
            });
    }

    deleteImage(changedDest) {
        console.log("MakeImage deleteImage");
        this.setState({
            imageOperationStage: 3
        });

        let that = this;

        $.getJSON("/makers/deleteMarkdown", function(result) {
            console.log("MakeImage deleteImage" + JSON.stringify(result));
            that.setState({
                imageOperationResult: result,
                imageOperationStage: 4
            });
        })
            .done(function() {
                console.log(
                    "MakeImage deleteImage Delete Markdown loaded second success"
                );
            })
            .fail(function(jqxhr, textStatus, error) {
                var message =
                    "MakeImage deleteImage Delete Markdown load error: " +
                    jqxhr.status +
                    " " +
                    textStatus +
                    " " +
                    error;
                console.log(message);
                that.setState({
                    imageOperationResult: message,
                    imageOperationStage: 4
                });
            })
            .always(function() {
                console.log(
                    "MakeImage deleteImage Delete Markdown loaded complete"
                );
            });
    }

    render() {
        console.log("MakeImage render");
        return (
            <MakeImageContainer
                imageOperationStage={this.state.imageOperationStage}
                createImage={this.createImage}
                deleteImage={this.deleteImage}
                imageOperationResult={this.state.imageOperationResult}
            />
        );
    }
}

export default MakeImage;
