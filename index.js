

var navLinks = document.getElementById("navLinks");

let closeIMGIcon = document.getElementById("closeIMG");
closeIMGIcon.addEventListener("click", hideMenu);

let threebarsImage = document.getElementById("3bars");
threebarsImage.addEventListener("click", showMenu);

// MOBILE MODE SLIDE
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Header Buttons
let callButton = document.getElementById("callBtn");
let locationButton = document.getElementById("locationBtn");

callButton.addEventListener("click", goToCall);
locationButton.addEventListener("click", goToLocation);

function goToLocation() {
    if (screen.width > 700) {
        document.documentElement.scrollTop = 2800;
    }
    else {
        document.documentElement.scrollTop = 3300;
    }
}

function goToCall() {
    if (screen.width > 700) {
        document.documentElement.scrollTop = 2100;
    }
    else {
        document.documentElement.scrollTop = 2800;
    }

}





