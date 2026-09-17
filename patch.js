/* Day 1 dinner layout + flexible restaurant details */
(function(){
'use strict';

const dinner=`<div class="day1-dinner-fixed"><div class="day1-label">🍲 19:30｜天神晚餐選擇</div>
<article class="restaurant day1-card"><img class="restaurant-img" src="https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg" alt="博多もつ鍋 前田屋 博多店 牛雜鍋" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>博多もつ鍋 前田屋 博多店</h3><div class="jp">博多もつ鍋 前田屋 博多店</div></div><span class="category">咸食／牛雜鍋</span></div><p class="desc">博多代表性牛雜鍋，主打國產和牛小腸，可選味噌、醬油或辛味鍋。</p><div class="address">📍 福岡市博多区博多駅前3-26-5 Mビル1F</div><div class="hours">🕐 11:00–14:30（LO 14:00）／17:00–24:00（食事LO 23:00・飲物LO 23:30）</div><div class="hours">☎️ 092-482-8558</div><div class="restaurant-actions"><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('博多もつ鍋 前田屋 博多店 福岡市博多区博多駅前3-26-5 Mビル1F')}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></div></article>
<article class="restaurant day1-card"><img class="restaurant-img" src="https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg" alt="水たき 長野 水炊き" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>水たき 長野</h3><div class="jp">博多名代 水たき長野</div></div><span class="category">咸食／水炊き</span></div><p class="desc">博多老字號水炊き，雞湯、雞肉及蔬菜組合，屬較清爽的鍋物選擇。</p><div class="address">📍 福岡市博多区対馬小路1-6</div><div class="hours">🕐 12:00–22:00；週日休</div><div class="hours">☎️ 092-281-2200</div><div class="restaurant-actions"><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('水たき 長野 福岡市博多区対馬小路1-6')}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></div></article></div>`;

const flexRestaurants=[
{names:['Sabataro','さばたろう'],cat:'咸食／鯖料理',jp:'さばたろう',desc:'預約制的鯖料理食堂，每人一釜炊飯；早餐可吃塩鯖、胡麻鯖、明太子及多款九州小菜。',menu:'朝窯ごはん：土鍋炊飯、塩さば、活さば胡麻さば、さば味噌、明太子、がめ煮、味噌汁等。',address:'福岡県福岡市中央区赤坂1-5-11 アバンダント89',hours:'早餐 7:30／8:30／9:30；午餐 11:30／12:30／13:30；週日休',phone:'050-5600-6821',note:'朝午餐均為時段制，官方資料標示需預約。',img:'https://blog.kakaocdn.net/dna/S1bwe/btsKtQ68pHY/AAAAAAAAAAAAAAAAAAAAALQlFtVLYYN583xgEQSaRMmyOtKaNIKansnrbzg11mSV/img.jpg'},
{names:['Blue Bottle Coffee Fukuoka Tenjin Cafe','ブルーボトルコーヒー福岡天神カフェ'],cat:'咖啡甜品',jp:'ブルーボトルコーヒー福岡天神カフェ',desc:'位於警固神社社務所大樓1樓，適合天神散步中喝精品咖啡及吃輕食。',menu:'咖啡、Café Latte、Liège waffle、Avocado toast 等；菜單會隨季節更新。',address:'〒810-0001 福岡県福岡市中央区天神2-2-20 警固神社社務所ビル1F',hours:'每日 8:00–20:00',phone:'店家官方頁面未列電話',note:'店內73席、戶外18席；官方提供Wi-Fi。',img:'https://www.lemon8-app.com/seo/image?index=0&item_id=7437527484956000823&sign=f24ea1746067fb132c8db676d74300f9'},
{names:['Nishinaya coffee Daimyo','ニシナ屋珈琲 大名1-3-26niR焙煎所'],cat:'咖啡／咖啡豆',jp:'ニシナ屋珈琲 大名1-3-26niR焙煎所',desc:'大名的現場焙煎咖啡豆專門店，可從單品豆、拼配到高級豆中挑選，適合買豆回酒店或帶回家。',menu:'單品咖啡豆、Original Blend、Specialty Coffee；可按喜好選擇焙煎程度。',address:'福岡県福岡市中央区大名1-3-26',hours:'10:00–18:00',phone:'092-718-7379',note:'官方資料稱幾乎全年營業；店家頁面亦列10:00–18:00。',img:'https://tblg.k-img.com/restaurant/images/Rvw/155791/640x640_rect_155791129.jpg'},
{names:['Little Stand Daimyo store','リトルスタンド大名店'],cat:'咖啡甜品',jp:'リトルスタンド大名店',desc:'大名巷弄型咖啡 stand，以Bari-Chai系列最有特色，也有咖啡、茶及外帶甜點。',menu:'Bari-Chai、Bari-Hojicha、Bari-Choco、Café Latte、French Press Coffee。',address:'福岡県福岡市中央区大名1-3-5 ARKCUBE 101',hours:'09:00–18:00；休假日資料可能變動，出發前確認',phone:'092-791-9496',note:'2026年店家節目資料列9:00–18:00；部分店家資料列不同休息日。',img:'https://arne.media/uploads/2021/06/littlestand.jpg'},
{names:['いちごや cafe TANNAL 福岡大名店','cafe TANNAL'],cat:'咖啡甜品',jp:'cafe TANNAL 福岡大名店',desc:'以草莓甜品及輕食為主的咖啡店，適合下午茶；亦有早餐／午餐盤。',menu:'美式草莓芭菲、草莓刨冰、草莓Brûlée Parfait、草莓撻、草莓可麗餅、Acai Bowl、TANNAL PLATE A/B。',address:'福岡県福岡市中央区大名1-3-14 花形館A-1',hours:'Plate 9:00–14:00；Eat-in 12:00–Last；實際結束時間依當日公告',phone:'店家最新電話請以預約頁為準',note:'目前菜單標示草莓季結束後部分甜品會改用進口草莓。',img:'https://tenjinsite.jp/upload/topic_photo/700x525_img_tid73649_2.jpg'},
{names:['RIZ CAFE CREPE RIZ 大名店','CAFE CREPE RIZ 大名店'],cat:'咖啡甜品',jp:'CAFE CREPE RIZ 大名店',desc:'北海道米粉製作的無麩質可麗餅，適合想吃甜點又想避開一般小麥麵皮時選擇。',menu:'米粉可麗餅、甜味可麗餅及季節水果口味；可外帶。',address:'〒810-0041 福岡県福岡市中央区大名1丁目1-16 宮田ビル101',hours:'10:00–20:00；外帶最終約19:45',phone:'080-4175-7094',note:'17席、Wi-Fi、電源座位；天神站步行約6分鐘。',img:'https://img.retty.me/img_repo/l/01/27924582.jpg'},
{names:["Qu'il fait bon Fukuoka",'キル フェ ボン福岡'],cat:'咖啡甜品',jp:'キル フェ ボン福岡',desc:'天神的人氣水果撻專門店，櫃內有大量季節水果撻，適合逛街途中休息。',menu:'季節水果撻、草莓撻、赤いフルーツのタルト、各季限定水果撻。',address:'福岡県福岡市中央区天神2-4-11 パシフィーク天神1F',hours:'Shop 11:00–19:00；Cafe 11:00–18:00（LO 17:00）',phone:'092-738-3370',note:'店家資料列全年營業；季節水果及口味會變動。',img:'https://tblg.k-img.com/restaurant/images/Rvw/191500/640x640_rect_314ca8cf3238860f54dc5b96e05b1efe.jpg'},
{names:['Toriboshi Daimyo','とりぼし大名店'],cat:'咸食／雞肉燒肉',jp:'大衆鶏焼酒場トリボシ大名店',desc:'大名的雞肉燒肉居酒屋，主打佐賀系有田雞等雞肉部位，適合晚餐及配酒。',menu:'雞肉燒肉、稀有雞肉部位、雞料理、小菜及水果沙瓦等。',address:'福岡県福岡市中央区大名1-9-18 越智ビル',hours:'17:00–24:00（出發前確認當日營業）',phone:'店家最新電話請以官方／地圖頁為準',note:'屬晚餐型選項，若8人同行建議先確認座位。',img:'https://arne.media/uploads/2021/10/toriboshi.jpg'},
{names:['Red Rock Hakata Daimyo','レッドロック 博多大名店'],cat:'咸食／牛肉',jp:'レッドロック 博多大名店',desc:'以高堆疊烤牛肉丼聞名的大名店，亦有牛排丼、漢堡及定食。',menu:'ローストビーフ丼、ステーキ丼、スタミナカルビ、ハンバーグ定食。',address:'福岡県福岡市中央区大名1-12-26 ビエント336 101',hours:'11:30–21:30；無休資料',phone:'092-791-7221',note:'部分舊資料列至22:00，現行資料多列21:30；建議出發前確認。',img:'https://media.triple.guide/triple-cms/c_limit%2Cf_auto%2Ch_2048%2Cw_2048/75a8dacb-cfcd-42fa-991e-8ef56061a855.jpeg'},
{names:['牛かつもと村 福岡天神西通り店','牛かつ もと村 福岡天神西通り店'],cat:'咸食／牛カツ',jp:'牛かつもと村 福岡天神西通り店',desc:'牛カツ切片在桌上鐵板自行調整熟度，搭配白飯、味噌湯、蔬菜及沾醬。',menu:'牛かつ定食、牛かつ麥飯套餐、明太牛かつ、牛かつ阿魚出汁茶漬等。',address:'福岡県福岡市中央区大名1-14-5',hours:'每日 11:00–22:00（LO 21:30）',phone:'050-1722-1549',note:'20席；官方／店家資料列不可預約。',img:'https://cdn.4travel.jp/img/thumbnails/imk/tips_pict/18/17/47/650x450_18174716.jpg?updated_at=1631279078'},
{names:['Honey Coffee 那珂本店','ハニー珈琲 那珂本店／焙煎工場・配送センター'],cat:'咖啡甜品',jp:'ハニー珈琲 那珂本店／焙煎工場・配送センター',desc:'LaLaport 附近的Specialty Coffee店，可喝咖啡也可挑選咖啡豆。',menu:'Café Latte、Café Mocha、Caramel Latte、水出しアイスコーヒー、Americano、Single Origin。',address:'福岡市博多区那珂6-1-37',hours:'焙煎工場 10:00–17:00；週二休',phone:'092-292-7668',note:'官方頁面的本店／工場營業時間資料有版本差異；以Honey Coffee最新公告為準。',img:'https://tblg.k-img.com/restaurant/images/Rvw/149994/640x640_rect_149994179.jpg'},
{names:['牡蠣と日本酒 Oyster & Sake','牡蠣と日本酒'],cat:'酒類／牡蠣',jp:'牡蠣と日本酒 Oyster & Sake',desc:'福岡市產唐泊恵比須かき配本地日本酒，適合晚間小酌或兩三人分享。',menu:'唐泊恵比須かき、牡蠣3個plate、日本酒、ちょいのせセット（牡蠣＋酒／飲品）。',address:'福岡市博多区住吉1-6-8 Modern Bureau Sumiyoshi riva 201',hours:'水木金 17:00–23:00；土 13:00–23:00；日祝 13:00–21:00；週一、週二休',phone:'050-6871-9548',note:'福岡市／博多舊市街官方資料列3個牡蠣plate約¥1,650。',img:'https://rimage.gnst.jp/rest/img/41pn3t6t0000/s_0n5g.jpg'},
{names:['LIBROM Craft Sake Brewery','リブロム クラフト サケ ブルワリー'],cat:'酒類／Craft Sake',jp:'LIBROM Craft Sake Brewery',desc:'福岡市中心的クラフトサケ釀造所＋PUB，可一邊飲自家酒一邊配料理。',menu:'季節Craft Sake、酒粕／麴系料理及適合配酒的小食；酒款會隨季節更新。',address:'福岡県福岡市中央区高砂1-21-27 ボンフル高砂103',hours:'月–木 16:00–23:00；金 16:00–24:00；土 12:00–24:00；日 16:00–23:00',phone:'092-753-9298',note:'官方頁面提供電話及預約；渡辺通、藥院步行約5分鐘。',img:'https://www.azuchi-touyou.com/wp-content/uploads/2024/04/librom_pub.jpg'},
{names:['百薬','日本酒専門テイスティングバー 百薬'],cat:'酒類／日本酒',jp:'日本酒専門テイスティングバー 百薬',desc:'春吉的日本酒專門 tasting bar，除了日本酒也有小食及酒香甜品。',menu:'日本酒飲用／試飲、百薬おつまみ3種盛り、酒粕／日本酒系小食、日本酒テリーヌショコラ。',address:'福岡県福岡市中央区春吉3-16-41 RAGAZZA春吉1F',hours:'12:00–15:00；17:00–01:00；不定休',phone:'090-1347-2272',note:'資料列預約可；若要午餐時段，需先確認是否因預約開店。',img:'https://tblg.k-img.com/restaurant/images/Rvw/164811/640x640_rect_653c52161765aeca89dec55231d1b660.jpg'}
];

const style=document.createElement('style');
style.textContent=`
.day1-dinner-fixed{grid-column:2;min-width:0;width:100%;margin-top:2px}
.day1-label{font-weight:800;color:#a55516;background:#fff4dc;border-radius:12px;padding:10px 12px;margin-bottom:10px;line-height:1.4}
.day1-card{margin:0 0 12px;width:100%}
.day1-card .restaurant-img{height:190px;object-fit:cover}
.day1-card .restaurant-body{padding:14px}
.day1-card .hours{font-size:12px;line-height:1.5;color:#68747a;background:#f7f8f6;border-radius:10px;padding:7px 8px;margin-top:6px}
.day1-card .restaurant-actions{margin-top:10px}
.day1-card .map-btn{display:flex;justify-content:center;align-items:center;background:#087f73;color:#fff;padding:10px 12px;border-radius:10px;text-decoration:none}
.day1-dinner-fixed,.day1-dinner-fixed *{box-sizing:border-box}
.flex-rich{margin:0 0 14px;width:100%}
.flex-rich .restaurant-img{height:230px;object-fit:cover}
.flex-rich .restaurant-body{padding:15px}
.flex-rich .desc{margin:9px 0 10px}
.flex-rich .detail-row{font-size:12px;line-height:1.6;color:#68747a;background:#f7f8f6;border-radius:10px;padding:8px 9px;margin-top:7px}
.flex-rich .detail-row b{color:#46545a}
.flex-rich .source-note{font-size:11px;line-height:1.5;color:#8a9498;margin:8px 1px 0}
.flex-rich .restaurant-actions{margin-top:10px}
.flex-rich .map-btn{background:#087f73;color:#fff}
.flex-rich .web-btn{background:#eef3f1;color:#277c73}
.flex-rich .category{font-size:11px}
.flex-duplicate-hidden{display:none!important}
@media(max-width:560px){.day1-dinner-fixed{grid-column:2}.day1-card .restaurant-img{height:165px}.day1-card .restaurant-title{display:block}.day1-card .category{display:inline-block;margin-top:7px}.flex-rich .restaurant-img{height:205px}.flex-rich .restaurant-title{display:block}.flex-rich .category{display:inline-block;margin-top:7px}}
`;
document.head.appendChild(style);

const itineraryRestaurants=['博多もつ鍋 前田屋','前田屋','水たき 長野','NOOICE tenjin','いくら博多店','manu coffee 大名店','やりうどん福岡店','みやま本舗','焼肉なべしま','櫻島市場食堂','お食事処海月','鹿兒島屋台村','めっけもん','新港食堂','大衆酒場かどや','かどや','とりくら','豚とろ','danken COFFEE','可否三昧','Voila Coffee','くじらcafé','うなぎの末よし','Café Cochi','天文館むじゃき本店','ざぼんラーメン','いちにいさん','Gyudo!'];
const duplicateKeys=itineraryRestaurants.map(norm);
function norm(s){return String(s||'').replace(/\s+/g,'').toLowerCase()}
function isFlexPage(){const active=[...document.querySelectorAll('.tab.active span')].some(s=>s.textContent.trim()==='彈性');return active||!!document.querySelector('.filter-row .filter.active')}
function findFlexData(name){const n=norm(name);return flexRestaurants.find(r=>r.names.some(x=>n===norm(x)||n.includes(norm(x))||norm(x).includes(n)))}
function richifyFlexCards(){if(!isFlexPage())return;document.querySelectorAll('.restaurant').forEach(card=>{if(card.classList.contains('day1-card')||card.classList.contains('flex-rich'))return;const h=card.querySelector('h3');if(!h)return;const data=findFlexData(h.textContent);if(!data)return;card.classList.add('flex-rich');card.innerHTML=`<img class="restaurant-img" src="${data.img}" alt="${data.jp} 餐點／飲品照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>${data.names[0]}</h3><div class="jp">${data.jp}</div></div><span class="category">${data.cat}</span></div><p class="desc">${data.desc}</p><div class="detail-row"><b>🍴 推薦／招牌</b><br>${data.menu}</div><div class="detail-row"><b>📍 地址</b><br>${data.address}</div><div class="detail-row"><b>🕐 營業時間</b><br>${data.hours}</div><div class="detail-row"><b>☎️ 電話</b><br>${data.phone}</div><div class="source-note">${data.note}</div><div class="restaurant-actions"><a class="map-btn" href="${maps(data.names[0],data.address)}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a><a class="web-btn" href="https://www.google.com/search?q=${encodeURIComponent(data.names[0]+' 福岡 店家 菜單')}" target="_blank" rel="noopener noreferrer">🔎 店家／菜單</a></div></div>`})}
function removeItineraryDuplicates(){if(!isFlexPage())return;document.querySelectorAll('.restaurant').forEach(card=>{if(card.classList.contains('day1-card'))return;const text=norm(card.textContent);if(duplicateKeys.some(k=>k&&text.includes(k)))card.classList.add('flex-duplicate-hidden')});document.querySelectorAll('.region-block').forEach(region=>{const visible=[...region.querySelectorAll('.restaurant')].some(x=>!x.classList.contains('flex-duplicate-hidden'));if(region.querySelector('.restaurant')&&!visible)region.classList.add('flex-duplicate-hidden')})}
function rename(){document.querySelectorAll('.tab span').forEach(s=>{if(s.textContent.trim()==='自由')s.textContent='彈性'})}
function findDinnerEvent(){const nodes=[...document.querySelectorAll('body *')];const t=nodes.find(e=>e.children.length===0&&e.textContent.trim()==='天神晚餐選擇');return t?t.closest('.event'):null}
function placeFixed(event){if(!event)return;let box=event.querySelector('.day1-dinner-fixed');if(box&&box.parentElement!==event){box.remove();box=null}if(!box){event.insertAdjacentHTML('beforeend',dinner);box=event.querySelector('.day1-dinner-fixed')}if(box){box.style.gridColumn='2';box.style.width='100%';box.style.minWidth='0'}}
function inject(){rename();const event=findDinnerEvent();if(event)placeFixed(event);removeItineraryDuplicates();richifyFlexCards()}
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function run(){try{inject()}catch(e){console.error('travel app patch',e)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});
setInterval(run,1000);
})();
