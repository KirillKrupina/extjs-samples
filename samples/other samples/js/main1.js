
Ext.onReady(function(){

    var win = new Ext.Window({
         title: "title",

    });

  win.show();
 });


Ext.onReady(function(){



    var formPanel1 = new Ext.form.FormPanel({
        url: '/form1save',
        layout: 'form',
        border: true,
        frame: true,
        autoHeight: true,
        monitorValid: true,
        items:[{
            xtype: 'textfield',
            fieldLabel: 'form1field1',
            name: 'form1field1'
        },{
          xtype: 'label',
          name: 'label1',
          html: 'I`m label'
        }],
        buttons: [{
            text: 'submit',
            handler: function(){
                var form = formPanel1.getForm();



            }
        },
            {
                text: 'clear',
                handler: function(){
                    formPanel1.getForm().findField('form1field1').setValue('');
                }
            }
    ]
    });

    var win = new Ext.Window({
        title: 'Window Form',
        modal: false,
        layout: 'fit',
        border: true,
        frame: true,
        autoHeight: false,
        width: 600,
        shadow: false,
        items:[formPanel1],
        buttons:[{
            text: 'Ok'
        }]
    });

    win.show();

});




new Ext.Panel({
  title: 'Drag me',
  x: 100,
  y: 100,
  renderTo: Ext.getBody(),
  floating: true,
  frame: true,
  width: 400,
  height: 200,
  shadow: false,
  items: [{
    xtype: 'label',
    html: 'I`m label'
  }],
  draggable: {

      insertProxy: false,

//      Called for each mousemove event while dragging the DD object.
      onDrag : function(e){
//          Record the x,y position of the drag proxy so that we can
//          position the Panel at end of drag.
          var pel = this.proxy.getEl();
          this.x = pel.getLeft(true);
          this.y = pel.getTop(true);



      },

//      Called on the mouseup event.
      endDrag : function(e){
          this.panel.setPosition(this.x, this.y);
      }
  }
}).show();
