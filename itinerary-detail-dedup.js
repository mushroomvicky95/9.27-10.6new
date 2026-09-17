/* Keep the compact attraction cards; hide the older duplicated long-form spot blocks. */
(function(){
'use strict';
const names=['LaLaport 福岡','GUNDAM SIDE-F','霧島神話之里公園','霧島神話之里公園','霧島神宮','仙巖園','櫻島遊客中心','湯之平展望所','有村熔岩展望所','知覽武家屋敷庭園','砂むし會館 砂樂','池田湖','平川動物公園','天文館通','AMU PLAZA 鹿兒島','太宰府天滿宮','柳川遊船','糸島海邊'];
function norm(s){return (s||'').replace(/[\s　]/g,'').toLowerCase()}
function activeItinerary(){const t=document.querySelector('.tab.active span');return !t||!['彈性','自由'].includes((t.textContent||'').trim())}
function compactCards(){return [...document.querySelectorAll('.spot-card')].filter(x=>getComputedStyle(x).display!=='none')}
function hasCompactFor(name){const n=norm(name);return compactCards().some(c=>norm(c.textContent).includes(n)|| (n==='霧島神話之里公園'&&norm(c.textContent).includes('霧島神話の里公園')))}
function findLongBlock(el){let p=el.parentElement;for(let i=0;i<7&&p;i++,p=p.parentElement){const t=p.textContent||'';if(t.includes('營業 / 開放時間')&&t.includes('地址')&&t.length<2200)return p}return null}
function run(){if(!activeItinerary())return;document.querySelectorAll('body *').forEach(el=>{if(el.children.length>0)return;const txt=(el.textContent||'').trim();if(txt!=='營業 / 開放時間'&&txt!=='地址')return;const block=findLongBlock(el);if(!block||block.dataset.dedupDone)return;const bt=norm(block.textContent);const name=names.find(n=>bt.includes(norm(n)));if(!name||!hasCompactFor(name))return;block.dataset.dedupDone='1';block.classList.add('old-spot-detail-hidden')})}
const css=document.createElement('style');css.textContent='.old-spot-detail-hidden{display:none!important}';document.head.appendChild(css);run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});setInterval(run,1000);
})();
