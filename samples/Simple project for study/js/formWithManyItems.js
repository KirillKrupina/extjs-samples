Ext.ns('App.Module1');
App.Module1.createFormWithManyItems = function(){
    var myLabel;
    var fullNameBlock = [{
        items: {
            xtype: 'fieldset',
            title: 'Full Name',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First name',
                    name: 'first-name',
                    allowBlank: false,
                    listeners: {
                        blur: function () {
                            this.setValue('blured');
                        },
                        focus: function () {
                            this.setValue('focused')
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Middle name',
                    name: 'middle-name',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last name',
                    name: 'last-name',
                    allowBlank: false
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Gender',
                    columns: 1,
                    items: [
                        {boxLabel: 'Male', name: 'rb'},
                        {boxLabel: 'Female', name: 'rb'},
                        {boxLabel: 'Other', name: 'rb'},
                    ]
                },
                {
                    xtype: 'label',
                    html: 'I`m label',
                    listeners: {
                        render: function (field) {
                            myLabel = field;
                        }
                    }
                },
                {
                    xtype: 'displayfield',
                    name: 'display1',
                    fieldLabel: 'Display'
                },
                {
                    xtype: 'button',
                    text: 'Button',
                    handler: function () {
                        fp.getForm().setValues({
                            display1: 'I`m display 1',
                            label1: 'I`m label 1'
                        })
                    }
                }
            ]
        }
    }];

    var dateAndCity = [{
        items:{
            xtype: 'fieldset',
            title: 'Date and Place of Birth',
            autoHeight: true,
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Birthday date',
                    name: 'birth-date'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'City',
                    name: 'birth-city'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Country',
                    name: 'birth-country',
                    allowBlank: false
                }
            ]
        }
    }];


    var otherInformation = [{
        items: {
            xtype: 'fieldset',
            title: 'Other information',
            autoHeight: true,
            items: [
                {
                    xtype: 'textarea',
                    fieldLabel: 'About you',
                    name: 'about-you',
                    width: 200
                }
            ]
        }
    }];


    var fp = new Ext.form.FormPanel({
        ulr: '/myController/save',
        layout: 'form',
        frame: true,
        items: [fullNameBlock, dateAndCity, otherInformation],
        monitorValid: true,
        buttons: [
            {
                text: 'OK',
                formBind: true,

            }
        ],
    });

    var win = Ext.create( {
        xtype: 'window',
        //var win = new Ext.Window({
        title: 'Window Form',
        modal: false,
        border: true,
        frame: true,
        autoHeight: false,
        width: 350,
        shadow: false,
        items:[fp],
        buttons:[
            {
                text: 'Submit',
                handler: function(){
                    var field = fp.getForm().findField('first-name').getValue();
                    console.log(field);
                    myLabel.setText(field);

                    var form = fp.getForm().items.items;
                    console.log(form)

                }
            },
            {
                text: 'Reset',
                handler: function(){
                    fp.getForm().reset();
                }
            },
            {
                text: 'Submit2',
                handler: function(){
                    fp.getForm().submit();
                }
            }
        ]
    });

    return win;
};




