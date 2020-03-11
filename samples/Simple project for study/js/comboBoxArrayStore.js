Ext.onReady(function () {
   var names = [
       ['A'],
       ['B'],
       ['C'],
       ['D']
   ];

    var simpleStore = new Ext.data.ArrayStore({
        data: names,
        fields: ['name']
    });

    var combo = Ext.create({
        xtype: 'combo',
        fieldLabel: 'Letter',
        store: simpleStore,
        displayField: 'name',
        typeAhead: true,
        mode: 'local',
        triggerAction: 'all'
    });

    var comboWin = Ext.create({
        xtype: 'window',
        height: 100,
        layout: 'form',
        items: combo
    }).show();
});
