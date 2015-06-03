Ext.define('bet.controller.BetController', {
    extend: 'Ext.app.Controller',
    stores: [
        'Stats@bet.store'
    ],

    models: [
        'UserStat@bet.model'
    ],

    views: [
        'List@bet.view.stats'
    ],

    init: function () {
        console.log('init');
        this.control({
            'button#btnRefresh': {
                click: this.refreshStats
            }
        });
    },

    refreshStats: function(parameters) {
        var me = this;
        me.getStore("Stats@bet.store").reload();
    }
});