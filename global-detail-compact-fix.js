/* Global compact pass: make all detailed content cards smaller across every tab. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='global-detail-compact-fix';
css.textContent=`
/* Shared detail cards */
.trip-detail-card,
.itinerary-spot-detail,
.restaurant-card,
.restaurant,
.spot-card,
.final-hotel-card,
.final-dinner-card{
  border-radius:14px!important;
  box-shadow:0 3px 12px rgba(20,50,50,.045)!important;
}

/* Itinerary detail cards */
.event.has-single-spot-detail .itinerary-spot-detail{
  margin:6px 0 10px!important;
  padding:12px!important;
}
.event.has-single-spot-detail .spot-detail-head{gap:8px!important;margin-bottom:5px!important}
.event.has-single-spot-detail .spot-detail-head h4{font-size:18px!important;line-height:1.25!important}
.event.has-single-spot-detail .spot-detail-jp{font-size:12px!important;margin-top:2px!important}
.event.has-single-spot-detail .spot-detail-cat{font-size:11px!important;padding:5px 8px!important}
.event.has-single-spot-detail .spot-detail-desc{font-size:13px!important;line-height:1.5!important;margin:6px 0!important}
.event.has-single-spot-detail .spot-detail-row{font-size:12px!important;line-height:1.4!important;padding:7px 9px!important;border-radius:9px!important;margin-top:5px!important}
.event.has-single-spot-detail .spot-detail-actions{margin-top:6px!important}
.event.has-single-spot-detail .spot-detail-actions a{padding:7px 10px!important;border-radius:9px!important;font-size:12px!important}
.event.has-single-spot-detail .spot-detail-note{font-size:11px!important;padding:6px 8px!important;margin-top:5px!important}

/* Hotel / dinner details */
.final-hotel-card .trip-detail-body,
.final-dinner-card .trip-detail-body{padding:12px!important}
.final-hotel-card .trip-detail-top h3,
.final-dinner-card .trip-detail-top h3{font-size:18px!important;line-height:1.25!important}
.final-hotel-card .trip-jp,
.final-dinner-card .trip-jp{font-size:12px!important;margin:2px 0 6px!important}
.final-hotel-card .trip-detail-top>span,
.final-dinner-card .trip-detail-top>span{font-size:11px!important;padding:5px 8px!important}
.final-hotel-card .trip-detail-body>p,
.final-dinner-card .trip-detail-body>p{font-size:13px!important;line-height:1.5!important;margin:6px 0!important}
.final-hotel-card .trip-info,
.final-dinner-card .trip-info{font-size:12px!important;line-height:1.4!important;padding:7px 9px!important;border-radius:9px!important;margin-top:5px!important}
.final-hotel-card .trip-map-btn,
.final-dinner-card .trip-map-btn{margin-top:6px!important;padding:7px 10px!important;border-radius:9px!important;font-size:12px!important}
.final-dinner-card img{height:180px!important}

/* Flex / restaurant detail cards */
.restaurant-card,.restaurant{padding:0!important}
.restaurant-card .restaurant-body,.restaurant .restaurant-body{padding:12px!important}
.restaurant-card h3,.restaurant h3{font-size:18px!important;line-height:1.25!important;margin:0 0 4px!important}
.restaurant-card p,.restaurant p{font-size:12px!important;line-height:1.45!important;margin:4px 0!important}
.restaurant-card .restaurant-info,.restaurant .restaurant-info{font-size:12px!important;padding:7px 9px!important;border-radius:9px!important;margin-top:5px!important}
.restaurant-card img,.restaurant img{max-height:190px!important;object-fit:cover!important}

/* Flex category/spot cards */
.spot-card{padding:12px!important}
.spot-card h3{font-size:18px!important}
.spot-card p{font-size:12px!important;line-height:1.45!important}

@media(max-width:759px){
  .event.has-single-spot-detail .itinerary-spot-detail{padding:10px!important;border-radius:12px!important}
  .final-hotel-card .trip-detail-body,.final-dinner-card .trip-detail-body{padding:10px!important}
  .final-dinner-card img{height:155px!important}
  .restaurant-card .restaurant-body,.restaurant .restaurant-body{padding:10px!important}
  .restaurant-card img,.restaurant img{max-height:155px!important}
  .spot-card{padding:10px!important}
}
`;
document.head.appendChild(css);
})();
