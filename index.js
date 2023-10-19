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

function goToCall() {
    const element = document.getElementById("contactGoTo");
    element.scrollIntoView();
}

function goToLocation() {
    const element = document.getElementById("locationGoTo");
    element.scrollIntoView();
}

/* function goToCall() {
    if (screen.width > 700) {
        document.documentElement.scrollTop = 3800;
    }
    else {
        document.documentElement.scrollTop = 6000;
    }
}  */

// Collapsible (Important!)

let collapsibleLabel = document.getElementsByClassName("collapsible-label")

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;    
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

/* // Course-Col
const boxes = document.querySelectorAll('.course-col');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 4 * 5;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}

// Course H1
const courseH1 = document.querySelector('#courseHeader');
window.addEventListener('scroll', checkCourseH1);
checkCourseH1();

function checkCourseH1() {
    const triggerBottom = window.innerHeight;
    const h1Top = courseH1.getBoundingClientRect().top;

    if (h1Top < triggerBottom) {
        courseH1.classList.add('show')
    }
    else {
        courseH1.classList.remove('show')
    }
}

// Course P
const courseP = document.querySelector('#courseP')
window.addEventListener('scroll', checkCourseP);
checkCourseP();

function checkCourseP(){
    const triggerBottom = window.innerHeight;
    const PTop = courseP.getBoundingClientRect().top;

    if (PTop < triggerBottom) {
        courseP.classList.add('show')
    }
    else {
        courseP.classList.remove('show')
    }
} */






















