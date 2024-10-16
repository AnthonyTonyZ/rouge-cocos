System.register(["./application.13ae9.js"], function (_export, _context) {
  "use strict";

  var Application, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_application13ae9Js) {
      Application = _application13ae9Js.Application;
    }],
    execute: function () {
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});