const sideNav = document.getElementById("sideNav");
const sideButton = document.getElementById("popoutButton");
const pageContainer = document.getElementById("pageContainer");
sideButton.onclick = function(){
    sideButton.classList.toggle("expanded");
    sideButton.classList.toggle("closed");
    sideNav.classList.toggle("sideNavHide");
    pageContainer.classList.toggle("pageContClosed")
};