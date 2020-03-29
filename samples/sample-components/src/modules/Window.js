Ext.ns('App.Window');


App.Window = Ext.extend(Ext.Window, {
    layout: 'fit',
    width: 400,
    height: 400,
    constructor: function (cfg) {
        cfg = Ext.applyIf(cfg, {
            title: 'ApplyIf'
        });
        this.createFormPanel();
        cfg.items = [this.formPanel];

        App.Window.superclass.constructor.call(this, cfg);

    },
    /**
     * @type Ext.form.FormPanel
     */
    formPanel: undefined,

    createFormPanel: function () {
        var formPanel = Ext.create({
            xtype: 'form',
            items: [
                {
                    xtype: 'textfielduppercaseevent',
                    fieldLabel: 'textfielduppercase 1',
                    name: 'textfielduppercase1',
                    listeners : {
                        keyup : function(){
                            console.log('textfielduppercase1/keyup');
                        }
                    }
                },
                {
                    xtype: 'textfielduppercaseevent',
                    fieldLabel: 'textfielduppercase 2',
                    name: 'textfielduppercase2',
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'textfield',
                    name: 'textfield'
                },
                {
                    xtype: 'textfielduppercaseevent',
                    fieldLabel: 'textfielduppercase 3',
                    name: 'textfielduppercase3',
                },
                {
                    xtype: 'button',
                    text: 'Button',
                    scope: this,
                    handler: function () {  
                        Ext.override(Ext.form.Field, {
                            setValue : function(v){
                                v = v.toUpperCase();
                                this.value = v;
                                if(this.rendered){
                                    this.el.dom.value = (Ext.isEmpty(v) ? '' : v);
                                    this.validate();
                                }
                                return this;
                            },
                        });
                        var smallText = formPanel.getForm().findField('textfield').getValue();
                        formPanel.getForm().findField('textfielduppercase1').setValue(smallText);
                        formPanel.getForm().findField('textfielduppercase2').setValue(smallText);


                    }
                }
            ],
            buttons: [
                {
                    xtype: 'button',
                    text: 'Submit',
                    scope: this,
                    handler: function () {
                        console.log(formPanel.getForm().getValues());
                    }
                },
                {
                    xtype: 'button',
                    text: 'Close',
                    scope: this,
                    handler: function () {
                        this.close();
                    }
                }
            ]
        });
        this.formPanel = formPanel;
    }

});
