Ext.define('wh.model.Product', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['id',
        { name: 'name', type: 'string' },
        { name: 'price', type: 'int', convert: null },
        { name: 'amount', type: 'int' },
        { name: 'cost', type: 'int' },
    ],

    getCost: function (price, amount) {
        cost = price * amount;
        this.set('cost', cost);
    },

    changeName: function (value) {
        this.set('name', value);
    }
});