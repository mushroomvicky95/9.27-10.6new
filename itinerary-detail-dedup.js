/* 單一景點詳細卡：移除同一景點在時間軸上重複顯示的標題／副標題，只保留一張完整詳細卡。 */
(function(){
'use strict';
const names=['LaLaport 福岡','GUNDAM SIDE-F','霧島神話之里公園','霧島神宮','仙巖園','櫻島遊客中心','湯之平展望所','有村熔岩展望所','知覽武家屋敷庭園','砂むし會館 砂樂','池田湖','平川動物公園','天文館通','AMU PLAZA 鹿兒島','太宰府天滿宮','柳川遊船','糸島海邊'];
function norm(s){return String(s||'').replace(/[\s　]/g,'').toLowerCase()}
function activeItinerary(){const t=document.querySelector('.tab.active span');return !t||!['彈性','自由'].includes((t.textContent||'').trim())}
function compactCards(){return [...document.querySelectorAll('.spot-card')].filter(x=>getComputedStyle(x).display!=='none')}
function hasCompactFor(name){const n=norm(name);return compactCards().some(c=>norm(c.textContent).includes(n)||(n==='霧島神話之里公園'&&norm(c.textContent).includes('霧島神話の里公園')))}
function findLongBlock(el){let p=el.parentElement;for(let i=0;i<8&&p;i++,p=p.parentElement){const t=p.textContent||'';if(t.includes('營業 / 開放時間')&&t.includes('地址')&&t.length<2600)return p}return null}
function hideLegacyBlock(){document.querySelectorAll('body *').forEach(el=>{if(el.children.length>0)return;const txt=(el.textContent||'').trim();if(txt!=='營業 / 開放時間'&&txt!=='地址')return;const block=findLongBlock(el);if(!block||block.dataset.dedupDone)return;const bt=norm(block.textContent);const name=names.find(n=>bt.includes(norm(n)));if(!name||!hasCompactFor(name))return;block.dataset.dedupDone='1';block.classList.add('old-spot-detail-hidden')})}
function cleanEvent(ev){const detail=ev.querySelector('.itinerary-spot-detail');if(!detail)return;ev.classList.add('has-single-spot-detail');const detailName=norm((detail.querySelector('h4')||{}).textContent||'');const card=detail.closest('.event-card')||ev;[...card.children].forEach(ch=>{if(ch===detail||ch.contains(detail))return;const text=norm(ch.textContent);if(!text)return;if((detailName&&text.includes(detailName))||text.length<100&&/展望台|遊覽設施|免費參拜|庭園|櫻島|錦江灣|貓神社|火山|博物館|動物|白熊|購物|神社/.test(text)){ch.classList.add('duplicate-event-summary-hidden')}})}
function run(){if(!activeItinerary())return;hideLegacyBlock();document.querySelectorAll('.event').forEach(cleanEvent)}
const css=document.createElement('style');css.textContent=`
.old-spot-detail-hidden{display:none!important}
.event.has-single-spot-detail .duplicate-event-summary-hidden{display:none!important}
.event.has-single-spot-detail .itinerary-spot-detail{margin-top:10px;background:#fff;border:1px solid #dfe5e3;border-radius:22px;padding:22px;box-shadow:0 8px 24px rgba(20,50,50,.06)}
.event.has-single-spot-detail .spot-detail-head h4{font-size:24px;line-height:1.35;color:#26343d}
.event.has-single-spot-detail .spot-detail-jp{font-size:16px;color:#7b878d;margin-top:5px}
.event.has-single-spot-detail .spot-detail-cat{font-size:14px;padding:8px 12px}
.event.has-single-spot-detail .spot-detail-desc{font-size:16px;line-height:1.75;color:#687780;margin:12px 0}
.event.has-single-spot-detail .spot-detail-row{font-size:15px;line-height:1.65;padding:12px 14px;border-radius:14px;margin-top:8px}
.event.has-single-spot-detail .spot-detail-actions{margin-top:12px}
.event.has-single-spot-detail .spot-detail-actions a{border-radius:14px;padding:12px;font-size:15px;font-weight:700}
.event.has-single-spot-detail .spot-detail-note{font-size:13px;padding:11px 13px;border-radius:14px;margin-top:10px}
@media(max-width:759px){.event.has-single-spot-detail .itinerary-spot-detail{padding:16px;border-radius:18px}.event.has-single-spot-detail .spot-detail-head{flex-direction:column}.event.has-single-spot-detail .spot-detail-cat{align-self:flex-start}}
`;document.head.appendChild(css);
run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});setInterval(run,1000);
})();
