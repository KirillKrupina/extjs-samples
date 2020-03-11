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
          },
          {
              xtype: 'button',
              text: 'Create Layout Absolute',
              handler: function () {
                  var win4 = App.AbsoluteLayoutSample.createAbsoluteLayout();
                  win4.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Column',
              handler: function () {
                  var win5 = App.columnLayoutSample.createColumnLayout();
                  win5.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Vbox',
              handler: function () {
                  var win6 = App.vBoxLayoutSample.createVBoxLayoutWindow();
                  win6.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Hbox',
              handler: function () {
                  var win7 = App.hboxLayoutSample.createHBoxLayoutWindow();
                  win7.show();
              }
          },
          {
              xtype: 'button',
              text: 'Create Layout Border',
              handler: function () {
                  var win8 = App.borderLayoutSample.createBorderLayoutWindow();
                  win8.show();
              }
          },

          ]
  });
    myWin.show();



};
