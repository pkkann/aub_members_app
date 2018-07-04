var api = {
    post: function(url, data, successCallback, errorCallback) {
        if(!this.checkNetwork()) {
            ons.notification.alert('Der er ingen forbindelse til internettet');
            errorCallback();
            return false;
        }

        $.ajax({
            type:       "POST",
            url:        app.feedURL+url,
            data:       data,
            success:    successCallback,
            error:      function(error) {
                ons.notification.alert('Der kunne ikke forbindes til serveren');
                errorCallback(error);
            }
        });
    },
    get: function(url, successCallback, errorCallback) {
        if(!this.checkNetwork()) {
            ons.notification.alert('Der er ingen forbindelse til internettet');
            errorCallback();
            return false;
        }

        $.ajax({
            type:       "GET",
            url:        app.feedURL.url,
            success:    successCallback,
            error:      function(error) {
                ons.notification.alert('Der kunne ikke forbindes til serveren');
                errorCallback(error);
            }
        });
    },
    checkNetwork: function() {
        var status = navigator.connection.type;
        if(status == Connection.NONE) {
            return false;
        } else {
            return true;
        }
    }
};