Ext.ns('App.components.textfielduppercase');

App.components.textfielduppercase = Ext.extend(Ext.form.TextField, {
        initComponent : function(){
            Ext.applyIf(this, {
                style: {
                    textTransform: 'uppercase',
                }
            })
        }}
);

Ext.reg('textfielduppercase', App.components.textfielduppercase);
