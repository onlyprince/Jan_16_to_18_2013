Ext.define("Quest.controller.HomeController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            settingsButton: "homepanel titlebar button",
            homeButton: "settingspanel titlebar button",
            settingsPanel: "#quest-settingspanel",
            homePanel: "#quest-homepanel",
            countryList: "homepanel list"
        },
        control: {
            countryList: {
                itemtap: "countryListItemTapped"
            },
            homePanel: {
                initialize: "homePanelInitialized"
            },
            settingsButton: {
                tap: "settingsButtonTapped"
            },
            homeButton: {
                tap: "homeButtonTapped"
            }
        }
    },
    countryListItemTapped: function (a, b, c, record) {
        alert(record.get("population"));
    },
    homePanelInitialized: function () {
        var store = Ext.getStore("CountryStore");
        store.load();
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