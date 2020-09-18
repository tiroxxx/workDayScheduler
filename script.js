var currentDate = $("#currentDay");
// display current date on the page
currentDate.text(moment().format("dddd, MMMM Do"));

var textBox1 = $("#9");
var textBox2 = $("#10");
var textBox3 = $("#11");
var textBox4 = $("#12");
var textBox5 = $("#13");
var textBox6 = $("#14");
var textBox7 = $("#15");
var textBox8 = $("#16");
var textBox9 = $("#17");





console.log(moment().format("H"));





function setColor () {
    console.log($(this).attr("data-hour"));
    if($(this).attr("data-hour") < moment().format("H")) {
    }

}