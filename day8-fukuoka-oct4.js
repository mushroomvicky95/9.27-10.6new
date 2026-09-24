/* 2026/10/04（日）福岡追加行程
 * 6人主行程於12:50抵達福岡後完結；餘下旅伴接續福岡市區行程。
 */
(function(){
'use strict';

const SUSHI_IMG='https://images.openai.com/static-rsc-1/k41iFY5rY-H_MiZkFtCZj9_xLKmYQ3kJSEtidTVb7dcA8C_usAKXl-wCgpJ77uspwxXee7N8bxXMGjpiBcgDU0t33l2P6EhCUEa6vmfHmOxKFicDDlLnysk8DQDX8Z_pFxp0OUkfyyuDWd2kkMJ2wvW4_YnmtPSnpnwpKfND'; 
const ROBATA_IMG='https://images.openai.com/static-rsc-1/ChmW_Jj5A8zeSpT_QyzcQPcPQ6lq6CQFitTEk0duBhmtNUJhgRyyEr57pFOpsBOnhoWjMCUimLxJRXzh9RVDU2Lq0LT8BrTGPMTjFihnYn6e15VnbfZDgV4RZJaY3od6tvE_Y_av2C6kf_Mm86epnHspy_y8ekEgi_clvd0WwQc';

const places=[
 {time:'09:30',title:'酒店退房',desc:'東横INN鹿児島中央駅西口退房；確認行李、護照及機場交通。6人完成鹿兒島主行程，餘下旅伴準備接續福岡自由行。',address:'〒890-0045 鹿児島県鹿児島市武1-6-1',hours:'Check-out 10:00前；實際以住宿訂單為準'},
 {time:'10:00–10:40',title:'前往鹿兒島機場＋辦理登機',desc:'由鹿兒島中央站／酒店一帶前往鹿兒島機場，預留約40分鐘車程；抵達後辦理國內線登機及安檢。',address:'〒899-6404 鹿児島県霧島市溝辺町麓822',hours:'國內線建議依航空公司要求提早抵達機場'},
 {time:'12:00–12:50',title:'鹿兒島 → 福岡（國內線）',desc:'航程約50分鐘。12:50抵達福岡機場後，6人主行程正式完結；餘下旅伴接續以下福岡行程。實際航班號與登機時間請以機票／航空公司最新資料為準。',address:'出發：〒899-6404 鹿児島県霧島市溝辺町麓822｜抵達：〒812-0003 福岡県福岡市博多区下臼井778-1 福岡空港'},
 {time:'12:50–13:25',title:'福岡機場 → 博多站＋寄放／確認行李',desc:'抵達福岡機場後前往博多站；大行李已預計寄放於博多站寄物櫃，因此先確認寄物櫃位置，再前往 KITTE 博多午餐。',address:'福岡県福岡市博多区博多駅中央街1-1（JR博多駅）'},
 {time:'13:30–14:30',title:'午餐：Sushi Sakaba Sashisu KITTE Hakata',desc:'KITTE博多 B1F 的壽司酒場。建議13:15左右抵達，直接排隊／抽號碼牌；比原本13:00開始的安排稍微順延，以配合12:50抵達福岡機場後的轉移時間。',address:'〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F 14區畫',hours:'11:00–23:00（實際LO依店家公告）',phone:'092-477-3950',img:SUSHI_IMG,restaurant:true},
 {time:'14:30–14:55',title:'前往 Beauty shop SEAM FUKUOKA',desc:'午餐後由博多站／KITTE前往天神大名；以計程車或地鐵＋步行為主，預留交通時間。注意：目前查到的 SEAM 官方／商業資料地址並非博多丸井5F，而是天神大名路面店。',address:'〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F'},
 {time:'14:55–15:20',title:'Beauty shop SEAM FUKUOKA 採買',desc:'購買 TOKIO 京喚羽等沙龍用品；實際庫存以到店當日為準。星期日營業時間較短，安排在下午15:20前完成較安全。',address:'〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F',hours:'星期日10:00–18:00；電話050-8885-4534',phone:'050-8885-4534'},
 {time:'15:35–16:05',title:'櫛田神社',desc:'前往博多總鎮守參拜、購買御守並觀賞境內的飾山笠。由大名移動過來後只安排30分鐘，避免壓縮後續商店街與 Canal City 時間。',address:'〒812-0026 福岡県福岡市博多区上川端町1-41',hours:'境內約4:00–22:00；社務所約9:00–17:00',phone:'092-291-2951'},
 {time:'16:05–16:35',title:'川端商店街',desc:'由櫛田神社旁直接進入，快速逛博多人形、和菓子與伴手禮店；以散步與重點採買為主。',address:'〒812-0026 福岡県福岡市博多区上川端町6-135',hours:'各店不同；多數店舖約10:00–19:00'},
 {time:'16:40–18:30',title:'集中購物：博多運河城 CANAL CITY HAKATA',desc:'集中完成九州伴手禮與鋼彈購物。GOOD MARKET KYUSHU 位於 East Building 2F；THE GUNDAM BASE FUKUOKA 位於 South Building 1F。整點水舞是否演出以當日公告為準。',address:'〒812-0018 福岡県福岡市博多区住吉1丁目2',hours:'商店一般10:00–21:00；餐廳一般11:00–23:00',sub:'GOOD MARKET KYUSHU：East Building 2F／THE GUNDAM BASE FUKUOKA：South Building 1F'},
 {time:'18:30–19:20',title:'MaxValu Express Hakata Gion ＋回博多站取件',desc:'先補水果、飲品與零食，再回博多站領取早前寄放的大行李及美容用品。時間壓縮為50分鐘，建議超市只買必要物品。',address:'〒812-0038 福岡県福岡市博多区祇園町7-20',hours:'食品賣場24小時營業',phone:'092-263-4741'},
 {time:'19:20–20:15',title:'前往 Toyoko INN Hakata Nishi-nakasu ＋ Check-in',desc:'取回行李後直接搭計程車前往酒店。辦理入住、放下大行李及伴手禮，再稍作洗漱休息。',address:'〒810-0002 福岡県福岡市中央区西中洲1-16',hours:'Check-in 15:00；Check-out 10:00',phone:'092-739-1045'},
 {time:'20:15–21:00',title:'酒店休息／步行前往宵夜',desc:'放下行李後稍作休息，21:00前往春吉；飯店與餐廳距離近，不需要再搭電車。',address:'酒店：〒810-0002 福岡県福岡市中央区西中洲1-16'},
 {time:'21:00–22:30',title:'深夜食堂：炉ばた 三光橋（Robata Sankobashi）',desc:'春吉爐端燒晚餐。以新鮮海鮮、刺身、地雞及當季野菜等炭火料理為主；建議提早預約，21:00入座比原21:30更有緩衝。吃完步行返回酒店。',address:'〒810-0003 福岡県福岡市中央区春吉3-22-17 三光ビル1F',hours:'17:00–24:30（LO 23:30）',phone:'092-712-7373',img:ROBATA_IMG,restaurant:true,sub:'距離 Toyoko INN Hakata Nishi-nakasu 約3–4分鐘步行；實際路線以Google Maps當日導航為準。'}
];

function esc(s){return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function restaurantCard(p){
 return '<article class="restaurant day8-oct4-restaurant"><div class="photo-badge">📷 店家餐點／飲品照片</div><img class="restaurant-img" src="'+esc(p.img)+'" alt="'+esc(p.title)+' 餐點照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>'+esc(p.title)+'</h3><div class="jp">'+(p.title.includes('Sashisu')?'すし酒場 さしす KITTE博多店':'炉ばた 三光橋')+'</div></div><span class="category">咸食／海鮮</span></div><p class="desc">'+esc(p.desc)+'</p><div class="menu-detail"><b>📍 詳細地址</b><br>'+esc(p.address)+'</div><div class="menu-detail"><b>🕐 營業時間</b><br>'+esc(p.hours)+'</div><div class="menu-detail"><b>☎️ 電話</b><br>'+esc(p.phone)+'</div><div class="restaurant-actions"><a class="map-btn" href="'+maps(p.title,p.address)+'" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a><a class="web-btn" href="https://www.google.com/search?q='+encodeURIComponent(p.title+' 福岡 菜單')+'" target="_blank" rel="noopener noreferrer">🔎 搜尋店家／菜單</a></div></div></article>';
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
 timeline.innerHTML=places.map((p,i)=>'<div class="event"><div class="dot">'+(i+1)+'</div><div class="event-card"><div class="time">'+esc(p.time)+'</div><h3>'+esc(p.title)+'</h3><p>'+esc(p.desc)+'</p>'+placeCard(p)+(p.restaurant?restaurantCard(p):'')+'</div></div>').join('');
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
