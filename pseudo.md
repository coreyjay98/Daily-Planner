create divs and style for planner //

add current date to top of page

add timer to page so divs change class as time passes

<!-- maybe a listener -->

add listeners to buttons that correspond with textarea next to it

save text to storage so refresh will not affect

make sure stored text stays after refresh

if (dateScript.isAfter(moment().subtract(10, "hours"))) {
console.log("hello");
}

$(".container").on("click", "button", function (button) {
  var res = $(this).data("btn");
console.log(res);
});
