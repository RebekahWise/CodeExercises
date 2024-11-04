//run code once DOM loads
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#fruit");
  const suggestions = document.querySelector(".suggestions ul");

  const array = [
    "Apple",
    "Apricot",
    "Avocado 🥑",
    "Banana",
    "Bilberry",
    "Blackberry",
    "Blackcurrant",
    "Blueberry",
    "Boysenberry",
    "Currant",
    "Cherry",
    "Coconut",
    "Cranberry",
    "Cucumber",
    "Custard apple",
    "Damson",
    "Date",
    "Dragonfruit",
    "Durian",
    "Elderberry",
    "Feijoa",
    "Fig",
    "Gooseberry",
    "Grape",
    "Raisin",
    "Grapefruit",
    "Guava",
    "Honeyberry",
    "Huckleberry",
    "Jabuticaba",
    "Jackfruit",
    "Jambul",
    "Juniper berry",
    "Kiwifruit",
    "Kumquat",
    "Lemon",
    "Lime",
    "Loquat",
    "Longan",
    "Lychee",
    "Mango",
    "Mangosteen",
    "Marionberry",
    "Melon",
    "Cantaloupe",
    "Honeydew",
    "Watermelon",
    "Miracle fruit",
    "Mulberry",
    "Nectarine",
    "Nance",
    "Olive",
    "Orange",
    "Clementine",
    "Mandarine",
    "Tangerine",
    "Papaya",
    "Passionfruit",
    "Peach",
    "Pear",
    "Persimmon",
    "Plantain",
    "Plum",
    "Pineapple",
    "Pomegranate",
    "Pomelo",
    "Quince",
    "Raspberry",
    "Salmonberry",
    "Rambutan",
    "Redcurrant",
    "Salak",
    "Satsuma",
    "Soursop",
    "Star fruit",
    "Strawberry",
    "Tamarillo",
    "Tamarind",
    "Yuzu",
  ];

  //clear search results
  function removeItems() {
    const list = document.querySelectorAll("li");
    list.forEach(function (item) {
      item.remove();
    });
  }

  //add matching results to search results list
  function addListItem(result) {
    result.forEach(function (result) {
      const ul = document.querySelector("ul");
      const newLi = document.createElement("li");
      newLi.innerText = result;
      ul.append(newLi);
    });
  }

  //when key is pressed take the text and filter matching results. add matching results to a list. if the search text is empty, show no results. remove old results with each key press. also prevent default behavior of event listener
  input.addEventListener("keyup", function (e) {
    const string = input.value;
    const lowerCaseString = string.toLowerCase();
    const result = array.filter(
      (word) => word.toLowerCase().indexOf(lowerCaseString) !== -1
    );
    e.preventDefault();
    removeItems();
    addListItem(result);
    if (string.length === 0) {
      removeItems();
    }
  });

  //when one of the search results is clicked, add it to the search box and remove result list.
  function useSuggestion(e) {
    e.preventDefault();
    input.value = e.target.innerText;
    removeItems();
  }

  suggestions.addEventListener("click", useSuggestion);
});
