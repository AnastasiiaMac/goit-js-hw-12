import{a as u,S as p,i as f}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function m(s){const t=new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"15"});return(await u.get(`https://pixabay.com/api/?${t}`)).data}function h(s,t){const o=s.map(e=>`
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
    `).join("");t.innerHTML=o,new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s,t){f[t]({message:s,messageColor:"white",position:"topRight",backgroundColor:"red"})}const g=document.querySelector("form"),c=document.querySelector(".gallery"),l=document.querySelector(".spinner"),d=document.querySelector(".load-button");d.classList.add("is-hidden");g.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",l.classList.remove("is-hidden"),d.classList.remove("is-hidden");const t=s.target.elements.search_input.value.trim();if(t===""){n("All form fields must be filled in","warning"),l.classList.add("is-hidden");return}m(t).then(o=>{if(o.total===0){n("Sorry, there are no images matching your search query. Please try again!","error");return}h(o.hits,c)}).catch(o=>{console.error("Error fetching images:",o),n("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{s.target.reset(),l.classList.add("is-hidden")})});
//# sourceMappingURL=commonHelpers.js.map
