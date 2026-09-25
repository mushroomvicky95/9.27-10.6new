/* Mobile itinerary dedup + consistent restaurant photo sizing (2026-09-26) */
(function(){
'use strict';
const VERSION='20260926-6';
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

function activeDayNumber(){
  const h=document.querySelector('.detail-head h2');
  const m=(h?.textContent||'').match(/Day\\s*(\\d+)/i);
  return m?Number(m[1]):null;
}

function activeTimeline(){
  const t=document.querySelector('.timeline');
  return t||null;
}

function dedupDay6InfoCards(){
  if(activeDayNumber()!==6)return;
  const day6=activeTimeline();
  if(!day6)return;
  day6.classList.add('day6-dedup-applied');

  // app.js renders a compact .info-card.spot-detail and itinerary-spots.js
  // adds the richer .itinerary-spot-detail for the same attraction. On Day 6
  // keep the richer card and remove the older duplicate inside that event.
  day6.querySelectorAll(':scope > .event').forEach(ev=>{
    const rich=[...ev.querySelectorAll('.itinerary-spot-detail')];
    if(rich.length){
      const seen=new Set();
      rich.forEach(card=>{
        const h=card.querySelector('h4');
        const key=norm(h?.textContent||card.textContent.slice(0,120));
        if(seen.has(key))card.remove();else seen.add(key);
      });
      ev.querySelectorAll('.info-card.spot-detail').forEach(old=>old.remove());
    }
  });

  // Also collapse duplicate standalone detail wrappers by their visible title.
  const seenWrap=new Set();
  day6.querySelectorAll(':scope > .trip-correction-wrap, :scope > .itinerary-restaurant-block').forEach(w=>{
    const h=w.querySelector('.trip-detail-card h3,.restaurant-title h3,.spot-detail-head h4');
    const key=norm(h?.textContent||'');
    if(!key)return;
    if(seenWrap.has(key))w.remove();else seenWrap.add(key);
  });
}

function fixDay9PhotoSize(){
  if(activeDayNumber()!==9)return;
  const day9=activeTimeline();
  if(!day9)return;
  // Day 1's actual mobile restaurant card uses a 220px photo. Match that
  // exact height for every Day 9 restaurant card.
  day9.querySelectorAll('.itinerary-restaurant-card .restaurant-img, .restaurant-card .restaurant-img, .restaurant .restaurant-img, .final-dinner-card img, .trip-detail-card.trip-food-detail img').forEach(img=>{
    const h=innerWidth<=759?'220px':'330px';
    img.style.setProperty('height',h,'important');
    img.style.setProperty('min-height',h,'important');
    img.style.setProperty('max-height',h,'important');
    img.style.setProperty('width','100%','important');
    img.style.setProperty('object-fit','cover','important');
    img.style.setProperty('object-position','center','important');
    img.style.setProperty('display','block','important');
  });
}

function run(){
  document.documentElement.dataset.travelAppVersion=VERSION;
  fixDay1Dinner();
  dedupDay6InfoCards();
  fixDay9PhotoSize();
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
.final-dinner-card>img,.day1-card>.restaurant-img{
 display:block!important;width:100%!important;height:330px!important;min-height:330px!important;max-height:330px!important;aspect-ratio:auto!important;object-fit:cover!important;object-position:center!important;
}
@media(max-width:759px){
 .itinerary-restaurant-card .restaurant-img,.restaurant-card .restaurant-img,.timeline .restaurant .restaurant-img,
 .final-dinner-card>img,.day1-card>.restaurant-img{
   height:220px!important;min-height:220px!important;max-height:220px!important;aspect-ratio:auto!important;width:100%!important;object-fit:cover!important;object-position:center!important;display:block!important;
 }
}
`;
if(!document.getElementById(css.id))document.head.appendChild(css);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
addEventListener('resize',schedule,{passive:true});addEventListener('orientationchange',schedule,{passive:true});
})();
