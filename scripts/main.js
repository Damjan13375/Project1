var gameNames = ["Dotmocracy", "Project Mid-way Evaluation", "The 5 Whys", "Future Trends", "Story Building", "Take a Stand", "IDOARRT Meeting Design", "3 Action Steps", "Letter to Myself", "Active Listening", "Feedback I Appreciate", "Explore your values", "Reflection Individual", "Back-turned Feedback", "Conflict Responses", "Myers-Briggs Team Reflection", "Personal Presentations", "Circles of influence"];
var time1 = ["5-30 минути", "30-60 минути", "30-60 минути", "60-120 минути", "30-60 минути", "60-120 минути", "5-30 минути", "120-240 минути", "5-30 минути", "60-120 минути", "60-120 минути", "60-120 минути", "30-60 минути", "60-120 минути", "60-120 минути", "60-120 минути", "60-240 минути", "30-120 минути"];
var cattegory1 = ["Акција", "Акција", "Иновација", "Иновација", "Иновација", "Иновација", "Акција", "Акција", "/", "Лидерство", "Лидерство", "Лидерство", "Лидерство", "Лидерство", "Тим", "Тим", "Тим", "/"];

function indexLoad() {
    var gName = document.querySelectorAll(".gName");


    let images = document.querySelectorAll(".image");
    let arrayFromImg = Array.from(images);


    var imgPlace = document.querySelectorAll(".dright");
    var gameImgArr = Array.from(imgPlace);

    var gameT = document.querySelectorAll(".gameTime");
    var cattegories = document.querySelectorAll(".cattegory");

    var t = 0;
    for (t; t < gName.length; t++) {
        console.log('mozebi');
        gName[t].innerHTML = gameNames[t];
        arrayFromImg[t].style.backgroundImage = "url(imgs/stock" + [t] + ".jpg)";
        gameImgArr[t].style.backgroundImage = "url(imgs/game" + [t] + ".png)";
        gameImgArr[t].style.backgroundSize = "cover";
        gameT[t].innerHTML = time1[t];
        cattegories[t].innerHTML = cattegory1[t];
    }
    var link1 = document.getElementById("try1");


    link1.addEventListener("click", function click1() {
        localStorage.setItem("page1", "game1");
    });
}

// function singlePageLoad() {
//     let onetry = localStorage.getItem("page1");
//     var onetry1 = JSON.parse(onetry);
//     console.log(onetry);
//}
// var link1 = document.getElementById("try1");
//     var href = link1.href;
//     var myJSON1 = JSON.stringify(href);
//     localStorage.setItem("world", "myJSON1");
// let obj = { name: "john" };
// var myJSON = JSON.stringify(obj);
// console.log(myJSON);
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("opacity").style.display = "block";
    // document.body.setAttribute("id", "opacity");


}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("opacity").style.display = "none";


}

var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
if (page === "index.html") {
    indexLoad();
}
if (page === "singlepage.html") {
    console.log('yes');
    singlePageLoad();
    var ghg = localStorage.getItem("page1");
    console.log(ghg);
}