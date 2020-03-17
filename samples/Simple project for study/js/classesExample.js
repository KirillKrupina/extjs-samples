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


var MyPanel = Ext.extend(Ext.Panel, {
    initComponent: function () {
        Ext.applyIf(this, {
            title: 'TitleWithApply',
            items: [{
                textField: '123',
                labelField: 'name'
            }],
        });

        MyPanel.superclass.initComponent.call(this);
        console.log(this);


    },
    log: function () {
        console.log(this);
    }

});

var ClassLog = Ext.extend(Ext.util.Observable, {
   log: function (str) {
       console.log(str);
   }
});

var ClassLogFormated = Ext.extend(ClassLog, {
    log: function (obj) {
        var strName = obj.name;
        var strSurname = obj.surname;
        ClassLogFormated.superclass.log.call(this, strName + ' ' +strSurname);
    }
});



var myPan = new MyPanel({
    title: 'myPan',
});

myPan.log.call(this);


var myPan2 = new MyPanel({
    title: 'myPan2',
});

myPan2.log.call(this);



function User(name,age){
    this.name = name;
    this.age = age;
}
var tom = new User('Tom', 26);
function dispaly() {
    console.log(this.name);
}

dispaly.call(tom);

Ext.override(MyPanel, {
    initComponent: function(){
        Ext.apply(this, {
            title: 'overrided title',
        });

        MyPanel.superclass.initComponent.call(this);
    },
    log: function() {
        console.log(this, 'Overriding method');
    }
});
myPan.log();

var myPan3 = new MyPanel();
myPan3.log();


//
// animal = {
//     voice: function () {
//         console.log('Animal')
//     }
// };
//
// dog = {
//     voice: function () {
//         console.log('Dog')
//     }
// };
//
// animal.voice();
// dog.voice();
// dog.voice.call(this);


var exClassLog = new ClassLogFormated();
exClassLog.log({
    name: 'Oleg',
    surname: 'Ivanov'
});
var exClassLog2 = new ClassLog();
exClassLog2.log({
    name: 'Ivan',
    surname: 'Ivanov'
});
