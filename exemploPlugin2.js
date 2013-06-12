//https://github.com/victorvhpg/exemploPlugin
// estrutura básica de um plugin jQuery
(function(window) {
    "use strict";
    var $ = window.jQuery,
            document = window.document,
            getExemplo,
            _configPadrao;
    //--------------------------------------------------
    _configPadrao = {};
    getExemplo = function(dom, configEnviada) {
        var _config = $.extend(true, {}, _configPadrao, configEnviada);
        return {
            fazAlgumaCoisa: function() {

            },
            init: function() {
                this.fazAlgumaCoisa();
                return this;
            }
        };
    };
    //---------------------------------------------------------
    $.fn.exemploPlugin2 = function(configEnviada) {
        return this.each(function(indice, item) {
            var obj = (getExemplo(item, configEnviada)).init();
        });
    };
}(window));