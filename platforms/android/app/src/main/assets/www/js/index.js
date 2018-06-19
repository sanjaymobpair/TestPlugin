var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('pause',this.onPause,false);
        document.addEventListener('resume',this.onResume,false);

    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');


        var apikey = "8ed81f399e8c8d849b22f5e3a8df3712_5ae55f00ea2a18046b01c981";
        var domainendpoint = "moboaff.com";
        var serverkey = "AAAADVXs87Q:APA91bGya5KqRLYGB1XXzNm7VYIi7P4yKEQPzafJP67pYkRwGa2RhfN_XnbRJpi_z1zxQQ9RQPgR-2xFQ1V405F10BfFUnp5ul_K1VtsrtrXYDA6PndzmWdj_N5Lh0lPWWOC5VBPEJSx";

        function success(result){
            debugger;
            alert("Jerry plugin result: " + result);
        };
        Cordova.exec(success, null, "Track", "startTrack", [serverkey,apikey,domainendpoint]);
    },

    receivedEvent: function(id) {
           function success(result){
               debugger;
               alert("Jerry plugin result: " + result);
           };
           setTimeout( function(){
                debugger;
                alert('outside');
                Cordova.exec(success, null, "Track", "stage", ["Active"]);
                //alert('called...');
           }, 100);
       },

    onResume:function(){
        console.log('onResume');
        alert('onResume');
    },
    onPause:function(){
        console.log('onPause');
        alert('onPause');
    }
};
app.initialize();