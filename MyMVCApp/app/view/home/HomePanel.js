Ext.define("Quest.view.home.HomePanel", {
    extend: "Ext.Panel",
    xtype: "homepanel",
    config: {
        layout: {
            type: "hbox", pack: "center", align: "center"
        },
        items: [
                {
                    xtype : "list",
                    itemTpl : "{name}",
                    store : "CountryStore",
                    height : 400,
                    width : 400
                },
                {
                    xtype: "titlebar",
                    docked : "top",
                    title: "Welcome",
                    items: [
                        {
                            xtype : "button",
                            text: "Settings",
                            align : "right"
                        }
                    ]
                }
        ]
    }
});