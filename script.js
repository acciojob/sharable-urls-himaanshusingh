// your code here
const button = document.querySelector("#button");
const name = document.querySelector("#name");
const year = document.querySelector("#year");
const url = document.querySelector("#url");
button.addEventListener("click", (event) => {
  if (name.value && !year.value) url.innerHTML += `?name=${name.value}`;
  else if (!name.value && year.value) url.innerHTML += `?year=${year.value}`;
  else url.innerHTML += `?name=${name.value}&year=${year.value}`;
});
