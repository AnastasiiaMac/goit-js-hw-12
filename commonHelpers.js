import{a as d,S as p,i as u}from"./assets/vendor-09d7c26e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function f(s){const r=new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"});return(await d.get(`https://pixabay.com/api/?${r}`)).data}function m(s,r){const o=s.map(e=>`
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
    `).join("");r.innerHTML=o,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s,r){u[r]({message:s,messageColor:"white",position:"topRight",backgroundColor:"red"})}const g=document.querySelector("form"),c=document.querySelector(".gallery"),l=document.querySelector(".spinner");g.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l.classList.remove("is-hidden");const r=s.target.elements.search_input.value.trim();if(r===""){n("All form fields must be filled in","warning"),l.classList.add("is-hidden");return}f(r).then(o=>{if(o.total===0){n("Sorry, there are no images matching your search query. Please try again!","error");return}m(o.hits,c)}).catch(o=>{console.error("Error fetching images:",o),n("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
