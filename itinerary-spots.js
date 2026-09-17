/* Detailed attraction cards for itinerary sights. */
(function(){
'use strict';
const S=[
{match:'LaLaport 福岡',name:'LaLaport 福岡',jp:'ららぽーと福岡',cat:'購物／大型商場',desc:'Day 2 下午的主要購物地點；館內有商店、餐廳、美食街，以及實物大 RX-93ff ν鋼彈。',hours:'商店 10:00–20:00；餐廳／美食街依店舖而異，出發前確認當日營業時間',address:'〒812-8627 福岡県福岡市博多区那珂6丁目23-1',phone:'092-707-9820',map:'LaLaport 福岡 〒812-8627 福岡県福岡市博多区那珂6丁目23-1',note:'大型商場，建議預留購物與用餐時間。'},
{match:'GUNDAM SIDE-F',name:'GUNDAM SIDE-F',jp:'GUNDAM SIDE-F',cat:'鋼彈／娛樂',desc:'LaLaport 福岡內的鋼彈專區，可看 RX-93ff ν鋼彈、模型與相關展示；同日亦安排 GUNDAM PARK／夜間演出。',hours:'以 LaLaport 福岡及當日活動公告為準',address:'〒812-8627 福岡県福岡市博多区那珂6丁目23-1 ららぽーと福岡',map:'GUNDAM SIDE-F ららぽーと福岡',note:'夜間投影／燈光演出時間會因日期調整，請出發前再確認。'},
{match:'霧島神話之里公園',name:'霧島神話之里公園',jp:'霧島神話の里公園',cat:'自然／展望',desc:'利用霧島山地形打造的休閒公園；有「風の見える丘」、展望廣場及神話影像館，天氣好可眺望錦江灣、櫻島與開聞岳。',hours:'9:00–17:00；園區設施可能因天候調整；餐廳週三休',address:'〒899-4201 鹿児島県霧島市霧島田口2583-22',phone:'0995-57-1711',map:'霧島神話の里公園 霧島田口2583-22',note:'戶外設施受天氣影響，出發當日建議確認。'},
{match:'霧島神宮',name:'霧島神宮',jp:'霧島神宮',cat:'神社／歷史文化',desc:'霧島地區代表性神社，朱紅色社殿與鳥居坐落於森林之中；適合安排參拜、散步與拍攝。',hours:'境內全年可參拜；授與所等服務時間依神社當日公告',address:'〒899-4201 鹿児島県霧島市霧島田口2608-5',phone:'0995-57-0001',map:'霧島神宮 鹿児島県霧島市霧島田口2608-5',note:'神社屬宗教場所，參拜時請遵守現場禮儀。'},
{match:'仙巖園',name:'仙巖園',jp:'名勝 仙巖園',cat:'庭園／歷史文化',desc:'島津家別邸與大名庭園，以借景方式把櫻島與錦江灣納入景觀；園內可看御殿、貓神社、商店及薩摩相關文化展示。',hours:'9:00–17:00；最終入場約16:30',address:'〒892-0871 鹿児島県鹿児島市吉野町9700-1',phone:'099-247-1551',map:'仙巖園 鹿児島県鹿児島市吉野町9700-1',note:'建議至少預留1.5–2小時；部分設施可能另有開放時間。'},
{match:'櫻島遊客中心',name:'櫻島遊客中心',jp:'桜島ビジターセンター',cat:'火山／博物館',desc:'介紹櫻島火山噴發歷史、植物演變與居民生活的資料館，適合作為上島後第一站。',hours:'9:00–17:00；年中無休；免費',address:'〒891-1419 鹿児島県鹿児島市桜島横山町1722-29',phone:'099-293-2443',map:'桜島ビジターセンター 鹿児島市桜島横山町1722-29',note:'距櫻島港步行約10分鐘；附近有足湯及步道。'},
{match:'湯之平展望所',name:'湯之平展望所',jp:'湯之平展望所',cat:'展望台／火山景觀',desc:'位於櫻島北岳四合目、標高373m，是一般遊客可到達的最高點，可360度眺望南岳、錦江灣、鹿兒島市街、霧島連山及開聞岳。',hours:'展望所自由參觀；売店 9:00–17:00',address:'〒891-1418 鹿児島県鹿児島市桜島小池町1025',map:'湯之平展望所 鹿児島市桜島小池町1025',note:'火山活動、道路或天候狀況可能影響交通。'},
{match:'有村熔岩展望所',name:'有村熔岩展望所',jp:'有村溶岩展望所',cat:'火山／自然步道',desc:'位於櫻島南側熔岩原上的展望區，可沿熔岩遊步道欣賞火山地形、錦江灣與櫻島南岳景觀。',hours:'戶外景點；原則上全天可前往，受火山／天候狀況影響',address:'〒891-1545 鹿児島県鹿児島市有村町952',phone:'099-216-1327（鹿児島市観光振興課）',map:'有村溶岩展望所 鹿児島市有村町952',note:'屬戶外熔岩地形，建議穿防滑鞋並留意火山公告。'},
{match:'知覽武家屋敷庭園',name:'知覽武家屋敷庭園群',jp:'知覧武家屋敷庭園',cat:'歷史街區／庭園',desc:'有「薩摩小京都」之稱的武家屋敷群，約700公尺石牆街景保存良好，7座庭園可參觀，其中多為枯山水庭園。',hours:'9:00–17:00；年中無休',address:'〒897-0302 鹿児島県南九州市知覧町郡13731-1',phone:'0993-58-7878',map:'知覧武家屋敷庭園 鹿児島県南九州市知覧町郡13731-1',note:'7個庭園共通門票；街區以步行參觀為主。'},
{match:'砂むし會館 砂樂',name:'砂むし会館 砂楽',jp:'砂むし会館 砂楽',cat:'溫泉／砂蒸',desc:'指宿代表性的天然砂蒸溫泉設施，在海岸天然砂中體驗砂蒸；館內亦有大浴場。',hours:'8:30–21:00；最終受付20:00；平日12:00–13:00砂蒸受付暫停',address:'〒891-0406 鹿児島県指宿市湯の浜5丁目25番18号',phone:'0993-23-3900',map:'砂むし会館 砂楽 鹿児島県指宿市湯の浜5丁目25-18',note:'繁忙時可能提早停止砂蒸受付；惡劣天氣或設備維護可能臨時休館。'},
{match:'池田湖',name:'池田湖',jp:'池田湖',cat:'湖泊／自然景觀',desc:'指宿地區大型火山口湖，可遠眺開聞岳；Day 6 作為二選一彈性景點。',hours:'戶外景點；湖畔可自由散步',address:'〒891-0312 鹿児島県指宿市池田',map:'池田湖 鹿児島県指宿市池田',note:'湖畔店舖及觀光設施各有不同營業時間。'},
{match:'平川動物公園',name:'平川動物公園',jp:'鹿児島市平川動物公園',cat:'動物園／親子',desc:'鹿兒島市大型動物園，園內有約130種、900隻動物，包含樹熊、長頸鹿等；適合安排2.5小時以上。',hours:'9:00–17:00；最終入園16:30；12/29–1/1休園',address:'〒891-0133 鹿児島県鹿児島市平川町5669-1',phone:'099-261-2326',map:'平川動物公園 鹿児島県鹿児島市平川町5669-1',note:'部分動物在16:00前後會停止展示；園內範圍較大，建議穿舒適鞋。'},
{match:'天文館通',name:'天文館通',jp:'天文館通り',cat:'市區／購物',desc:'鹿兒島市中心主要商店街，適合安排白熊刨冰、伴手禮、藥妝及晚餐；可與天文館むじゃき一起安排。',hours:'商店各自營業；商店街戶外區域可自由通行',address:'鹿児島県鹿児島市東千石町・中町周邊',map:'天文館通 鹿児島県鹿児島市',note:'各店營業時間不同，晚上部分店舖會陸續關門。'},
{match:'AMU PLAZA',name:'AMU PLAZA 鹿兒島',jp:'アミュプラザ鹿児島',cat:'購物／車站商場',desc:'鹿兒島中央站直結的大型商場，適合 Day 7 傍晚採購伴手禮、藥妝與日用品。',hours:'店舖依館別／店家而異，出發前確認',address:'〒890-0053 鹿児島県鹿児島市中央町1-1',phone:'099-812-7700',map:'アミュプラザ鹿児島 鹿児島市中央町1-1',note:'與鹿兒島中央站相連，還車或搭車前採購方便。'},
{match:'太宰府天滿宮',name:'太宰府天滿宮',jp:'太宰府天満宮',cat:'神社／福岡延伸',desc:'福岡延伸行程三選一；供奉菅原道真公，參拜道路周邊亦有梅枝餅與伴手禮店。',hours:'依季節及神社公告；出發前確認當日開門時間',address:'〒818-0117 福岡県太宰府市宰府4丁目7-1',map:'太宰府天満宮 福岡県太宰府市宰府4-7-1',note:'自由行日期為10/5，建議預留半日並把交通時間計入。'},
{match:'柳川遊船',name:'柳川遊船',jp:'柳川川下り',cat:'遊船／福岡延伸',desc:'福岡延伸半日遊三選一；乘小船沿柳川水路遊覽，船夫講解沿岸歷史與景色。',hours:'各船公司班次不同；需按當日班次安排',address:'福岡県柳川市市區水路周邊（各船公司乘船處不同）',map:'柳川川下り 福岡県柳川市',note:'不是單一固定店舖，預約與乘船碼頭需依所選船公司確認。'},
{match:'糸島海邊',name:'糸島海邊／桜井二見ヶ浦',jp:'桜井二見ヶ浦',cat:'海岸／福岡延伸',desc:'福岡延伸半日遊三選一；以海岸景觀、夫婦岩及夕陽聞名，適合自駕慢遊與拍照。',hours:'戶外景點；自由參觀',address:'〒819-1304 福岡県糸島市志摩桜井',map:'桜井二見ヶ浦 福岡県糸島市志摩桜井',note:'海邊天候、風浪及停車狀況會影響體驗。'}
];
function mapUrl(q){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q)}
function norm(s){return (s||'').replace(/\s+/g,'').toLowerCase()}
function render(){
 document.querySelectorAll('.event').forEach(ev=>{
   if(ev.querySelector('.itinerary-spot-detail')) return;
   const text=norm(ev.textContent);
   const matches=S.filter(s=>text.includes(norm(s.match)) || (s.match==='砂むし會館 砂樂' && text.includes('砂むし會館')) || (s.match==='知覽武家屋敷庭園' && text.includes('知覽武家屋敷')));
   if(!matches.length) return;
   const host=ev.querySelector('.event-card'); if(!host) return;
   matches.forEach(s=>{
     const card=document.createElement('div'); card.className='itinerary-spot-detail';
     card.innerHTML=`<div class="spot-detail-head"><div><h4>${s.name}</h4><div class="spot-detail-jp">${s.jp}</div></div><span class="spot-detail-cat">${s.cat}</span></div><p class="spot-detail-desc">${s.desc}</p><div class="spot-detail-row">📍 ${s.address}</div><div class="spot-detail-row">🕐 ${s.hours}</div>${s.phone?`<div class="spot-detail-row">☎️ ${s.phone}</div>`:''}<div class="spot-detail-actions"><a href="${mapUrl(s.map)}" target="_blank" rel="noopener">📍 Google Maps 導航</a></div>${s.note?`<div class="spot-detail-note">⚠️ ${s.note}</div>`:''}`;
     host.appendChild(card);
   });
 });
}
const css=document.createElement('style');css.textContent=`.itinerary-spot-detail{margin-top:12px;background:#fff;border:1px solid #e5e9e7;border-radius:16px;padding:14px;box-shadow:0 4px 14px #1e323010}.spot-detail-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.spot-detail-head h4{margin:0;font-size:16px;line-height:1.4;color:#26333a}.spot-detail-jp{font-size:12px;color:#7d878b;margin-top:2px}.spot-detail-cat{font-size:11px;color:#087f73;background:#eff8f5;border-radius:999px;padding:5px 8px;white-space:nowrap}.spot-detail-desc{font-size:13px;line-height:1.7;color:#68747a;margin:8px 0}.spot-detail-row{font-size:12px;line-height:1.6;color:#68747a;background:#f7f8f6;border-radius:10px;padding:8px;margin-top:6px}.spot-detail-actions{display:flex;margin-top:9px}.spot-detail-actions a{display:block;flex:1;text-align:center;text-decoration:none;background:#087f73;color:white;border-radius:10px;padding:9px;font-size:12px}.spot-detail-note{margin-top:8px;color:#8b5b28;background:#fff8ea;border-radius:10px;padding:8px;font-size:11px;line-height:1.6}@media(min-width:760px){.itinerary-spot-detail{padding:16px}}`;document.head.appendChild(css);
render();new MutationObserver(render).observe(document.body,{childList:true,subtree:true});setInterval(render,1200);
})();
