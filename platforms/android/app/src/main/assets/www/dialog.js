var dialog = {
    element: false,

    showHtml: function(html) {
        if(this.element === false) {
            this.element = document.createElement('ons-dialog');
            this.element.innerHTML = '<div>' + html + '</div>';
            document.body.appendChild(this.element);

            if($(this.element).find(".hidedialog").length) {
                $(this.element).find(".hidedialog").click(function() {
                    dialog.hide();
                });
            }

            this.element.show();
        } else {
            this.hide(function() {
                dialog.showHtml(html);
            });
        }
    },

    showSimple: function(html) {
        if(this.element === false) {
            this.element = document.createElement('ons-dialog');
            this.element.innerHTML = '<div><div style="display: flex; text-align: center; padding-top: 10px; flex-direction: column; justify-content: center; align-items: center">' + html + '</div></div>';
            document.body.appendChild(this.element);

            if($(this.element).find(".hidedialog").length) {
                $(this.element).find(".hidedialog").click(function() {
                    dialog.hide();
                });
            }

            this.element.show();
        } else {
            this.hide(function() {
                dialog.showSimple(html);
            });
        }
    },

    hide: function(callback) {
        if(this.element !== false) {
            this.element.hide({
                callback: function() {
                    dialog.element.remove();
                    dialog.element = false;
                    if(typeof callback == 'function') {
                        callback();
                    }
                }
            });
        }
    }
};