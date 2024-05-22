// 1. Find the nodes
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

// 2. Function for fetch
function useRequest(url) {
  return fetch(url)
    .then((response) => {
      return response;
    })
    .catch(() => (result.innerHTML = "Error!"));
}

// 3. Event listener
btn.addEventListener("click", async () => {
  let widthValue = document.querySelector(".widthInput").value;
  let heightValue = document.querySelector(".heightInput").value;

  // 4. Conditionally render image or text
  if (
    widthValue >= 100 &&
    widthValue <= 300 &&
    heightValue >= 100 &&
    heightValue <= 300
  ) {
    const requestResult = await useRequest(
      `https://dummyimage.com/${widthValue}x${heightValue}/`
    );
    result.innerHTML = `<img src="${requestResult.url}">`;
  } else {
    result.innerHTML = "<p>одно из чисел вне диапазона от 100 до 300</p>";
  }
});
