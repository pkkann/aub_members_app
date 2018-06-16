var verify_card = {
    init: function() {
        $("#scanBTN").click(function() {
            verify_card.scan();
        });

        $("#verifyBTN").click(function() {
            verify_card.verify();
        });
    },
    scan: function() {
        cordova.plugins.barcodeScanner.scan(
            function(result) {
                $("#barcode").val(result.text);
            },
            function(error) {

            },
            {
                preferFrontCamera : false, // iOS and Android
                showFlipCameraButton : false, // iOS and Android
                showTorchButton : false, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                saveHistory: false, // Android, save scan history (default false)
                prompt : "Scan et beboerkort", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations : true, // iOS
                disableSuccessBeep: false // iOS and Android
            }
        );
    },
    verify: function() {

    }
};