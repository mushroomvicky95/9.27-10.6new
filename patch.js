/* Day 1 dinner layout fix: keep restaurant cards as a full-width content-column block */
(function(){
'use strict';
const dinner=`<div class="day1-dinner-fixed"><div class="day1-label">🍲 19:30｜天神晚餐選擇</div>
<article class="restaurant day1-card"><img class="restaurant-img" src="https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg" alt="博多もつ鍋 前田屋 博多店 牛雜鍋" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>博多もつ鍋 前田屋 博多店</h3><div class="jp">博多もつ鍋 前田屋 博多店</div></div><span class="category">咸食／牛雜鍋</span></div><p class="desc">博多代表性牛雜鍋，主打國產和牛小腸，可選味噌、醬油或辛味鍋。</p><div class="address">📍 福岡市博多区博多駅前3-26-5 Mビル1F</div><div class="hours">🕐 11:00–14:30（LO 14:00）／17:00–24:00（食事LO 23:00・飲物LO 23:30）</div><div class="hours">☎️ 092-482-8558</div><div class="restaurant-actions"><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('博多もつ鍋 前田屋 博多店 福岡市博多区博多駅前3-26-5 Mビル1F')}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></div></article>
<article class="restaurant day1-card"><img class="restaurant-img" src="https://images.miil.me/j/493d697e-1f76-11eb-aa8d-06f1f1f9355e.jpg" alt="水たき 長野 水炊き" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>水たき 長野</h3><div class="jp">博多名代 水たき長野</div></div><span class="category">咸食／水炊き</span></div><p class="desc">博多老字號水炊き，雞湯、雞肉及蔬菜組合，屬較清爽的鍋物選擇。</p><div class="address">📍 福岡市博多区対馬小路1-6</div><div class="hours">🕐 12:00–22:00；週日休</div><div class="hours">☎️ 092-281-2200</div><div class="restaurant-actions"><a class="map-btn" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('水たき 長野 福岡市博多区対馬小路1-6')}" target="_blank" rel="noopener noreferrer">📍 Google Maps 導航</a></div></div></article></div>`;
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
@media(max-width:560px){.day1-dinner-fixed{grid-column:2}.day1-card .restaurant-img{height:165px}.day1-card .restaurant-title{display:block}.day1-card .category{display:inline-block;margin-top:7px}}
`;
document.head.appendChild(style);
function rename(){document.querySelectorAll('.tab span').forEach(s=>{if(s.textContent.trim()==='自由')s.textContent='彈性'})}
function findDinnerEvent(){
  const nodes=[...document.querySelectorAll('body *')];
  const t=nodes.find(e=>e.children.length===0&&e.textContent.trim()==='天神晚餐選擇');
  return t ? t.closest('.event') : null;
}
function placeFixed(event){
  if(!event)return;
  let box=event.querySelector('.day1-dinner-fixed');
  const content=event.querySelector('.event-card');
  if(box && box.parentElement!==event){
    box.remove();
    box=null;
  }
  if(!box){
    event.insertAdjacentHTML('beforeend',dinner);
    box=event.querySelector('.day1-dinner-fixed');
  }
  if(box){
    box.style.gridColumn='2';
    box.style.width='100%';
    box.style.minWidth='0';
  }
}
function inject(){
  rename();
  const event=findDinnerEvent();
  if(event)placeFixed(event);
}
function run(){try{inject()}catch(e){console.error('Day1 dinner patch',e)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
new MutationObserver(run).observe(document.documentElement,{childList:true,subtree:true});
setInterval(run,1000);
})();
