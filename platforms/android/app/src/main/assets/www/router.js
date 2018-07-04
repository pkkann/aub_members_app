var router = {
    controllers: [],

    init: function() {
        document.addEventListener('init', function(event) {
            var page = event.target;

            if(typeof eval(page.id).init === 'undefined') {
                var script = document.createElement('script');
                script.src = 'pages/' + page.id + '/controller.js';
                script.onload = function () {
                    eval(page.id).init();
                };
                document.body.appendChild(script);
            } else {
                eval(page.id).init();
            }
        });

        router.loadPage("login");
    },

    registerController: function(controller) {
        if(typeof controller.init !== 'function') {
            console.error("Controller is lagging init function");
            console.info(controller);
        } else {
            this.controllers.push(controller);
        }
    },

    loadPage(page, replace) {
        var nav = document.querySelector('#nav');
        if(typeof replace !== 'undefined') {
            nav.replacePage('pages/'+page+'/view.html');
        } else {
            nav.pushPage('pages/'+page+'/view.html');
        }
    }
};