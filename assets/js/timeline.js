(function () {
  var root = document.querySelector(".htl");
  if (!root) return;
  var tabs = Array.prototype.slice.call(root.querySelectorAll(".htl-stop"));
  var panels = Array.prototype.slice.call(root.querySelectorAll(".htl-panel"));
  var current = tabs.length - 1;

  function select(index, focus) {
    index = Math.max(0, Math.min(tabs.length - 1, index));
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    current = index;
    tabs[index].scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    if (focus) tabs[index].focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { select(i, false); });
    tab.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); select(current + 1, true); }
      if (event.key === "ArrowLeft") { event.preventDefault(); select(current - 1, true); }
      if (event.key === "Home") { event.preventDefault(); select(0, true); }
      if (event.key === "End") { event.preventDefault(); select(tabs.length - 1, true); }
    });
  });
  root.querySelector(".htl-prev").addEventListener("click", function () { select(current - 1, false); });
  root.querySelector(".htl-next").addEventListener("click", function () { select(current + 1, false); });
})();
