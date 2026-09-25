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

function dedupDay6InfoCards(){
  // Do not depend on a fixed timeline index: mobile/flex layouts can insert
  // extra timeline containers. Locate Day 6 by its rendered section heading,
  // then deduplicate all info-card types inside that day's timeline.
  const timelines=[...document.querySelectorAll('.timeline')];
  const day6=timelines.find(t=>{
    const section=t.closest('.day-section,.day-panel,.day-content,.detail-section')||t.parentElement?.parentElement;
    const heading=section?.querySelector('.detail-head h2,.day-title,h2');
    return /Day\s*6\b|Day\s*6/.test(heading?.textContent||'') ||
      /南薩摩：知覽\+指宿砂浴|南薩摩：知覽＋指宿砂浴/.test(section?.textContent?.slice(0,300)||'');
  }) || timelines[5];
  if(!day6)return;
  const selectors='.trip-detail-card,.itinerary-spot-detail,.day1-card,.final-dinner-card,.itinerary-restaurant-card';
  const seen=new Set();
  [...day6.querySelectorAll(selectors)].forEach(card=>{
    const heading=card.querySelector('h3,h4,.spot-detail-head h4,.restaurant-title h3');
    const title=norm(heading?.textContent||'');
    if(!title)return;
    if(seen.has(title)){
      const wrap=card.closest('.trip-correction-wrap,.itinerary-restaurant-block');
      if(wrap && wrap.querySelectorAll(selectors).length===1)wrap.remove();
      else card.remove();
    }else seen.add(title);
  });
  // Remove standalone correction wrappers duplicating a detail card already
  // embedded in one of Day 6's event cards.
  day6.querySelectorAll(':scope > .trip-correction-wrap,:scope > .itinerary-restaurant-block').forEach(w=>{
    const title=norm(w.querySelector('h3,h4,.spot-detail-head h4,.restaurant-title h3')?.textContent||'');
    if(!title)return;
    const duplicate=[...day6.querySelectorAll(':scope > .event .trip-detail-card h3,:scope > .event .itinerary-spot-detail h4,:scope > .event .restaurant-title h3')].some(h=>norm(h.textContent)===title);
    if(duplicate)w.remove();
  });
}

function fixDay9PhotoSize(){
  const timelines=[...document.querySelectorAll('.timeline')];
  const day9=timelines[8];
  if(!day9)return;
  day9.querySelectorAll('.itinerary-restaurant-card .restaurant-img,.trip-detail-card>img,.final-dinner-card>img,.restaurant-card .restaurant-img').forEach(img=>{
    img.style.setProperty('height',innerWidth<=759?'220px':'310px','important');
    img.style.setProperty('min-height',innerWidth<=759?'220px':'310px','important');
    img.style.setProperty('max-height',innerWidth<=759?'220px':'310px','important');
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
.trip-detail-card>img,.final-dinner-card>img,.day1-card>.restaurant-img{
 display:block!important;width:100%!important;height:310px!important;min-height:310px!important;max-height:310px!important;aspect-ratio:auto!important;object-fit:cover!important;object-position:center!important;
}
@media(max-width:759px){
 .trip-detail-card>img,.final-dinner-card>img,.day1-card>.restaurant-img{
   height:220px!important;min-height:220px!important;max-height:220px!important;
 }
}
`;
if(!document.getElementById(css.id))document.head.appendChild(css);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
addEventListener('resize',schedule,{passive:true});addEventListener('orientationchange',schedule,{passive:true});
})();
