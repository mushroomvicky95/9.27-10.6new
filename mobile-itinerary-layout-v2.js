/* Mobile itinerary layout v2: keep all detail content to the right of the green timeline and compact oversized cards. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='mobile-itinerary-layout-v2';
css.textContent=`
@media (max-width:759px){
  html,body,#app{max-width:100%;overflow-x:hidden!important}
  body{padding-bottom:0!important}
  .app{width:100%!important;max-width:760px!important;min-width:0!important;overflow-x:hidden!important}
  .content{padding:14px 12px calc(150px + env(safe-area-inset-bottom,0px))!important;min-width:0!important;overflow-x:clip!important}

  /* Timeline safety lane: the green line is never allowed to run underneath a detail card. */
  .timeline{position:relative!important;width:100%!important;min-width:0!important;padding:0!important;overflow:visible!important}
  .timeline:before{left:17px!important;width:2px!important;z-index:0!important}
  .timeline>.event{display:grid!important;grid-template-columns:38px minmax(0,1fr)!important;column-gap:12px!important;width:100%!important;margin-bottom:12px!important;min-width:0!important}
  .timeline>.event>.dot{grid-column:1!important;grid-row:1!important;width:35px!important;height:35px!important;position:relative!important;z-index:3!important}
  .timeline>.event>:not(.dot){grid-column:2/-1!important;min-width:0!important;max-width:100%!important;margin-left:0!important;margin-right:0!important}

  /* Any inserted detail wrapper that is a timeline sibling gets the same 50px safety lane. */
  .timeline>.day1-dinner-fixed,
  .timeline>.trip-correction-wrap,
  .timeline>.trip-dinner-grid,
  .timeline>.final-day2-dinner,
  .timeline>.final-hotel-wrap,
  .timeline>.trip-hotel-detail,
  .timeline>.itinerary-spot-detail,
  .timeline>.spot-detail-wrap{
    width:calc(100% - 50px)!important;
    max-width:calc(100% - 50px)!important;
    margin-left:50px!important;
    margin-right:0!important;
    box-sizing:border-box!important;
    min-width:0!important;
  }
  .timeline>.day1-dinner-fixed{display:grid!important;grid-template-columns:1fr!important;gap:10px!important;margin-top:8px!important;margin-bottom:18px!important}
  .timeline>.trip-dinner-grid,.timeline>.final-day2-dinner{display:grid!important;grid-template-columns:1fr!important;gap:10px!important}
  .timeline>.final-hotel-wrap,.timeline>.trip-correction-wrap{margin-top:8px!important;margin-bottom:16px!important}

  /* The Day 1 restaurant wrapper may be nested in a non-event container. */
  .content:has(.timeline) .day1-dinner-fixed{
    width:calc(100% - 50px)!important;
    max-width:calc(100% - 50px)!important;
    margin-left:50px!important;
    margin-right:0!important;
    box-sizing:border-box!important;
    min-width:0!important;
  }
  .content:has(.timeline) .day1-dinner-fixed .day1-card{width:100%!important;min-width:0!important}

  /* Compact all detailed restaurant cards. */
  .timeline .restaurant,
  .day1-dinner-fixed .restaurant,
  .final-dinner-card,
  .final-hotel-card,
  .trip-detail-card{
    width:100%!important;max-width:100%!important;min-width:0!important;
    border-radius:14px!important;overflow:hidden!important;
    box-shadow:0 2px 9px rgba(20,50,50,.05)!important;
  }
  .day1-dinner-fixed .restaurant-img,
  .final-dinner-card img,
  .restaurant-img,
  .restaurant-card img{height:142px!important;max-height:142px!important;width:100%!important;object-fit:cover!important;display:block!important}
  .restaurant-body,.day1-dinner-fixed .restaurant-body,.final-dinner-card .trip-detail-body,.final-hotel-card .trip-detail-body{padding:10px!important}
  .restaurant-title{gap:6px!important}
  .restaurant-title h3,.restaurant-card h3{font-size:16px!important;line-height:1.28!important;margin:0!important}
  .restaurant .jp{font-size:10.5px!important;margin-top:2px!important}
  .restaurant .desc,.restaurant-card p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .category{font-size:10px!important;padding:4px 7px!important}
  .address,.hours,.restaurant .address{font-size:10.8px!important;line-height:1.38!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .restaurant-actions{gap:5px!important;margin-top:5px!important}
  .map-btn,.web-btn{font-size:10.5px!important;padding:7px!important;border-radius:8px!important}

  /* Compact dinner cards created by final-layout-fix.js. */
  .final-dinner-card img{height:142px!important}
  .trip-detail-top{gap:7px!important;align-items:flex-start!important}
  .trip-detail-top h3{font-size:16px!important;line-height:1.28!important}
  .trip-detail-top>span{font-size:10px!important;padding:4px 7px!important}
  .trip-jp{font-size:10.5px!important;margin:2px 0 4px!important}
  .final-dinner-card .trip-detail-body>p,.final-hotel-card .trip-detail-body>p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .trip-info{font-size:10.8px!important;line-height:1.38!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .trip-map-btn{font-size:10.5px!important;padding:7px 9px!important;margin-top:5px!important;border-radius:8px!important}

  /* Attraction detail cards: smaller typography and shorter vertical rhythm. */
  .itinerary-spot-detail,
  .trip-detail-card.itinerary-spot-detail,
  .spot-detail-card,
  .spot-detail-wrap .itinerary-spot-detail{
    width:100%!important;max-width:100%!important;min-width:0!important;
    margin-left:0!important;margin-right:0!important;
    padding:10px!important;border-radius:14px!important;
    box-shadow:0 2px 9px rgba(20,50,50,.045)!important;
    overflow:hidden!important;
  }
  .timeline>.itinerary-spot-detail{margin-left:50px!important;width:calc(100% - 50px)!important;max-width:calc(100% - 50px)!important}
  .spot-detail-head{gap:6px!important;margin-bottom:4px!important}
  .spot-detail-head h4,.itinerary-spot-detail h4{font-size:17px!important;line-height:1.25!important;margin:0!important}
  .spot-detail-jp{font-size:10.5px!important}
  .spot-detail-desc{font-size:11.5px!important;line-height:1.48!important;margin:5px 0!important}
  .spot-detail-row{font-size:10.8px!important;line-height:1.4!important;padding:6px 7px!important;margin-top:4px!important;border-radius:8px!important}
  .spot-detail-actions{margin-top:5px!important}
  .spot-detail-actions a{font-size:10.5px!important;padding:7px 9px!important;border-radius:8px!important}
  .spot-detail-note{font-size:10px!important;padding:5px 6px!important;margin-top:4px!important}

  /* Hotel cards should follow the same compact geometry. */
  .final-hotel-card .trip-detail-top h3{font-size:16px!important}
  .final-hotel-card .trip-detail-body{padding:10px!important}

  /* Keep ordinary event summary cards neat and safely inside column 2. */
  .event-card,.info-card,.flight,.faq{min-width:0!important;max-width:100%!important;overflow:hidden!important}
  .event-card{padding:11px!important;border-radius:14px!important}
  .event-card h3,.info-card h3{font-size:16px!important;line-height:1.35!important}
  .event-card p,.info-card p,.info-card li{font-size:12px!important;line-height:1.5!important}

  /* Bottom navigation must not cover the last rows of a detail card on iPhone Safari. */
  .tabs{height:76px!important;padding-bottom:env(safe-area-inset-bottom,0px)!important;box-sizing:content-box!important}
}
`;
document.head.appendChild(css);

function markTimeline(){
  document.querySelectorAll('.timeline').forEach(t=>t.classList.add('mobile-layout-v2'));
}
markTimeline();
new MutationObserver(markTimeline).observe(document.body,{childList:true,subtree:true});
})();
