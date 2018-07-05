var home = {
	init: function() {
        $("#verifyCardBTN").click(function() {
            router.loadPage("verify_card");
        });

        $("#groupsBTN").click(function() {
            router.loadPage("groups");
        });

        $("#myUserBTN").click(function() {
            router.loadPage("my_user");
        });

        $("#logoutBTN").click(function() {
            login.logout();
        });
	}
};

router.registerController(home);