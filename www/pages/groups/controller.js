var groups = {
    init: function() {
        $.ajax({
            type: "GET",
            url: app.feedURL+'groups',
            success: function(response) {
                if(!response.error) {
                    var result = response.result;

                    result.forEach(function(group) {
                        $("#groups").append(`
                            <ons-card>
                                <div class="title">`+group.name+`</div>
                            </ons-card>
                        `);
                    });
                } else {

                }
            }
        });
    }
};

router.registerController(groups);