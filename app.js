
require.config({
    paths: {
        'underscore': 'lib/underscore', // AMD support
        'backbone': 'lib/backbone', // AMD support
        'epiceditor': 'lib/epiceditor'
    }
});

require([
  'jquery',
  'underscore',
  'views/editor'
], function($, _, Editor) {
  'use strict';

  var editor = new Editor({
    el: '#editor'
  });

  editor.render();

});