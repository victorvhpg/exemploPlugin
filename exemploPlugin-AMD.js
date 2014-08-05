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
        var Exemplo, _configPadrao;
        _configPadrao = {};

        Exemplo = function(dom, config) {
            this.dom = dom;
            this.config = config;
        };

        Exemplo.criar = function(dom, config) {
            return (new Exemplo(dom, config)).init();
        };

        Exemplo.prototype = {

            constructor: Exemplo,
            
            fazAlgumaCoisa: function() {
                console.log("exemploPlugin-AMD.js");
            },

            init: function() {
                this.fazAlgumaCoisa();
                return this;
            }
        };

        $.fn.exemploPlugin = function(configEnviada) {
            return this.each(function(indice, item) {
                var config = $.extend(true, {}, _configPadrao, configEnviada),
                    obj = Exemplo.criar(item, config);
            });
        };

        return $.fn.exemploPlugin;
    });
})(this);