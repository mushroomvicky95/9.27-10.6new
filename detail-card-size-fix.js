/* Compact detail cards: smaller, tighter and aligned across itinerary details. */
(function(){
'use strict';
const css=document.createElement('style');
css.id='compact-detail-card-style';
css.textContent=`
/* 景點詳細資料：保留完整資訊，但縮小整體視覺重量 */
.event.has-single-spot-detail .itinerary-spot-detail{
  margin:8px 0 14px!important;
  padding:16px!important;
  border-radius:16px!important;
  box-shadow:0 4px 14px rgba(20,50,50,.05)!important;
}
.event.has-single-spot-detail .spot-detail-head{
  gap:10px!important;
  margin-bottom:8px!important;
}
.event.has-single-spot-detail .spot-detail-head h4{
  font-size:20px!important;
  line-height:1.3!important;
  margin:0!important;
}
.event.has-single-spot-detail .spot-detail-jp{
  font-size:13px!important;
  margin-top:3px!important;
}
.event.has-single-spot-detail .spot-detail-cat{
  font-size:12px!important;
  padding:6px 10px!important;
}
.event.has-single-spot-detail .spot-detail-desc{
  font-size:14px!important;
  line-height:1.6!important;
  margin:8px 0!important;
}
.event.has-single-spot-detail .spot-detail-row{
  font-size:13px!important;
  line-height:1.5!important;
  padding:9px 11px!important;
  border-radius:11px!important;
  margin-top:6px!important;
}
.event.has-single-spot-detail .spot-detail-actions{
  margin-top:8px!important;
}
.event.has-single-spot-detail .spot-detail-actions a{
  border-radius:10px!important;
  padding:9px 12px!important;
  font-size:13px!important;
}
.event.has-single-spot-detail .spot-detail-note{
  font-size:12px!important;
  line-height:1.5!important;
  padding:8px 10px!important;
  border-radius:10px!important;
  margin-top:7px!important;
}

/* 住宿詳細資料：與景點卡統一，不再出現過大的空白 */
.final-hotel-wrap{
  margin:6px 0 14px!important;
}
.final-hotel-card{
  border-radius:16px!important;
  box-shadow:0 4px 14px rgba(20,50,50,.05)!important;
}
.final-hotel-card .trip-detail-body{
  padding:16px!important;
}
.final-hotel-card .trip-detail-top{
  gap:10px!important;
}
.final-hotel-card .trip-detail-top h3{
  font-size:20px!important;
  line-height:1.3!important;
}
.final-hotel-card .trip-jp{
  font-size:13px!important;
  margin:3px 0 8px!important;
}
.final-hotel-card .trip-detail-top>span{
  font-size:12px!important;
  padding:6px 10px!important;
}
.final-hotel-card .trip-detail-body>p{
  font-size:14px!important;
  line-height:1.6!important;
  margin:8px 0!important;
}
.final-hotel-card .trip-info{
  font-size:13px!important;
  line-height:1.5!important;
  padding:9px 11px!important;
  border-radius:11px!important;
  margin-top:6px!important;
}
.final-hotel-card .trip-map-btn{
  margin-top:8px!important;
  padding:9px 13px!important;
  border-radius:10px!important;
  font-size:13px!important;
}

/* 行程晚餐詳細卡也縮小，保持同一套卡片節奏 */
.final-dinner-card{
  border-radius:16px!important;
  box-shadow:0 4px 14px rgba(20,50,50,.05)!important;
}
.final-dinner-card img{
  height:220px!important;
}
.final-dinner-card .trip-detail-body{
  padding:16px!important;
}
.final-dinner-card .trip-detail-top h3{
  font-size:20px!important;
  line-height:1.3!important;
}
.final-dinner-card .trip-jp{
  font-size:13px!important;
  margin:3px 0 8px!important;
}
.final-dinner-card .trip-detail-top>span{
  font-size:12px!important;
  padding:6px 10px!important;
}
.final-dinner-card .trip-detail-body>p{
  font-size:14px!important;
  line-height:1.6!important;
  margin:8px 0!important;
}
.final-dinner-card .trip-info{
  font-size:13px!important;
  line-height:1.5!important;
  padding:9px 11px!important;
  border-radius:11px!important;
  margin-top:6px!important;
}
.final-dinner-card .trip-map-btn{
  margin-top:8px!important;
  padding:9px 13px!important;
  border-radius:10px!important;
  font-size:13px!important;
}

@media(min-width:760px){
  .event.has-single-spot-detail .itinerary-spot-detail,
  .final-hotel-card,
  .final-dinner-card{max-width:100%;}
}
@media(max-width:759px){
  .event.has-single-spot-detail .itinerary-spot-detail{padding:13px!important;border-radius:14px!important}
  .final-hotel-card .trip-detail-body,.final-dinner-card .trip-detail-body{padding:13px!important}
  .final-dinner-card img{height:190px!important}
}
`;
document.head.appendChild(css);
})();
