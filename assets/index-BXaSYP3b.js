(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();let n=document.querySelector("#container"),c=async o=>{let e=(await(await fetch(o)).json()).map(t=>`<div
          class=" h-[300px] flex flex-col p-2 bg-white text-black rounded-2xl"
        >
          <img class="w-full h-[120px] object-contain"
            src="${t.image}"
            alt="${t.title}"
          />
          <p class="line-clamp-1 text-[25px] font-bold ">${t.title}</p>
          <p class="line-clamp-1 text-[20px] font-bold  text-red-500 text-center">${t.price}$</p>
          <p class="line-clamp-1 text-[14px] font-bold  text-stone-500 text-center">${t.category}</p>
          <p class="line-clamp-3 text-[12px] font-bold  text-stone-500">${t.description}</p>
          <div class="flex justify-between">
            <span class="text-[12px] text-stone-400">${t.rating.rate}</span>
            <span class="text-[12px] text-stone-400">${t.rating.count}</span>
          </div>
        </div>`);n.insertAdjacentHTML("afterbegin",e.join(""))};c("https://fakestoreapi.com/products");let l=async()=>{let r=(await(await fetch("https://ihsohrabi.github.io/battle-net-api/db.json")).json()).map(e=>`<div class="flex flex-col gap-2 relative">
        <img
          class="w-full h-[166px] object-cover"
          src="${e.image}"
          alt="${e.gameTitle}"
        />
        <div class="w-full flex gap-2 px-4 items-center">
          <img
            class="w-[30px] h-[30px] object-contain"
            src="${e.icon}"
            alt="${e.gameName}"
          />
          <p class="capitalize text-slate-300 font-bold">${e.gameName}</p>
        </div>
        <h2 class="px-4 font-bold capitalize mobile:text-[15px] xl:text-[20px] text-slate-300 ">
          ${e.gameTitle}
        </h2>
        <p class="px-4  text-amber-500 mobile:text-[10px] xl:text-[14px] line-clamp-3">
          ${e.desc}
        </p>
        <span class="font-bold text-[18px] text-slate-300 absolute bottom-4 left-4">$${e.price}</span>
      </div>`);document.querySelector(".gameContainer").insertAdjacentHTML("afterbegin",r.join(""))};l();
