//1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");
});

//2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$("article img").addClass("image-center");

//3. Remove the last paragraph in the article.

$("p:last-of-type").remove();

//4. Set the font size of the title to be a random pixel size from 0 to 100.

$("title").css("font-size", "50px");

//5. Add an item to the list; it can say whatever you want.

$("ol").append($("<li>Another list item</li>"));

//6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

$("aside")
  .empty()
  .append(
    "<p>Sorry that lists suck and there was a list here before. I have now removed the list because noone really likes lists</p>"
  );

//7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in lhe inputs are.
$(".form-control").on("keyup blur change", function () {
  let red = $(".form-control").eq(0).val();
  let blue = $(".form-control").eq(1).val();
  let green = $(".form-control").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + red + "," + green + "," + blue + ")"
  );
});

// 8. Add an event listener so that when you click on the image,
//    it is removed from the DOM.

$("img").on("click", function (e) {
  $(e.target).remove();
});

//Movies App
// - Contains a form with two inputs for a title and rating along with a button to submit the form.

// - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// - When the button to remove is clicked, remove each title and rating from the DOM.
// - Ensure that the rating of a movie can only be between 0 and 10.
// - Ensure that a title has at least 2 characters in it.
// - Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.
