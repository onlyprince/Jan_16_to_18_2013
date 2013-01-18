Ext.application({
    name: "Quest", //root namespace name
    appFolder: "app", //default
    controllers: ["LoginController"],
    views: ["LoginPanel"],
    models: [],
    stores: [],
    profiles: [],
    launch: function () {
        Ext.Viewport.add({
            xtype : "loginpanel",
            id : "loginpanel"
        });
    }
});