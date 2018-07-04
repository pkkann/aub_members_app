var home = {
	init: function() {
        $("#verifyCardBTN").click(function() {
            router.loadPage("verify_card");
        });

        $("#logoutBTN").click(function() {
            login.logout();
        });
	}
};

router.registerController(home);