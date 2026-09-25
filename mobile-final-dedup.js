/* Mobile itinerary dedup + consistent restaurant photo sizing (2026-09-26) */
(function(){
'use strict';
const VERSION='20260926-3';
const norm=s=>String(s||'').replace(/[\s　]+/g,'').toLowerCase();

function fixDay1Dinner(){
  const day1=[...document.querySelectorAll('.event')].find(e=>{
    const title=e.querySelector('.event-card h3')?.textContent||'';
    return title.includes('天神晚餐選擇') || (title.includes('天神晚餐') && (e.querySelector('.time')?.textContent||'').includes('19:30'));
  });
  if(!day1)return;
  // Keep the dedicated two-choice Day 1 dinner block only. Older correction scripts
  // also inserted four-card dinner grids immediately after this event.
  let kept=false;
  [...document.querySelectorAll('.day1-dinner-fixed')].forEach(el=>{
    if(!day1.contains(el)){el.remove();return;}
    if(kept)el.remove(); else kept=true;
  });
  let node=day1.nextElementSibling;
  while(node && node.classList.contains('trip-correction-wrap')){
    const next=node.nextElementSibling;
    if(node.classList.contains('trip-dinner-grid') ||
       node.classList.contains('final-day2-dinner') ||
       node.querySelector('.trip-food-detail,.final-dinner-card')){
      node.remove();
    }
    node=next;
  }
  // Remove duplicated inline dinner choice articles if a previous patch placed
  // another copy inside the same Day 1 event.
  const dinner=day1.querySelector('.day1-dinner-fixed');
  if(dinner){
    const seen=new Set();
    dinner.querySelectorAll('.day1-card').forEach(card=>{
      const key=norm(card.querySelector('h3')?.textContent);
      if(seen.has(key))card.remove();else seen.add(key);
    });
  }
}

function dedupGenerated(){
  const seen=new Set();
  document.querySelectorAll('.timeline > .trip-correction-wrap, .timeline > .itinerary-restaurant-block').forEach(el=>{
    const h=el.querySelector('h3,h4,.itinerary-restaurant-label');
    const key=el.className+'|'+norm(h?h.textContent:el.textContent.slice(0,100));
    if(seen.has(key))el.remove();else seen.add(key);
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
      if(seen.has(key))ev.remove();else seen.add(key);
    });
  });
}
function alignMobile(){
  if(innerWidth>759)return;
  document.querySelectorAll('.timeline').forEach(t=>{
    const ref=t.querySelector(':scope > .event > .event-card');
    if(!ref)return;
    const tr=t.getBoundingClientRect(),rr=ref.getBoundingClientRect();
    const left=Math.max(0,rr.left-tr.left),width=Math.max(0,Math.min(tr.width,rr.right-tr.left)-left);
    t.querySelectorAll(':scope > .trip-correction-wrap,:scope > .itinerary-restaurant-block').forEach(el=>{
      el.style.setProperty('margin-left',left+'px','important');
      el.style.setProperty('width',width+'px','important');
      el.style.setProperty('max-width',width+'px','important');
    });
  });
}

function dedupDay6InfoCards(){
  // Day 6 (South Satsuma: Chiran + Ibusuki): keep only one generated info card
  // for each identical restaurant/spot title within that day's timeline.
  const timeline=document.querySelectorAll('.timeline')[5];
  if(!timeline)return;
  const seen=new Set();
  const cards=[...timeline.querySelectorAll('.trip-detail-card,.itinerary-spot-detail,.day1-card,.final-dinner-card')];
  cards.forEach(card=>{
    const heading=card.querySelector('h3,h4,.spot-detail-head h4');
    const title=norm(heading?.textContent||'');
    if(!title)return;
    if(seen.has(title)){
      const wrap=card.closest('.trip-correction-wrap');
      if(wrap && wrap.querySelectorAll('.trip-detail-card,.itinerary-spot-detail,.day1-card,.final-dinner-card').length===1)wrap.remove();
      else card.remove();
    }else seen.add(title);
  });
  // If a legacy standalone duplicate detail wrapper remains adjacent to an
  // event that already contains its own full detail card, remove the wrapper.
  timeline.querySelectorAll(':scope > .trip-correction-wrap').forEach(w=>{
    const title=norm(w.querySelector('h3,h4')?.textContent||'');
    if(!title)return;
    const duplicateInsideEvent=[...timeline.querySelectorAll(':scope > .event .itinerary-spot-detail h4,:scope > .event .trip-detail-card h3')].some(h=>norm(h.textContent)===title);
    if(duplicateInsideEvent)w.remove();
  });
}

function run(){
  document.documentElement.dataset.travelAppVersion=VERSION;
  fixDay1Dinner();
  dedupDay6InfoCards();
  dedupGenerated();
  dedupEvents();
  alignMobile();
}
let queued=false;
function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;run()})}
const css=document.createElement('style');
css.id='restaurant-photo-size-unify-20260926';
css.textContent=`
/* Day 9 restaurant-detail photos match Day 1 restaurant cards */
.trip-detail-card>img,.final-dinner-card>img,.day1-card>.restaurant-img{
 display:block!important;width:100%!important;height:190px!important;aspect-ratio:auto!important;object-fit:cover!important;object-position:center!important;
}
@media(max-width:759px){
 .trip-detail-card>img,.final-dinner-card>img,.day1-card>.restaurant-img{
   height:165px!important;min-height:165px!important;max-height:165px!important;
 }
}
`;
if(!document.getElementById(css.id))document.head.appendChild(css);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
addEventListener('resize',schedule,{passive:true});addEventListener('orientationchange',schedule,{passive:true});
})();
