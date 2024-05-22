// 1. Find button and div
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// 2. Request data
function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Response status: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.onerror = function () {
    console.log("Error! Response status: ", xhr.status);
  };
  xhr.send();
}

// 3. Show pictures
function displayResult(apiData) {
  let pictures = "";
  apiData.forEach((item) => {
    const pic = `
            <img src="${item.thumbnailUrl}" alt="${item.title}"/>
        `;

    pictures += pic;
  });

  result.innerHTML = pictures;
}

// 4. Click event
btn.addEventListener("click", () => {
  let value = document.querySelector(".input").value;
  if (value >= 1 && value <= 10) {
    useRequest(
      `https://jsonplaceholder.typicode.com/photos?_limit=${value}`,
      displayResult
    );
  } else {
    result.innerHTML = "<p>Число вне диапазона от 1 до 10</p>";
  }

  // 5. To empty value of input
  document.querySelector(".input").value = "";
});
