Ext.define("Quest.store.CountryStore", {
    extend: "Ext.data.Store",
    config: {
        model: "Quest.model.Country",
        autoLoad: false,
        proxy: {
            type: "ajax",
            url: "quest.txt",
            reader: {
                type : "json",
                rootProperty : "countriesInAsia"
            }
        }
    }
});