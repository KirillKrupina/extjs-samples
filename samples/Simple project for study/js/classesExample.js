// Ext.ns('Application');
//
//
// Application.PersonnelGrid = Ext.extend(Ext.grid.GridPanel, {
//     border: false,
//     initComponent(){
//         Ext.apply(this, {
//             store: new Ext.data.ArrayStore(
//                 {
//                     fields: [
//                         {name: 'company'},
//                         {name: 'price', type: 'float'},
//                         {name: 'change', type: 'float'},
//                         {name: 'pctChange', type: 'float'},
//                         {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'},
//                     ],
//                     data: [
//                         ['3m Co',                               71.72, 0.02,  0.03,  '9/1 12:00am'],
//                         ['Alcoa Inc',                           29.01, 0.42,  1.47,  '9/1 12:00am'],
//                         ['Altria Group Inc',                    83.81, 0.28,  0.34,  '9/1 12:00am'],
//                         ['American Express Company',            52.55, 0.01,  0.02,  '9/1 12:00am']
//                     ]
//                 }
//             ),
//             columns: [
//                 {
//                     id       :'company',
//                     header   : 'Company',
//                     width    : 160,
//                     sortable : true,
//                     dataIndex: 'company'
//                 },
//                 {
//                     header   : 'Price',
//                     width    : 75,
//                     sortable : true,
//                     renderer : 'usMoney',
//                     dataIndex: 'price'
//                 },
//                 {
//                     header   : 'Change',
//                     width    : 75,
//                     sortable : true,
//                     renderer : 'change',
//                     dataIndex: 'change'
//                 },
//                 {
//                     header   : '% Change',
//                     width    : 75,
//                     sortable : true,
//                     renderer : 'pctChange',
//                     dataIndex: 'pctChange'
//                 },
//                 {
//                     header   : 'Last Updated',
//                     width    : 85,
//                     sortable : true,
//                     renderer : Ext.util.Format.dateRenderer('m/d/Y'),
//                     dataIndex: 'lastChange'
//                 },
//             ]
//
//         });
//
//         Application.PersonnelGrid.superclass.initComponent.apply(this, arguments);
//     },
//     onRender: function () {
//         this.store.load();
//         Application.PersonnelGrid.superclass.onRender.apply(this, arguments);
//     }
//
// });
//
// Ext.reg('personnelgrid', Application.PersonnelGrid);
//
// var win = new Ext.Window({
//     title: 'Personnel',
//     width: 600,
//     height: 400,
//     items: {
//         xtype: 'personnelgrid',
//         items: a
//     }
// }).show();

//------------------------------------------------------------------------------------

// var MyPanel = Ext.extend(Ext.Panel, {
//     items: [{
//         xtype: 'grid'
//     }]
// });

var MyPanel = Ext.extend(Ext.Panel, {
    initComponent: function () {
        Ext.applyIf(this, {

            items: [{

            }],
        });

        MyPanel.superclass.initComponent.apply(this);
        console.log(this);
    },
    log: function () {
        console.log(this);
    }


});

var myPan = new MyPanel({
    title: 'myPan',
});

myPan.log.call(this);






