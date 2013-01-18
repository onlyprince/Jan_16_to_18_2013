﻿Ext.define("Quest.controller.LoginController", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            loginButton: "loginpanel button[id=quest-loginbutton]",
            userName : "loginpanel textfield[label=User name]",
            password : "#quest-passwordtext"
        },
        control: {
            loginButton: {
                tap: "loginButtonTapped"
            }
        }
    },
    loginButtonTapped: function () {
        alert(this.getUserName().getValue() + ", " + 
            this.getPassword().getValue());
    }
});