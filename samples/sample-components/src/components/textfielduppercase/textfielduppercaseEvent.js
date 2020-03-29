Ext.ns('App.components');

App.components.TextFieldUppercaseEvent = Ext.extend(Ext.form.TextField, {
        enableKeyEvents: true,
        initEvents: function () {
<<<<<<< HEAD
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
=======
            this.on('keyup', this.onKeyUp, this);
            App.components.TextFieldUppercaseEvent.superclass.initEvents.apply(this, arguments);
        },
        onKeyUp: function (me, e) {
            console.log(e.value);
            var textfield = e.value.toUpperCase();
            this.setValue(textfield);
        }
>>>>>>> 0e2eeceea30274e8451daffc814cf4908d47d56c
    }
);

Ext.reg('textfielduppercaseevent', App.components.TextFieldUppercaseEvent);
