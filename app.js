
require.config({
    paths: {
        'underscore': 'lib/underscore', // AMD support
        'backbone': 'lib/backbone'
    }
});

require([
  'jquery',
  'underscore',
  'src/views/editor'
], function($, _, Editor) {
  'use strict';

  var editor = new Editor({
    el: '#editor'
  });

  editor.render();

});