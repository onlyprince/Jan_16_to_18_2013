Ext.define("Quest.view.LoginPanel", {
    extend: "Ext.Panel",
    xtype: "loginpanel",
    config: {
        items: [
                    {
                        xtype: "textfield",
                        id: "quest-usernametext",
                        label: "User name"
                    },
                    {
                        xtype: "passwordfield",
                        id: "quest-passwordtext",
                        label: "Password"
                    },
                    {
                        xtype : "button",
                        text : "Login",
                        id : "quest-loginbutton"
                    }
        ]
    }
});