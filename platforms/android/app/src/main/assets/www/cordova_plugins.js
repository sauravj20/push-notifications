cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "phonegap-plugin-push.PushNotification",
      "file": "plugins/phonegap-plugin-push/www/push.js",
      "pluginId": "phonegap-plugin-push",
      "clobbers": [
        "PushNotification"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-support-google-services": "1.3.1",
    "phonegap-plugin-multidex": "1.0.0",
    "phonegap-plugin-push": "2.3.0"
  };
});