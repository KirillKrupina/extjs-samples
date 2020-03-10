Ext.onReady(function() {
  


    var formPanel1 = new Ext.form.FormPanel({

        layout: 'form',
        border: true,
        frame: true,
        autoHeight: true,
        monitorValid: true,
        items: [
            {
                xtype: 'textarea',
                fieldLabel: 'Text Area'
                
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Number Field' 
            },
            {
                xtype: 'sliderfield',
                fieldLabel: 'Slider Field' 
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Display Field', 
                value: '10'
            },
            {
                xtype: 'colorpalette',
                fieldLabel: 'Color Field'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date Field',
                format: ''                  // d - only days, 
            },
            {
                xtype: 'checkbox',
                fieldLabel: 'Single Checkbox'
            },
            {
                xtype: 'checkboxgroup',
                fieldLabel: 'Checkbox Group',
                items: [
                    {boxLabel: 'Item 1', name: 'cb-group-1', checked: true},
                    {boxLabel: 'Item 2', name: 'cb-group-2'},
                    {boxLabel: 'Item 3', name: 'cb-group-3'},
                    {boxLabel: 'Item 4', name: 'cb-group-4'},
                    {boxLabel: 'Item 5', name: 'cb-group-5'},
                ]
            },
            {
                xtype: 'radio',
                fieldLabel: 'Single Radiobox'
            },
            {
                xtype: 'radiogroup',
                fieldLabel: 'Radiobox Group',
                items: [
                    {boxLabel: 'Item 1', name: 'rb-group-1', inputValue: 1, checked: true},
                    {boxLabel: 'Item 2', name: 'rb-group-2', inputValue: 2},
                    {boxLabel: 'Item 3', name: 'rb-group-3', inputValue: 3},
                    {boxLabel: 'Item 4', name: 'rb-group-4', inputValue: 4},
                    
                ]
            },
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