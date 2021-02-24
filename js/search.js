const searchLink = document.querySelector(".hotel-search-btn");
const searchModal = document.querySelector(".hotels-search-form");
const searchForm = searchModal.querySelector(".form-search-list");
const searchArrival = searchModal.querySelector(".form-search-arrival");
const searcDeparture = searchModal.querySelector(".form-search-departure");
const searchAdult = searchModal.querySelector(".form-search-adult");
const searchChildren = searchModal.querySelector(".form-search-children");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

searchModal.classList.add("form-search-list-show")

try {
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

if (storageAdult) {
  searchAdult.value = storageAdult;
}

if (storageChildren) {
  searchChildren.value = storageChildren;
}

searchLink.addEventListener("click", function (evt) {
  if (searchModal.classList.contains("form-search-list-show")) {
    evt.preventDefault();
    searchModal.classList.remove("form-search-list-show");
    searchModal.classList.remove("form-search-list-error");
  } else {
    evt.preventDefault();
    searchModal.classList.add("form-search-list-show");
    searchArrival.focus();
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchArrival.value || !searcDeparture.value || !searchAdult.value || !searchChildren.value) {
    evt.preventDefault();
    searchModal.classList.remove("form-search-list-error");
    searchModal.offsetWidth = searchModal.offsetWidth;
    searchModal.classList.add("form-search-list-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", searchAdult.value);
      localStorage.setItem("children", searchChildren.value);
    }
  }
});
