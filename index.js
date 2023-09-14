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






















