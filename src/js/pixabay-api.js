import axios from "axios";
export async function fetchImages(searchData) {
    const searchParams = new URLSearchParams({
        key: '43761083-735c77d8194f3d0bda00bacf0',
        q: searchData,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true"
    });
    return axios.get(`https://pixabay.com/api/?${searchParams}`)   
    }
            
    