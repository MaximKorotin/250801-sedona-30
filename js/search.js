const searchLink = document.querySelector(".hotel-search-btn");
const searchModal = document.querySelector(".hotels-search-form");
const searchForm = searchModal.querySelector(".form-search-list");
const searchArrival = searchModal.querySelector(".form-search-arrival");
const searcDeparture = searchModal.querySelector(".form-search-departure");
const searchAdult = searchModal.querySelector(".form-search-adult");
const searchChildren = searchModal.querySelector(".hotels-search-children");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adult");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

searchLink.addEventListener("click", function (evt) {
  if (searchModal.classList.contains("hotels-search-form-show")) {
    evt.preventDefault();
    searchModal.classList.remove("hotels-search-form-show");
    searchModal.classList.remove("hotels-search-form-error");
  } else {
    evt.preventDefault();
    searchModal.classList.add("hotels-search-form-show");

    if (storage) {
      searchAdult.value = storage;
      searchChildren.value = storage;
    }

    searchArrival.focus();
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!searchArrival.value || !searcDeparture.value || !searchAdult.value || !searchChildren.value) {
    evt.preventDefault();
    searchModal.classList.remove("hotels-search-form-error");
    searchModal.offsetWidth = searchModal.offsetWidth;
    searchModal.classList.add("hotels-search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", searchAdult.value);
      localStorage.setItem("children", searchChildren.value);
    }
  }
});
