/* Replace a few itinerary photos with exact restaurant food photos found in web image search. */
(function(){
'use strict';
const fixes={
 '熟成焼肉 Gyudo! 本店':'https://tblg.k-img.com/restaurant/images/Rvw/368159/640x640_rect_8af47e8b365687f5c96ef66a5fcb5303.jpg',
 '焼肉なべしま 鹿児島インター店':'https://assets.st-note.com/production/uploads/images/41762862/picture_pc_32dc201cb9f9ad276a11a42fcef3aeb7.jpg'
};
function run(){document.querySelectorAll('.itinerary-restaurant-card').forEach(c=>{const h=c.querySelector('h3');const img=c.querySelector('img');if(h&&img&&fixes[h.textContent.trim()])img.src=fixes[h.textContent.trim()];});}
new MutationObserver(run).observe(document.body,{childList:true,subtree:true});setInterval(run,1500);setTimeout(run,100);
})();
