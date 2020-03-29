Ext.ns('App.components');

App.components.TextFieldUppercaseEvent = Ext.extend(Ext.form.TextField, {
        enableKeyEvents: true,
        initEvents: function () {
            //this.on('keyup', this.onKeyUp1, this);
            App.components.TextFieldUppercaseEvent.superclass.initEvents.apply(this, arguments);
        },
        onKeyUp: function (me,e) {
            console.log('onKeyUp2', arguments);
            var text = e.value.toUpperCase();

            if(text.length > 2) {
                App.components.TextFieldUppercaseEvent.superclass.onKeyUp.apply(this, arguments); 
            }
            this.setValue(text);
        },
        // onKeyUp: function (me, e) {
        //     console.log('onKeyUp', arguments);
        //     //App.components.TextFieldUppercaseEvent.superclass.onKeyUp.apply(this, arguments);
        //     App.components.TextFieldUppercaseEvent.superclass.onKeyUp.call(this, me);
        //     var text = e.value.toUpperCase();
        //     this.setValue(text);
        // }
    }
);

Ext.reg('textfielduppercaseevent', App.components.TextFieldUppercaseEvent);
