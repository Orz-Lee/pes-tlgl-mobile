Ext.define('app.store.CostDataViewStore', {
    extend: 'Ext.data.Store',

    requires: [
        'app.model.CostCenterCodeModel'
    ],

    config: {
        data: [],
        model: 'app.model.CostCenterCodeModel',
        storeId: 'CostDataViewStore'
    }
});