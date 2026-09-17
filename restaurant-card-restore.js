/* Restore the original detailed restaurant-card presentation.
   Only geometry is changed elsewhere; restaurant content, menu and contact details stay intact. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='restaurant-card-restore';
css.textContent=`
/* Restore the original restaurant cards from styles.css on mobile too. */
@media(max-width:759px){
  .timeline .itinerary-restaurant-block{
    box-sizing:border-box!important;
    min-width:0!important;
    overflow:visible!important;
  }
  .timeline .itinerary-restaurant-block .itinerary-restaurant-card,
  .timeline .itinerary-restaurant-block .restaurant.itinerary-restaurant-card,
  .timeline .restaurant-card,
  .timeline .restaurant{
    box-sizing:border-box!important;
    width:100%!important;
    max-width:100%!important;
    min-width:0!important;
    margin-bottom:14px!important;
    border-radius:18px!important;
    overflow:hidden!important;
    box-shadow:0 5px 18px #1e323014!important;
  }

  /* Original image/body proportions — do not use the newer 132/142/145px compact rules. */
  .timeline .itinerary-restaurant-block .restaurant-img,
  .timeline .itinerary-restaurant-block .restaurant-card img,
  .timeline .itinerary-restaurant-block .restaurant img,
  .timeline .restaurant-card img,
  .timeline .restaurant img{
    width:100%!important;
    height:165px!important;
    min-height:165px!important;
    max-height:165px!important;
    object-fit:cover!important;
    display:block!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-body,
  .timeline .restaurant-card .restaurant-body,
  .timeline .restaurant .restaurant-body{
    padding:14px!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-title,
  .timeline .restaurant-title{
    display:flex!important;
    justify-content:space-between!important;
    gap:8px!important;
    align-items:flex-start!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-title h3,
  .timeline .restaurant-title h3,
  .timeline .restaurant-card h3{
    margin:0!important;
    font-size:17px!important;
    line-height:1.4!important;
  }
  .timeline .itinerary-restaurant-block .restaurant .jp,
  .timeline .restaurant .jp{
    font-size:12px!important;
    line-height:1.4!important;
    margin-top:2px!important;
  }
  .timeline .itinerary-restaurant-block .category,
  .timeline .restaurant .category{
    font-size:11px!important;
    padding:5px 8px!important;
  }
  .timeline .itinerary-restaurant-block .restaurant .desc,
  .timeline .restaurant .desc,
  .timeline .restaurant-card p{
    font-size:13px!important;
    line-height:1.65!important;
    margin:8px 0!important;
  }
  .timeline .itinerary-restaurant-block .menu-detail,
  .timeline .restaurant .menu-detail{
    font-size:13px!important;
    line-height:1.6!important;
    padding:8px 10px!important;
    margin:8px 0!important;
    box-sizing:border-box!important;
    overflow-wrap:anywhere!important;
  }
  .timeline .itinerary-restaurant-block .address,
  .timeline .itinerary-restaurant-block .hours,
  .timeline .restaurant .address,
  .timeline .restaurant .hours{
    width:100%!important;
    max-width:100%!important;
    box-sizing:border-box!important;
    font-size:12px!important;
    line-height:1.55!important;
    padding:8px!important;
    margin-top:5px!important;
    border-radius:10px!important;
    overflow-wrap:anywhere!important;
  }
  .timeline .itinerary-restaurant-block .restaurant-actions,
  .timeline .restaurant-actions{
    display:flex!important;
    gap:8px!important;
    margin-top:10px!important;
  }
  .timeline .itinerary-restaurant-block .map-btn,
  .timeline .itinerary-restaurant-block .web-btn,
  .timeline .restaurant .map-btn,
  .timeline .restaurant .web-btn{
    flex:1!important;
    min-width:0!important;
    font-size:12px!important;
    line-height:1.35!important;
    padding:9px!important;
    border-radius:10px!important;
    box-sizing:border-box!important;
  }

  /* The four dedicated Day 2 dinner cards are restaurant cards too: restore the previous readable scale. */
  .timeline .final-dinner-card{
    border-radius:22px!important;
    overflow:hidden!important;
    box-shadow:0 8px 24px rgba(20,50,50,.07)!important;
  }
  .timeline .final-dinner-card img{
    width:100%!important;
    height:220px!important;
    min-height:220px!important;
    max-height:220px!important;
    object-fit:cover!important;
  }
  .timeline .final-dinner-card .trip-detail-body{
    padding:16px!important;
  }
  .timeline .final-dinner-card .trip-detail-top h3{
    font-size:20px!important;
    line-height:1.3!important;
  }
  .timeline .final-dinner-card .trip-jp{
    font-size:13px!important;
    margin:3px 0 8px!important;
  }
  .timeline .final-dinner-card .trip-detail-body>p{
    font-size:14px!important;
    line-height:1.6!important;
    margin:8px 0!important;
  }
  .timeline .final-dinner-card .trip-info{
    font-size:13px!important;
    line-height:1.5!important;
    padding:9px 11px!important;
    margin-top:6px!important;
    border-radius:11px!important;
    overflow-wrap:anywhere!important;
  }
  .timeline .final-dinner-card .trip-map-btn{
    font-size:13px!important;
    padding:9px 13px!important;
    margin-top:8px!important;
    border-radius:10px!important;
  }
}
`;
document.head.appendChild(css);
})();
