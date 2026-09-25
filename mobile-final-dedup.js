/* Mobile final dedup guard — 2026-09-26 */
(function(){
'use strict';
const VERSION='20260926-1';

function norm(s){return String(s||'').replace(/[\s　]+/g,'').toLowerCase()}

function dedupGenerated(){
  const seen=new Set();
  document.querySelectorAll('.timeline > .trip-correction-wrap, .timeline > .itinerary-restaurant-block').forEach(el=>{
    const heading=el.querySelector('h3,h4,.itinerary-restaurant-label');
    const key=el.className+'|'+norm(heading?heading.textContent:el.textContent.slice(0,100));
    if(seen.has(key)) el.remove();
    else seen.add(key);
  });
}

function dedupEvents(){
  document.querySelectorAll('.timeline').forEach(t=>{
    const seen=new Set();
    t.querySelectorAll(':scope > .event').forEach(ev=>{
      const time=norm(ev.querySelector('.time')?.textContent);
      const title=norm(ev.querySelector('.event-card h3')?.textContent);
      if(!title)return;
      const key=time+'|'+title;
      if(seen.has(key)) ev.remove();
      else seen.add(key);
    });
  });
}

function alignMobile(){
  if(window.innerWidth>759)return;
  document.querySelectorAll('.timeline').forEach(t=>{
    const ref=t.querySelector(':scope > .event > .event-card');
    if(!ref)return;
    const tr=t.getBoundingClientRect(), rr=ref.getBoundingClientRect();
    const left=Math.max(0,rr.left-tr.left), width=Math.max(0,Math.min(tr.width,rr.right-tr.left)-left);
    t.querySelectorAll(':scope > .trip-correction-wrap, :scope > .itinerary-restaurant-block').forEach(el=>{
      el.style.setProperty('margin-left',left+'px','important');
      el.style.setProperty('width',width+'px','important');
      el.style.setProperty('max-width',width+'px','important');
    });
  });
}

function run(){
  document.documentElement.dataset.travelAppVersion=VERSION;
  dedupGenerated();
  dedupEvents();
  alignMobile();
}

let queued=false;
function schedule(){
  if(queued)return;
  queued=true;
  requestAnimationFrame(()=>{queued=false;run()});
}
run();
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
window.addEventListener('resize',schedule,{passive:true});
window.addEventListener('orientationchange',schedule,{passive:true});
})();
