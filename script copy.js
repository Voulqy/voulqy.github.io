let anime = [
  {
    nameEN: "Steins;Gate",
    nameJP: "STEINS;GATE",
    score: "9.13",
    type: "TV",
    episodes: "24",
    status: "Finished",
    airedDate: "Apr 6, 2011",
    endDate: "Sep 14, 2011",
    studio: "White Fox",
    tags: ["Sci-Fi", "Thriller"],
    duration: "24",
    rating: "PG-13",
    cover:
      "https://u.livechart.me/anime/1554/poster_image/7a6082674b16e58a0425471bdb8e0083.jpg?style=large&format=jpg",
    synopsis:
      "A few months after the events of Steins;Gate, Rintarou Okabe and his group of friends are invited to tag along with their acquaintance Faris NyanNyan, who is participating in a Rai-Net battle event in the United States. There, they meet up with an old colleague: Kurisu Makise, who has been recalling fragmented memories of events that happened in the other world lines in the form of dreams. She confronts Okabe, questioning him as to whether these events—particularly the incidents between the two of them—did indeed happen.",
  },
  {
    nameEN: "Steins;Gate 0",
    nameJP: "シュタインズ・ゲート ゼロ",
    score: "8.53",
    type: "TV",
    episodes: "23",
    status: "Finished",
    airedDate: "Apr 12, 2018",
    endDate: "Sep 27, 2018",
    studio: "White Fox",
    tags: ["Sci-Fi", "Thriller"],
    duration: "23",
    rating: "PG-13",
    cover:
      "https://u.livechart.me/anime/1489/poster_image/1a239c562e5ab2681ecc7a97981d4941.png?style=large&format=jpg",
    synopsis:
      "The eccentric, self-proclaimed mad scientist Rintarou Okabe has become a shell of his former self. Depressed and traumatized after failing to rescue his friend Makise Kurisu, he has decided to forsake his mad scientist alter ego and live as an ordinary college student. Surrounded by friends who know little of his time travel experiences, Okabe spends his days trying to forget the horrors of his adventures alone. While working as a receptionist at a college technology forum, Okabe meets the short, spunky Maho Hiyajo, who later turns out to be the interpreter at the forum's presentation, conducted by Professor Alexis Leskinen. In front of a stunned crowd, Alexis and Maho unveil Amadeus—a revolutionary AI capable of storing a person's memories and creating a perfect simulation of that person complete with their personality and quirks. Meeting with Maho and Alexis after the presentation, Okabe learns that the two were Kurisu's colleagues in university, and that they have simulated her in Amadeus. Hired by Alexis to research the simulation's behavior, Okabe is given the chance to interact with the shadow of a long-lost dear friend. Dangerously tangled in the past, Okabe must face the harsh reality and carefully maneuver around the disastrous consequences that come with disturbing the natural flow of time.",
  },
  {
    nameEN: "Attack on Titan",
    nameJP: "進撃の巨人",
    score: "8.45",
    type: "TV",
    episodes: "25",
    status: "Finished",
    airedDate: "Apr 07, 2013",
    endDate: "Sep 29, 2013",
    studio: "Wit Studio",
    tags: [
      "Action",
      "Military",
      "Mystery",
      "Super Power",
      "Drama",
      "Fantasy",
      "Shounen",
    ],
    duration: "23",
    rating: "TV-MA",
    cover:
      "https://u.livechart.me/anime/38/poster_image/8d439eec0d96eed77ed96c9a8dcdcde8.jpg?style=large&format=jpg",
    synopsis:
      "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Based on Hajime Isayama's award-winning manga, Shingeki no Kyojin follows Eren, along with his adopted sister Mikasa Ackerman and his childhood friend Armin Arlert, as they join the brutal war against the titans and race to discover a way of defeating them before the last walls are breached.",
  },
];

function anime() {
  let pre = document.getElementsByTagName("pre");
}

// let movies = [];

//example {id:19837443, title: 'Deadpool', year: 2015}
const addMovie = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let movie = {
    id: Date.now(),
    title: document.getElementById("title").value,
    year: document.getElementById("yr").value,
  };
  movies.push(movie); //pushes the contents of 'movie' into the 'movies' array

  // document.forms[0].reset(); //older way to clear the form for the next entries
  document.querySelector("form").reset(); //to clear the form for the next entries
  //for display purposes only
  console.warn("added", {
    movies,
  });
  let pre = document.querySelector("#msg pre");
  pre.textContent = "\n" + JSON.stringify(movies, "\t", 2);

  //saving to localStorage
  localStorage.setItem("MyMovieList", JSON.stringify(movies)); //anything saved to local storage has to be saved as a string. thats what stringify does
};

document.addEventListener("DOMContentLoaded", () => {
  //makes sure that the page is loaded first
  document.getElementById("btn").addEventListener("click", addMovie); //when button gets clicked, it'll run the function 'addMovie'
});
