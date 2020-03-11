Ext.ns('App.columnLayoutSample');
App.columnLayoutSample.createColumnLayout = function () {
    var myColumnWindow = Ext.create({
        xtype: 'window',
        title: 'Tablet',
        width: 700,
        autoHeight: true,
       layout: 'column',
        items: [
            {
                xtype: 'panel',
                title: 'First column',
                html: 'Shield 1',
                width: 200,
            },
            {
                xtype: 'panel',
                title: 'Second column',
                html: 'Shield 2',
                columnWidth: .6
            },
            {
                xtype: 'panel',
                title: 'Third column',
                html: 'Shield 3',
                columnWidth: .4
            },
            {
                xtype: 'panel',
                title: 'Third column',
                html: 'Shield 3',
                columnWidth: .4
            }
        ]
    });

    return myColumnWindow;
};
