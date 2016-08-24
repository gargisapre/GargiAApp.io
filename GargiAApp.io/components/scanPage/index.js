'use strict';

app.scanPage = kendo.observable({
    onShow: function () {},
    afterShow: function () {},

});

// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
app.el = new Everlive('ilvg8iek06qjcndr');
// var _onDeviceUnregistered = function () {
//     app.hideLoading();

//     $('#message').html(app.constants.UNREGISTERED_TEXT);
//     $('#registerButton').show();
//     $('#unregisterButton').hide();
// };
 var _onDeviceIsRegistered = function () {
            // app.hideLoading();

            // $('#registerButton').hide();
            // $('#unregisterButton').show();
            // $('#message').html(app.constants.SUCCESS_TEXT);
     		alert("You have successfuly submitted your order. You will be notified when your order has been processed");
        };
var onAndroidPushReceived = function (args) {
    alert('Android notification received: ' + JSON.stringify(args));
};

var onIosPushReceived = function (args) {
    alert('iOS notification received: ' + JSON.stringify(args));
};

var onWP8PushReceived = function (args) {
    alert('Windows Phone notification received: ' + JSON.stringify(args));
};

var registerForPush = function () {

    var pushSettings = {
        android: {
            senderID: '378973851611'
        },
        iOS: {
            badge: 'true',
            sound: 'true',
            alert: 'true'
        },
        wp8: {
            channelName: 'EverlivePushChannel'
        },
        notificationCallbackAndroid: onAndroidPushReceived,
        notificationCallbackIOS: onIosPushReceived,
        notificationCallbackWP8: onWP8PushReceived,
        customParameters: {
            Age: 21
        }
    };



    app.el.push.register(pushSettings)
        .then(
            _onDeviceIsRegistered,
            function (err) {
                console.log('REGISTER ERROR: ' + JSON.stringify(err));
            }
        );

};

// END_CUSTOM_CODE_scanPage