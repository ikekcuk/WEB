Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',
    plugins: 'gridfilters',
    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1, filter: 'string' },
        {header: 'Цена', dataIndex: 'price', flex: 0.8, filter: 'number' },
        {header: 'Количество', dataIndex: 'amount', flex:1, filter: 'number' },
        {header: 'Стоимость', dataIndex: 'cost', flex:1, filter: 'number' }
    ]
});
var plugin = grid.filters;