Ext.ns('App.hboxLayoutSample');
App.hboxLayoutSample.createHBoxLayoutWindow = function () {
    var hBoxLayoutWindow = Ext.create({
        xtype: 'window',
        width: 500,
        height: 200,
        layout: {
            type: 'hbox',
           // align: 'stretch',
           // pack: 'center'
        },
        items: [
            {
                xtype: 'panel',
                title: 'First Panel',
                flex: 1
            },
            {
                xtype: 'panel',
                title: 'Second Panel',
                flex: 0
            },
            {
                xtype: 'panel',
                title: 'Third Panel',
                flex: 1
            },

        ]
    });

    return hBoxLayoutWindow;
};
