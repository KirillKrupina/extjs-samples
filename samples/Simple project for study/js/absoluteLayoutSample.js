Ext.ns('App.AbsoluteLayoutSample');
App.AbsoluteLayoutSample.createAbsoluteLayout = function () {
    var myAbsolutrPanel = Ext.create({
        xtype: 'window',
        layout: 'absolute',
        height: 200,
        width: 200,
        items: [
            {
                xtype: 'textfield',
                x: 10,
                y: 10,

            },
            {
                xtype: 'textfield',
                x: 20,
                y: 50,

            }
            ]

    });
    return myAbsolutrPanel;
};
