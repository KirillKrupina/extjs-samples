Ext.ns('App.Window.FieldSets.formWithInputs');

var formWithInputs = {
    items: [
        {
            xtype: 'textfielduppercase',
            fieldLabel: 'textfielduppercase 1',
            name: 'textfielduppercase2',
        },
        {
            xtype: 'textfielduppercase',
            fieldLabel: 'textfielduppercase 2',
            name: 'textfielduppercase2',
        },
        {
            xtype: 'textfield',
            fieldLabel: 'textfield',
            name: 'textfield'
        },
        {
            xtype: 'button',
            text: 'Button',
            scope: this,
            handler: function () {
                var smallText = formWithInputs.getForm().findField('textfield').getValue();
                console.log(smallText)

            }
        }
    ]

};

