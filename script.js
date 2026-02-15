// DOM Manipulation based on Unit 4: JavaScript
var body = document.getElementById("pageBody");
var sizeState = 0; // 0: Normal, 1: Large, 2: XL

function toggleContrast() {
    body.classList.toggle("high-contrast");
}

function changeSize() {
    sizeState++;
    if (sizeState > 2) sizeState = 0;

    body.classList.remove("large-text", "xl-text");
    if (sizeState == 1) body.classList.add("large-text");
    if (sizeState == 2) body.classList.add("xl-text");
}

function changeLang(lang) {
    // Using basic getElementById as taught in the handout
    if (lang == 'hi') {
        document.getElementById("mainHeading").innerHTML = "छात्र क्लबों का अन्वेषण करें";
        document.getElementById("subHeading").innerHTML = "अपनी रुचि खोजें और आज ही समुदाय में शामिल हों।";
        document.getElementById("nav1").innerHTML = "सभी क्लब";
        document.getElementById("nav2").innerHTML = "कार्यक्रम";
        document.getElementById("joinBtn").innerHTML = "अभी जुड़ें";
        document.getElementById("c1-title").innerHTML = "कोडिंग क्लब";
        document.getElementById("c2-title").innerHTML = "कला संघ";
        document.getElementById("c3-title").innerHTML = "संगीत बैंड";
        document.getElementById("c1-desc").innerHTML = "वेब विकास और प्रतियोगिता प्रोग्रामिंग सीखें।";
        document.getElementById("c2-desc").innerHTML = "स्केचिंग, पेंटिंग और डिजिटल कला वर्कशॉप।";
        document.getElementById("c3-desc").innerHTML = "सभी प्रकार के संगीत के लिए संगीतकारों के लिए।";
        document.getElementsByClassName("club-card-view-details")[0].innerHTML = "विवरण देखें";
        document.getElementsByClassName("club-card-view-details")[1].innerHTML = "विवरण देखें";
        document.getElementsByClassName("club-card-view-details")[2].innerHTML = "विवरण देखें";
    } else {
        document.getElementById("mainHeading").innerHTML = "Explore Student Clubs";
        document.getElementById("subHeading").innerHTML = "Find your interest and join a community today.";
        document.getElementById("nav1").innerHTML = "All Clubs";
        document.getElementById("nav2").innerHTML = "Events";
        document.getElementById("joinBtn").innerHTML = "Join Now";
        document.getElementById("c1-title").innerHTML = "Coding Club";
        document.getElementById("c2-title").innerHTML = "Art Guild";
        document.getElementById("c3-title").innerHTML = "Music Band";
        document.getElementById("c1-desc").innerHTML = "Learn web development and competitive programming.";
        document.getElementById("c2-desc").innerHTML = "Sketching, painting, and digital art workshops.";
        document.getElementById("c3-desc").innerHTML = "For musicians of all genres.";
        document.getElementsByClassName("club-card-view-details")[0].innerHTML = "View Details";
        document.getElementsByClassName("club-card-view-details")[1].innerHTML = "View Details";
        document.getElementsByClassName("club-card-view-details")[2].innerHTML = "View Details";
    }
}