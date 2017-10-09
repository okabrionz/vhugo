// JS Goes here - ES6 supported
$(function() {
  var mrbo = {
    modules: {
      about: require('./modules/_about.js')
    },

    init: function() {
      var greetings = this.modules.about('mr.bo & co');

      // Say hello
      console.log(greetings);
    }
  };

  mrbo.init();
});