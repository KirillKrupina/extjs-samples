Ext.ns('App');
App.Module1 = Ext.extend(Ext.Window,  {
    constructor: function(cfg) {
        cfg.buttons = [
            {
                xtype: 'button',
                text: 'CreateWindowShow',
                scope: this,
                handler: function () {
                    this.createWindowShow();
                }
            }
        ];
        cfg.items = [
            {
                xtype: 'button',
                text: 'CreateWindowShow',
                scope: this,
                handler: function () {
                    this.createWindowShow();
                }
            }
        ];
        App.Module1.superclass.constructor.call(this, cfg);
    }
});

