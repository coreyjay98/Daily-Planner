const textDivs = $(".textDivs");
const saveButton = $(".saveBtn");
const container = $(".container");
const rows = $(".row");

var datetime = 0,
  date = 0;

// Function to create Date and run at the top of page
var update = function () {
  let date = moment();
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};
//Updates date every second to keep in time with clock

$("document").ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});
// number value of current moment in 24 hour time
const currentHour = parseInt(moment().format("HH:mm"));

// Changes each colour of text areas corresponding with time
$(".textDivs").each(function () {
  let divData = parseInt($(this).attr("id"));
  if (currentHour > divData) {
    $(this).addClass("past");
  } else if (currentHour === divData) {
    $(this).addClass("present").removeClass("past");
  } else {
    $(this).addClass("future").removeClass("past present");
  }
});

//Stores any text entered into text boxes
container.on("click", "button", function (event) {
  event.preventDefault();
  const buttonData = $(this).attr("data-btn");
  let textData = $("input[data-text = '" + buttonData + "']").val();
  localStorage.setItem(buttonData, textData);
});

//retrieves saved text Items from storage and displays on page
$(function () {
  $("input[data-text]").each(function () {
    const textKey = $(this).attr("data-text");
    let previousText = localStorage.getItem(textKey);
    $(this).val(previousText);
  });
});
