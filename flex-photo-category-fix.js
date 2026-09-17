/* 彈性頁指定店家照片／分類修正 */
(function(){
'use strict';
const fixes={
  'Sabataro':{
    img:'https://blog.kakaocdn.net/dna/oIfsZ/btsKuAbkcEd/AAAAAAAAAAAAAAAAAAAAAGz3wpREwi15iYuOkWXVPFub6iS6c3jdmMhF51EytjBh/img.jpg',
    alt:'Sabataro さばたろう 鯖料理與土鍋飯照片'
  },
  'LIBROM Craft Sake Brewery':{
    img:'https://librom.jp/cdn/shop/articles/3a93fe924e75eaa669432b82beb39623_300x.jpg?v=1673399202',
    alt:'LIBROM Craft Sake Brewery 酒粕料理照片'
  },
  '百薬':{
    img:'https://tblg.k-img.com/restaurant/images/Rvw/213205/640x640_rect_4be626ee13dc36538e511c35d29f9766.jpg',
    alt:'百薬 日本酒照片'
  },
  '百薬「福岡の日本酒専門バー」':{
    img:'https://tblg.k-img.com/restaurant/images/Rvw/213205/640x640_rect_4be626ee13dc36538e511c35d29f9766.jpg',
    alt:'百薬 日本酒照片'
  }
};
function norm(s){return String(s||'').replace(/[\s　]/g,'').toLowerCase()}
function apply(){
  document.querySelectorAll('.flex-results .restaurant').forEach(card=>{
    const title=card.querySelector('.restaurant-title h3');
    if(!title)return;
    const key=Object.keys(fixes).find(k=>norm(title.textContent).includes(norm(k))||norm(k).includes(norm(title.textContent)));
    if(!key)return;
    const f=fixes[key],img=card.querySelector('.restaurant-img');
    if(img){img.src=f.img;img.alt=f.alt;img.removeAttribute('srcset');img.loading='lazy'}
    if(key==='Sabataro'){
      const cat=card.querySelector('.category');
      if(cat)cat.textContent='咸食類';
    }
    if(key==='LIBROM Craft Sake Brewery'){
      const cat=card.querySelector('.category');
      if(cat)cat.textContent='酒類';
    }
    if(key==='百薬' || key==='百薬「福岡の日本酒専門バー」'){
      const cat=card.querySelector('.category');
      if(cat)cat.textContent='酒類';
    }
  });
  document.querySelectorAll('.flex-results .restaurant').forEach(card=>{
    const title=card.querySelector('.restaurant-title h3');
    if(!title)return;
    if(norm(title.textContent).includes(norm('Little Stand Daimyo store'))||norm(title.textContent).includes(norm('リトルスタンド大名店'))){
      const cat=card.querySelector('.category');
      if(cat)cat.textContent='咖啡甜點類';
    }
  });
}
apply();
new MutationObserver(()=>setTimeout(apply,30)).observe(document.body,{childList:true,subtree:true});
setInterval(apply,1200);
})();
