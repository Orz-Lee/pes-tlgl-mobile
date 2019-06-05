/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'app',

    requires: [
        'Ext.MessageBox'
    ],
    modles: [
        'MenuDataViewModel'
    ],
    stores: [
        'MenuDataViewStore',
        'CostDataViewStore'
    ],
    views: [
        'Main',
        'MenuView',
        'MenuDataItem'
    ],

    launch: function() {

        /*var url = '10.99.222.85';
        var port = '8080';
        var serverName = 'pes-tlgl-app';
        rootUrl = 'http://'+url+':'+port+'/'+serverName;*/
        //rootUrl = 'http://60.2.15.147:9001';
        rootUrl = 'http://192.168.1.54:9001';
        root = Ext.create('app.view.RootNavigationView');
        root.push(Ext.create('app.view.LoginView'));
        //root.push(Ext.create('app.view.XinDingTurnStoreView'));
        Ext.Viewport.add(root);

    }
});
