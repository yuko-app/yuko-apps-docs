// Crisp chat — loaded on every docs page.
window.$crisp = window.$crisp || [];
window.CRISP_WEBSITE_ID = "d5d14217-7a46-479f-b1ba-17802fd6d550";

(function () {
  var s = document.createElement("script");
  s.src = "https://client.crisp.chat/l.js";
  s.async = 1;
  document.getElementsByTagName("head")[0].appendChild(s);
})();

// Any link ending in "#crisp-chat" opens the chat window instead of navigating.
document.addEventListener("click", function (e) {
  var link = e.target && e.target.closest && e.target.closest('a[href$="#crisp-chat"]');
  if (link) {
    e.preventDefault();
    window.$crisp.push(["do", "chat:open"]);
  }
});
