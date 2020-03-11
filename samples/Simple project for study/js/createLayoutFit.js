Ext.ns('App.ModuleLayout');
App.ModuleLayout.createLayoutFit = function () {
    var myPanel = Ext.create({
        xtype: 'window',
        layout: 'fit',
        height: 200,
        items: [
            {
                xtype: 'panel',
                html: 'panel1'
            },
            {
                xtype: 'panel',
                html: 'panel2'
            },
        ]
    });

    return myPanel;
};

