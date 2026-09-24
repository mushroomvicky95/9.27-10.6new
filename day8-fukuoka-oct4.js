/* 2026/10/04（日）福岡追加行程
 * 13:00 到福岡後：Sashisu → SEAM → 櫛田神社 → 川端商店街 → Canal City → MaxValu → Toyoko INN → Robata Sankobashi
 */
(function(){
'use strict';

const SUSHI_IMG='https://images.openai.com/static-rsc-1/BmZschXd3-GlvR5SoS9n4PPwbxBGP1TS83UynfeN9p-NaRGh96XSPHrCcP_FvzlJKJG1Kf5xmvOTLIZHTKgw6AQJ84ld3AoMuJlHj0osYGPiZM_AhKEZii6AgGYSZrzgpOfe5TM4xuVlNQuzlqtpY0Da_94';
const ROBATA_IMG='https://images.openai.com/static-rsc-1/pvA911YGavKc0nnMDl2jinzDeRbVSQ5aGBLyiR1oB8L0ibLCp3i6x6yNUca-CscDxw-UYKDMIYZEYJYteW7zbjCDK8AhWwCMXXlDmtuU2IaCORihjhREzkv7nRIA5BPnTPf5sEtybSt6Fk1KiyrXbA6WSFRvUi6Hfwc8XxplLB4';

const places=[
 {time:'12:00–13:00',title:'鹿兒島 → 福岡機場',desc:'國內線抵達福岡後前往博多站；大行李已寄放於博多站寄物櫃。',address:'福岡県福岡市博多区下臼井778-1 福岡空港'},
 {time:'13:00–14:15',title:'午餐：Sushi Sakaba Sashisu KITTE Hakata',desc:'KITTE博多 B1F 的壽司酒場；招牌包含份量豪邁的とろ鉄火巻、赤エビ7尾的エビ7-SEVEN-等。建議12:45左右抵達排隊／抽號碼牌。',address:'〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F-14',hours:'11:00–23:00（Food LO 22:00／Drink LO 22:30）',phone:'092-477-3950',img:SUSHI_IMG,restaurant:true},
 {time:'14:15–14:45',title:'Beauty shop SEAM FUKUOKA 採買',desc:'官方目前確認的 SEAM FUKUOKA 位於天神大名路面1F，可直接購買沙龍專用品；你原先提供的「博多丸井5F」目前未能由官方資料確認，因此頁面以官方地址為準。TOKIO 京喚羽系列是否有現貨請到店前確認。',address:'〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F',hours:'10:00–19:00；星期日10:00–18:00',phone:'050-8885-4534'},
 {time:'15:00–15:45',title:'櫛田神社',desc:'博多總鎮守；可參拜、購買御守，並觀賞境內常設的飾山笠。社務所服務時間約9:00–17:00。',address:'〒812-0026 福岡県福岡市博多区上川端町1-41',hours:'神社境內約4:00–22:00；社務所9:00–17:00',phone:'092-291-2951'},
 {time:'15:45–16:30',title:'川端商店街',desc:'櫛田神社旁的有頂棚老牌商店街，可逛博多人形、和菓子、伴手禮及在地餐飲。',address:'〒812-0026 福岡県福岡市博多区上川端町6-135',hours:'各店不同；多數店舖約10:00–19:00，請依店家公告'},
 {time:'16:30–19:00',title:'博多運河城 CANAL CITY HAKATA',desc:'集中購物時間。GOOD MARKET KYUSHU 在 East Building 2F；THE GUNDAM BASE FUKUOKA 在 South Building 1F；可視當日公告安排噴泉／水舞表演。',address:'〒812-0018 福岡県福岡市博多区住吉1丁目2',hours:'商店一般10:00–21:00；餐廳一般11:00–23:00',sub:'GOOD MARKET KYUSHU：East Building 2F／THE GUNDAM BASE FUKUOKA：South Building 1F'},
 {time:'19:00–20:00',title:'MaxValu Express Hakata Gion ＋回博多站取件',desc:'先到24小時生鮮超市補水果、飲品及零食，再回博多站領取寄放行李與美容用品。',address:'〒812-0038 福岡県福岡市博多区祇園町7-20',hours:'B1F食品賣場24小時營業',phone:'092-263-4741'},
 {time:'20:00–21:15',title:'Toyoko INN Hakata Nishi-nakasu Check-in',desc:'從博多站搭車前往飯店，辦理入住、放下行李及伴手禮，稍作休息後步行前往宵夜。',address:'〒810-0002 福岡県福岡市中央区西中洲1-16',hours:'Check-in 15:00；Check-out 10:00',phone:'092-739-1045'},
 {time:'21:30',title:'深夜食堂：炉ばた 三光橋（Robata Sankobashi）',desc:'春吉的爐端燒，官方／店家資料顯示以新鮮海鮮、蔬菜等炭火料理為主；座位以吧台為主。21:30可預約時段。',address:'〒810-0003 福岡県福岡市中央区春吉3-22-17 三光ビル1F',hours:'17:00–24:30（LO 23:30）',phone:'092-712-7373',img:ROBATA_IMG,restaurant:true,sub:'飯店步行約3–4分鐘；實際路線以Google Maps當日導航為準。'}
];

function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function restaurantCard(p){
 return '<article class="restaurant day8-oct4-restaurant"><div class="photo-badge">📷 店家餐點／飲品照片</div><img class="restaurant-img" src="'+esc(p.img)+'" alt="'+esc(p.title)+' 餐點照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>'+esc(p.title)+'</h3><div class="jp">'+(p.title.includes('Sashisu')?'すし酒場 さしす KITTE博多店':'炉ばた 三光橋')+'</div></div><span class="category">咸食／海鮮</span></div><p class="desc">'+esc(p.desc)+'</p><div class="menu-detail"><b>📍 詳細地址</b><br>'+esc(p.address)+'</div><div class="menu-detail"><b>🕐 營業時間</b><br>'+esc(p.hours)+'</div><div class="menu-detail"><b>☎️ 電話</b><br>'+esc(p.phone)+'</div><div class="restaurant-actions"><a class="map-btn" href="'+maps(p.title,p.address)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a><a class="web-btn" href="https://www.google.com/search?q='+encodeURIComponent(p.title)+' 福岡 菜單" target="_blank" rel="noopener noreferrer">🔎 搜尋店家／菜單</a></div></div></article>';
}
function placeCard(p){
 return '<div class="day8-place-detail"><div class="day8-place-meta"><b>📍 地址</b><br>'+esc(p.address)+'</div>'+(p.hours?'<div class="day8-place-meta"><b>🕐 營業／開放時間</b><br>'+esc(p.hours)+'</div>':'')+(p.phone?'<div class="day8-place-meta"><b>☎️ 電話</b><br>'+esc(p.phone)+'</div>':'')+(p.sub?'<div class="day8-place-meta"><b>ℹ️ 備註</b><br>'+esc(p.sub)+'</div>':'')+'<a class="map-btn" href="'+maps(p.title,p.address)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div>';
}
function renderDay8(){
 const head=document.querySelector('.detail-head h2');
 if(!head || !head.textContent.includes('Day 8')) return;
 const timeline=document.querySelector('.timeline');
 if(!timeline || timeline.dataset.oct4==='1') return;
 timeline.dataset.oct4='1';
 timeline.innerHTML=places.map((p,i)=>{
   return '<div class="event"><div class="dot">'+(i+1)+'</div><div class="event-card"><div class="time">'+esc(p.time)+'</div><h3>'+esc(p.title)+'</h3><p>'+esc(p.desc)+'</p>'+placeCard(p)+(p.restaurant?restaurantCard(p):'')+'</div></div>';
 }).join('');
}
const style=document.createElement('style');
style.textContent=`
.day8-place-detail{background:#f7f8f6;border-radius:12px;padding:10px 12px;margin-top:10px;line-height:1.55;color:#59666c;font-size:12px}
.day8-place-detail .day8-place-meta{margin-bottom:7px}
.day8-place-detail .map-btn{display:inline-flex;margin-top:5px;text-decoration:none;background:#087f73;color:#fff;padding:8px 11px;border-radius:9px}
.day8-oct4-restaurant{margin-top:12px;border-radius:18px;overflow:hidden;background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.08)}
.day8-oct4-restaurant .restaurant-img{width:100%;height:230px;object-fit:cover;display:block}
.day8-oct4-restaurant .restaurant-body{padding:15px}
.day8-oct4-restaurant .menu-detail{background:#f7f8f6;border-radius:10px;padding:8px 10px;margin-top:7px;font-size:12px;line-height:1.55}
.day8-oct4-restaurant .restaurant-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.day8-oct4-restaurant .map-btn,.day8-oct4-restaurant .web-btn{display:inline-flex;text-decoration:none;padding:9px 11px;border-radius:9px}
@media(max-width:700px){.day8-oct4-restaurant .restaurant-img{height:185px}.day8-oct4-restaurant .restaurant-body{padding:13px}.day8-oct4-restaurant .restaurant-title h3{font-size:19px}}
`;
document.head.appendChild(style);
const mo=new MutationObserver(renderDay8);
mo.observe(document.body,{childList:true,subtree:true});
setTimeout(renderDay8,300);
setInterval(renderDay8,800);
})();
