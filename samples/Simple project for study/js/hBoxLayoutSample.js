Ext.ns('App.hboxLayoutSample');
App.hboxLayoutSample.createHBoxLayoutWindow = function () {
    var hBoxLayoutWindow = Ext.create({
        xtype: 'window',
        width: 500,
        height: 200,
        layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
        },
        items: [
            {
                xtype: 'panel',
                title: 'First Panel',
                width: 100,
            },
            {
                xtype: 'panel',
                title: 'Second Panel',
                width: 50,
            },
            {
                xtype: 'panel',
                title: 'Third Panel',
                width: 80,
            },

        ]
    });

    return hBoxLayoutWindow;
};
