"use strict";

const $showsList = $("#showsList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");

async function getEpisodesOfShow(id) {
  const response = await axios.get(
    `http://api.tvmaze.com/shows/<2678>/episodes`
  );
  console.log(response);
}

getEpisodesOfShow(2678);
/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

async function getShowsByTerm(searchTerm) {
  let response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=<${searchTerm}>`
  );
  let results = [];
  let showImage = "";
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    let showId = response.data[i].show.id;
    let showName = response.data[i].show.name;
    let showSummary = response.data[i].show.summary;
    try {
      showImage = response.data[i].show.image.original;
    } catch (err) {
      showImage =
        "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";
    }
    console.log(showId);
    console.log(showImage);
    results.push({
      id: showId,
      name: showName,
      summary: showSummary,
      image: showImage,
    });
  }
  console.log(results);
  return results;
}

/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();
  console.log(shows);
  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src=${show.image}
              alt="https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `
    );

    $showsList.append($show);
  }
}

/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});

/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

async function getEpisodesOfShow(id) {
  const response = await axios.get(
    `http://api.tvmaze.com/shows/<${id}>/episodes`
  );
  return response.data.map((e) => ({
    id: e.id,
    name: e.name,
    season: e.season,
    number: e.number,
  }));
}

/** Write a clear docstring for this function... */

function populateEpisodes(episodes) {
  $episodesList.empty();

  for (let episode of episodes) {
    const $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `
    );

    $episodesList.append($item);
  }

  $episodesArea.show();
}
async function getEpisodesAndDisplay(evt) {
  const showId = $(evt.target).closest("[data-show-id]").data("show-id");
  const episodes = await getEpisodesOfShow(showId);
  populateEpisodes(episodes);
}

$showsList.on("click", ".Show-getEpisodes", getEpisodesAndDisplay);
