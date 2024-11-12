const input = document.querySelector("input");

async function getCardInfo() {
  let gif = "";
  let response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=v6tKCarQbYIOpGZu49NbT9JXwVFf1B2y&q=${input.value}&limit=1`
  );
  console.log(response);
  gif = response.data.data[0].images.fixed_height.url;
  return gif;
}

//const result = getCardInfo();

//clear search results
function removeItems() {
  const list = document.querySelectorAll("li");
  list.forEach(function (item) {
    item.remove();
  });
}

//add matching results to search results list
function addListItem(gif) {
  const ul = document.querySelector("ul");
  const newLi = document.createElement("li");
  newLi.innerHTML = `<img src= ${gif} >`;
  ul.append(newLi);
  gif = "";
}

//let card = await getCardInfo();

const search = document.querySelector("#search");
const remove = document.querySelector("#remove");

search.addEventListener("click", function (e) {
  e.preventDefault();
  addListItem(getCardInfo());
});

remove.addEventListener("click", function (e) {
  e.preventDefault();
  removeItems();
});
