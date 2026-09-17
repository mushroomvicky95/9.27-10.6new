/* 彈性頁：櫻島新增桜島カフェ SAKURAJIMA CAFE */
(function(){
'use strict';
const item={
  region:'櫻島',
  names:['桜島カフェ SAKURAJIMA CAFE','桜島カフェ'],
  jp:'桜島カフェ SAKURAJIMA CAFE',
  cat:'咖啡甜點類',
  desc:'位於國民宿舎レインボー桜島／桜島マグマ温泉園區內的海景花園咖啡店，距離桜島港渡輪碼頭步行約5分鐘，可一邊看錦江灣與櫻島景色，一邊享用在地食材甜點與飲品。',
  menu:'桜島ソフト（牛奶／抹茶／MIX）、抹茶拿鐵、桜島小みかん汁、手作三明治、桜島Craft Beer等',
  address:'〒891-1419 鹿児島県鹿児島市桜島横山町1722-16 国民宿舎レインボー桜島 桜島マグマ温泉',
  hours:'10:00–16:00；無休（出發前確認當日公告）',
  phone:'099-293-2323',
  img:'https://images.openai.com/static-rsc-1/xVFAk4ttv_W0tHrMkn7X9Bd-bvc57ndGXstE7tHyiCzrBtTXBZ6KAOVp2UJ29rvyQ1qjanlUCX6RX__3Wb3eyCJ4Locfem7FTyHGc1ixebKYX_94Mhk3Xe7iyXw34tEHXVeKIMnfGEfnM_J3cWxMjJ44XygI68RTJZNvr27eYHw',
  note:'2026年資料：10:00–16:00；桜島ソフト為代表甜點，另有抹茶拿鐵與桜島小みかん汁。'
};
window.__flexExtraRestaurants=Array.isArray(window.__flexExtraRestaurants)?window.__flexExtraRestaurants:[];
if(!window.__flexExtraRestaurants.some(r=>r&&r.names&&r.names.includes('桜島カフェ SAKURAJIMA CAFE'))){
  window.__flexExtraRestaurants.push(item);
}
})();
