fabric.CustomObject = fabric.util.createClass(fabric.Object, {
    type: 'customobject',
    
    initialize: function (options) {
        options = options || {};
        
        this.callSuper('initialize', options);
    }

    
    _render: function (ctx) {
    }
});
