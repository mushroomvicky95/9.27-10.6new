/* Remove itinerary attractions from the Flex page to avoid duplicated choices. */
(function(){
'use strict';
const names=['LaLaport 福岡','GUNDAM SIDE-F','GUNDAM PARK','霧島神話之里公園','霧島神話の里公園','霧島神宮','仙巖園','仙厳園','櫻島遊客中心','桜島ビジターセンター','湯之平展望所','有村熔岩展望所','有村溶岩展望所','知覽武家屋敷','知覧武家屋敷','知覽武家屋敷庭園','知覧武家屋敷庭園','砂むし會館 砂樂','砂むし会館 砂楽','池田湖','平川動物公園','天文館通','天文館むじゃき本店','AMU PLAZA','アミュプラザ鹿児島','太宰府天滿宮','太宰府天満宮','柳川遊船','柳川川下り','糸島海邊','桜井二見ヶ浦'];
function norm(s){return (s||'').replace(/\s+/g,'').toLowerCase()}
function flex(){return !!document.querySelector('.tab.active span') && norm(document.querySelector('.tab.active span').textContent)==='彈性'}
function run(){if(!flex()) return;document.querySelectorAll('.restaurant,.spot-card,.region-block').forEach(el=>{if(el.classList.contains('region-block')) return;const t=norm(el.textContent);if(names.some(n=>t.includes(norm(n))))el.classList.add('flex-itinerary-duplicate-hidden')});document.querySelectorAll('.region-block').forEach(r=>{const visible=[...r.querySelectorAll('.restaurant,.spot-card')].some(x=>!x.classList.contains('flex-itinerary-duplicate-hidden')&&getComputedStyle(x).display!=='none');if(!visible)r.classList.add('flex-itinerary-duplicate-hidden')})}
const css=document.createElement('style');css.textContent='.flex-itinerary-duplicate-hidden{display:none!important}';document.head.appendChild(css);run();new MutationObserver(run).observe(document.body,{childList:true,subtree:true});setInterval(run,1200);
})();
