cordova.define("com.track.app.Track", function(require, exports, module) {
var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'Track', 'coolMethod', [arg0]);
};

});