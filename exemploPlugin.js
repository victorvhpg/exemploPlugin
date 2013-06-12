//https://github.com/victorvhpg/exemploPlugin
// estrutura básica de um plugin jQuery
(function(window) {
    "use strict";
    var $ = window.jQuery,
            document = window.document,
            Exemplo,
            _configPadrao;
    //--------------------------------------------------
    _configPadrao = {};
    Exemplo = function(dom, config) {
        this.dom = dom;
        this.config = config;
    };

    Exemplo.criar = function(dom, config) {
        return (new Exemplo(dom, config)).init();
    };
    //-------------------------------------------------------
    Exemplo.prototype = {
        constructor: Exemplo,
        fazAlgumaCoisa: function() {

        },
        init: function() {
            this.fazAlgumaCoisa();
            return this;
        }
    };
    //---------------------------------------------------------
    $.fn.exemploPlugin = function(configEnviada) {
        return this.each(function(indice, item) {
            var config = $.extend(true, {}, _configPadrao, configEnviada),
                    obj = Exemplo.criar(item, config);
        });
    };
}(window));