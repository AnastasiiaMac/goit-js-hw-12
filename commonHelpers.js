import{a as d,S as u,i as f}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function p(o){const t=new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return d.get(`https://pixabay.com/api/?${t}`)}function m(o,t){const s=o.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <div class="full-image">
                    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    <ul class="image-button">
                        <li><p>Likes</p><p>${e.likes}</p></li>
                        <li><p>Views</p><p>${e.views}</p></li>
                        <li><p>Comments</p><p>${e.comments}</p></li>
                        <li><p>Downloads</p><p>${e.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join("");t.innerHTML=s,new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function l(o,t){f[t]({message:o,messageColor:"white",position:"topRight",backgroundColor:"red"})}const g=document.querySelector("form"),c=document.querySelector(".gallery"),n=document.querySelector(".spinner");g.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const t=o.target.elements.search_input.value.trim();if(t===""){l("All form fields must be filled in","warning"),n.classList.add("is-hidden");return}p(t).then(s=>{if(s.data.total===0){console.log(s.data.total),l("Sorry, there are no images matching your search query. Please try again!","error");return}m(s.data.hits,c)}).catch(s=>{console.error("Error fetching images:",s),l("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{o.target.reset(),n.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
