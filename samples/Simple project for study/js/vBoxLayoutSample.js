Ext.ns('App.vBoxLayoutSample');
App.vBoxLayoutSample.createVBoxLayoutWindow = function () {

    var vBoxLayoutWindow = Ext.create({
        xtype: 'window',
        width: 200,
        height: 500,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'panel',
                title: 'First Panel',
                height: 100,
            },
            {
                xtype: 'panel',
                title: 'Second Panel',
                height: 50,
            },
            {
                xtype: 'panel',
                title: 'Third Panel',
                height: 80,
            },

        ]
    });

    return vBoxLayoutWindow;

};
