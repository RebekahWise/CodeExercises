const input = document.querySelector("input");

async function getCardInfo() {
  let gif = "";
  let response = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=v6tKCarQbYIOpGZu49NbT9JXwVFf1B2y&q=${input.value}&limit=1`
  );
  gif = response.data.data[0].images.fixed_height.url;
  return gif;
}

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
  newLi.innerHTML = `<img src="${gif}">`;
  ul.append(newLi);
}

const search = document.querySelector("#search");
const remove = document.querySelector("#remove");

search.addEventListener("click", async function (e) {
  e.preventDefault();
  const gif = await getCardInfo();
  addListItem(gif);
});

remove.addEventListener("click", function (e) {
  e.preventDefault();
  removeItems();
});