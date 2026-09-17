/* 2026-09-17 UI patch: rename 自由 -> 彈性, add restaurant sub-categories, Day 1 dinner details */
(function(){
  const originalRender=window.render;
  state.foodCat=state.foodCat||'全部';
  const day1Restaurants=[
    {region:'福岡酒店附近',cat:'咸食',name:'博多もつ鍋 前田屋',jp:'博多もつ鍋 前田屋',desc:'牛雜鍋｜適合多人分享的博多代表性鍋物。',address:'福岡市博多区博多駅前3-23-17',hours:'晚餐：17:00–24:00（實際時間以店家公告為準）',phone:'092-260-7273',img:'https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg'},
    {region:'福岡酒店附近',cat:'咸食',name:'水たき 長野',jp:'博多名代 水たき長野',desc:'清爽系水炊き｜老字號博多水炊き，適合想吃較清爽鍋物的選擇。',address:'福岡市博多区対馬小路1-6',hours:'12:00–22:00；週日休',phone:'092-281-2200',img:'https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg'}
  ];
  function catOf(r){const c=(r.cat||'').toLowerCase();if(/酒|sake|craft/.test(c))return '酒類';if(/咖啡|甜品|可麗|水果派|咖啡豆/.test(c))return '咖啡甜品';return '咸食'}
  function safe(s){return String(s||'').replace(/[&<>\"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[m]))}
  function card(r){return `<article class="restaurant"><img class="restaurant-img" src="${r.img}" alt="${safe(r.name)} 食物照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>${safe(r.name)}</h3><div class="jp">${safe(r.jp)}</div></div><span class="category">${safe(r.cat)}</span></div><p class="desc">${safe(r.desc)}</p><div class="address">📍 ${safe(r.address)}</div>${r.hours?`<div class="hours">🕐 ${safe(r.hours)}</div>`:''}${r.phone?`<div class="hours">☎️ ${safe(r.phone)}</div>`:''}<div class="restaurant-actions"><a class="map-btn" href="${maps(r.name,r.address)}" target="_blank" rel="noopener">Google Maps</a><a class="web-btn" href="https://www.google.com/search?q=${encodeURIComponent(r.name+' 福岡') }" target="_blank" rel="noopener">搜尋店家</a></div></div></article>`}
  function tabsRename(){document.querySelectorAll('.tab').forEach(b=>{const s=b.querySelector('span');if(s&&s.textContent.trim()==='自由')s.textContent='彈性'})}
  function freeView(){
    const q=(state.query||'').trim().toLowerCase(),region=state.region||'全部';
    const shops=shopping.filter(r=>(region==='全部'||r.region===region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));
    const all=restaurants.filter(r=>(region==='全部'||r.region===region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));
    const rr=state.foodCat==='全部'?all:all.filter(r=>catOf(r)===state.foodCat),cats=['全部','咸食','咖啡甜品','酒類'];
    return `<div class="notice"><b>🎟️ 彈性</b><br>不是固定行程，是「臨時想去／想食」的候選庫。先選地區，再按餐廳類型快速篩選。</div><input class="faq-search" value="${safe(state.query||'')}" oninput="state.query=this.value;render()" placeholder="搜尋餐廳、咖啡、甜品、酒類…"><div class="filter-row">${regions.map(r=>`<button class="filter ${region===r?'active':''}" onclick="state.region='${safe(r)}';render()">${safe(r)}</button>`).join('')}</div><div class="section-title"><h2>🛍️ 購物</h2><span class="small">${shops.length}個</span></div><div class="cards">${shops.length?shops.map(card).join(''):`<div class="empty">此地區暫無購物選項</div>`}</div><div class="section-title"><h2>🍴 餐廳</h2><span class="small">${rr.length}個</span></div><div class="sub-filter-row">${cats.map(c=>`<button class="sub-filter ${state.foodCat===c?'active':''}" onclick="state.foodCat='${c}';render()">${c}</button>`).join('')}</div><div class="cards">${rr.length?rr.map(card).join(''):`<div class="empty">找不到符合條件的餐廳</div>`}</div>`;
  }
  function addDay1Dinner(){
    if(state.tab!=='itinerary'||state.day!==1)return;
    const target=[...document.querySelectorAll('.event')].find(e=>e.querySelector('h3')&&e.querySelector('h3').textContent.includes('天神晚餐選擇'));
    if(!target)return;
    const holder=document.createElement('div');holder.className='day1-dinner';holder.innerHTML=`<div class="day1-label">🍲 晚餐餐廳資訊</div>${day1Restaurants.map(card).join('')}`;target.querySelector('.event-card').appendChild(holder);
  }
  function renderPatched(){if(state.tab==='free'){originalRender();document.querySelector('.content').innerHTML=freeView()}else{originalRender();addDay1Dinner()}tabsRename()}
  window.render=renderPatched;
  const style=document.createElement('style');style.textContent='.sub-filter-row{display:flex;gap:8px;overflow-x:auto;padding:2px 0 12px;scrollbar-width:none}.sub-filter-row::-webkit-scrollbar{display:none}.sub-filter{white-space:nowrap;border:1px solid #dfe4e2;background:white;border-radius:999px;padding:8px 15px;font-size:13px;color:#667177;cursor:pointer}.sub-filter.active{background:#087f73;color:#fff;border-color:#087f73}.day1-dinner{margin-top:12px}.day1-label{font-weight:800;color:#a55516;background:#fff4dc;border-radius:10px;padding:8px 10px;margin-bottom:10px}.day1-dinner .restaurant{margin-bottom:10px}.day1-dinner .restaurant-img{height:150px}.hours{font-size:12px;line-height:1.55;color:#68747a;background:#f7f8f6;border-radius:10px;padding:7px 8px;margin-top:6px}';document.head.appendChild(style);
  setTimeout(()=>{renderPatched()},0);
})();
