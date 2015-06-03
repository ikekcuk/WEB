Ext.define('bet.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'fit',
    items: [
    {
        xtype: 'panel',
        tbar: [
            {xtype: 'button', text: 'Обновить', itemId: 'btnRefresh'}
        ],
        items: [{
            xtype: 'allstats'
        }
        ]
    }
    ]
});