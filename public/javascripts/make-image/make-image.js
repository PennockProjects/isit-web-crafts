/**
 * Created by charlie on 7/9/16.
 */

define(['imagePicker'], function(imagePicker) {
    'use strict';

    function publishRectMakeHtml() {
        $.publish('reactMakeImage', {
            message: "Publish reactMakeImage in make-image init"
        });
    }

    return {
        init: function() {
            $('#pageLoad').load('/makers/pixPicker', function() {
                imagePicker.configure();
                publishRectMakeHtml();
            });
        }
    };
});