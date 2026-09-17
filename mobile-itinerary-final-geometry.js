/* Mobile itinerary final geometry: align every detailed choice card with the event content column, keeping the green timeline in a dedicated left lane. */
(function(){
'use strict';
const DETAIL='.final-dinner-card,.final-hotel-card,.restaurant,.restaurant-card,.trip-detail-card,.itinerary-spot-detail,.spot-detail-card';
const WRAP='.day1-dinner-fixed,.trip-correction-wrap,.trip-dinner-grid,.final-day2-dinner,.final-hotel-wrap,.trip-hotel-detail,.spot-detail-wrap';
const css=document.createElement('style');
css.id='mobile-itinerary-final-geometry';
css.textContent=`
@media (max-width:759px){
  html,body,#app,.app{width:100%!important;max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
  .content{width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;overflow-x:hidden!important;padding-left:12px!important;padding-right:12px!important;padding-bottom:210px!important}
  .timeline{width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;position:relative!important;overflow:visible!important}
  .timeline:before{left:17px!important;width:2px!important;z-index:0!important}

  /* Timeline events stay in two columns: 38px marker lane + content lane. */
  .timeline>.event{display:grid!important;grid-template-columns:38px minmax(0,1fr)!important;column-gap:12px!important;width:100%!important;box-sizing:border-box!important;min-width:0!important}
  .timeline>.event>.dot{grid-column:1!important;grid-row:1!important;z-index:3!important}
  .timeline>.event>*:not(.dot){grid-column:2!important;min-width:0!important;max-width:100%!important;box-sizing:border-box!important;margin-left:0!important;margin-right:0!important}

  /* Any detail wrapper/card not inside an event gets the same content-column inset. */
  .timeline ${WRAP}{width:calc(100% - 44px)!important;max-width:calc(100% - 44px)!important;margin-left:44px!important;margin-right:0!important;box-sizing:border-box!important;min-width:0!important}
  .timeline ${DETAIL}{box-sizing:border-box!important;position:relative!important;left:auto!important;right:auto!important;transform:none!important;min-width:0!important;max-width:100%!important}

  /* Detail cards inside an event already inherit the event's content column. */
  .timeline>.event ${DETAIL}{width:100%!important;max-width:100%!important;margin-left:0!important;margin-right:0!important}

  /* When a detail card is a direct timeline child, explicitly reserve the left marker lane. */
  .timeline>${DETAIL}{width:calc(100% - 44px)!important;max-width:calc(100% - 44px)!important;margin-left:44px!important;margin-right:0!important}

  /* Prevent old scripts from widening or translating the detailed cards. */
  .timeline ${DETAIL},.timeline ${WRAP}{grid-column:auto!important;flex:none!important}
  .timeline .final-dinner-card img,.timeline .restaurant img,.timeline .restaurant-img,.timeline .restaurant-card img{width:100%!important;height:138px!important;max-height:138px!important;object-fit:cover!important;display:block!important}
  .timeline .final-dinner-card,.timeline .restaurant,.timeline .restaurant-card,.timeline .final-hotel-card,.timeline .itinerary-spot-detail,.timeline .spot-detail-card{border-radius:14px!important;overflow:hidden!important;box-shadow:0 2px 9px rgba(20,50,50,.06)!important}
  .timeline .final-dinner-card .trip-detail-body,.timeline .restaurant-body,.timeline .final-hotel-card .trip-detail-body,.timeline .itinerary-spot-detail{padding:10px!important}
  .timeline .trip-detail-top{gap:6px!important;align-items:flex-start!important}
  .timeline .trip-detail-top h3,.timeline .restaurant-title h3,.timeline .restaurant-card h3{font-size:16px!important;line-height:1.3!important;margin:0!important}
  .timeline .trip-jp,.timeline .restaurant .jp{font-size:10.5px!important;line-height:1.3!important;margin:2px 0 4px!important}
  .timeline .final-dinner-card .trip-detail-body>p,.timeline .restaurant .desc,.timeline .restaurant-card p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .timeline .trip-info,.timeline .address,.timeline .hours,.timeline .restaurant .address{font-size:10.5px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .timeline .trip-map-btn,.timeline .map-btn,.timeline .web-btn{font-size:10.5px!important;padding:7px 9px!important;border-radius:8px!important;margin-top:5px!important}
  .timeline .spot-detail-head h4,.timeline .itinerary-spot-detail h4{font-size:16px!important;line-height:1.3!important}
  .timeline .spot-detail-desc{font-size:11.5px!important;line-height:1.45!important}
  .timeline .spot-detail-row{font-size:10.5px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important}

  /* Choice headers should align with the same content column. */
  .timeline .restaurant-choice-header,.timeline .choice-header,.timeline .meal-choice-header,.timeline .dinner-choice-header{margin-left:44px!important;width:calc(100% - 44px)!important;max-width:calc(100% - 44px)!important;box-sizing:border-box!important}

  /* Keep the fixed bottom tabs below the entire final card. */
  .tabs{z-index:20!important}
}
`;
document.head.appendChild(css);

function normalize(){
  if(!window.matchMedia('(max-width:759px)').matches)return;
  document.querySelectorAll('.timeline').forEach(t=>{
    t.querySelectorAll(DETAIL).forEach(card=>{
      const event=card.closest('.event');
      const insideThisTimeline=event && event.closest('.timeline')===t;
      const outer=card.closest(WRAP);
      /* If card is inside an event, event grid already provides the inset. Otherwise set it directly. */
      if(insideThisTimeline){
        card.style.removeProperty('margin-left');
        card.style.removeProperty('width');
        card.style.removeProperty('max-width');
      }else if(!outer){
        card.style.setProperty('margin-left','44px','important');
        card.style.setProperty('width','calc(100% - 44px)','important');
        card.style.setProperty('max-width','calc(100% - 44px)','important');
      }
    });

    /* Remove duplicate hotel detail cards for the same hotel within one timeline/day rendering. */
    const seen=new Set();
    t.querySelectorAll('.final-hotel-card').forEach(card=>{
      const key=(card.textContent||'').replace(/\s+/g,' ').trim();
      const title=card.querySelector('h3')?.textContent?.trim()||key;
      if(seen.has(title)) card.closest('.final-hotel-wrap')?.remove() || card.remove();
      else seen.add(title);
    });
  });
}
normalize();
new MutationObserver(()=>requestAnimationFrame(normalize)).observe(document.body,{childList:true,subtree:true});
})();
