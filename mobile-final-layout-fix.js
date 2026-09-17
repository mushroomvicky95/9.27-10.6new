/* Final mobile layout pass: keep every itinerary card to the right of the green timeline line and compact detail cards. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='mobile-final-layout-fix';
css.textContent=`
@media(max-width:759px){
  /* The timeline line owns the left safety lane. Every event's real content starts in column 2. */
  .timeline{
    position:relative!important;
    padding-left:0!important;
    overflow:visible!important;
  }
  .timeline:before{
    left:18px!important;
    width:2px!important;
    z-index:0!important;
  }
  .timeline .event{
    display:grid!important;
    grid-template-columns:38px minmax(0,1fr)!important;
    column-gap:12px!important;
    width:100%!important;
    min-width:0!important;
    position:relative!important;
  }
  .timeline .event > .dot{
    grid-column:1!important;
    grid-row:1!important;
    position:relative!important;
    z-index:3!important;
  }
  .timeline .event > :not(.dot){
    grid-column:2 / -1!important;
    min-width:0!important;
    max-width:100%!important;
    box-sizing:border-box!important;
  }

  /* Detailed attraction cards that are inserted inside an event. */
  .timeline .event > .itinerary-spot-detail,
  .timeline .event > .trip-correction-wrap,
  .timeline .event > .trip-dinner-grid,
  .timeline .event > .final-day2-dinner,
  .timeline .event > .final-hotel-wrap{
    width:100%!important;
    margin-left:0!important;
    margin-right:0!important;
  }

  /* Detailed cards inserted as siblings of events: reserve a complete safety lane. */
  .timeline > .trip-correction-wrap,
  .timeline > .trip-dinner-grid,
  .timeline > .final-day2-dinner,
  .timeline > .final-hotel-wrap,
  .timeline > .trip-hotel-detail{
    width:calc(100% - 50px)!important;
    max-width:calc(100% - 50px)!important;
    margin-left:50px!important;
    margin-right:0!important;
    box-sizing:border-box!important;
    min-width:0!important;
  }
  .timeline > .final-day2-dinner,
  .timeline > .trip-dinner-grid{
    display:grid!important;
    grid-template-columns:1fr!important;
    gap:12px!important;
  }

  /* Never let a detail card visually cover the green line. */
  .timeline .event-card,
  .timeline .info-card,
  .timeline .flight,
  .timeline .faq,
  .timeline .restaurant,
  .timeline .itinerary-spot-detail,
  .timeline .final-hotel-card,
  .timeline .final-dinner-card{
    position:relative!important;
    z-index:1!important;
    min-width:0!important;
    max-width:100%!important;
    overflow:hidden!important;
  }

  /* Compact but readable detail cards across all tabs. */
  .itinerary-spot-detail,
  .trip-detail-card,
  .restaurant,
  .restaurant-card,
  .spot-card,
  .final-hotel-card,
  .final-dinner-card{
    border-radius:13px!important;
    box-shadow:0 2px 9px rgba(20,50,50,.045)!important;
  }
  .event.has-single-spot-detail .itinerary-spot-detail{
    padding:10px!important;
    margin-top:5px!important;
    margin-bottom:8px!important;
  }
  .event.has-single-spot-detail .spot-detail-head{gap:7px!important;margin-bottom:4px!important}
  .event.has-single-spot-detail .spot-detail-head h4{font-size:17px!important;line-height:1.25!important}
  .event.has-single-spot-detail .spot-detail-jp{font-size:11px!important}
  .event.has-single-spot-detail .spot-detail-desc{font-size:12px!important;line-height:1.48!important;margin:5px 0!important}
  .event.has-single-spot-detail .spot-detail-row{font-size:11.5px!important;line-height:1.4!important;padding:7px 8px!important;margin-top:4px!important;border-radius:8px!important}
  .event.has-single-spot-detail .spot-detail-actions{margin-top:5px!important}
  .event.has-single-spot-detail .spot-detail-actions a{font-size:11.5px!important;padding:7px 9px!important;border-radius:8px!important}
  .event.has-single-spot-detail .spot-detail-note{font-size:10.5px!important;padding:6px 7px!important;margin-top:4px!important}

  .final-dinner-card img{height:145px!important;max-height:145px!important;object-fit:cover!important}
  .final-dinner-card .trip-detail-body,
  .final-hotel-card .trip-detail-body{padding:10px!important}
  .final-dinner-card .trip-detail-top h3,
  .final-hotel-card .trip-detail-top h3{font-size:17px!important;line-height:1.25!important}
  .final-dinner-card .trip-jp,
  .final-hotel-card .trip-jp{font-size:11px!important;margin:2px 0 5px!important}
  .final-dinner-card .trip-detail-body>p,
  .final-hotel-card .trip-detail-body>p{font-size:12px!important;line-height:1.48!important;margin:5px 0!important}
  .final-dinner-card .trip-info,
  .final-hotel-card .trip-info{font-size:11.5px!important;line-height:1.4!important;padding:7px 8px!important;margin-top:4px!important;border-radius:8px!important}
  .final-dinner-card .trip-map-btn,
  .final-hotel-card .trip-map-btn{font-size:11.5px!important;padding:7px 10px!important;margin-top:5px!important;border-radius:8px!important}

  .restaurant-img,
  .restaurant-card img,
  .restaurant img{height:145px!important;max-height:145px!important;object-fit:cover!important}
  .restaurant-body,
  .restaurant-card .restaurant-body{padding:10px!important}
  .restaurant-title h3,
  .restaurant-card h3{font-size:16px!important;line-height:1.28!important}
  .restaurant .jp{font-size:11px!important}
  .restaurant .desc,
  .restaurant-card p{font-size:11.5px!important;line-height:1.45!important;margin:4px 0!important}
  .restaurant .address{font-size:11px!important;padding:7px 8px!important;border-radius:8px!important}
  .restaurant-actions{gap:6px!important;margin-top:6px!important}
  .map-btn,.web-btn{font-size:11px!important;padding:7px!important;border-radius:8px!important}

  .spot-card{padding:9px!important;gap:9px!important;border-radius:12px!important}
  .spot-card img{width:64px!important;height:58px!important;border-radius:9px!important}
  .spot-card h4{font-size:13px!important}
  .spot-card p{font-size:11px!important;line-height:1.4!important}
}
`;
document.head.appendChild(css);
})();
