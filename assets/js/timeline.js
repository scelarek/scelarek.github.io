(function () {
  var root = document.querySelector(".htl");
  if (!root) return;
  var tabs = Array.prototype.slice.call(root.querySelectorAll("[role=tab]"));
  tabs.sort(function (a, b) { return a.dataset.order - b.dataset.order; });
  var panels = tabs.map(function (tab) { return document.getElementById(tab.getAttribute("aria-controls")); });
  var current = tabs.findIndex(function (tab) { return tab.getAttribute("aria-selected") === "true"; });

  function select(index, focus, moved) {
    index = Math.max(0, Math.min(tabs.length - 1, index));
    tabs.forEach(function (tab, i) {
      var on = i === index;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      panels[i].hidden = !on;
    });
    current = index;
    if (!focus && moved) panels[index].scrollIntoView({ block: "nearest", behavior: "smooth" });
    if (focus) tabs[index].focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () { select(i, false, true); });
    tab.addEventListener("keydown", function (event) {
      if (event.key === "ArrowRight") { event.preventDefault(); select(current + 1, true); }
      if (event.key === "ArrowLeft") { event.preventDefault(); select(current - 1, true); }
      if (event.key === "Home") { event.preventDefault(); select(0, true); }
      if (event.key === "End") { event.preventDefault(); select(tabs.length - 1, true); }
    });
  });
  Array.prototype.forEach.call(root.querySelectorAll(".gt-group"), function (group) {
    group.addEventListener("click", function (event) {
      if (event.target.closest(".gt-seg")) return;
      var rowTab = group.querySelector(".gt-row-tab");
      if (rowTab && event.target !== rowTab) rowTab.click();
    });
  });
  function fitLabels() {
    Array.prototype.forEach.call(root.querySelectorAll(".gt-item.inside"), function (item) {
      item.classList.add("fits");
      var text = item.querySelector(".gt-in");
      if (text.scrollWidth > text.clientWidth + 1) item.classList.remove("fits");
    });
    Array.prototype.forEach.call(root.querySelectorAll(".gt-seg"), function (seg) {
      seg.classList.remove("tight");
      var text = seg.querySelector(".gt-seg-text");
      if (text && text.scrollWidth > text.clientWidth) seg.classList.add("tight");
    });
  }
  fitLabels();
  window.addEventListener("resize", fitLabels);
  window.addEventListener("load", fitLabels);
  root.querySelector(".htl-prev").addEventListener("click", function () { select(current - 1, false); });
  root.querySelector(".htl-next").addEventListener("click", function () { select(current + 1, false); });
})();
