var navLinks = document.getElementById("navLinks");

let closeIMGIcon = document.getElementById("closeIMG");
closeIMGIcon.addEventListener("click", hideMenu);

let threebarsImage = document.getElementById("3bars");
threebarsImage.addEventListener("click", showMenu);

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}




