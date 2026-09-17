/* 彈性頁：四大地區 → 四大分類 → 詳細資料
 * 修正版：不再依賴 window.state / window.render，避免點擊地區後資料為空。
 * 直接從同源 patch.js 讀取既有 flexRestaurants 資料，並自行建立頁面。
 */
(function(){
'use strict';

const REGIONS=['福岡','霧島','櫻島','鹿兒島市區'];
const ITIN_RESTAURANTS=['博多もつ鍋 前田屋','前田屋','水たき 長野','NOOICE tenjin','いくら博多店','manu coffee 大名店','やりうどん福岡店','みやま本舗','焼肉なべしま','櫻島市場食堂','お食事処海月','鹿兒島屋台村','かごっまふるさと屋台村','めっけもん','新港食堂','大衆酒場かどや','かどや','とりくら','豚とろ','danken COFFEE','可否三昧','Voila Coffee','くじらcafé','うなぎの末よし','Café Cochi','天文館むじゃき本店','ざぼんラーメン','いちにいさん','Gyudo!'];
const SHOPPING=[
 {region:'福岡',name:'上久醬油／ジョーキュウ醤油 小売館',jp:'ジョーキュウ醤油 小売館',desc:'福岡・大名一帶的老舖醬油選物，可作為伴手禮與調味料採購。',address:'福岡県福岡市中央区大名1-12-15',hours:'以店家當日公告為準',phone:'店家最新資料請以Google Maps確認'},
 {region:'福岡',name:'ニシナ屋珈琲 大名1-3-26niR焙煎所',jp:'ニシナ屋珈琲 大名1-3-26niR焙煎所',desc:'大名現場焙煎咖啡豆專門店，適合購買精品咖啡豆。',address:'福岡県福岡市中央区大名1-3-26',hours:'10:00–18:00',phone:'092-718-7379'}
];
let detailRegion=null, detailCat=null, flexRestaurants=[];

function norm(s){return String(s||'').replace(/\s+/g,'').toLowerCase()}
function duplicate(text,list){const n=norm(text);return list.some(x=>n.includes(norm(x))||norm(x).includes(n))}
function regionOf(r){
 const t=norm((r.name||'')+' '+(r.jp||'')+' '+(r.address||''));
 if(/福岡|天神|大名|博多|赤坂/.test(t))return '福岡';
 if(/霧島/.test(t))return '霧島';
 if(/桜島|櫻島/.test(t))return '櫻島';
 if(/鹿児島|鹿兒島|天文館|中央町/.test(t))return '鹿兒島市區';
 return null;
}
function catOf(r){
 const t=(r.cat||'')+' '+(r.name||'')+' '+(r.jp||'')+' '+(r.menu||'');
 if(/酒|日本酒|燒酎|焼酎|沙瓦|bar|pub|居酒屋/i.test(t))return 'bar';
 if(/咖啡|甜|草莓|水果|可麗餅|派|café|coffee|dessert|パフェ|タルト/i.test(t))return 'sweet';
 return 'savory';
}
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function escapeHtml(s){return String(s||'').replace(/[&<>\"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[m]))}

async function loadData(){
 if(flexRestaurants.length)return;
 try{
   const text=await fetch('./patch.js?v=flex-data-20260918',{cache:'no-store'}).then(r=>r.text());
   const m=text.match(/const flexRestaurants\s*=\s*\[(.*)\];\s*\n?const duplicateKeys/s);
   if(m){
     flexRestaurants=Function('return ['+m[1]+'];')();
   }
 }catch(err){console.error('flex data load failed',err)}
 if(!Array.isArray(flexRestaurants))flexRestaurants=[];
 flexRestaurants=flexRestaurants.filter(r=>r&&regionOf(r)&&!duplicate((r.names||[]).join(' '),ITIN_RESTAURANTS));
}

function restaurantCard(r){
 const name=escapeHtml((r.names&&r.names[0])||r.name||'餐廳');
 const jp=escapeHtml(r.jp||'');
 const img=r.img||'';
 return `<article class="restaurant flex-rich"><img class="restaurant-img" src="${img}" alt="${jp||name} 餐點／飲品照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>${name}</h3><div class="jp">${jp}</div></div><span class="category">${escapeHtml(r.cat||'餐廳')}</span></div><p class="desc">${escapeHtml(r.desc||'')}</p><div class="detail-row"><b>🍴 推薦／招牌</b><br>${escapeHtml(r.menu||'')}</div><div class="detail-row"><b>📍 地址</b><br>${escapeHtml(r.address||'')}</div><div class="detail-row"><b>🕐 營業時間</b><br>${escapeHtml(r.hours||'')}</div><div class="detail-row"><b>☎️ 電話</b><br>${escapeHtml(r.phone||'')}</div>${r.note?`<div class="source-note">${escapeHtml(r.note)}</div>`:''}<div class="restaurant-actions"><a class="map-btn" href="${maps(name,r.address||'')}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></div></article>`;
}
function shoppingCard(r){
 return `<article class="flex-info-card"><div class="flex-info-icon">🛍️</div><div><h3>${escapeHtml(r.name)}</h3><div class="jp">${escapeHtml(r.jp)}</div><p>${escapeHtml(r.desc)}</p><div class="detail-row"><b>📍 地址</b><br>${escapeHtml(r.address)}</div><div class="detail-row"><b>🕐 營業時間</b><br>${escapeHtml(r.hours)}</div><div class="detail-row"><b>☎️ 電話</b><br>${escapeHtml(r.phone)}</div><a class="map-btn" href="${maps(r.name,r.address)}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></article>`;
}
function regionHome(){
 return `<div class="flex-nav-shell"><div class="flex-nav-intro"><div class="flex-kicker">🎟️ 彈性選擇</div><h2>先選地區</h2><p>依照這次旅程的四個主要地區整理；進入地區後，再選「咸食、咖啡甜食、酒類、購物景點」。</p></div><div class="flex-region-grid">${REGIONS.map(r=>`<button type="button" class="flex-region-card" data-region="${r}"><span class="flex-region-icon">${r==='福岡'?'🇯🇵':r==='霧島'?'♨️':r==='櫻島'?'🌋':'🌸'}</span><span><b>${r}</b><small>查看餐廳・咖啡・酒類・購物景點</small></span><strong>›</strong></button>`).join('')}</div></div>`;
}
function categoryHome(){
 const cats=[['savory','🍱','咸食類','拉麵、鍋物、壽司、燒肉、定食等'],['sweet','☕','咖啡甜食類','咖啡、甜品、水果撻、可麗餅等'],['bar','🍶','酒類','日本酒、燒酎、居酒屋、酒吧等'],['place','🛍️','購物景點類','購物店、伴手禮與行程以外的景點']];
 return `<div class="flex-nav-shell"><button type="button" class="flex-back" data-back="regions">‹ 所有地區</button><div class="flex-detail-head"><div class="flex-kicker">📍 ${detailRegion}</div><h2>你想找什麼？</h2><p>選一個分類，再查看完整店家／景點資料。</p></div><div class="flex-category-grid">${cats.map(c=>`<button type="button" class="flex-category-card" data-cat="${c[0]}"><span>${c[1]}</span><div><b>${c[2]}</b><small>${c[3]}</small></div><strong>›</strong></button>`).join('')}</div></div>`;
}
function categoryDetail(){
 const titles={savory:'🍱 咸食類',sweet:'☕ 咖啡甜食類',bar:'🍶 酒類',place:'🛍️ 購物景點類'};
 let html='';
 if(detailCat==='place') html=SHOPPING.filter(x=>x.region===detailRegion).map(shoppingCard).join('');
 else html=flexRestaurants.filter(r=>regionOf(r)===detailRegion&&catOf(r)===detailCat).map(restaurantCard).join('');
 return `<div class="flex-nav-shell"><button type="button" class="flex-back" data-back="cats">‹ ${detailRegion}</button><div class="flex-detail-head"><div class="flex-kicker">📍 ${detailRegion}</div><h2>${titles[detailCat]}</h2><p>已排除正式行程內重複出現的餐廳／景點。</p></div><div class="flex-results">${html||'<div class="empty">這個地區目前沒有符合此分類的選項。</div>'}</div></div>`;
}
function renderCustom(){
 const content=document.querySelector('.content'); if(!content)return;
 content.innerHTML=detailRegion?(detailCat?categoryDetail():categoryHome()):regionHome();
 document.querySelectorAll('.tab span').forEach(s=>{if(s.textContent.trim()==='自由')s.textContent='彈性'});
 window.scrollTo(0,0);
}
async function enterFlex(){
 detailRegion=null;detailCat=null;
 await loadData();
 renderCustom();
}

document.addEventListener('click',async function(e){
 const b=e.target.closest('.tab');
 if(b && /^(自由|彈性)$/.test((b.querySelector('span')||b).textContent.trim())){
   e.preventDefault();e.stopImmediatePropagation();await enterFlex();return;
 }
 const region=e.target.closest('.flex-region-card');
 if(region){detailRegion=region.dataset.region;detailCat=null;renderCustom();return}
 const cat=e.target.closest('.flex-category-card');
 if(cat){detailCat=cat.dataset.cat;renderCustom();return}
 const back=e.target.closest('.flex-back');
 if(back){if(back.dataset.back==='regions'){detailRegion=null;detailCat=null}else{detailCat=null}renderCustom();return}
},true);

const css=`.flex-nav-shell{padding:8px 0 120px}.flex-nav-intro,.flex-detail-head{background:#eefaf7;border:1px solid #a9e1d6;border-radius:24px;padding:24px;margin-bottom:18px}.flex-kicker{font-weight:800;color:#087f73;font-size:15px;margin-bottom:6px}.flex-nav-intro h2,.flex-detail-head h2{margin:0 0 8px;font-size:28px;color:#24323b}.flex-nav-intro p,.flex-detail-head p{margin:0;color:#6c7b83;line-height:1.7}.flex-region-grid,.flex-category-grid{display:grid;gap:14px}.flex-region-card,.flex-category-card{width:100%;border:1px solid #e1e6e8;background:#fff;border-radius:22px;padding:20px;display:flex;align-items:center;text-align:left;gap:16px;box-shadow:0 5px 18px rgba(20,50,50,.06);cursor:pointer;font:inherit}.flex-region-card:hover,.flex-category-card:hover{transform:translateY(-1px)}.flex-region-icon,.flex-category-card>span{font-size:32px;min-width:44px;text-align:center}.flex-region-card b,.flex-category-card b{display:block;font-size:20px;color:#26343d}.flex-region-card small,.flex-category-card small{display:block;color:#7b878d;margin-top:5px;line-height:1.45}.flex-region-card strong,.flex-category-card strong{margin-left:auto;font-size:32px;color:#87939a}.flex-back{border:0;background:transparent;color:#087f73;font-size:17px;font-weight:800;padding:4px 0 14px;cursor:pointer}.flex-results{display:grid;gap:18px}.flex-results .restaurant{margin:0}.flex-results .restaurant-img{width:100%;height:300px;object-fit:cover}.flex-info-card{background:#fff;border:1px solid #e1e6e8;border-radius:22px;padding:22px;display:flex;gap:18px;box-shadow:0 5px 18px rgba(20,50,50,.06)}.flex-info-icon{font-size:40px}.flex-info-card h3{margin:0;font-size:23px;color:#26343d}.flex-info-card p{color:#687780;line-height:1.7}.flex-info-card .map-btn{display:inline-block;margin-top:12px}.flex-category-grid,.flex-region-grid{grid-template-columns:1fr}@media(min-width:760px){.flex-region-grid{grid-template-columns:1fr 1fr}.flex-category-grid{grid-template-columns:1fr 1fr}.flex-results .restaurant-img{height:360px}}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* 首次載入後確保分頁文字正確，但不主動改變目前頁面。 */
document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('.tab span').forEach(s=>{if(s.textContent.trim()==='自由')s.textContent='彈性'}));
})();
