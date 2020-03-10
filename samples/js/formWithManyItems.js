Ext.onReady(function(){


    var fullNameBlock = [{
        items: {
            xtype: 'fieldset',
            title: 'Full Name',
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'First name',
                    name: 'first-name'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Middle name',
                    name: 'middle-name'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Last name',
                    name: 'last-name'
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Gender',
                    columns: 1,
                    items: [
                        {boxLabel: 'Male', name: 'rb-male'},
                        {boxLabel: 'Female', name: 'rb-female'},
                        {boxLabel: 'Other', name: 'rb-other'},
                    ]
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
                    name: 'birth-country'
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
        layout: 'form',
        frame: true,
        items: [fullNameBlock, dateAndCity, otherInformation]
    });

    var win = new Ext.Window({
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
                    var formValues = fp.getForm().getValues();
                    console.log(formValues);
            }
            },
            {
                text: 'Reset',
                handler: function(){
                    fp.getForm().reset();
                }
            }
    ]
    });

    win.show();

});