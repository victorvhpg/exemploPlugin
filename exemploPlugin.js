// exemplo básico de  plugin
(function(window) {
    "use strict";
    var console = window.console, 
    document = window.document, $ = window.jQuery,
    _configPadrao = {
        tipoLog: "dir",
        qualquerCoisa: {}
    };

    //-------------------------------------------------------
    var Exemplo = function(dom, config) {
        this.dom = dom;
        this.config = config;
    };

    Exemplo.criar = function(dom, config) {
        return (new Exemplo(dom, config)).init();
    };
    //-----------------------------------------------
    Exemplo.prototype = {
        constructor: Exemplo,
        fazAlgumaCoisa: function(obj) {
            console[this.config.tipoLog](obj);
        },
        init: function() {
            console.log("init");
            this.fazAlgumaCoisa(this.dom);
            return this;
        }
    };
    //---------------------------------------------------
    $.fn.exemploPlugin = function(configEnviada) {
        var config = $.extend(true, {}, _configPadrao, configEnviada);
        return this.each(function(indice, item) {
            Exemplo.criar(item, config);
        });
    };
}(window));