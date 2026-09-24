/* Final itinerary layout fix: Day 1 only its own dinner cards; Day 2 gets the four requested dinner choices. */
(function(){
'use strict';
const MAP=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const dinners=[
{name:'博多もつ鍋 前田屋 博多店',tag:'咸食／牛雜鍋',jp:'博多もつ鍋前田屋 博多店',desc:'以國產和牛內臟製作博多名物牛雜鍋；味噌、醬油、辛味三種鍋底可選。',addr:'福岡市博多区博多駅前3-26-5',hours:'11:00–14:30（LO 14:00）／17:00–24:00（食事LO 23:00・飲物LO 23:30）',tel:'092-482-8558',photo:'https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg'},
{name:'水たき 長野',tag:'咸食／水炊き',jp:'水たき長野',desc:'創業逾90年的水炊き專門店，以白濁雞湯搭配雞肉與蔬菜。',addr:'福岡市博多区対馬小路1-6',hours:'12:00–22:00；週日休',tel:'092-281-2200',photo:'https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg'},
{name:'肉の山翔',tag:'咸食／A5黑毛和牛',jp:'肉の山翔',desc:'大名燒肉店，主打A5黑毛和牛；可選和牛明太子丼、燒肉拼盤等。',addr:'福岡県福岡市中央区大名1-1-17 美和ビル2F',hours:'11:00–22:30（LO 22:00）',tel:'092-401-1029',photo:'https://tblg.k-img.com/restaurant/images/Rvw/213637/640x640_rect_535f9c9cc16c4a60942285129003d365.jpg'},
{name:'焼とりの八兵衛 天神店',tag:'咸食／燒鳥・居酒屋',jp:'焼とりの八兵衛 天神店',desc:'福岡老字號燒鳥品牌，提供炭火串燒、和牛串、海鮮及居酒屋料理。',addr:'福岡県福岡市中央区今泉2-5-28',hours:'17:00–24:00（LO 23:30）',tel:'050-5597-8413',photo:'https://tenjinsite.jp/upload/topic_photo/700x525_img_tid41284_2.jpg'}
];
const hotels={
'Richmond Hotel Tenjin Nishidori':{jp:'リッチモンドホテル天神西通',desc:'位於福岡天神西通，Day 1–2 住宿。',addr:'〒810-0001 福岡県福岡市中央区天神2-6-16',hours:'入住／退房依飯店當日規定',tel:'092-717-2477'},
'霧島観光ホテル':{jp:'AUBEGIO 霧島観光ホテル',desc:'霧島溫泉區住宿，主打溫泉與會席料理；Day 3 晚上入住。',addr:'〒899-6603 鹿児島県霧島市牧園町高千穂3885',hours:'入住／退房依飯店當日規定',tel:'0995-78-2531'},
'東横INN鹿児島中央駅西口':{jp:'東横INN鹿児島中央駅西口',desc:'鹿兒島中央站西口步行約1分鐘，Day 4–7 連續住宿。',addr:'〒890-0046 鹿児島県鹿児島市西田2-28-10',hours:'Check-in 15:00／Check-out 10:00；免費早餐 6:30–9:00',tel:'099-814-1045'}
};
function eventExact(s){return [...document.querySelectorAll('.event')].find(e=>(e.textContent||'').trim()===s)}
function dinnerCard(x){return `<article class="trip-detail-card final-dinner-card"><img src="${x.photo}" alt="${x.name} 實際料理照片" loading="lazy"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>${x.name}</h3><p class="trip-jp">${x.jp}</p></div><span>${x.tag}</span></div><p>${x.desc}</p><div class="trip-info">📍 ${x.addr}</div><div class="trip-info">🕐 ${x.hours}</div><div class="trip-info">☎️ ${x.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${MAP(x.name+' '+x.addr)}">📍 Google Maps 導航</a></div></article>`}
function hotelCard(d){return `<article class="trip-detail-card final-hotel-card"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>🏨 ${d.jp}</h3><p class="trip-jp">住宿資訊</p></div><span>住宿</span></div><p>${d.desc}</p><div class="trip-info">📍 ${d.addr}</div><div class="trip-info">🕐 ${d.hours}</div><div class="trip-info">☎️ ${d.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${MAP(d.jp+' '+d.addr)}">📍 Google Maps 導航</a></div></article>`}
function cleanWrongDinner(){document.querySelectorAll('.trip-dinner-grid:not(.final-day2-dinner)').forEach(w=>w.remove())}
function addDay2(){if(document.querySelector('.final-day2-dinner'))return;const e=eventExact('20:30天神晚餐')||eventExact('20:30 天神晚餐')||eventExact('20:30｜天神晚餐')||[...document.querySelectorAll('.event')].find(x=>{const t=(x.textContent||'').trim();return t.endsWith('天神晚餐')&&!t.includes('晚餐選擇')});if(!e)return;const w=document.createElement('div');w.className='trip-correction-wrap trip-dinner-grid final-day2-dinner';w.innerHTML=dinners.map(dinnerCard).join('');e.insertAdjacentElement('afterend',w)}
function cleanOldHotels(){document.querySelectorAll('.trip-hotel-detail:not(.final-hotel-card)').forEach(x=>{const w=x.closest('.trip-correction-wrap');if(w)w.remove();else x.remove()})}
function addHotels(){
 document.querySelectorAll('.event').forEach(e=>{
   const t=e.textContent||'';
   const title=(e.querySelector('.event-card h3')?.textContent||'').trim();
   const key=Object.keys(hotels).find(k=>t.includes(k));
   if(!key||!(/入住|住宿/.test(title))||e.dataset.finalHotelAdded)return;
   e.dataset.finalHotelAdded='1';
   const w=document.createElement('div');
   w.className='trip-correction-wrap final-hotel-wrap';
   w.innerHTML=hotelCard(hotels[key]);
   e.insertAdjacentElement('afterend',w);
 })
}
function run(){if(!document.body)return;cleanWrongDinner();cleanOldHotels();addDay2();addHotels()}
const css=document.createElement('style');css.textContent=`.final-day2-dinner{grid-column:2;width:100%;margin:12px 0 24px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.final-day2-dinner .final-dinner-card{min-width:0}.final-dinner-card,.final-hotel-card{background:#fff;border:1px solid #e4e8e8;border-radius:22px;overflow:hidden;box-shadow:0 8px 24px rgba(20,50,50,.07)}.final-dinner-card img{display:block;width:100%;height:330px;object-fit:cover}.final-dinner-card .trip-detail-body,.final-hotel-card .trip-detail-body{padding:20px}.final-hotel-wrap{grid-column:2;width:100%;margin:12px 0 24px}.final-hotel-card{border-color:#b9e5dc}.trip-detail-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}.trip-detail-top h3{margin:0;font-size:24px;color:#24323b}.trip-detail-top>span{background:#eefaf7;color:#087f73;border-radius:999px;padding:8px 12px;white-space:nowrap;font-weight:700}.trip-jp{margin:5px 0 12px;color:#7a878d;font-size:16px}.final-dinner-card .trip-detail-body>p,.final-hotel-card .trip-detail-body>p{color:#65747c;line-height:1.7;font-size:16px}.trip-info{background:#f6f8f8;border-radius:14px;padding:12px 14px;margin-top:9px;color:#68777e;font-size:15px}.trip-map-btn{display:inline-block;margin-top:12px;padding:11px 16px;border-radius:999px;background:#087f73;color:#fff!important;text-decoration:none;font-weight:800}@media(max-width:759px){.final-day2-dinner,.final-hotel-wrap{grid-column:1}.final-day2-dinner{grid-template-columns:1fr}.final-dinner-card img{height:250px}.trip-detail-top{flex-direction:column}.trip-detail-top>span{align-self:flex-start}}`;
document.head.appendChild(css);let busy=false;function safeRun(){if(busy)return;busy=true;try{run()}finally{busy=false}}new MutationObserver(()=>setTimeout(safeRun,80)).observe(document.body,{childList:true,subtree:true});setTimeout(safeRun,500);setInterval(safeRun,1800);
})();
