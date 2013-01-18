Ext.define("Quest.view.HomePanel", {
    extend: "Ext.Panel",
    xtype: "homepanel",
    config: {
        items: [
                {
                    xtype: "titlebar",
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