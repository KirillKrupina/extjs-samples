Ext.ns('App.components');

App.components.TextFieldUppercaseEvent = Ext.extend(Ext.form.TextField, {
        enableKeyEvents: true,
        initEvents: function () {
            this.on('keyup', this.onKeyUp, this);
            App.components.TextFieldUppercaseEvent.superclass.initEvents.apply(this, arguments);
        },
        onKeyUp: function (me, e) {
            console.log(e.value);
            var textfield = e.value.toUpperCase();
            this.setValue(textfield);
        }
    }
);

Ext.reg('textfielduppercaseevent', App.components.TextFieldUppercaseEvent);
