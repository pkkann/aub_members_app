var login = {
    init: function() {
        $("#loginBTN").click(function() {
            login.login();
        });

        if(localStorage.getItem("remember_username") !== null) {
            $("#username").val(localStorage.getItem("remember_username"));
            $("#password").val(localStorage.getItem("remember_password"));
            $("#remember").prop("checked", "true");
            login.login();
        }
    },
    login: function() {
        dialog.showSimple('<p><ons-progress-circular indeterminate></ons-progress-circular></p>');

        var data = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        if($("#remember").is(":checked")) {
            localStorage.setItem("remember_username", data.username);
            localStorage.setItem("remember_password", data.password);
        }

        api.post("login", data,
            function(response) {
                if(!response.error && response.result) {
                    router.loadPage("home", true);
                } else {
                    ons.notification.alert('Forkert brugernavn eller adgangskode');
                }
                dialog.hide();
            },
            function(error) {
                dialog.hide();
            }
        );
    },
    logout: function() {
        localStorage.removeItem("remember_username");
        localStorage.removeItem("remember_password");
        router.loadPage("login", true);
    }
};

router.registerController(login);