/* 行程頁指定修正：住宿、Day2 晚餐、櫻島渡輪／足湯、開聞岳遠望、Day7 いちにぃさん照片 */
(function(){
'use strict';
const MAP=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const lodging={
 'Richmond Hotel Tenjin Nishidori':{jp:'リッチモンドホテル天神西通',addr:'〒810-0001 福岡県福岡市中央区天神2-6-16',hours:'入住／退房依飯店當日規定',tel:'092-717-2477',desc:'位於福岡天神西通，距地下鐵天神站步行約3–5分鐘，Day 1–2 住宿。',map:MAP('Richmond Hotel Tenjin Nishidori, 2-6-16 Tenjin, Chuo Ward, Fukuoka')},
 '霧島観光ホテル':{jp:'AUBEGIO 霧島観光ホテル',addr:'〒899-6603 鹿児島県霧島市牧園町高千穂3885',hours:'入住／退房依飯店當日規定',tel:'0995-78-2531',desc:'霧島溫泉區住宿，主打溫泉與會席料理；行程 Day 3 晚上入住。',map:MAP('AUBEGIO Kirishima Kanko Hotel, 3885 Makizonochō Takachiho, Kirishima')},
 '東横INN鹿児島中央駅西口':{jp:'東横INN鹿児島中央駅西口',addr:'〒890-0046 鹿児島県鹿児島市西田2-28-10',hours:'Check-in 15:00／Check-out 10:00；免費早餐 6:30–9:00',tel:'099-814-1045',desc:'鹿兒島中央站西口步行約1分鐘，Day 4–7 連續住宿。設有付費停車場。',map:MAP('Toyoko Inn Kagoshima Chuo-eki Nishi-guchi, 2-28-10 Nishida, Kagoshima')}
};
const dinners=[
 {name:'博多もつ鍋 前田屋 博多店',tag:'咸食／牛雜鍋',jp:'博多もつ鍋前田屋 博多店',desc:'以國產和牛內臟製作博多名物牛雜鍋；味噌、醬油、辛味三種鍋底可選。官方資料目前列味噌牛雜鍋為人氣餐點。',addr:'福岡市博多区博多駅前3-26-5',hours:'11:00–14:30（LO 14:00）／17:00–24:00（食事LO 23:00・飲物LO 23:30）',tel:'092-482-8558',photo:'https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg',map:MAP('博多もつ鍋前田屋 博多店, 福岡市博多区博多駅前3-26-5')},
 {name:'水たき 長野',tag:'咸食／水炊き',jp:'水たき長野',desc:'創業逾90年的水炊き專門店，以每日熬製的白濁雞湯搭配雞肉與蔬菜，最後可用剩餘湯汁煮雜炊。',addr:'福岡市博多区対馬小路1-6',hours:'12:00–22:00；週日休',tel:'092-281-2200',photo:'https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg',map:MAP('水たき長野, 福岡市博多区対馬小路1-6')},
 {name:'肉の山翔',tag:'咸食／A5黑毛和牛',jp:'肉の山翔',desc:'大名的燒肉店，主打A5黑毛和牛與現炊銀シャリ；人氣午餐包含明太和牛重，也有燒肉拼盤及多種肉品。',addr:'福岡県福岡市中央区大名1-1-17 美和ビル2F',hours:'11:00–22:30（LO 22:00）',tel:'092-401-1029',photo:'https://tblg.k-img.com/restaurant/images/Rvw/213637/640x640_rect_535f9c9cc16c4a60942285129003d365.jpg',map:MAP('肉の山翔, 福岡県福岡市中央区大名1-1-17')},
 {name:'焼とりの八兵衛 天神店',tag:'咸食／燒鳥・居酒屋',jp:'焼とりの八兵衛 天神店',desc:'福岡老字號燒鳥品牌，提供炭火串燒、和牛串、海鮮及居酒屋料理；適合晚上聚餐。',addr:'福岡県福岡市中央区今泉2-5-28',hours:'17:00–24:00（LO 23:30）',tel:'050-5597-8413',photo:'https://tenjinsite.jp/upload/topic_photo/700x525_img_tid41284_2.jpg',map:MAP('焼とりの八兵衛 天神店, 福岡県福岡市中央区今泉2-5-28')}
];
function leafEvent(text){
 const all=[...document.querySelectorAll('.event')];
 return all.find(e=>e.textContent.includes(text));
}
function cardHTML(x){return `<article class="trip-detail-card trip-food-detail"><img src="${x.photo}" alt="${x.name} 實際料理照片"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>${x.name}</h3><p class="trip-jp">${x.jp}</p></div><span>${x.tag}</span></div><p>${x.desc}</p><div class="trip-info">📍 ${x.addr}</div><div class="trip-info">🕐 ${x.hours}</div><div class="trip-info">☎️ ${x.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${x.map}">📍 Google Maps 導航</a></div></article>`}
function addAfterEvent(event,html,key){if(!event||event.dataset[key])return;event.dataset[key]='1';const wrap=document.createElement('div');wrap.className='trip-correction-wrap';wrap.innerHTML=html;event.insertAdjacentElement('afterend',wrap)}
function addLodging(event,info){if(!event||event.dataset.lodgingFixed)return;event.dataset.lodgingFixed='1';const wrap=document.createElement('div');wrap.className='trip-correction-wrap';wrap.innerHTML=`<article class="trip-detail-card trip-hotel-detail"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>🏨 ${info.jp}</h3><p class="trip-jp">${event.textContent.trim()}</p></div><span>住宿</span></div><p>${info.desc}</p><div class="trip-info">📍 ${info.addr}</div><div class="trip-info">🕐 ${info.hours}</div><div class="trip-info">☎️ ${info.tel}</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${info.map}">📍 Google Maps 導航</a></div></article>`;event.insertAdjacentElement('afterend',wrap)}
function special(text,title,desc,addr,hours,tel,map){
 const e=leafEvent(text);
 if(!e||e.dataset.specialFixed)return;
 // 若 itinerary-spots.js 已經在同一事件內建立完整景點卡，就不要再追加第二張。
 if(e.querySelector('.itinerary-spot-detail'))return;
 e.dataset.specialFixed='1';
 if(text==='長腳湯（足湯）'||text==='櫻島熔岩渚公園足湯'){
   const leaves=[...e.querySelectorAll('*')];
   leaves.forEach(n=>{if(n.childElementCount===0&&n.textContent.trim()==='長腳湯（足湯）')n.textContent='櫻島熔岩渚公園足湯'});
   e.innerHTML=e.innerHTML.replace('長腳湯（足湯）','櫻島熔岩渚公園足湯')
 }
 const wrap=document.createElement('div');
 wrap.className='trip-correction-wrap';
 wrap.innerHTML=`<article class="trip-detail-card trip-place-detail"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>${title}</h3><p class="trip-jp">行程景點資料補充</p></div><span>景點</span></div><p>${desc}</p><div class="trip-info">📍 ${addr}</div><div class="trip-info">🕐 ${hours}</div>${tel?`<div class="trip-info">☎️ ${tel}</div>`:''}<a class="trip-map-btn" target="_blank" rel="noopener" href="${map}">📍 Google Maps 導航</a></div></article>`;
 e.insertAdjacentElement('afterend',wrap)
}
function cleanDuplicatePlaceCards(){
 const detailNames=[...document.querySelectorAll('.event .itinerary-spot-detail h4')].map(h=>(h.textContent||'').trim()).filter(Boolean);
 if(!detailNames.length)return;
 document.querySelectorAll('.trip-correction-wrap .trip-place-detail').forEach(card=>{
   const cardText=(card.textContent||'').replace(/\s+/g,'');
   const isDuplicate=detailNames.some(name=>{
     const n=name.replace(/\s+/g,'');
     return cardText.includes(n)||((n.includes('池田湖')||n.includes('開聞岳'))&&cardText.includes('池田湖畔'))||((n.includes('砂むし会館砂楽')||n.includes('砂むし會館砂樂'))&&(cardText.includes('砂樂')||cardText.includes('砂楽')));
   });
   if(isDuplicate){
     const wrap=card.closest('.trip-correction-wrap');
     if(wrap)wrap.remove(); else card.remove();
   }
 });
}
function run(){
 const body=document.body;
 if(!body)return;
 cleanDuplicatePlaceCards();
 // 住宿資訊卡只跟「入住／住宿」事件；退房、前往機場、移動中的描述不再重複顯示。
 document.querySelectorAll('.event').forEach(e=>{
   const title=(e.querySelector('.event-card h3')?.textContent||'').trim();
   const time=(e.querySelector('.time')?.textContent||'').trim();
   const t=e.textContent||'';
   const canShow=/入住|住宿/.test(title)||/^住宿$/.test(time);
   if(!canShow||/退房/.test(title))return;
   if(t.includes('Richmond Hotel Tenjin Nishidori'))addLodging(e,lodging['Richmond Hotel Tenjin Nishidori']);
   else if(t.includes('霧島観光ホテル'))addLodging(e,lodging['霧島観光ホテル']);
   else if(t.includes('東横INN鹿児島中央駅西口'))addLodging(e,lodging['東横INN鹿児島中央駅西口']);
 });
 const dinnerEvent=leafEvent('天神晚餐');
 if(dinnerEvent&&!dinnerEvent.dataset.dinnerFixed){dinnerEvent.dataset.dinnerFixed='1';const wrap=document.createElement('div');wrap.className='trip-correction-wrap trip-dinner-grid';wrap.innerHTML=dinners.map(cardHTML).join('');dinnerEvent.insertAdjacentElement('afterend',wrap)}
 special('自駕前往櫻島渡輪碼頭','鹿児島港櫻島渡輪碼頭','從鹿兒島市區自駕前往鹿兒島港，這裡是帶車搭乘櫻島渡輪的主要登船處。官方地址為本港新町4-1；汽車可上船。','〒892-0814 鹿児島県鹿児島市本港新町4-1','依當日渡輪班次；鹿兒島港－櫻島航程約15分鐘','099-223-7271',MAP('鹿児島港フェリーターミナル, 鹿児島市本港新町4-1'));
 special('長腳湯（足湯）','櫻島熔岩渚公園足湯','位於櫻島熔岩渚公園的天然溫泉足湯，全長約100公尺，可一邊泡腳一邊看錦江灣與櫻島。','〒891-1419 鹿児島県鹿児島市桜島横山町1722-3','9:00–日落；全年開放','',MAP('櫻島熔岩渚公園足湯, 鹿児島市桜島横山町1722-3'));
 special('池田湖／開聞岳遠望','池田湖畔・開聞岳遠望','如果 Day 6 選擇「開聞岳遠望」，建議直接以池田湖畔作為導航點。官方觀光資料指出，池田湖畔可望見被稱為薩摩富士的開聞岳。','〒891-0312 鹿児島県指宿市池田','湖畔戶外景觀；全年可前往','0993-22-2111',MAP('池田湖, 鹿児島県指宿市池田'));
 // Day 7 いちにぃさん照片：只在該餐廳選項附近追加
 const e=leafEvent('いちにいさん');if(e&&!e.dataset.ichiniisanFixed){e.dataset.ichiniisanFixed='1';const wrap=document.createElement('div');wrap.className='trip-correction-wrap';wrap.innerHTML=`<article class="trip-detail-card trip-food-detail"><img src="https://ximg.retty.me/crop/s400x400/q80/das/-/retty/img_repo/2l/01/30113566.jpg" alt="いちにぃさん 鹿児島本店 實際店舖照片"><div class="trip-detail-body"><div class="trip-detail-top"><div><h3>いちにぃさん 鹿児島本店</h3><p class="trip-jp">遊食豚彩 いちにぃさん 鹿児島本店</p></div><span>咸食／黑豬</span></div><p>鹿兒島黑豬專門店，以蕎麥麵醬汁享用黑豬涮涮鍋，也提供黑豬炸豬排、黑毛和牛及鹿兒島鄉土料理。</p><div class="trip-info">📍 鹿児島市下荒田1丁目21-24</div><div class="trip-info">🕐 11:00–21:30（LO 21:00）</div><div class="trip-info">☎️ 099-285-8123</div><a class="trip-map-btn" target="_blank" rel="noopener" href="${MAP('いちにぃさん 鹿児島本店, 鹿児島市下荒田1丁目21-24')}">📍 Google Maps 導航</a></div></article>`;e.insertAdjacentElement('afterend',wrap)}
}
const css=`.trip-correction-wrap{width:100%;margin:12px 0 24px;grid-column:2}.trip-detail-card{background:#fff;border:1px solid #e4e8e8;border-radius:22px;overflow:hidden;box-shadow:0 8px 24px rgba(20,50,50,.07)}.trip-detail-card img{display:block;width:100%;height:300px;object-fit:cover}.trip-detail-body{padding:20px}.trip-detail-top{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}.trip-detail-top h3{margin:0;font-size:24px;color:#24323b}.trip-detail-top>span{background:#eefaf7;color:#087f73;border-radius:999px;padding:8px 12px;white-space:nowrap;font-weight:700}.trip-jp{margin:5px 0 12px;color:#7a878d;font-size:16px}.trip-detail-body>p{color:#65747c;line-height:1.7;font-size:16px}.trip-info{background:#f6f8f8;border-radius:14px;padding:12px 14px;margin-top:9px;color:#68777e;font-size:15px}.trip-map-btn{display:inline-block;margin-top:12px;padding:11px 16px;border-radius:999px;background:#087f73;color:#fff!important;text-decoration:none;font-weight:800}.trip-dinner-grid{display:grid;grid-template-columns:1fr;gap:18px}.trip-dinner-grid .trip-detail-card{height:100%}.trip-hotel-detail{border-color:#b9e5dc}.trip-place-detail{border-color:#dce7e5}@media(min-width:760px){.trip-dinner-grid{grid-template-columns:1fr 1fr}.trip-detail-card img{height:330px}}@media(max-width:759px){.trip-correction-wrap{grid-column:1}.trip-detail-top{flex-direction:column}.trip-detail-top>span{align-self:flex-start}.trip-detail-card img{height:250px}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
let timer=0;const obs=new MutationObserver(()=>{clearTimeout(timer);timer=setTimeout(run,100)});obs.observe(document.body,{childList:true,subtree:true});setTimeout(run,300);setInterval(run,2000);
})();
