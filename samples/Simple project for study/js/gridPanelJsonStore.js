Ext.onReady(function () {

    var posts = new Ext.data.JsonStore({
       // url: 'http://localhost:3000/db',
        storeId: 'myPosts',
        autoLoad: true,
        root: 'posts',
        fields: ['id', 'title', 'author'],

    });

    var myGrid = Ext.create({
        xtype: 'grid',
        store: posts,
        stripeRows: true,
        columns: [
            {
                id: 'id',
                header: 'ID',
                width: 20,
                sortable: true,
            },
            {
                id: 'title',
                header: 'Title',
                width: 200,
                sortable: true,
            },
            {
                id: 'author',
                header: 'Author',
                width: 200,
                sortable: true,
            }
        ]
    });


    var gridWindowJson = Ext.create({
        xtype: 'window',
        items: myGrid
    }).show();

});
