const jokePara = document.getElementById("joke-para");
const jokeBtn = document.getElementById("joke-btn");

function joke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      jokePara.innerText = data.value;
    });
}

jokeBtn.addEventListener("click", joke);
