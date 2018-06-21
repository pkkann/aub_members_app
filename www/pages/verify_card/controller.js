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
                verify_card.verify();
            },
            function(error) {
                console.error(error);
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
        dialog.showSimple('<p><ons-progress-circular indeterminate></ons-progress-circular></p>');
        var data = {
            barcode: $("#barcode").val()
        };
        $.ajax({
            type: "POST",
            url: app.feedURL+'verify',
            data: data,
            success: function(response) {
                if(!response.error) {
                    var text = '';
                    if(response.result) {
                        text = 'Beboerkortet er godkendt';
                    } else {
                        text = 'Beboerkortet er IKKE godkendt!'
                    }
                    dialog.showHtml('<div style="display: flex; text-align: center; padding-top: 10px; flex-direction: column; justify-content: center; align-items: center"><p>'+text+'</p><p><ons-button class="hidedialog">OK</ons-button></p></div>');
                } else {
                    ons.notification.alert('Der skete en fejl. Prøv igen senere.');
                }
            }
        });
    }
};

router.registerController(verify_card);