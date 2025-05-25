(() => {
  // src/main.js
  var s;
  s = document.createElement("script");
  s.src = chrome.runtime.getURL("dist/room.js");
  s.onload = () => s.remove();
  (document.head || document.documentElement).append(s);
})();
//# sourceMappingURL=main.js.map
