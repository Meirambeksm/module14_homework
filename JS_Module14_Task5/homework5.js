let result = document.querySelector(".result");
const button = document.querySelector(".button");
const pageInput = document.querySelector("#pageInput");
const limitInput = document.querySelector("#limitInput");

function requestImage() {
  fetch(
    `https://picsum.photos/v2/list?page=${pageInput.value}&limit=${limitInput.value}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let cards = "";
      data.forEach((item) => {
        let result = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
        cards += result;
      });

      result.innerHTML = cards;
      localStorage.setItem("myJSON", JSON.stringify(data));
    })
    .catch(() => console.log("Request error!"));
}

function displayResult() {
  const page = pageInput.value >= 1 && pageInput.value <= 10 ? true : false;
  const limit = limitInput.value >= 1 && limitInput.value <= 10 ? true : false;

  if (!page && limit) {
    result.innerHTML = "<p>Номер страницы вне диапазона от 1 до 10</p>";
  } else if (page && !limit) {
    result.innerHTML = "<p>Лимит вне диапазона от 1 до 10</p>";
  } else if (!page && !limit) {
    result.innerHTML = "<p>Номер страницы и лимит вне диапазона от 1 до 10</p>";
  } else if (page && limit) {
    requestImage();
    pageInput.value = "";
    limitInput.value = "";
  }
}

function requestLocalStorage() {
  const myJSON = localStorage.getItem("myJSON");
  if (myJSON) {
    const JSONData = JSON.parse(myJSON);
    const jsonOutput = document.querySelector(".result");

    let cards = "";
    JSONData.forEach((item) => {
      let jsonOutput = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;

      cards += jsonOutput;
    });

    jsonOutput.innerHTML = cards;
  }
}

button.addEventListener("click", displayResult);
window.addEventListener("load", requestLocalStorage);
