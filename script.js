const textDivs = $(".textDivs");
const saveButton = $(".saveBtn");
const container = $(".container");
const inputForm = $(".inputForm");
const rows = $(".row");

var datetime = 0,
  date = 0;

var update = function () {
  let date = moment();
  datetime.html(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

$("document").ready(function () {
  datetime = $("#currentDay");
  update();
  setInterval(update, 1000);
});

const currentHour = parseInt(moment().format("HH:mm"));

$(".textDivs").each(function () {
  let divData = parseInt($(this).attr("id"));
  console.log("divdata", divData);
  console.log("currenthour", currentHour);
  if (currentHour > divData) {
    console.log("past");
    $(this).addClass("past");
  } else if (currentHour === divData) {
    console.log("present");
    $(this).addClass("present").removeClass("past");
  } else {
    console.log("future");
    $(this).addClass("future").removeClass("past present");
  }
});

container.on("click", "button", function (event) {
  event.preventDefault();
  const buttonData = $(this).attr("data-btn");
  console.log(buttonData);
  let textData = $("input[data-text = '" + buttonData + "']").val();
  localStorage.setItem(buttonData, textData);
});

$(function () {
  $("input[data-text]").each(function () {
    const textKey = $(this).attr("data-text");
    let previousText = localStorage.getItem(textKey);
    $(this).val(previousText);
  });
});
