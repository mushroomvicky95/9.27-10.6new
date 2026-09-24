/* Final itinerary layout fix: Day 1 only its own dinner cards; Day 2 gets the four requested dinner choices. */
(function(){
'use strict';
const MAP=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const dinners=[
{name:'博多もつ鍋 前田屋 博多店',tag:'咸食／牛雜鍋',jp:'博多もつ鍋前田屋 博多店',desc:'博多名物牛雜鍋專門店，使用最高級國產和牛內臟；官方料理頁列有味噌、醬油、辛味三種鍋底。',addr:'〒812-0011 福岡県福岡市博多区博多駅前3-26-5',hours:'11:00–14:30（LO 14:00）／17:00–24:00（料理LO 23:00・飲物LO 23:30）',tel:'092-482-8558',photo:'https://blog.kakaocdn.net/dna/86MyZ/btr3pqQuet1/AAAAAAAAAAAAAAAAAAAAAO-e3bYUgInt6wjJa9cVSU7iwOpKVhgYwrNXWLcA4CjO/img.jpg?allow_ip=&allow_referer=&credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1774969199&signature=6sfS9vpUiKJs1qelWuVp49CzfCI%3D',photoSource:'網頁搜尋：博多店料理照片'},
{name:'水たき 長野',tag:'咸食／水炊き',jp:'水たき長野',desc:'老字號水炊き專門店，以白濁雞湯搭配雞肉與蔬菜；電話與地址依店家公開資料。',addr:'〒812-0020 福岡県福岡市博多区対馬小路1-6',hours:'12:00–22:00；星期日休（出發前請再確認）',tel:'092-281-2200',photo:'https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg',photoSource:'網頁搜尋：水たき長野料理照片'},
{name:'肉の山翔',tag:'咸食／A5黑毛和牛',jp:'肉の山翔',desc:'大名的和牛燒肉店，可選和牛明太子丼、燒肉拼盤等；照片為店家相關料理實拍。',addr:'〒810-0041 福岡県福岡市中央区大名1-1-17 美和ビル2F',hours:'營業時間以店家最新公告為準',tel:'092-401-1029',photo:'https://i.autoreserve.com/thumb/1200x1200/restaurant_image/image/057/014/131/57014131/870d8ef1-5b0e-480d-88b5-c5830f35bc02%282%29.jpg?format=webp',photoSource:'網頁搜尋：肉の山翔和牛明太子丼照片'},
{name:'焼とりの八兵衛 天神店',tag:'咸食／燒鳥・居酒屋',jp:'焼とりの八兵衛 天神店',desc:'創業70餘年的博多燒鳥老字號，主打炭火串燒；可選豚バラ、鶏きも、四つ身、黑皮等定番串。',addr:'〒810-0021 福岡県福岡市中央区今泉2-5-28',hours:'17:00–24:00（LO 23:30）',tel:'050-5597-8413',photo:'https://tenjinsite.jp/upload/topic_photo/700x525_img_tid41284_2.jpg',photoSource:'網頁搜尋：八兵衛天神料理照片'}
];
const hotels={
'Richmond Hotel Tenjin Nishidori':{jp:'リッチモンドホテル天神西通',desc:'位於福岡天神西通，Day 1–2 住宿。',addr:'〒810-0001 福岡県福岡市中央区天神2-6-16',hours:'入住／退房依飯店當日規定',tel:'092-717-2477'},
'霧島観光ホテル':{jp:'AUBEGIO 霧島観光ホテル',desc:'霧島溫泉區住宿，主打溫泉與會席料理；Day 3 晚上入住。',addr:'〒899-6603 鹿児島県霧島市牧園町高千穂3885',hours:'入住／退房依飯店當日規定',tel:'0995-78-2531'},
'東横INN鹿児島中央駅西口':{jp:'東横INN鹿児島中央駅西口',desc:'鹿兒島中央站西口步行約1分鐘，Day 4–7 連續住宿。',addr:'〒890-0046 鹿児島県鹿児島市西田2-28-10',hours:'Check-in 15:00／Check-out 10:00；免費早餐 6:30–9:00',tel:'099-814-1045'}
};
function eventExact(s){return [...document.querySelectorAll('.event')].find(e=>(e.textContent||'').trim()===s)}
function dinnerCard(x){return `<article class="trip-detail-card final-dinner-card"><div class="photo-badge">📷 該店料理實拍（網頁搜尋確認）</div><img src="${x.photo}" alt="${x.name} 該店料理照片" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.classList.add('photo-missing')"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>${x.name}</h3><p class="trip-jp">${x.jp}</p></div><span>${x.tag}</span></div><p>${x.desc}</p><div class="trip-info">📍 ${x.addr}</div><div class="trip-info">🕐 ${x.hours}</div><div class="trip-info">☎️ ${x.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${MAP(x.name+' '+x.addr)}">📍 Google Maps 導航</a></div></article>`}
function hotelCard(d){return `<article class="trip-detail-card final-hotel-card"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>🏨 ${d.jp}</h3><p class="trip-jp">住宿資訊</p></div><span>住宿</span></div><p>${d.desc}</p><div class="trip-info">📍 ${d.addr}</div><div class="trip-info">🕐 ${d.hours}</div><div class="trip-info">☎️ ${d.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${MAP(d.jp+' '+d.addr)}">📍 Google Maps 導航</a></div></article>`}
function cleanWrongDinner(){document.querySelectorAll('.trip-dinner-grid:not(.final-day2-dinner)').forEach(w=>w.remove())}
function addDay2(){
 if(document.querySelector('.final-day2-dinner'))return;
 const e=[...document.querySelectorAll('.event')].find(x=>{
   const h=(x.querySelector('.event-card h3')?.textContent||'').trim();
   const t=(x.textContent||'').trim();
   return /天神晚餐/.test(h)||(/天神晚餐/.test(t)&&!/(入住|住宿)/.test(h));
 });
 if(!e)return;const w=document.createElement('div');w.className='trip-correction-wrap trip-dinner-grid final-day2-dinner';w.innerHTML=dinners.map(dinnerCard).join('');e.insertAdjacentElement('afterend',w)}
function cleanOldHotels(){document.querySelectorAll('.trip-hotel-detail:not(.final-hotel-card)').forEach(x=>{const w=x.closest('.trip-correction-wrap');if(w)w.remove();else x.remove()})}
function addHotels(){
 document.querySelectorAll('.event').forEach(e=>{
   const t=e.textContent||'';
   const title=(e.querySelector('.event-card h3')?.textContent||'').trim();
   const time=(e.querySelector('.time')?.textContent||'').trim();
   const key=Object.keys(hotels).find(k=>t.includes(k));
   const isStayEvent=/入住|住宿/.test(title)||/^住宿$/.test(time);
   if(!key||!isStayEvent||/退房/.test(title)||e.dataset.finalHotelAdded)return;
   e.dataset.finalHotelAdded='1';
   const w=document.createElement('div');
   w.className='trip-correction-wrap final-hotel-wrap';
   w.innerHTML=hotelCard(hotels[key]);
   e.insertAdjacentElement('afterend',w);
 })
}
function run(){if(!document.body)return;cleanWrongDinner();cleanOldHotels();addDay2();addHotels()}
const css=document.createElement('style');css.textContent=`.final-day2-dinner{grid-column:2;width:100%;margin:12px 0 24px;display:grid;grid-template-columns:1fr 1fr;gap:18px}.final-day2-dinner .final-dinner-card{min-width:0}.final-dinner-card,.final-hotel-card{background:#fff;border:1px solid #e4e8e8;border-radius:22px;overflow:hidden;box-shadow:0 8px 24px rgba(20,50,50,.07)}.final-dinner-card .photo-badge{padding:8px 12px;background:#f0faf8;color:#087f73;font-size:12px;font-weight:800}.final-dinner-card img{display:block;width:100%;height:330px;object-fit:cover}.final-dinner-card img.photo-missing{display:none}.final-dinner-card .trip-detail-body,.final-hotel-card .trip-detail-body{padding:20px}.final-hotel-wrap{grid-column:2;width:100%;margin:12px 0 24px}.final-hotel-card{border-color:#b9e5dc}.trip-detail-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}.trip-detail-top h3{margin:0;font-size:24px;color:#24323b}.trip-detail-top>span{background:#eefaf7;color:#087f73;border-radius:999px;padding:8px 12px;white-space:nowrap;font-weight:700}.trip-jp{margin:5px 0 12px;color:#7a878d;font-size:16px}.final-dinner-card .trip-detail-body>p,.final-hotel-card .trip-detail-body>p{color:#65747c;line-height:1.7;font-size:16px}.trip-info{background:#f6f8f8;border-radius:14px;padding:12px 14px;margin-top:9px;color:#68777e;font-size:15px}.trip-map-btn{display:inline-block;margin-top:12px;padding:11px 16px;border-radius:999px;background:#087f73;color:#fff!important;text-decoration:none;font-weight:800}@media(max-width:759px){.final-day2-dinner,.final-hotel-wrap{grid-column:1}.final-day2-dinner{grid-template-columns:1fr}.final-dinner-card img{height:250px}.trip-detail-top{flex-direction:column}.trip-detail-top>span{align-self:flex-start}}`;
document.head.appendChild(css);let busy=false;function safeRun(){if(busy)return;busy=true;try{run()}finally{busy=false}}new MutationObserver(()=>setTimeout(safeRun,80)).observe(document.body,{childList:true,subtree:true});setTimeout(safeRun,500);setInterval(safeRun,1800);
})();
