// 2021-04-06 15:15:19.185

window.addEventListener("mpt_mpathy_ready", function() {
  window.Mpathy.configureProject(function (Mpathy, Project) {
    Project.addScope(/.*/, function(scope) {
      scope.addNodeConfig("div.pf-search-searchbox > input", { maskAttributes: null, maskKeyEvents: false });
      scope.addNodeConfig("div.searchbox > input", { maskAttributes: null, maskKeyEvents: false });
    });
  });
});