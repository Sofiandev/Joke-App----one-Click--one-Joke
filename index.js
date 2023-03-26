const header = document.getElementById("header");
const content = document.getElementById("content");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      const data = res.data.content;
      header.innerHTML = data.text_head;
      content.innerHTML = data.text !== "" ? data.text : data.text_hidden;
    });
}
getJoke();

document.body.addEventListener("click", getJoke);
