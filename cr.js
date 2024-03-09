
  // Define a custom class that extends fabric.Rect
  const CustomRect = fabric.util.createClass(fabric.Rect, {
    // Specify the type for serialization
    type: 'customRect',
    age: '50',
    
    // Constructor
    initialize: function(options) {
      // Call the parent class's constructor
      this.callSuper('initialize', options);
      // Custom property with a default value
      this.customProperty = options.customProperty || 'default';
    },

    // Override the toObject method to include the custom property
    toObject: function() {
      return fabric.util.object.extend(this.callSuper('toObject'), {
        customProperty: this.customProperty
      });
    },

    // Custom method
    customMethod: function() {
      console.log('This is a custom method specific to the CustomRect class.');
    }
  });


