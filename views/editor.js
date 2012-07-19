
define([
  'backbone',
  'lib/epiceditor'
], function(Backbone, ee) {

  return Backbone.View.extend({

    editor: null,

    initialize: function(opt) {
      console.log(ee);
      editor = new ee({
        container: this.el
      });
    },

    render: function() {

    }
  
  });
});