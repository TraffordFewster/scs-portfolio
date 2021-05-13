"use strict";

var sideNav = document.getElementById("sideNav");
var sideButton = document.getElementById("popoutButton");
var pageContainer = document.getElementById("pageContainer");

sideButton.onclick = function () {
  sideButton.classList.toggle("expanded");
  sideButton.classList.toggle("closed");
  sideNav.classList.toggle("sideNavHide");
  pageContainer.classList.toggle("pageContClosed");
};