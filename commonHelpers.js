import{a as h,S as y,i as L}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();async function f(r,t,a){try{const o=new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:a,page:t});return(await h.get(`https://pixabay.com/api/?${o}`)).data}catch(o){throw console.error("Error fetching images:",o),o}}function m(r,t){const a=r.map(e=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",a),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function c(r,t){L[t]({message:r,messageColor:"white",position:"topRight",backgroundColor:"red"})}const b=document.querySelector("form"),u=document.querySelector(".gallery"),d=document.querySelector(".spinner"),p=document.querySelector(".load-button");let n=1,g=15,i="";p.classList.add("is-hidden");b.addEventListener("submit",r=>{if(r.preventDefault(),u.innerHTML="",n=1,d.classList.remove("is-hidden"),p.classList.remove("is-hidden"),i=r.target.elements.search_input.value.trim(),i===""){c("All form fields must be filled in","warning"),d.classList.add("is-hidden");return}f(i,n,g).then(t=>{if(t.total===0){c("Sorry, there are no images matching your search query. Please try again!","error");return}m(t.hits,u)}).catch(t=>{console.error("Error fetching images:",t),c("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{r.target.reset(),d.classList.add("is-hidden")})});p.addEventListener("click",async()=>{try{n+=1;const r=await f(i,n,g);m(r.hits,u)}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
