Ext.ns('App.borderLayoutSample');
App.borderLayoutSample.createBorderLayoutWindow = function () {

    var myBorderLayoutWindow = Ext.create({
        xtype: 'window',
        height: 300,
        width: 500,
        layout: 'border',
        items: [
            {
                xtype: 'panel',
                title: 'Central panel',
                html: 'Central panel',
                region: 'center',

            },
            {
                xtype: 'panel',
                title: 'Right panel',
                html: 'Right panel',
                region: 'east',

            },
            {
                xtype: 'panel',
                title: 'Bottom panel',
                html: 'Bottom panel',
                region: 'south',
                height: 100
            }

        ]
    });

    return myBorderLayoutWindow;

};
