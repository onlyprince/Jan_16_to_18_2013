Ext.define("Quest.view.SettingsPanel", {
    extend: "Ext.Panel",
    xtype: "settingspanel",
    config: {
        items: [
                {
                    xtype: "titlebar",
                    title: "Welcome",
                    items: [
                                {
                                    iconCls: 'home',
                                    iconMask: true,
                                    align: 'left'
                                }
                    ]
                }
        ]
    }
});