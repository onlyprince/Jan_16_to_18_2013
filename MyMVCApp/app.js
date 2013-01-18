Ext.application({
    name: "Quest", //root namespace name
    appFolder: "app", //default
    controllers: ["LoginController","HomeController"],
    views: ["LoginPanel","home.HomePanel","home.SettingsPanel"],
    models: ["Country"],
    stores: ["CountryStore"],
    profiles: [],
    launch: function () {
        Ext.Viewport.add({
            xtype : "loginpanel",
            id : "loginpanel"
        });
    }
});