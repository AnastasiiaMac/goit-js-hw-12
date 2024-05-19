
import { fetchImages } from "./js/pixabay-api.js";
import { displayImages, displayToast } from "./js/render-functions.js";
const searchForm = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".spinner")

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    gallery.innerHTML = "";
    loader.classList.remove('is-hidden');

    

    const searchData = event.target.elements.search_input.value.trim();
    if (searchData === "") {
        displayToast('All form fields must be filled in', 'warning');
        loader.classList.add('is-hidden');
        return;
    }

    fetchImages(searchData)
        .then(response => {
            if (response.data.total === 0) {
                console.log(response.data.total)
                displayToast('Sorry, there are no images matching your search query. Please try again!', 'error');
                return;
            }

            displayImages(response.data.hits, gallery);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            displayToast('An error occurred while fetching images. Please try again later.', 'error');
        })
        .finally(() => {
            event.target.reset();
            loader.classList.add('is-hidden');
        });
});