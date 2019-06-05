Ext.define('app.model.CostCenterCodeModel', {
    extend : 'Ext.data.Model',
    config : {
        fields: [
            {
                name: 'key',
                type: 'string'
            },
            {
                name: 'value',
                type: 'string'
            },
            {
                name:'nextField',
                type:'string'
            }
        ]
    }
});