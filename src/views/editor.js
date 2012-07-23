
define([
  'backbone'
], function(Backbone) {

  return Backbone.View.extend({

    editor: null,

    initialize: function(opt) {
      this.editor = new EpicEditor({
        container: this.el,

        basePath: './css',

      }).load();
    },

    render: function() {

    }
  
  });
});