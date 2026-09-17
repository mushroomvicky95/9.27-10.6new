/* 行程頁版面修正：所有詳細資料卡、住宿卡、晚餐卡都與時間軸綠線保持固定安全距離。 */
(function(){
'use strict';
const css=document.createElement('style');
css.id='itinerary-timeline-spacing-fix';
css.textContent=`
/* 時間軸本體：預留給綠線與圓點的安全欄位 */
.timeline{
  position:relative!important;
  padding-left:0!important;
}
.timeline .event{
  position:relative!important;
  grid-template-columns:36px minmax(0,1fr)!important;
  column-gap:12px!important;
  width:100%!important;
  min-width:0!important;
}
.timeline .event > .event-card,
.timeline .event > .info-card,
.timeline .event > .flight,
.timeline .event > .faq,
.timeline .event > .restaurant{
  min-width:0!important;
}

/* 景點詳細卡：永遠放在綠線右側，不讓卡片邊框壓到綠線 */
.timeline .event.has-single-spot-detail .itinerary-spot-detail{
  width:100%!important;
  max-width:100%!important;
  min-width:0!important;
  margin-left:0!important;
  box-sizing:border-box!important;
}

/* 動態插入的住宿／晚餐詳細卡：獨立佔內容欄，左側留出時間軸安全區 */
.timeline > .final-hotel-wrap,
.timeline > .trip-hotel-detail,
.timeline > .trip-dinner-grid,
.timeline > .final-day2-dinner,
.timeline > .trip-correction-wrap{
  width:calc(100% - 48px)!important;
  max-width:calc(100% - 48px)!important;
  margin-left:48px!important;
  margin-right:0!important;
  box-sizing:border-box!important;
  min-width:0!important;
}

/* 舊腳本設定 grid-column:2 時取消，避免不同父層造成錯位 */
.timeline > .final-hotel-wrap,
.timeline > .trip-dinner-grid,
.timeline > .final-day2-dinner,
.timeline > .trip-correction-wrap{
  grid-column:auto!important;
}

/* 晚餐兩欄仍保持整齊，但整個區塊一起避開綠線 */
.timeline > .final-day2-dinner,
.timeline > .trip-dinner-grid{
  display:grid!important;
  grid-template-columns:repeat(2,minmax(0,1fr))!important;
  gap:14px!important;
}
.timeline > .final-day2-dinner .final-dinner-card,
.timeline > .trip-dinner-grid .final-dinner-card{
  min-width:0!important;
  width:100%!important;
}

/* 住宿卡／餐廳卡內部也避免內容撐破外框 */
.timeline .final-hotel-card,
.timeline .final-dinner-card{
  width:100%!important;
  min-width:0!important;
  box-sizing:border-box!important;
}
.timeline .final-dinner-card img{
  width:100%!important;
  max-width:100%!important;
}

/* 綠線永遠在卡片之外，圓點在最上層 */
.timeline:before{z-index:0!important;pointer-events:none!important}
.timeline .dot{position:relative!important;z-index:3!important}
.timeline .event-card,
.timeline .itinerary-spot-detail,
.timeline .final-hotel-card,
.timeline .final-dinner-card{position:relative;z-index:1}

@media(max-width:759px){
  .timeline > .final-hotel-wrap,
  .timeline > .trip-hotel-detail,
  .timeline > .trip-dinner-grid,
  .timeline > .final-day2-dinner,
  .timeline > .trip-correction-wrap{
    width:calc(100% - 44px)!important;
    max-width:calc(100% - 44px)!important;
    margin-left:44px!important;
  }
  .timeline > .final-day2-dinner,
  .timeline > .trip-dinner-grid{
    grid-template-columns:1fr!important;
    gap:12px!important;
  }
}
`;
document.head.appendChild(css);
})();
