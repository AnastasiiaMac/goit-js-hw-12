import{a as y,S as L,i as g}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function f(r,t,i){try{const o=new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:i,page:t});return(await y.get(`https://pixabay.com/api/?${o}`)).data}catch(o){throw console.error("Error fetching images:",o),o}}function h(r,t){const i=r.map(e=>`
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
    `).join("");t.insertAdjacentHTML("beforeend",i),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(r,t){g[t]({message:r,messageColor:"white",position:"topRight",backgroundColor:"red"})}const b=document.querySelector("form"),c=document.querySelector(".gallery"),l=document.querySelector(".spinner"),a=document.querySelector(".load-button");let n=1,m=15,d="";a.classList.add("is-hidden");b.addEventListener("submit",r=>{if(r.preventDefault(),c.innerHTML="",n=1,l.classList.remove("is-hidden"),d=r.target.elements.search_input.value.trim(),d===""){a.classList.add("is-hidden"),p("All form fields must be filled in","warning"),l.classList.add("is-hidden");return}f(d,n,m).then(t=>{if(t.total===0){p("Sorry, there are no images matching your search query. Please try again!","error"),a.classList.add("is-hidden");return}else if(t.total<=15)return h(t.hits,c),g.error({position:"topRight",message:"We're sorry, there are no more posts to load",messageColor:"white",backgroundColor:"red"});a.classList.remove("is-hidden"),h(t.hits,c)}).catch(t=>{console.error("Error fetching images:",t),p("An error occurred while fetching images. Please try again later.","error")}).finally(()=>{r.target.reset(),l.classList.add("is-hidden")})});a.addEventListener("click",async()=>{try{l.classList.remove("is-hidden"),n+=1;const r=await f(d,n,m);h(r.hits,c);let i=document.querySelector(".full-image").getBoundingClientRect();const o=Math.ceil(r.totalHits/m);if(n>=o)return a.classList.add("is-hidden"),g.error({position:"topRight",message:"We're sorry, there are no more posts to load",messageColor:"white",backgroundColor:"red"});window.scrollBy({top:i.height*2,behavior:"smooth"})}catch(r){console.log(r)}finally{l.classList.add("is-hidden")}});
//# sourceMappingURL=commonHelpers.js.map
