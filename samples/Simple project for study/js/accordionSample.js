Ext.ns('App.accordionSample');
App.accordionSample.createAccordionSample = function () {
    var MyAccordionLayout = Ext.create({
        xtype: 'panel',
        title: 'Tablet',
        layout: 'accordion',
        x: 100,
        y: 100,
        floating: true,
        shadow: false,
        width: 500,
        height: 200,
        renderTo: Ext.getBody(),
        items: [
            {
                xtype: 'panel',
                title: 'Item 1',
                html: 'Some text in Item 1',
                border: false
            },
            {
                xtype: 'panel',
                title: 'Item 2',
                html: 'Some text in Item 2',
                border: false
            },
            {
                xtype: 'panel',
                title: 'Item 3',
                html: 'Some text in Item 3',
                border: false
            }
        ],

        draggable: {

            insertProxy: false,

//      Called for each mousemove event while dragging the DD object.
            onDrag : function(e){
//          Record the x,y position of the drag proxy so that we can
//          position the Panel at end of drag.
                var pel = this.proxy.getEl();
                this.x = pel.getLeft(true);
                this.y = pel.getTop(true);
            },

//      Called on the mouseup event.
            endDrag : function(e){
                this.panel.setPosition(this.x, this.y);
            }
        }
    });
    return MyAccordionLayout;
};
