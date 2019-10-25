window.onload = function() {
  setMvHeight();
};

window.addEventListener("resize", setMvHeight);

function setMvHeight() {
  const topNav = document.querySelector(".global-nav");
  const topNavHeight = topNav.clientHeight;

  const bottomNav = document.querySelector(".bottom-nav");
  const bottomNavHeight = bottomNav.clientHeight;

  const container = document.querySelector(".container");
  const containerPaddingTop = pxToNumber(
    window.getComputedStyle(container).getPropertyValue("padding-top")
  );
  const containerPaddingBottom = pxToNumber(
    window.getComputedStyle(container).getPropertyValue("padding-bottom")
  );

  const mainHeight =
    window.innerHeight -
    containerPaddingBottom -
    containerPaddingTop -
    topNavHeight -
    bottomNavHeight;

  const mainEl = document.querySelector(".main");
  mainEl.style.setProperty('height', mainHeight + 'px')
}

/**
 * @param {string} val
 * @return {number}
 */
function pxToNumber(val) {
  return Number(val.replace("px", ""));
}
