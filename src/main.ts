const s = document.createElement("script");
// @ts-ignore
s.src = chrome.runtime.getURL("room.js");
s.onload = () => {
  s.remove();
};
(document.head || document.documentElement).append(s);
