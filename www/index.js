/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	title: "AUB members",
	
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		document.addEventListener('init', function(event) {
			var page = event.target;
			
			if (page.matches("#home")) {
				home.init();
			} else if(page.matches("#verify_card")) {
				verify_card.init();
			} else if(page.matches("#my_user")) {
				my_user.init();
			} else if(page.matches("#admin_groups")) {
                admin_groups.init();
			} else if(page.matches("#login")) {
                login.init();
			}
		});
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        
    },

    loadPage(page, replace) {
	    var nav = document.querySelector('#nav');
	    if(typeof replace !== 'undefined') {
            nav.replacePage('pages/'+page+'.html');
        } else {
            nav.pushPage('pages/'+page+'.html');
        }

    }
};

app.initialize();