Ext.ns('App.components');

App.components.TextFieldUppercaseEvent = Ext.extend(Ext.form.TextField, {
        enableKeyEvents: true,
        initEvents: function () {
            this.on('keyup', this.onKeyup, this);
            App.components.TextFieldUppercaseEvent.superclass.initEvents.apply(this, arguments);
        },
        onKeyup: function (me, e) {
            console.log(e.value);
            var textfield = e.value;
            this.setValue(textfield.toUpperCase());
        }
    }
);

Ext.reg('textfielduppercaseevent', App.components.TextFieldUppercaseEvent);
