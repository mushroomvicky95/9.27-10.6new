/* Final mobile geometry fix: itinerary detail blocks must start in the same content lane as event cards and never cross the green timeline. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='mobile-timeline-hard-fix-v2';
css.textContent=`
@media (max-width:759px){
  html,body,#app,.app{max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
  .content{overflow-x:hidden!important;padding-bottom:155px!important}

  /* Timeline line remains only in the left gutter. */
  .timeline{position:relative!important;width:100%!important;min-width:0!important;overflow:visible!important}
  .timeline:before{left:17px!important;width:2px!important;z-index:0!important;pointer-events:none!important}

  /* Event summary cards use the normal right-hand content lane. */
  .timeline>.event{display:grid!important;grid-template-columns:38px minmax(0,1fr)!important;column-gap:12px!important;width:100%!important;min-width:0!important;box-sizing:border-box!important}
  .timeline>.event>.dot{grid-column:1!important;grid-row:1!important;z-index:3!important}
  .timeline>.event>.event-card,
  .timeline>.event>.info-card,
  .timeline>.event>.flight,
  .timeline>.event>.faq{grid-column:2!important;width:100%!important;max-width:100%!important;min-width:0!important;margin-left:0!important;margin-right:0!important;box-sizing:border-box!important}

  /* IMPORTANT: itinerary-restaurant-block is the actual wrapper used by itinerary-restaurants.js. */
  .timeline .itinerary-restaurant-block{
    width:calc(100% - 106px)!important;
    max-width:calc(100% - 106px)!important;
    min-width:0!important;
    margin-left:106px!important;
    margin-right:0!important;
    padding-left:0!important;
    padding-right:0!important;
    box-sizing:border-box!important;
    display:block!important;
    position:relative!important;
    left:auto!important;
    right:auto!important;
    transform:none!important;
  }

  /* If a restaurant block is nested inside an event, the event already supplied the gutter. */
  .timeline .event .itinerary-restaurant-block{
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
    padding-left:0!important;
    padding-right:0!important;
  }

  .timeline .itinerary-restaurant-label{
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin:0 0 10px!important;
    padding:11px 14px!important;
    box-sizing:border-box!important;
    border-radius:14px!important;
    font-size:15px!important;
    line-height:1.35!important;
    white-space:normal!important;
  }

  /* Restaurant cards: compact, same width as their label, never wider than the content lane. */
  .timeline .itinerary-restaurant-block .itinerary-restaurant-card,
  .timeline .itinerary-restaurant-block .restaurant.itinerary-restaurant-card{
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin:0 0 12px!important;
    padding:0!important;
    box-sizing:border-box!important;
    border-radius:14px!important;
    overflow:hidden!important;
    position:relative!important;
    left:auto!important;
    right:auto!important;
    transform:none!important;
  }

  /* Override the older 220px mobile restaurant rule. */
  .timeline .itinerary-restaurant-block .itinerary-restaurant-card .restaurant-img,
  .timeline .itinerary-restaurant-block .itinerary-restaurant-card img.restaurant-img{
    display:block!important;
    width:100%!important;
    height:142px!important;
    max-height:142px!important;
    min-height:142px!important;
    object-fit:cover!important;
    box-sizing:border-box!important;
  }

  .timeline .itinerary-restaurant-block .itinerary-restaurant-card .restaurant-body{
    padding:10px!important;
    box-sizing:border-box!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-title{gap:6px!important}
  .timeline .itinerary-restaurant-block .restaurant-title h3{font-size:16px!important;line-height:1.3!important;margin:0!important}
  .timeline .itinerary-restaurant-block .restaurant .jp{font-size:10.5px!important;line-height:1.3!important;margin-top:2px!important}
  .timeline .itinerary-restaurant-block .restaurant .category{font-size:10px!important;padding:4px 7px!important}
  .timeline .itinerary-restaurant-block .restaurant .desc{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .timeline .itinerary-restaurant-block .menu-detail{
    font-size:11.5px!important;
    line-height:1.45!important;
    padding:7px 8px!important;
    margin:5px 0!important;
    border-radius:9px!important;
    box-sizing:border-box!important;
  }
  .timeline .itinerary-restaurant-block .address,
  .timeline .itinerary-restaurant-block .hours{
    width:100%!important;
    max-width:100%!important;
    font-size:10.5px!important;
    line-height:1.4!important;
    padding:6px 7px!important;
    margin-top:4px!important;
    border-radius:8px!important;
    box-sizing:border-box!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-actions{display:flex!important;gap:5px!important;margin-top:5px!important}
  .timeline .itinerary-restaurant-block .map-btn,
  .timeline .itinerary-restaurant-block .web-btn{font-size:10.5px!important;padding:7px 8px!important;border-radius:8px!important;min-width:0!important}

  /* Other generated detail wrappers use exactly the same 106px left gutter. */
  .timeline>.day1-dinner-fixed,
  .timeline>.trip-correction-wrap,
  .timeline>.trip-dinner-grid,
  .timeline>.final-day2-dinner,
  .timeline>.final-hotel-wrap,
  .timeline>.trip-hotel-detail,
  .timeline>.itinerary-spot-detail,
  .timeline>.spot-detail-wrap{
    width:calc(100% - 106px)!important;
    max-width:calc(100% - 106px)!important;
    min-width:0!important;
    margin-left:106px!important;
    margin-right:0!important;
    box-sizing:border-box!important;
  }

  /* If those wrappers are inside an event, do not double-indent. */
  .timeline .event .day1-dinner-fixed,
  .timeline .event .trip-correction-wrap,
  .timeline .event .trip-dinner-grid,
  .timeline .event .final-day2-dinner,
  .timeline .event .final-hotel-wrap,
  .timeline .event .trip-hotel-detail,
  .timeline .event .itinerary-spot-detail,
  .timeline .event .spot-detail-wrap{
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
  }

  .timeline .final-dinner-card,
  .timeline .final-hotel-card,
  .timeline .trip-detail-card,
  .timeline .restaurant-card,
  .timeline .spot-detail-card{
    box-sizing:border-box!important;
    min-width:0!important;
    max-width:100%!important;
    position:relative!important;
    left:auto!important;
    right:auto!important;
    transform:none!important;
  }

  .timeline .final-dinner-card img{height:142px!important;max-height:142px!important;object-fit:cover!important}
  .timeline .final-dinner-card .trip-detail-body,
  .timeline .final-hotel-card .trip-detail-body{padding:10px!important}
  .timeline .final-dinner-card .trip-detail-top h3,
  .timeline .final-hotel-card .trip-detail-top h3{font-size:16px!important;line-height:1.3!important}
  .timeline .trip-jp{font-size:10.5px!important;margin:2px 0 4px!important}
  .timeline .final-dinner-card .trip-detail-body>p,
  .timeline .final-hotel-card .trip-detail-body>p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .timeline .trip-info{font-size:10.5px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .timeline .trip-map-btn{font-size:10.5px!important;padding:7px 9px!important;margin-top:5px!important;border-radius:8px!important}

  /* Attractions/hotels keep the same safe right-hand lane. */
  .timeline .itinerary-spot-detail,
  .timeline .spot-detail-card{max-width:100%!important;box-sizing:border-box!important}

  .tabs{height:76px!important;padding-bottom:env(safe-area-inset-bottom,0px)!important;box-sizing:content-box!important}
}
`;
document.head.appendChild(css);

/* JS normalization is intentional: several older scripts inject restaurant blocks after page render. */
function normalize(){
  if(window.innerWidth>759)return;
  document.querySelectorAll('.timeline').forEach(t=>{
    t.querySelectorAll('.itinerary-restaurant-block').forEach(block=>{
      const insideEvent=!!block.closest('.event');
      if(!insideEvent){
        block.style.setProperty('margin-left','106px','important');
        block.style.setProperty('margin-right','0','important');
        block.style.setProperty('width','calc(100% - 106px)','important');
        block.style.setProperty('max-width','calc(100% - 106px)','important');
        block.style.setProperty('padding-left','0','important');
      }else{
        block.style.removeProperty('margin-left');
        block.style.removeProperty('width');
        block.style.removeProperty('max-width');
      }
      block.querySelectorAll('.itinerary-restaurant-card .restaurant-img').forEach(img=>{
        img.style.setProperty('height','142px','important');
        img.style.setProperty('max-height','142px','important');
        img.style.setProperty('min-height','142px','important');
      });
    });
  });
}
normalize();
new MutationObserver(()=>setTimeout(normalize,30)).observe(document.body,{childList:true,subtree:true});
window.addEventListener('resize',normalize);
})();
