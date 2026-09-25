/* 2026/10/04（日）福岡追加行程
 * 6人主行程於12:50抵達福岡後完結；餘下旅伴接續福岡市區行程。
 */
(function(){
'use strict';

const SUSHI_IMG='https://tblg.k-img.com/restaurant/images/Rvw/187264/640x640_rect_e363d9c70282ef572b3e802a9c8afac9.jpg'; 
const ROBATA_IMG='https://tblg.k-img.com/restaurant/images/Rvw/235133/640x640_rect_4837a4fa52b35cf52a77406a0622e6ea.jpg';

const places=[
 {time:'09:30–12:50',title:'酒店退房 → 鹿兒島機場 → 福岡',tag:'交通流程',desc:'09:30 辦理退房後，不安排租車。從東横INN鹿児島中央駅西口步行前往鹿兒島中央站東口的機場連絡巴士乘車處，再搭空港リムジンバス前往鹿兒島機場；直行班約40分鐘。12:00 搭機前往福岡，12:50 抵達後6人主行程完結。',address:'酒店：〒890-0045 鹿児島県鹿児島市武1-6-1｜鹿兒島中央ターミナル：鹿児島中央駅東口東21番乘車處｜鹿兒島機場：〒899-6404 鹿児島県霧島市溝辺町麓822',hours:'空港連絡巴士直行約40分鐘；班次以10/4當日公告為準',transport:'🚶 酒店 → 鹿兒島中央站：步行約5分鐘。\n🚌 鹿兒島中央站 → 鹿兒島機場：空港リムジンバス，約40分鐘、約每20分鐘一班；無需預約。\n✈️ 12:00 鹿兒島 → 福岡，約50分鐘；請依機票要求提早完成報到與安檢。',noDetail:false,noHotelCard:true},
 {time:'12:50–13:25',title:'福岡機場 → 博多站＋寄放行李',tag:'交通＋行李',desc:'12:50抵達福岡機場後，前往地下鐵空港線，直接搭往博多。福岡市地下鐵官方資料列「博多～福岡空港」約5分鐘；實際安排保留走出機場、搭車及找寄物櫃的時間。',address:'福岡空港：福岡県福岡市博多区下臼井778-1｜博多站：福岡県福岡市博多区博多駅中央街1-1',transport:'🚇 福岡空港站 → 博多站：地下鐵空港線直達，車程約5分鐘。\n🧳 抵達博多站後先處理大行李寄物，再前往 KITTE 博多 B1F。\n💡 今天不開車，後續市區移動以地下鐵＋步行為主，需要趕時間時改搭計程車。'},
 {time:'13:30–14:30',title:'午餐：Sushi Sakaba Sashisu KITTE Hakata',tag:'餐廳｜壽司',desc:'博多站直結的壽司酒場，安排為抵達福岡後第一餐。店家公開資料列28席、預約不可；午餐直接排隊較合適。推薦握壽司、炙燒壽司及海鮮類，實際菜單以當日為準。',address:'〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F-14',hours:'11:00–23:00；料理LO 22:00、飲品LO 22:30；基本上年中無休（依KITTE休館日）',phone:'092-477-3950',img:SUSHI_IMG,restaurant:true,menu:'🍣 招牌方向：鮪魚、サーモン、海老等握壽司；炙燒壽司、軍艦及海鮮料理。',transport:'🚶 從博多站／KITTE博多內步行即可，不需再搭車。'},
 {time:'14:30–14:55',title:'博多 → SEAM FUKUOKA',tag:'交通',desc:'午餐後前往天神大名。今天沒有租車，建議這一段直接搭計程車，減少拖行李／購物品轉乘；時間較充裕時也可搭地下鐵再步行。',address:'目的地：〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F',transport:'🚕 建議：從博多／KITTE博多搭計程車，直接到 SEAM FUKUOKA 門口，約10–15分鐘（依路況）。\n🚇 替代：博多站搭七隈線往天神南，再步行至大名；需加計轉乘及步行時間。'},
 {time:'14:55–15:20',title:'SEAM FUKUOKA 採買',tag:'購物',desc:'SEAM 是天神大名的美容用品選品店，可只購物、不必做療程。官方目前列197個沙龍專賣品牌；10/4為星期日，安排在18:00前完成。',address:'〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F',hours:'10:00–19:00；星期日10:00–18:00',phone:'050-8885-4534',transport:'🚶 抵達後全程步行即可。購物品建議先集中放入同一袋，後段以計程車移動較方便。'},
 {time:'15:20–15:35',title:'SEAM FUKUOKA → 櫛田神社',tag:'交通',desc:'完成採買後直接前往博多區。考慮到只有15分鐘緩衝，建議搭計程車，不建議這段再繞回地下鐵站。',address:'目的地：〒812-0026 福岡県福岡市博多区上川端町1-41',transport:'🚕 建議：SEAM → 櫛田神社直接搭計程車，目標約10–15分鐘，視天神市區交通調整。\n🚫 不建議：拖著購物袋先走回大站再轉乘。'},
 {time:'15:35–16:05',title:'櫛田神社',tag:'景點',desc:'博多總鎮守。重點看境內的飾山笠、拜殿與銀杏樹；這段只留30分鐘，以拍照與參拜為主。官方旅遊資料列開門4:00–22:00、社務9:00–17:00。',address:'〒812-0026 福岡県福岡市博多区上川端町1-41',hours:'開門4:00–22:00；社務9:00–17:00',phone:'092-291-2951',transport:'🚶 這一站不用再搭交通工具；參拜後步行前往川端商店街。'},
 {time:'16:05–16:35',title:'川端商店街',tag:'散步＋購物',desc:'櫛田神社旁直接接上上川端商店街，安排快速逛街與伴手禮採買。商店街約有100間店舖，店家各自營業時間不同。',address:'〒812-0026 福岡県福岡市博多区上川端町6-135',hours:'各店舖不同；建議以10/4當日店家公告為準',phone:'092-281-6223',transport:'🚶 櫛田神社 → 川端商店街直接步行，無需搭車。'},
 {time:'16:35–16:40',title:'川端商店街 → Canal City',tag:'交通',desc:'從川端商店街往運河城前進，這段路很短，直接步行即可。',address:'目的地：〒812-0018 福岡県福岡市博多区住吉1丁目2',transport:'🚶 建議步行；Canal City官方資料列 JR／地下鐵博多站步行約10分鐘、櫛田神社前站步行約3分鐘。'},
 {time:'16:40–17:45',title:'Alpen FUKUOKA（博多運河城南館）',tag:'新增｜運動／戶外用品購物',desc:'新增 Alpen FUKUOKA，直接安排在原本博多運河城購物時段內，不另繞路。店舖位於 Canal City Hakata South Building 南館1–3樓，可依興趣選逛運動、戶外及高爾夫用品。建議預留約60–65分鐘；營業時間以店家當日公告為準。',address:'博多運河城 CANAL CITY HAKATA 南館｜〒812-0018 福岡県福岡市博多区住吉1丁目2',hours:'官方店舖資訊列每日10:00–21:00（請以當日公告為準）',transport:'🚶 從川端商店街步行到 Canal City，直接進南館即可；Alpen 位於南館1–3樓，不需搭車。',sub:'店舖官方資訊：https://store.alpen-group.jp/Form/RealShop/ShopDetail.aspx?rsid=5400'},
 {time:'17:45–18:30',title:'博多運河城 CANAL CITY HAKATA（其餘購物）',tag:'景點＋購物',desc:'Alpen FUKUOKA 逛完後，繼續原定運河城購物，集中完成伴手禮、動漫及館內購物。GOOD MARKET KYUSHU安排在East Building 2F；THE GUNDAM BASE FUKUOKA安排在South Building 1F。',address:'〒812-0018 福岡県福岡市博多区住吉1丁目2',hours:'商店10:00–21:00；餐廳11:00–23:00（部分店舖不同）',transport:'🚶 Alpen 位於運河城南館，逛完後館內步行前往其他店舖即可。',sub:'GOOD MARKET KYUSHU：East Building 2F｜THE GUNDAM BASE FUKUOKA：South Building 1F'},
 {time:'18:30–18:40',title:'Canal City → MaxValu Express Hakata Gion',tag:'交通',desc:'超市位於祇園町，離櫛田神社前站非常近，適合順路快速補充飲品、水果及零食。',address:'〒812-0038 福岡県福岡市博多区祇園町7-20',transport:'🚶 建議直接步行約5–10分鐘到超市；不需要搭車。'},
 {time:'18:40–19:00',title:'MaxValu Express Hakata Gion 補給',tag:'購物＋行李',desc:'只買必要的水果、飲品、零食及翌日早餐補給，控制時間，避免影響回博多站取行李。',address:'〒812-0038 福岡県福岡市博多区祇園町7-20',hours:'24小時營業',phone:'092-263-4741',transport:'🚶 超市就在櫛田神社前站一帶；購物後建議直接搭計程車前往博多站取回大行李，省去拖行李轉乘。'},
 {time:'19:00–19:20',title:'MaxValu → 博多站取回大行李',tag:'交通',desc:'到博多站取回上午寄放的大行李／美容用品，再直接前往今晚住宿。',address:'目的地：福岡県福岡市博多区博多駅中央街1-1',transport:'🚕 建議：MaxValu → 博多站搭計程車，約5–10分鐘，適合有大行李的情況。\n🚇 替代：櫛田神社前站 → 博多站搭七隈線，車程短但仍需上下樓及搬行李。'},
 {time:'19:20–20:15',title:'Toyoko INN Hakata Nishi-nakasu Check-in',tag:'住宿',desc:'今晚不開車，取回行李後直接前往酒店。辦理入住、放下行李及購物品，再休息。官方資料列Check-in 15:00、Check-out 10:00，並提供免費早餐。',address:'〒810-0002 福岡県福岡市中央区西中洲1-16',hours:'Check-in 15:00；Check-out 10:00；免費早餐6:30–9:00',phone:'092-739-1045',transport:'🚕 建議：博多站取回行李後直接搭計程車到酒店。\n🚇 替代：博多站搭七隈線至天神南，5號出口步行約5分鐘至酒店。',hotelDetail:true},
 {time:'20:15–21:00',title:'酒店休息 → 春吉宵夜',tag:'交通',desc:'放下行李後短暫休息，再前往春吉晚餐。酒店距離三光橋很近，最後一段用步行即可。',address:'酒店：〒810-0002 福岡県福岡市中央区西中洲1-16',transport:'🚶 建議酒店 → 炉ばた 三光橋步行約3–5分鐘，不需搭車。'},
 {time:'21:00–22:30',title:'深夜食堂：炉ばた 三光橋（Robata Sankobashi）',tag:'餐廳｜爐端燒',desc:'春吉路地裏的炭火爐端燒，主打海鮮、貝類及各式炭火料理；店內為22席左右的吧台型空間，建議事先預約。',address:'〒810-0003 福岡県福岡市中央区春吉3-22-17',hours:'17:00–24:00（部分資料列24:30；以店家當日公告為準）',phone:'092-712-7373',img:ROBATA_IMG,restaurant:true,menu:'🔥 招牌方向：海鮮、貝類、蝦、季節蔬菜及炭火爐端料理；實際供應依當日入荷。',transport:'🚶 Toyoko INN Hakata Nishi-nakasu → 三光橋步行約3–5分鐘。'}
];

function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function restaurantCard(p){
 return '<article class="restaurant day8-oct4-restaurant"><div class="photo-badge">📷 該店料理實拍（網頁搜尋確認）</div><img class="restaurant-img" src="'+esc(p.img)+'" alt="'+esc(p.title)+' 該店料理照片" loading="lazy" onerror="this.style.display='none'"><div class="restaurant-body"><div class="restaurant-title"><div><h3>'+esc(p.title)+'</h3><div class="jp">'+(p.title.includes('Sashisu')?'すし酒場 さしす KITTE博多店':'炉ばた 三光橋')+'</div></div><span class="category">'+esc(p.tag||'餐廳')+'</span></div><p class="desc">'+esc(p.desc)+'</p>'+(p.menu?'<div class="menu-detail"><b>🍴 餐點方向</b><br>'+esc(p.menu)+'</div>':'')+'<div class="menu-detail"><b>📍 詳細地址</b><br>'+esc(p.address)+'</div><div class="menu-detail"><b>🕐 營業時間</b><br>'+esc(p.hours)+'</div><div class="menu-detail"><b>☎️ 電話</b><br>'+esc(p.phone)+'</div>'+(p.transport?'<div class="menu-detail transport-detail"><b>🚶 交通安排</b><br>'+esc(p.transport).replace(/\n/g,'<br>')+'</div>':'')+'<div class="restaurant-actions"><a class="map-btn" href="'+maps(p.title,p.address)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a><a class="web-btn" href="https://www.google.com/search?q='+encodeURIComponent(p.title+' 福岡 菜單')+'" target="_blank" rel="noopener noreferrer">🔎 搜尋店家／菜單</a></div></div></article>';
}
function placeCard(p){
 if(p.noDetail)return '';
 return '<div class="day8-place-detail day8-rich-detail"><div class="day8-detail-title"><span>'+esc(p.tag||'行程資料')+'</span></div><div class="day8-detail-desc">'+esc(p.desc)+'</div><div class="day8-place-meta"><b>📍 地址</b><br>'+esc(p.address)+'</div>'+(p.hours?'<div class="day8-place-meta"><b>🕐 營業／開放時間</b><br>'+esc(p.hours)+'</div>':'')+(p.phone?'<div class="day8-place-meta"><b>☎️ 電話</b><br>'+esc(p.phone)+'</div>':'')+(p.transport?'<div class="day8-place-meta day8-transport"><b>🚶 交通安排</b><br>'+esc(p.transport).replace(/\n/g,'<br>')+'</div>':'')+(p.sub?'<div class="day8-place-meta"><b>ℹ️ 補充</b><br>'+esc(p.sub)+'</div>':'')+'<a class="map-btn" href="'+maps(p.title,p.address)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div>';
}
function renderDay8(){
 const head=document.querySelector('.detail-head h2');
 if(!head || !head.textContent.includes('Day 8')) return;
 const timeline=document.querySelector('.timeline');
 if(!timeline || timeline.dataset.oct4==='1') return;
 timeline.dataset.oct4='1';
 timeline.innerHTML=places.map((p,i)=>{
  const detail=placeCard(p);
  return '<div class="event"><div class="dot">'+(i+1)+'</div><div class="event-card"><div class="time">'+esc(p.time)+'</div><h3>'+esc(p.title)+'</h3><p class="day8-main-desc">'+esc(p.desc)+'</p>'+detail+(p.restaurant?restaurantCard(p):'')+'</div></div>';
}).join('');
}
const style=document.createElement('style');
style.textContent=`
.day8-hotel-card{background:#fff;border:1px solid #b9e5dc;border-radius:14px;padding:11px 12px;margin-top:10px;box-shadow:0 3px 12px rgba(20,50,50,.05);color:#59666c;font-size:12px}.day8-hotel-title{font-size:16px;font-weight:800;color:#26343b;margin-bottom:8px;display:flex;justify-content:space-between;gap:8px;align-items:flex-start}.day8-hotel-title span{font-size:11px;color:#087f73;background:#eff8f5;border-radius:999px;padding:4px 7px;white-space:nowrap}.day8-rich-detail{background:#f7f8f6;border:1px solid #e3ebe8;border-radius:14px;padding:12px 13px;margin-top:10px;line-height:1.55;color:#59666c;font-size:12px}.day8-detail-title{margin-bottom:7px}.day8-detail-title span{display:inline-flex;background:#eaf8f5;color:#087f73;border-radius:999px;padding:4px 8px;font-weight:800}.day8-detail-desc{font-size:12px;line-height:1.6;color:#66747a;margin-bottom:9px}.day8-transport{background:#eef7f5!important;border-left:3px solid #087f73}.day8-main-desc{margin-bottom:9px}
.day8-place-detail .day8-place-meta{margin-bottom:7px}
.day8-place-detail .map-btn{display:inline-flex;margin-top:5px;text-decoration:none;background:#087f73;color:#fff;padding:8px 11px;border-radius:9px}
.day8-oct4-restaurant{margin-top:12px;border:1px solid #dfe9e6;border-radius:16px;overflow:hidden;background:#fff;box-shadow:0 4px 14px rgba(0,0,0,.06)}
.day8-oct4-restaurant .restaurant-img{width:100%;height:230px;object-fit:cover;display:block}
.day8-oct4-restaurant .restaurant-body{padding:15px}
.day8-oct4-restaurant .menu-detail{background:#f7f8f6;border-radius:10px;padding:8px 10px;margin-top:7px;font-size:12px;line-height:1.55}
.day8-oct4-restaurant .restaurant-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.day8-oct4-restaurant .map-btn,.day8-oct4-restaurant .web-btn{display:inline-flex;text-decoration:none;padding:9px 11px;border-radius:9px}
@media(max-width:700px){.day8-rich-detail{padding:10px 11px}.day8-oct4-restaurant .restaurant-img{height:185px}.day8-oct4-restaurant .restaurant-body{padding:12px}.day8-oct4-restaurant .restaurant-title h3{font-size:18px}.day8-oct4-restaurant .menu-detail{font-size:11px;line-height:1.5;padding:7px 9px}.day8-oct4-restaurant .restaurant-actions{gap:6px;margin-top:8px}.day8-oct4-restaurant .map-btn,.day8-oct4-restaurant .web-btn{font-size:11px;padding:8px 10px}}
`;
document.head.appendChild(style);
const mo=new MutationObserver(renderDay8);
mo.observe(document.body,{childList:true,subtree:true});
setTimeout(renderDay8,300);
setInterval(renderDay8,800);
})();
