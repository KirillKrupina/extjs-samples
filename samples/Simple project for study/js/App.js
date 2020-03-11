Ext.ns('App');
App.run = function () {

  var myWin = Ext.create({
      xtype: 'window',
      items: [
          {
              xtype: 'button',
              text: 'Create Form With Many Items',
              handler: function () {
                  var win1 = App.Module1.createFormWithManyItems();
                  win1.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Fit',
              handler: function () {
                  var win2 = App.ModuleLayout.createLayoutFit();
                  win2.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Accordion',
              handler: function () {
                  var win3 = App.accordionSample.createAccordionSample();
                  win3.show();
              }
          }
          ]
  });
    myWin.show();



};
