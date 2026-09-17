/* Prevent duplicate injections from itinerary-restaurants.js */
(function(){
'use strict';
function clean(){
 document.querySelectorAll('.itinerary-restaurant-card').forEach(card=>{
   if(!card.dataset.rname){const h=card.querySelector('h3');if(h)card.dataset.rname=h.textContent.trim();}
 });
 const seen=new Set();
 document.querySelectorAll('.itinerary-restaurant-card[data-rname]').forEach(card=>{
   const n=card.dataset.rname;
   if(seen.has(n)) card.remove(); else seen.add(n);
 });
}
const mo=new MutationObserver(clean);mo.observe(document.body,{childList:true,subtree:true});setInterval(clean,1500);setTimeout(clean,50);
})();
