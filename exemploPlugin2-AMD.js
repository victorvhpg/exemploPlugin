//https://github.com/victorvhpg/exemploPlugin
// @victorvhpg
// estrutura básica de um plugin jQuery
//com suporte a AMD 
(function(window) {
    "use strict";

    (function(fnCriaPlugin) {
        if (typeof define === "function" && define.amd) {
            // AMD 
            define(["jquery"], fnCriaPlugin);
        } else {
            // Browser 
            fnCriaPlugin(window.jQuery);
        }
    })(function($) {
        var getExemplo, _configPadrao;
        _configPadrao = {};

        getExemplo = function(dom, configEnviada) {
            var _config = $.extend(true, {}, _configPadrao, configEnviada);
            return {

                fazAlgumaCoisa: function() {
                    console.log("exemploPlugin2-AMD.js");
                },

                init: function() {
                    this.fazAlgumaCoisa();
                    return this;
                }
            };
        };

        $.fn.exemploPlugin2 = function(configEnviada) {
            return this.each(function(indice, item) {
                var obj = (getExemplo(item, configEnviada)).init();
            });
        };

        return $.fn.exemploPlugin2;
    });
})(this);