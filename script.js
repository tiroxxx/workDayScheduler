var currentDate = $("#currentDay");
// display current date on the page
currentDate.text(moment().format("dddd, MMMM Do"));

//adding the inputs in the locar storage
$("#btn9").on("click", function () {
    localStorage.setItem("hour-9", $("#9").val())
});

$("#btn10").on("click", function () {
    localStorage.setItem("hour-10", $("#10").val())
});

$("#btn11").on("click", function () {
    localStorage.setItem("hour-11", $("#11").val())
});

$("#btn12").on("click", function () {
    localStorage.setItem("hour-12", $("#12").val())
});

$("#btn13").on("click", function () {
    localStorage.setItem("hour-13", $("#13").val())
});

$("#btn14").on("click", function () {
    localStorage.setItem("hour-14", $("#14").val())
});

$("#btn15").on("click", function () {
    localStorage.setItem("hour-15", $("#15").val())
});

$("#btn16").on("click", function () {
    localStorage.setItem("hour-16", $("#16").val())
});

$("#btn17").on("click", function () {
    localStorage.setItem("hour-17", $("#17").val())
});


init();
// initialize page
function init() {
    var info = localStorage.getItem("hour-9");
    if(info !== null){
       $("#9").text(info);
    }

    info = localStorage.getItem("hour-10");
    if(info !== null){
       $("#10").text(info);
    }

    info = localStorage.getItem("hour-11");
    if(info !== null){
       $("#11").text(localStorage.getItem("hour-11")) 
    }

    info = localStorage.getItem("hour-12");
    if(info !== null){
       $("#12").text(localStorage.getItem("hour-12")) 
    }

    var info = localStorage.getItem("hour-13");
    if(info !== null){
       $("#13").text(localStorage.getItem("hour-13")) 
    }

    var info = localStorage.getItem("hour-14");
    if(info !== null){
       $("#14").text(localStorage.getItem("hour-14")) 
    }

    var info = localStorage.getItem("hour-15");
    if(info !== null){
       $("#15").text(localStorage.getItem("hour-15")) 
    }

    var info = localStorage.getItem("hour-16");
    if(info !== null){
       $("#16").text(localStorage.getItem("hour-16")) 
    }

    var info = localStorage.getItem("hour-17");
    if(info !== null){
       $("#17").text(localStorage.getItem("hour-17")) 
    }
    
    var currentHour = moment().format("H");
    
    console.log(currentHour);

    if(currentHour == $(".time-block")) 
}




