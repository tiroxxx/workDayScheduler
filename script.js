var currentDate = $("#currentDay");
// display current date on the page
currentDate.text(moment().format("dddd, MMMM Do"));

var tempArr = [];



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
    // if theres anything in the locar storage, put in on the page
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
       $("#11").text(info);
    }

    info = localStorage.getItem("hour-12");
    if(info !== null){
       $("#12").text(info);
    }

    info = localStorage.getItem("hour-13");
    if(info !== null){
       $("#13").text(info);
    }

    info = localStorage.getItem("hour-14");
    if(info !== null){
       $("#14").text(info);
    }

    info = localStorage.getItem("hour-15");
    if(info !== null){
       $("#15").text(info);
    }

    info = localStorage.getItem("hour-16");
    if(info !== null){
       $("#16").text(info);
    }

    info = localStorage.getItem("hour-17");
    if(info !== null){
       $("#17").text(info);
    }
    // capture current hour and turn it into integer
    var currentHour = parseInt(moment().format("H"));
    // loop through 
    $(".description").each(function() {

        var timeBlock = parseInt($(this).attr("data-hour"));
        console.log($(this).attr("data-hour"));
        if(timeBlock < currentHour) {
            $(this).addClass("past");
        }

        else if(timeBlock == currentHour) {
            $(this).addClass("present");
        }

        else {
            $(this).addClass("future");
        }

    });

}




