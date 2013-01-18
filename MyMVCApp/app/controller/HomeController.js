Ext.define("Quest.controller.HomeController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            settingsButton: "homepanel titlebar button",
            homeButton: "settingspanel titlebar button",
            settingsPanel: "#quest-settingspanel",
            homePanel: "#quest-homepanel"
        },
        control: {
            settingsButton: {
                tap: "settingsButtonTapped"
            },
            homeButton: {
                tap: "homeButtonTapped"
            }
        }
    },
    homeButtonTapped: function () {
        Ext.Viewport.setActiveItem(this.getHomePanel());
    },
    settingsButtonTapped: function () {
        if (this.getSettingsPanel() == undefined)
            Ext.Viewport.setActiveItem({ xtype: "settingspanel", id: "quest-settingspanel" });
        else
            Ext.Viewport.setActiveItem(this.getSettingsPanel());
    }
});