cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.track.app.Track",
    "file": "plugins/com.track.app/www/Track.js",
    "pluginId": "com.track.app",
    "clobbers": [
      "cordova.plugins.Track"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-support-android-plugin": "1.0.1",
  "cordova-support-google-services": "1.2.0",
  "com.track.app": "1.0.0"
};
// BOTTOM OF METADATA
});