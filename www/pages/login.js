var login = {
    init: function() {
        $("#loginBTN").click(function() {
            login.login();
        });
    },
    login: function() {
        app.loadPage("home", true);
    }
};