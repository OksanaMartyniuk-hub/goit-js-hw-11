import{a as d,S as u,i}from"./assets/vendor-DnoGfDwQ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();async function f(o){const e=`https://pixabay.com/api/?key=55675978-69d37b2f380cb0d6ffe952c17&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return(await d.get(e)).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader");let m=new u(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const s=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${e.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${e.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${e.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${e.downloads}</span>
          </div>
        </div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s),m.refresh()}function y(){c.innerHTML=""}function g(){l.classList.remove("is-hidden")}function h(){l.classList.add("is-hidden")}const b=document.querySelector(".search-form");b.addEventListener("submit",L);async function L(o){o.preventDefault();const s=o.currentTarget.elements.query.value.trim();if(!s){i.warning({message:"Please enter a search query!"});return}y(),g();try{const e=await f(s);e.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):p(e.hits)}catch(e){i.error({message:"Something went wrong. Please try again later."}),console.error(e)}finally{h(),o.target.reset()}}
//# sourceMappingURL=index.js.map
