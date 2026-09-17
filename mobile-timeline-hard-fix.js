/* Mobile timeline hard fix: every itinerary detail card from Day 2 onward stays completely to the right of the green timeline. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='mobile-timeline-hard-fix';
css.textContent=`
@media (max-width:759px){
  html,body,#app,.app{max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
  .content{overflow-x:hidden!important}

  /* Fixed left safety lane for the green timeline. */
  .timeline{position:relative!important;width:100%!important;min-width:0!important;overflow:visible!important}
  .timeline:before{left:17px!important;width:2px!important;z-index:0!important;pointer-events:none!important}

  /* Normal timeline events: dot in the 1st column, all content in the 2nd. */
  .timeline>.event{
    display:grid!important;
    grid-template-columns:38px minmax(0,1fr)!important;
    column-gap:12px!important;
    width:100%!important;
    min-width:0!important;
    box-sizing:border-box!important;
  }
  .timeline>.event>.dot{grid-column:1!important;grid-row:1!important;z-index:3!important}
  .timeline>.event>*:not(.dot){grid-column:2!important;min-width:0!important;max-width:100%!important;margin-left:0!important;margin-right:0!important;box-sizing:border-box!important}

  /* Detail wrappers inserted between events: reserve the whole 50px left lane. */
  .timeline>.day1-dinner-fixed,
  .timeline>.trip-correction-wrap,
  .timeline>.trip-dinner-grid,
  .timeline>.final-day2-dinner,
  .timeline>.final-hotel-wrap,
  .timeline>.trip-hotel-detail,
  .timeline>.itinerary-spot-detail,
  .timeline>.spot-detail-wrap{
    grid-column:2!important;
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin-left:50px!important;
    margin-right:0!important;
    box-sizing:border-box!important;
  }

  /* Some versions of the itinerary put the detail wrapper/card inside an event. */
  .timeline>.event>.trip-correction-wrap,
  .timeline>.event>.trip-dinner-grid,
  .timeline>.event>.final-day2-dinner,
  .timeline>.event>.final-hotel-wrap,
  .timeline>.event>.trip-hotel-detail,
  .timeline>.event>.itinerary-spot-detail,
  .timeline>.event>.spot-detail-wrap{
    grid-column:2!important;
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  /* Never allow a detail card itself to create a negative/overlapping position. */
  .timeline .final-dinner-card,
  .timeline .final-hotel-card,
  .timeline .restaurant,
  .timeline .restaurant-card,
  .timeline .trip-detail-card,
  .timeline .itinerary-spot-detail,
  .timeline .spot-detail-card{
    box-sizing:border-box!important;
    min-width:0!important;
    max-width:100%!important;
    position:relative!important;
    left:auto!important;
    right:auto!important;
    transform:none!important;
  }

  /* Direct timeline cards must also have the safety lane. */
  .timeline>.final-dinner-card,
  .timeline>.final-hotel-card,
  .timeline>.trip-detail-card,
  .timeline>.restaurant,
  .timeline>.restaurant-card,
  .timeline>.spot-detail-card{
    width:calc(100% - 50px)!important;
    max-width:calc(100% - 50px)!important;
    margin-left:50px!important;
    margin-right:0!important;
  }

  /* Cards nested inside an event are already in column 2, so do NOT add another 50px. */
  .timeline>.event .final-dinner-card,
  .timeline>.event .final-hotel-card,
  .timeline>.event .trip-detail-card,
  .timeline>.event .restaurant,
  .timeline>.event .restaurant-card,
  .timeline>.event .spot-detail-card,
  .timeline>.event .itinerary-spot-detail{
    width:100%!important;
    max-width:100%!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  /* Compact restaurant detail cards so Day 2 through the final day remain tidy. */
  .timeline .final-dinner-card,
  .timeline .restaurant,
  .timeline .restaurant-card{
    border-radius:14px!important;
    overflow:hidden!important;
    box-shadow:0 2px 9px rgba(20,50,50,.06)!important;
  }
  .timeline .final-dinner-card img,
  .timeline .restaurant-img,
  .timeline .restaurant-card img{
    display:block!important;
    width:100%!important;
    height:138px!important;
    max-height:138px!important;
    object-fit:cover!important;
  }
  .timeline .final-dinner-card .trip-detail-body,
  .timeline .restaurant-body{padding:10px!important}
  .timeline .trip-detail-top{gap:6px!important}
  .timeline .trip-detail-top h3,
  .timeline .restaurant-title h3,
  .timeline .restaurant-card h3{font-size:16px!important;line-height:1.3!important;margin:0!important}
  .timeline .trip-jp,.timeline .restaurant .jp{font-size:10.5px!important;line-height:1.3!important;margin:2px 0 4px!important}
  .timeline .final-dinner-card .trip-detail-body>p,
  .timeline .restaurant .desc,
  .timeline .restaurant-card p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .timeline .trip-info,
  .timeline .address,
  .timeline .hours,
  .timeline .restaurant .address{font-size:10.5px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .timeline .trip-map-btn,
  .timeline .map-btn,.timeline .web-btn{font-size:10.5px!important;padding:7px 9px!important;border-radius:8px!important;margin-top:5px!important}

  /* Hotel and attraction details use the same safe width. */
  .timeline .final-hotel-card,.timeline .itinerary-spot-detail,.timeline .spot-detail-card{
    border-radius:14px!important;
    overflow:hidden!important;
    box-sizing:border-box!important;
  }
  .timeline .final-hotel-card .trip-detail-body,
  .timeline .itinerary-spot-detail{padding:10px!important}
  .timeline .spot-detail-head h4,.timeline .itinerary-spot-detail h4{font-size:16px!important;line-height:1.3!important}
  .timeline .spot-detail-desc{font-size:11.5px!important;line-height:1.45!important}
  .timeline .spot-detail-row{font-size:10.5px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important}

  /* Keep the final bottom navigation out of the last card. */
  .content{padding-bottom:150px!important}
}
`;
document.head.appendChild(css);

/* Normalize dynamically-created detail wrappers as well; this covers cards added after tab/day rendering. */
function normalize(){
  document.querySelectorAll('.timeline').forEach(t=>{
    t.querySelectorAll('.final-dinner-card,.final-hotel-card,.trip-detail-card,.restaurant,.restaurant-card,.itinerary-spot-detail,.spot-detail-card').forEach(card=>{
      const event=card.closest('.event');
      if(event && event.closest('.timeline')===t){
        card.style.removeProperty('margin-left');
        card.style.removeProperty('width');
        card.style.removeProperty('max-width');
      }
    });
  });
}
normalize();
new MutationObserver(()=>setTimeout(normalize,20)).observe(document.body,{childList:true,subtree:true});
})();
