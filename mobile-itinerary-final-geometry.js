/* Mobile itinerary geometry FINAL: derive the detail-card lane from the real event card position. */
(function(){
'use strict';
const STYLE_ID='mobile-itinerary-geometry-final-v4';
const css=document.createElement('style');
css.id=STYLE_ID;
css.textContent=`
@media(max-width:759px){
  html,body,#app,.app{width:100%!important;max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
  .content{width:100%!important;max-width:100%!important;min-width:0!important;overflow-x:hidden!important;padding-bottom:190px!important;box-sizing:border-box!important}
  .timeline{width:100%!important;max-width:100%!important;min-width:0!important;overflow:visible!important;box-sizing:border-box!important}
  .timeline:before{z-index:0!important;pointer-events:none!important}

  /* The event cards remain the reference lane. */
  .timeline>.event{min-width:0!important;max-width:100%!important;box-sizing:border-box!important}
  .timeline>.event>.event-card,
  .timeline>.event>.info-card,
  .timeline>.event>.flight,
  .timeline>.event>.faq{min-width:0!important;max-width:100%!important;box-sizing:border-box!important;overflow:hidden!important}

  /* Every generated detail wrapper is forced into the exact same horizontal lane as the event card by JS below. */
  .timeline>.final-hotel-wrap,
  .timeline>.trip-hotel-detail,
  .timeline>.trip-dinner-grid,
  .timeline>.final-day2-dinner,
  .timeline>.trip-correction-wrap,
  .timeline>.itinerary-restaurant-block,
  .timeline>.spot-detail-wrap{box-sizing:border-box!important;min-width:0!important;max-width:none!important}

  .timeline .final-hotel-card,
  .timeline .final-dinner-card,
  .timeline .itinerary-spot-detail,
  .timeline .restaurant,
  .timeline .restaurant-card,
  .timeline .spot-detail-card,
  .timeline .trip-detail-card{box-sizing:border-box!important;min-width:0!important;max-width:100%!important;position:relative!important;left:auto!important;right:auto!important;transform:none!important;overflow:hidden!important}

  /* Compact, readable dimensions. */
  .timeline .final-dinner-card img,
  .timeline .restaurant-img,
  .timeline .restaurant-card img,
  .timeline .restaurant img{width:100%!important;height:132px!important;min-height:132px!important;max-height:132px!important;object-fit:cover!important;display:block!important}
  .timeline .final-dinner-card .trip-detail-body,
  .timeline .final-hotel-card .trip-detail-body,
  .timeline .restaurant-body,
  .timeline .itinerary-spot-detail{padding:10px!important}
  .timeline .trip-detail-top{gap:6px!important;align-items:flex-start!important}
  .timeline .trip-detail-top h3,
  .timeline .restaurant-title h3,
  .timeline .restaurant-card h3,
  .timeline .spot-detail-head h4{font-size:16px!important;line-height:1.28!important;margin:0!important}
  .timeline .trip-jp,
  .timeline .restaurant .jp,
  .timeline .spot-detail-jp{font-size:10.5px!important;line-height:1.3!important;margin:2px 0 4px!important}
  .timeline .final-dinner-card .trip-detail-body>p,
  .timeline .final-hotel-card .trip-detail-body>p,
  .timeline .restaurant .desc,
  .timeline .restaurant-card p,
  .timeline .spot-detail-desc{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .timeline .trip-info,
  .timeline .address,
  .timeline .hours,
  .timeline .spot-detail-row,
  .timeline .restaurant .address{font-size:10.5px!important;line-height:1.38!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important;box-sizing:border-box!important;max-width:100%!important}
  .timeline .trip-map-btn,
  .timeline .map-btn,
  .timeline .web-btn,
  .timeline .spot-detail-actions a{font-size:10.5px!important;line-height:1.2!important;padding:7px 9px!important;border-radius:8px!important;margin-top:5px!important;box-sizing:border-box!important}
  .timeline .restaurant-actions{gap:5px!important;margin-top:5px!important}
  .timeline .final-hotel-card,
  .timeline .final-dinner-card,
  .timeline .restaurant,
  .timeline .restaurant-card,
  .timeline .itinerary-spot-detail{border-radius:14px!important;box-shadow:0 2px 9px rgba(20,50,50,.05)!important}

  /* Bottom navigation must not make the last itinerary content unreadable. */
  .tabs{z-index:50!important;height:76px!important}
}
`;
document.head.appendChild(css);

const DETAIL_SELECTORS=[
  '.final-hotel-wrap',
  '.trip-hotel-detail',
  '.trip-dinner-grid',
  '.final-day2-dinner',
  '.trip-correction-wrap',
  '.itinerary-restaurant-block',
  '.spot-detail-wrap'
];
const CARD_SELECTORS=[
  '.final-hotel-card',
  '.final-dinner-card',
  '.itinerary-spot-detail',
  '.restaurant',
  '.restaurant-card',
  '.spot-detail-card',
  '.trip-detail-card'
];
function firstEventCard(t){
  return t.querySelector('.event > .event-card, .event > .info-card, .event > .flight, .event > .faq');
}
function applyLane(el,left,width){
  el.style.setProperty('margin-left',Math.max(0,left)+'px','important');
  el.style.setProperty('margin-right','0px','important');
  el.style.setProperty('width',Math.max(0,width)+'px','important');
  el.style.setProperty('max-width',Math.max(0,width)+'px','important');
  el.style.setProperty('min-width','0px','important');
  el.style.setProperty('box-sizing','border-box','important');
}
function clearInline(el){
  el.style.removeProperty('margin-left');
  el.style.removeProperty('margin-right');
  el.style.removeProperty('width');
  el.style.removeProperty('max-width');
}
function normalize(){
  if(window.innerWidth>759)return;
  document.querySelectorAll('.timeline').forEach(t=>{
    const ref=firstEventCard(t);
    if(!ref)return;
    const tr=t.getBoundingClientRect();
    const rr=ref.getBoundingClientRect();
    const left=Math.max(0,rr.left-tr.left);
    const right=Math.max(left,Math.min(tr.width,rr.right-tr.left));
    const width=Math.max(0,right-left);

    /* Direct detail wrappers match the exact event-card left/right edges. */
    DETAIL_SELECTORS.forEach(sel=>{
      t.querySelectorAll(':scope > '+sel).forEach(el=>applyLane(el,left,width));
    });

    /* A detail wrapper/card nested inside an event uses the event content column automatically. */
    t.querySelectorAll(CARD_SELECTORS.join(',')).forEach(card=>{
      const event=card.closest('.event');
      if(event && event.closest('.timeline')===t){
        card.style.setProperty('width','100%','important');
        card.style.setProperty('max-width','100%','important');
        card.style.setProperty('margin-left','0px','important');
        card.style.setProperty('margin-right','0px','important');
      }else if(!card.closest(DETAIL_SELECTORS.join(','))){
        applyLane(card,left,width);
      }
    });

    /* The actual restaurant block can be injected late by itinerary-restaurants.js. */
    t.querySelectorAll(':scope > .itinerary-restaurant-block').forEach(block=>applyLane(block,left,width));
  });
}
let queued=false;
function schedule(){
  if(queued)return;
  queued=true;
  requestAnimationFrame(()=>{queued=false;normalize()});
}
normalize();
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});
window.addEventListener('resize',schedule);
window.addEventListener('orientationchange',schedule);
setTimeout(schedule,100);
setTimeout(schedule,500);
})();
