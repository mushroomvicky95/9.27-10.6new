const days=[
{n:1,date:'27/9（日）',title:'抵達福岡',sub:'香港／台北會合 → 天神入住',events:[['17:00','6人從香港出發，抵達福岡機場','航班 UO638'],['18:00','2人從台北出發，抵達福岡機場，8人會合',''],['18:30','的士前往天神市區酒店','機場往天神約20–30分鐘；毋須租車'],['20:30','已預約晚餐｜魚ト肴いとおかし（Itookashi）','已預約20:30。福岡春吉海鮮居酒屋，主打九州鮮魚、活魚現場處理、刺身盛合及季節海鮮料理。'],['住宿','Richmond Hotel Tenjin Nishidori','第1晚']]},
{n:2,date:'28/9（一）',title:'天神早午餐＋LaLaport＋GUNDAM',sub:'自由活動 → 購物 → 夜間投影表演',events:[['早上','酒店周邊自由活動','散步、補眠、臨時購物或咖啡'],['12:30','天神早午餐','NOOICE tenjin／いくら博多店／manu coffee 大名店'],['14:30','的士前往 LaLaport 福岡','約20–25分鐘'],['15:00–17:30','LaLaport 福岡＋GUNDAM SIDE-F','購物、RX-93ff ν鋼彈、GUNDAM PARK'],['17:30–18:00','商場內咖啡休息','自由安排'],['19:00–19:30','GUNDAM 夜間投影／燈光表演','實際演出時間以當日公告為準'],['20:00','返回天神','約20–25分鐘'],['20:30','天神晚餐','自由分頁按地區選擇'],['住宿','Richmond Hotel Tenjin Nishidori','第2晚']]},
{n:3,date:'29/9（二）',title:'福岡 → 鹿兒島中央 → 霧島溫泉',sub:'九州新幹線 → 租車 → 酒店會席',events:[['11:00','酒店退房',''],['11:00–13:00','天神早午餐＋自由活動','やりうどん福岡店'],['13:15','博多站搭九州新幹線','さくら753号'],['14:01–15:42','博多 → 鹿児島中央','約100分鐘'],['15:45','鹿児島中央站辦理租車','建議2部7–8人座廂型車'],['16:30','前往霧島観光ホテル','約60分鐘'],['17:30','入住霧島観光ホテル','溫泉放鬆'],['19:00','酒店內會席料理',''],['住宿','霧島観光ホテル（AUBEGIO）','1晚']]},
{n:4,date:'30/9（三）',title:'霧島神話之里＋霧島神宮＋仙巖園',sub:'展望台 → 神宮 → 錦江灣庭園',events:[['早上','酒店早餐，慢慢收拾',''],['11:00','酒店退房',''],['11:30–12:30','霧島神話之里公園','展望台、遊覽設施'],['12:45','霧島神宮參拜','免費參拜'],['13:15','前往仙巖園','車程約1小時'],['14:15–16:00','仙巖園','庭園、櫻島／錦江灣、貓神社、薩摩切子'],['16:30','入住東横INN鹿児島中央駅東口','Day 4 晚～Day 7 晚連續住宿；〒890-0053 鹿児島県鹿児島市中央町26-25'],['20:30','已預約晚餐｜熟成焼肉 Gyudo! 本店','已預約20:30。天文館的熟成和牛燒肉專門店；主打自家牧場「さつま福永牛」，可選10種盛、6種盛、4種盛及熟成肉單點。'],['住宿','東横INN鹿児島中央駅東口','Day 4 晚']]},
{n:5,date:'1/10（四）',title:'櫻島自駕一日遊',sub:'渡輪帶車 → 火山展望 → 足湯',events:[['10:30','自駕前往櫻島渡輪碼頭','約15分鐘'],['11:00','櫻島渡輪','可連人帶車上船，航程約15分鐘'],['11:30–12:00','櫻島遊客中心','火山地質與噴發歷史'],['12:15–13:00','湯之平展望所','360度櫻島、錦江灣及鹿兒島市景'],['13:15–14:15','櫻島午餐','櫻島市場食堂／お食事処海月'],['14:30–15:15','有村熔岩展望所','熔岩遊步道與火山景觀'],['15:30–16:15','長腳湯（足湯）','免費足湯休息'],['16:45','渡輪返回鹿兒島',''],['19:00','鹿兒島晚餐選擇','鹿兒島屋台村／めっけもん／新港食堂'],['住宿','東横INN鹿児島中央駅東口','Day 5 晚']]},
{n:6,date:'2/10（五）',title:'南薩摩：知覽＋指宿砂浴',sub:'武家屋敷 → 古民家午餐 → 砂蒸溫泉',events:[['10:30','出發前往知覽','約1小時'],['11:30–12:30','知覽武家屋敷庭園','7個公開庭園、傳統生垣街景'],['12:30–14:00','Café Cochi 午餐','百年古民家洋食、和牛牛筋咖哩'],['14:15','前往指宿','約30分鐘'],['15:00–16:30','砂むし會館 砂樂','天然砂蒸溫泉'],['16:45','池田湖／開聞岳遠望（二選一）','視體力彈性安排'],['19:30','鹿兒島晚餐選擇','大衆酒場かどや／とりくら／豚とろ'],['住宿','東横INN鹿児島中央駅東口','Day 6 晚']]},
{n:7,date:'3/10（六）',title:'精品咖啡＋平川動物公園＋天文館',sub:'輕鬆上午 → 動物園 → 白熊刨冰 → 採購',events:[['10:30','精品咖啡','danken COFFEE／可否三昧／Voila Coffee／くじらcafé'],['12:00–13:00','午餐','うなぎの末よし'],['13:30–16:00','平川動物公園','約130種900點動物、樹熊、長頸鹿等'],['16:30–18:00','天文館通＋白熊刨冰','天文館むじゃき本店'],['18:00','AMU PLAZA／天文館伴手禮',''],['18:45','晚餐選擇','ざぼんラーメン／いちにいさん／Gyudo!'],['21:00','整理行李，準備翌日還車',''],['住宿','東横INN鹿児島中央駅東口','Day 7 晚']]},
{n:8,date:'4/10（日）',title:'鹿兒島 → 福岡｜6人主行程完結＋福岡市區行程',sub:'09:30退房 → 鹿兒島機場 → 13:00福岡 → 博多午餐 → 十日惠比須神社 → 櫛田神社／川端 → Alpen FUKUOKA → GOOD MARKET KYUSHU → MaxValu → 博多站取行李 → 東橫INN博多西中洲 → 春吉宵夜',events:[['09:30–13:00','酒店退房 → 鹿兒島機場 → 抵達福岡','09:30辦理退房；從東横INN鹿児島中央站西口步行至鹿兒島中央站東口東21番乘車處，搭空港連絡巴士直行約40分鐘前往鹿兒島機場，再搭國內線航班前往福岡，13:00抵達。鹿兒島中央ターミナル：鹿児島中央駅東口東21番乘車處；鹿兒島機場：〒899-6404 鹿児島県霧島市溝辺町麓822；福岡空港：〒812-0003 福岡県福岡市博多区大字下臼井778-1。'],['13:00–13:55','福岡機場 → 博多站＋寄放行李','13:00抵達福岡機場後領取行李，前往地下2樓福岡空港站，搭福岡市地下鐵空港線直達博多站，約5分鐘、2站；在站內或KITTE博多B1寄放大件行李。博多站：〒812-0012 福岡県福岡市博多区博多駅中央街1-1。'],['14:00–15:00','午餐：すし酒場 さしす KITTE博多店','博多站直結、KITTE博多B1F-14。約28席，現場候位；招牌炙燒壽司、海鮮軍艦與各式握壽司。地址：〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F-14；電話092-477-3950。'],['15:00–15:20','博多站 → 十日惠比須神社','從博多站搭JR鹿兒島本線或福北ゆたか線至吉塚站，1站約2–3分鐘；從吉塚站西口沿東公園步道步行約5分鐘抵達神社。'],['15:20–16:00','【新增景點】十日惠比須神社','位於東公園綠意中的十日惠比須神社，主祀事代主命與大國主命。可從容參拜、求籤及授與御守。地址：〒812-0045 福岡県福岡市博多区東公園7-1；社務所約9:00–17:00。'],['16:00–16:20','十日惠比須神社 → 上川端商店街／櫛田神社','從神社步行約4分鐘至地下鐵千代縣廳口站，搭乘地下鐵箱崎線至中洲川端站，約2站、3分鐘；從5號出口直接進入上川端商店街。'],['16:20–17:05','櫛田神社 ＆ 上川端商店街','沿上川端商店街南下，中段直接步入博多總鎮守櫛田神社；欣賞博多祇園山笠、千年神木，再逛傳統老街與博多伴手禮店。'],['17:10–18:15','Alpen FUKUOKA（博多運河城南館1–3F）','走過天橋直達Canal City南館，逛Alpen旗艦店，採買露營戶外裝備、運動服飾及高爾夫用品。地址：福岡県福岡市博多区住吉1丁目2；營業至21:00。'],['18:15–18:45','GOOD MARKET KYUSHU','步行至キャナルシティ博多イーストビル2F，挑選九州各縣特色伴手禮，包括地方茶葉、調味料、乾麵與菓子等。地址：〒812-0038 福岡県福岡市博多区祇園町9-2 キャナルシティ博多 イーストビル2F。'],['18:45–19:15','博多運河城（南館1F 鋼彈基地／自由逛）','前往South Building 1F THE GUNDAM BASE FUKUOKA或其他品牌專櫃完成採購。'],['19:15–19:40','MaxValu Express 博多祇園店 補給','運河城步行約5分鐘抵達，採買水果、飲料與隔日早餐補給。地址：〒812-0038 福岡県福岡市博多区祇園町7-20。'],['19:40–20:05','超市 → 博多站取回大行李','超市門口步行至地下鐵櫛田神社前站，搭乘地下鐵七隈線直達博多站，約1站、2分鐘，於博多站寄物櫃取回大件行李。'],['20:05–20:35','博多站 → 東橫INN博多西中洲 Check-in','取回行李後前往酒店，辦理入住、放妥行李並稍作整理。地址：〒810-0002 福岡県福岡市中央区西中洲1-16。'],['20:45–21:00','步行前往春吉','從飯店出發，步行約3–5分鐘穿過三光橋步道，前往春吉巷弄。'],['21:00–22:30','晚餐／宵夜：炉ばた 三光橋','隱身於春吉巷弄的炭火爐端燒，享用當令烤魚、現烤海鮮貝類與熱食。地址：〒810-0003 福岡県福岡市中央区春吉3-22-17。'],['住宿','Toyoko INN Hakata Nishi-nakasu','〒810-0002 福岡県福岡市中央区西中洲1-16']]},
{n:9,date:'5/10',title:'太宰府・表參道甜品・市區宵夜',sub:'西鐵電車 → 太宰府 → 甜品巡禮 → 天滿宮 → 天開稻荷社 → 天神晚餐 → 中洲生蠔宵夜',events:[['10/5 10:20–11:15','天神 → 太宰府｜西鐵電車','建議由西鐵福岡（天神）站出發，經西鐵二日市轉太宰府線；天神→太宰府約30分鐘。10/5為星期一，出發前用西鐵當日時刻表確認班次。今天不開車，以電車＋步行為主。'],
['11:30–12:45','午餐：拉麵 魁源（網頁資料對應：らーめん おいげん）太宰府店','位於太宰府站出站左側，官方資料寫「太宰府駅から徒歩1分」。招牌包括海老香る醤油らぁ麺、豚骨らぁ麺及炭火豚重セット。'],
['12:45–13:05','表參道甜品①｜天山 太宰府店','必吃鬼瓦最中；粒餡、白餡、八女茶餡可選。官方資料：太宰府市宰府2-7-12，10:00–17:00，太宰府站步行約3分鐘。'],
['13:05–13:25','表參道甜品②｜カタラーナ専門店 AMARILLO','九州初的卡塔拉娜專門店；季節千層卡塔拉娜、6種塔卡塔拉娜、卡塔拉娜奶昔。地址宰府2-6-20，11:00–17:00。'],
['13:25–13:45','表參道甜品③｜梅枝餅 かさの家','百年老舖梅枝餅；安排現烤一份或外帶伴手禮。地址宰府2-7-26，店舖營業時間依當日公告。'],
['13:45–14:15','表參道甜品④｜人氣布丁二選一','A：天山太宰府ぷりん店（宰府3-1-28，10:00–17:00）／B：小鳥居茶房（宰府3-2-14，11:00–17:00，招牌生プリンアイス）。建議現場只選一家，避免14:15參拜時間被壓縮。'],
['14:15–15:25','太宰府天滿宮參拜','穿過太鼓橋與心字池後參拜；10月開門時間為6:30、閉門19:00。重點：御神牛、樓門、本殿／期間設施，以及御守。'],
['15:25–16:30','天開稻荷社＋奧之院','由太宰府天滿宮北神苑方向步行上山；官方境內圖標示天開稻荷社步行約6分鐘，之後再往奧之院。保留約65分鐘，比原先10–15分鐘更充裕。'],
['16:30–17:30','表參道伴手禮 → 太宰府站 → 返回天神','沿參道回站，買梅枝餅、天山和菓子及其他伴手禮；17:30左右搭西鐵回天神。'],
['18:30–20:30','晚餐｜待定','晚餐尚未決定；當天依行程與食量再選擇，並保留21:00中洲生蠔宵夜。'],
['21:00–23:00','宵夜：ヤングオイスター Young Oyster｜中洲生蠔吧','安排生食生蠔拼盤、烤生蠔及飲品。官方資料：福岡市博多区中洲2-8-19，18:00–翌3:00，LO約2:30；中洲川端站步行約3分鐘。10/5是星期一，正常營業。'] ]},
{n:10,date:'6/10（二）',title:'福岡最後一天｜已預訂午餐＋燒肉',sub:'食堂 ひと煮たち 12:00 午餐 → 炭火焼肉バル AGITO HIRAO 16:00',events:[['12:00–13:00','已預訂午餐｜食堂 ひと煮たち','已預訂12:00。主打現煮魚料理及炊飯；預約時間及餐點以店家確認資訊為準。'],['16:00','已預訂｜炭火焼肉バル AGITO HIRAO','已預訂16:00。炭火燒肉，主打和牛及海鮮等料理；預約時間以店家確認資訊為準。']]}
];
const spots=[
['福岡LaLaport附近','LaLaport 福岡','大型購物商場，Day 2 下午主要購物地點。','10:00–21:00（餐廳／美食廣場11:00–22:00）','〒812-8627 福岡県福岡市博多区那珂6丁目23-1','city'],
['福岡LaLaport附近','GUNDAM SIDE-F','LaLaport 4F 的鋼彈專區，有RX-93ff ν鋼彈相關展示、商品及組裝空間。','10:00–21:00','福岡県福岡市博多区那珂6丁目23-1 ららぽーと福岡4F','city'],
['霧島','霧島神話之里公園','利用霧島自然地形打造的休閒公園，可乘遊覽設施上展望區，天氣好可望向霧島連山、櫻島及開聞岳。','9:00–17:00；園區設施遇惡劣天氣可能調整','〒899-4201 鹿児島県霧島市霧島田口2583-22','garden'],
['霧島','霧島神宮','歷史悠久的神宮，主祭神為瓊瓊杵尊；行程中作為參拜景點。','年中無休；參拜時間依當日神社公告','〒899-4201 鹿児島県霧島市霧島田口2608-5','japan'],
['鹿兒島市區','仙巖園','島津家別邸與大名庭園，可看櫻島與錦江灣，園內亦有御殿、尚古集成館、貓神社、餐廳及商店。','9:00–17:00；最終入場16:30','〒892-0871 鹿児島県鹿児島市吉野町9700-1','garden'],
['櫻島','櫻島遊客中心','火山迷你博物館，介紹櫻島噴火歷史、自然及火山活動。','9:00–17:00；年中無休；免費','〒891-1419 鹿児島県鹿児島市桜島横山町1722-29','ocean'],
['櫻島','湯之平展望所','櫻島一般遊客可到達的最高地點，標高373m，360度眺望錦江灣、鹿兒島市及霧島連山。','展望所自由參觀；売店9:00–17:00','〒891-1418 鹿児島県鹿児島市桜島小池町1025','ocean'],
['櫻島','有村熔岩展望所','位於1946年大爆發形成的熔岩原，可沿約1km熔岩遊步道觀賞櫻島與錦江灣。','戶外展望區；全天候可前往，惟天候及火山狀況可能影響使用','〒891-1545 鹿児島県鹿児島市有村町952','ocean'],
['知覽／指宿','知覽武家屋敷庭園群','「薩摩的小京都」，公開7座名勝庭園，保留整齊生垣與武家集落景觀。','9:00–17:00；年中無休','〒897-0302 鹿児島県南九州市知覧町郡13731-1','garden'],
['知覽／指宿','砂むし會館 砂樂','指宿代表性的天然砂蒸溫泉，可體驗海岸天然砂浴，再返回館內沖洗及泡湯。','8:30–21:00；最終受付20:00；平日12:00–13:00砂蒸受付休止','〒891-0406 鹿児島県指宿市湯の浜5丁目25番18号','ocean'],
['鹿兒島市區','平川動物公園','約130種900點動物的動物園，可看樹熊、白虎、長頸鹿等，園內也有足湯及遊樂設施。','9:00–17:00；最終入園16:30；休園12/29–1/1','鹿児島市平川町5669-1','garden'],
['鹿兒島市區','天文館むじゃき本店','白熊刨冰發源店之一，Day 7 下午安排白熊甜品。','11:00–19:00；料理LO18:15、白熊／飲品LO18:30；不定休','鹿児島市千日町5-8 天文館むじゃきビル1F','dessert'],
['福岡延伸','太宰府天滿宮','祭祀菅原道真的神社，從西鐵太宰府站步行約5分鐘。','春分日～秋分日前一日6:00開門；其餘6:30開門；9–11月19:00閉門','〒818-0117 福岡県太宰府市宰府4丁目7-1','japan'],
['福岡延伸','柳川遊船','福岡南部水鄉體驗，可安排半日遊；船班與營業時間依船公司及季節而變。','依各船公司當日班次','福岡県柳川市內各遊船乘船場','ocean'],
['福岡延伸','糸島海邊','適合自駕的海邊咖啡、海景與散步選項；各店營業時間不同。','依各店家','福岡県糸島市沿海地區','ocean'],
['福岡延伸','拉麵 魁源（らーめん おいげん）太宰府店','你提供的「拉麵 魁源」名稱，網頁資料對應到太宰府站左側的「らーめん おいげん」。海老香る醤油らぁ麺、豚骨らぁ麺、炭火豚重是官方列出的主要品項。','10:00–16:00；湯頭售罄可能提早結束','〒818-0117 福岡県太宰府市宰府1-10-32','food','https://ramen-oigen.jp/images/convert/ramen-oigenjp/20240531144913.jpg/image.webp'],
['福岡延伸','天山 太宰府店','太宰府參道和菓子店；鬼瓦最中可選粒餡、白餡、八女茶餡，另有季節限定草莓大福最中。','10:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府2-7-12','dessert','https://arne.media/uploads/2020/11/A67C1B9F-0ADA-40C5-8535-D36FC2BE581E-675x675.jpeg'],
['福岡延伸','カタラーナ専門店 AMARILLO','九州初的卡塔拉娜專門店；可吃季節千層卡塔拉娜、6種塔卡塔拉娜及卡塔拉娜奶昔。','11:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府2-6-20','dessert','https://arne.media/uploads/2022/10/D6558F38-C6F7-4992-8207-B721B6D658FF-675x506.jpeg'],
['福岡延伸','梅枝餅 かさの家','太宰府參道老舖梅枝餅店；安排現烤一份或外帶禮盒。','店舖依當日公告','〒818-0117 福岡県太宰府市宰府2-7-26','dessert','https://tblg.k-img.com/restaurant/images/Rvw/235106/640x640_rect_367dab63e2225c716b639526811bb4b8.jpg'],
['福岡延伸','天山太宰府ぷりん店','太宰府站附近布丁店；八女茶等口味可作甜品巡禮二選一。','10:00–17:00','〒818-0117 福岡県太宰府市宰府3-1-28','dessert','https://tblg.k-img.com/restaurant/images/Rvw/331165/640x640_rect_8ecd3688f9636f28c6e97dd5cf23b120.jpg'],
['福岡延伸','小鳥居茶房','參道巷弄古民家咖啡；招牌生プリンアイス，另有抹茶口味。','11:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府3-2-14','dessert','https://tblg.k-img.com/restaurant/images/Rvw/212117/1a8ff25286bc7c35539908398e8f2e24.jpg'],
['福岡延伸','天開稻荷社','太宰府天滿宮北神苑的稻荷社；官方介紹其為九州最古老的稻荷社之一，後方可繼續前往石造的奧之院。','依太宰府天滿宮境內參拜安排','福岡県太宰府市宰府4丁目7-1 天開稲荷社','japan'],
['福岡延伸','10/5市區晚餐選擇','清爽暖胃方向：博多華味鳥（水炊き）、元祖博多めんたい重（明太子飯）、或牛腸鍋。為21:00中洲生蠔宵夜保留食量。','18:30–20:30','天神／西中洲一帶；依當日選擇','food'],
['福岡延伸','ヤングオイスター Young Oyster','中洲生蠔吧；生食生蠔、烤生蠔、白酒及調酒。10/5星期一營業至翌3:00，時間彈性高。','18:00–翌3:00；料理LO約2:30','〒810-0801 福岡県福岡市博多区中洲2-8-19 1F','food','https://tblg.k-img.com/restaurant/images/Rvw/233155/640x640_rect_e584a581e25fe0a3ebf26c69a2603c52.jpg'],
];
const restaurants=[
{region:'福岡酒店附近',cat:'晚餐',name:'博多もつ鍋 前田屋',jp:'博多もつ鍋 前田屋',desc:'福岡代表性牛雜鍋；適合多人分享。',address:'福岡市博多区博多駅前3-23-17',hours:'營業時間請以店家當日公告為準',img:'https://cdn-ak.f.st-hatena.com/images/fotolife/v/v2133v/20191017/20191017212647.jpg'},
{region:'福岡酒店附近',cat:'晚餐',name:'水たき 長野',jp:'水たき 長野',desc:'老字號博多水炊き，白濁雞湯配雞肉及蔬菜。',address:'福岡県福岡市博多区対馬小路1-6',hours:'12:00–22:00；週日休',img:'https://stat.ameba.jp/user_images/20250318/07/tokyotravelguide2020/97/e2/j/o1080143915555775401.jpg'},
{region:'福岡酒店附近',cat:'早餐／定食',name:'Sabataro',jp:'さばたろう',desc:'主打鯖魚早餐定食，適合想吃日式早餐時臨時前往。',address:'福岡県福岡市中央区赤坂1-5-11',hours:'早餐時段；建議預約／出發前確認',img:'https://blog.kakaocdn.net/dna/S1bwe/btsKtQ68pHY/AAAAAAAAAAAAAAAAAAAAALQlFtVLYYN583xgEQSaRMmyOtKaNIKansnrbzg11mSV/img.jpg'},
{region:'福岡天神／大名',cat:'咖啡',name:'Blue Bottle Coffee Fukuoka Tenjin Cafe',jp:'ブルーボトルコーヒー福岡天神カフェ',desc:'警固神社社務所大樓內的精品咖啡店；可作為天神散步中途休息點。',address:'〒810-0001 福岡県福岡市中央区天神2-2-20 警固神社社務所ビル1F',hours:'每日 8:00–20:00',img:'https://www.lemon8-app.com/seo/image?index=0&item_id=7332786439232848389&sign=beeb0b859383bec1a8e6d2c1ae6e244b'},
{region:'福岡天神／大名',cat:'咖啡豆／烘焙',name:'Nishinaya coffee Daimyo',jp:'ニシナ屋珈琲 大名1-3-26niR焙煎所',desc:'咖啡豆專門店，可先選豆再選烘焙；店內有大量豆種展示。你原先提供的資料標示選豆後約等30分鐘烘烤。',address:'福岡県福岡市中央区大名1-3-26',hours:'10:00–18:00',img:'https://tblg.k-img.com/restaurant/images/Rvw/155791/640x640_rect_155791129.jpg'},
{region:'福岡天神／大名',cat:'咖啡／甜品',name:'Little Stand Daimyo store',jp:'リトルスタンド大名店',desc:'小型巷弄咖啡 stand，招牌包括Bari-Chai、Bari-Hojicha、咖啡及鬆餅類。',address:'福岡県福岡市中央区大名1-3-5 ARKCUBE101',hours:'目前資料多列9:00–18:00；出發前建議確認',img:'https://media.triple.guide/triple-cms/c_limit%2Cf_auto%2Ch_1024%2Cw_1024/09a79f39-a4e1-418e-ae43-dbe50f764629.jpeg'},
{region:'福岡天神／大名',cat:'甜品',name:'いちごや cafe TANNAL 福岡大名店',jp:'cafe TANNAL',desc:'糸島磯本農園直營，以あまおう草莓甜品、芭菲、千層及可麗餅為主。',address:'福岡県福岡市中央区大名1-3-14 花形館A-1',hours:'一般9:00–20:00；週五／六可至23:00（以店家最新公告為準）',img:'https://arne.media/uploads/2025/01/sub5-3-scaled-e1736823060815.jpg'},
{region:'福岡天神／大名',cat:'甜品／可麗餅',name:'RIZ CAFE CREPE RIZ 大名店',jp:'CAFE CREPE RIZ 大名店',desc:'北海道米粉製作的無麩質可麗餅，適合臨時甜點。',address:'福岡県福岡市中央区大名1-1-16 宮田ビル101',hours:'10:00–20:00；外帶收單約19:45',img:'https://img.retty.me/img_repo/l/01/27924582.jpg'},
{region:'福岡天神／大名',cat:'水果派／甜品',name:"Qu'il fait bon Fukuoka",jp:'キル フェ ボン福岡',desc:'水果派專門店，可作為天神甜品選擇。',address:'福岡県福岡市中央区天神2-4-11 1F',hours:'11:00–20:00',img:'https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2023/07/27/39r1/uHx0zNqtXL.heic?quality=70.0&width=1080'},
{region:'福岡天神／大名',cat:'雞肉燒肉／沙瓦',name:'Toriboshi Daimyo',jp:'とりぼし大名店',desc:'主打品牌雞肉燒肉，亦有水果沙瓦及多款小菜。',address:'福岡県福岡市中央区大名1-9-18 越智ビル',hours:'17:00–24:00（當日可能調整）',img:'https://arne.media/uploads/2021/10/toriboshi.jpg'},
{region:'福岡天神／大名',cat:'牛肉飯',name:'Red Rock Hakata Daimyo',jp:'レッドロック 博多大名店',desc:'招牌為高堆疊的Roast Beef Bowl，配蛋黃及醬汁。',address:'福岡県福岡市中央区大名1-12-26 ビエント今川336 101号',hours:'約11:30–21:30；以店家公告為準',img:'https://tblg.k-img.com/restaurant/images/Rvw/60018/640x640_rect_60018114.jpg'},
{region:'福岡天神／大名',cat:'牛カツ',name:'牛かつもと村 福岡天神西通り店',jp:'牛かつもと村 福岡天神西通り店',desc:'牛カツ定食，可自行以桌上鐵板調整熟度。',address:'福岡県福岡市中央区大名1-14-5',hours:'11:00–22:00',img:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/26/a7/a3/gyukatsu-with-a-draft.jpg?h=1200&s=1&w=1200'},
{region:'福岡LaLaport附近',cat:'咖啡／咖啡豆',name:'Honey Coffee 那珂本店',jp:'ハニー珈琲 那珂本店／焙煎工場・配送センター',desc:'LaLaport 附近的咖啡專門店；店內有barista及試飲，可選咖啡豆。',address:'福岡県福岡市博多区那珂6-1-37',hours:'10:00–17:00；週二休',img:'https://tblg.k-img.com/restaurant/images/Rvw/149994/640x640_rect_149994179.jpg'},
{region:'福岡市區／博多',cat:'牡蠣／日本酒',name:'牡蠣と日本酒 Oyster & Sake',jp:'牡蠣と日本酒',desc:'生蠔與日本酒配搭，適合晚間小酌。',address:'福岡県福岡市博多区住吉1-6-8 Oak Villa Bureau Sumiyoshi riva 201',hours:'17:00–23:00（以店家公告為準）',img:'https://rimage.gnst.jp/rest/img/41pn3t6t0000/s_0n5g.jpg'},
{region:'福岡市區／博多',cat:'Craft Sake／酒吧',name:'LIBROM Craft Sake Brewery',jp:'リブロム クラフト サケ ブルワリー',desc:'市區內小型釀造所＋PUB，可喝自家craft sake並配麴／酒粕料理。',address:'福岡県福岡市中央区高砂1-21-27 ボンフル高砂103',hours:'官方資料：月–木16:00–23:00、金16:00–24:00、六12:00–24:00、日16:00–23:00',img:'https://www.azuchi-touyou.com/wp-content/uploads/2024/04/librom_pub.jpg'},
{region:'福岡市區／博多',cat:'日本酒吧',name:'百薬',jp:'日本酒専門テイスティングバー 百薬',desc:'日本酒專門 tasting bar，可選多款日本酒試飲；適合晚上臨時小酌。',address:'福岡県福岡市中央区春吉3-16-41',hours:'約17:00–深夜；以店家最新公告為準',img:'https://tblg.k-img.com/restaurant/images/Rvw/213205/640x640_rect_4be626ee13dc36538e511c35d29f9766.jpg'}
];
const shopping=[
{region:'福岡天神／大名',cat:'醬油／調味品',name:'上久醬油',jp:'ジョーキュウ醤油 小売館',desc:'福岡在地醬油與調味品採購點，適合買回家作手信。',address:'〒810-0041 福岡市中央区大名1丁目12-15',hours:'10:00–18:00；日／祝休',img:'https://jokyu.co.jp/wp-content/uploads/2023/03/shop.jpg'},
{region:'福岡天神／大名',cat:'咖啡豆／現場烘焙',name:'Nishinaya coffee Daimyo',jp:'ニシナ屋珈琲 大名1-3-26niR焙煎所',desc:'先選豆，再決定烘焙深淺；適合買新鮮咖啡豆回家。',address:'福岡県福岡市中央区大名1-3-26',hours:'10:00–18:00',img:'https://tblg.k-img.com/restaurant/images/Rvw/155791/640x640_rect_155791129.jpg'}
];
const checklist=['護照（效期 >6月）','旅行保險＋旅遊不便險','實體信用卡 VISA／MASTER＋掛失電話','電子機票收據','現金及日圓零錢','行動電源≤2個','轉換插頭／多孔插座','個人藥品','防曬乳、帽子、太陽眼鏡、摺疊傘、薄外套','租車／駕照／保險文件','長者常用物品與飲水'];
const faqs=[['自由分頁是什麼？','不是固定行程，而是「臨時想去／想食」的候選庫；購物與餐廳分開，到附近才決定。'],['餐廳照片是不是該店實拍？','本版會優先使用網頁搜尋確認屬於該店的料理／飲品照片；本次已重新替換多家餐廳照片，並在卡片上標示「該店實際餐點／飲品照片」。'],['景點資料會顯示什麼？','每個行程景點會顯示簡介、營業／開放時間、地址，以及Google Maps按鈕。'],['Day 2 LaLaport幾點？','LaLaport一般物販10:00–21:00，餐廳／美食廣場11:00–22:00；GUNDAM SIDE-F 10:00–21:00。'],['砂樂幾點？','官方目前列8:30開館、20:00最終受付、21:00閉館；平日12:00–13:00砂蒸受付休止。']];
let state={tab:'itinerary',day:null,region:'全部',query:''};
const regions=['全部','福岡酒店附近','福岡天神／大名','福岡LaLaport附近','福岡市區／博多','鹿兒島市區','霧島','櫻島','知覽／指宿','福岡延伸'];
const IMG={city:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=82',garden:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=82',ocean:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=82',japan:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1000&q=82',dessert:'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=82'};
function maps(n,a){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(n+' '+a)}
function header(){return `<header class="hero"><h1>鹿兒島家族自駕遊</h1><p>2026/09/27 – 10/06 ・ 福岡＋鹿兒島</p><div class="meta"><span class="pill">8人主行程 9/27–10/04</span><span class="pill">福岡自由行 10/04–10/06</span></div></header>`}
function tabs(){return `<nav class="tabs">${[['itinerary','📅','行程'],['free','🎟️','自由'],['check','📋','注意'],['flight','✈️','航班'],['faq','💬','問答']].map(x=>`<button class="tab ${state.tab===x[0]?'active':''}" onclick="setTab('${x[0]}')"><div class="ico">${x[1]}</div><span>${x[2]}</span></button>`).join('')}</nav>`}
function spotInfo(s){return `<div class="info-card spot-detail">${s[6]?`<img class="spot-photo" src="${s[6]}" alt="${s[1]} 真實照片" loading="lazy">`:''}<h3>📍 ${s[1]}</h3><p>${s[2]}</p><div class="spot-meta"><div><b>營業／開放時間</b><br>${s[3]}</div><div><b>地址</b><br>${s[4]}</div></div><a class="map-btn" href="${maps(s[1],s[4])}" target="_blank" rel="noopener">Google Maps 導航</a></div>`}
function findSpot(title){return spots.find(s=>title.includes(s[1])||s[1].includes(title))}
function isTravelEvent(e){
  const t=String(e[1]||'');
  if(/餐|午餐|晚餐|早餐|購物|自由活動|自由行|休息|入住|住宿|參拜|展望|商店街|動物公園|公園|仙巖園|神宮|足湯|砂樂|咖啡|甜品|午休/.test(t))return false;
  return /前往|搭|抵達|辦理登機|租車|還車|返回|回博多站|回鹿兒島|的士|機場|→|酒店退房|出發/.test(t);
}
function eventTimeParts(s){
  const m=String(s||'').match(/(\d{1,2}):(\d{2})(?:\s*[–-]\s*(\d{1,2}):(\d{2}))?/);
  if(!m)return null;
  const start=Number(m[1])*60+Number(m[2]);
  const end=m[3]?Number(m[3])*60+Number(m[4]):start;
  return {start,end};
}
function fmtTimeRange(items){
  const ps=items.map(e=>eventTimeParts(e[0])).filter(Boolean);
  if(!ps.length)return items[0]?.[0]||'';
  const start=Math.min(...ps.map(x=>x.start)), end=Math.max(...ps.map(x=>x.end));
  const f=n=>String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');
  return start===end?f(start):f(start)+'–'+f(end);
}
function groupItineraryEvents(events){
  const out=[];
  let travelBuf=[];
  const flushTravel=()=>{
    if(!travelBuf.length)return;
    if(travelBuf.length===1){out.push(travelBuf[0]);travelBuf=[];return;}
    const first=travelBuf[0], last=travelBuf[travelBuf.length-1];
    const title=[first[1],last[1]].filter(Boolean).join(' → ');
    let desc=travelBuf.map(e=>e[1]+(e[2]?'：'+e[2]:'')).join(' ｜ ');
    // Day 8 首段只保留簡潔的流程摘要，不把每個中間步驟的說明全部塞進卡片。
    if(/酒店退房/.test(String(first[1]||'')) && /福岡機場/.test(String(last[1]||''))){
      desc='09:30酒店退房 → 10:00–10:40前往鹿兒島機場 → 12:00鹿兒島飛福岡 → 12:50抵達福岡，6人主行程完結，餘下旅伴接續福岡自由行。';
    }
    out.push([fmtTimeRange(travelBuf),title,desc]);
    travelBuf=[];
  };
  const mergeTravelWithDestination=(destination)=>{
    if(!travelBuf.length)return false;
    const lastTravel=String(travelBuf[travelBuf.length-1][1]||'');
    if(/酒店退房|退房/.test(lastTravel))return false;
    const title=String(destination[1]||'');
    return !!findSpot(title)||/入住|住宿/.test(title);
  };
  for(const e of events){
    if(isTravelEvent(e)){
      travelBuf.push(e);
      continue;
    }
    if(mergeTravelWithDestination(e)){
      const merged=[...travelBuf,e];
      const first=merged[0], last=merged[merged.length-1];
      const title=[first[1],last[1]].filter(Boolean).join(' → ');
      const desc=merged.map(x=>x[1]+(x[2]?'：'+x[2]:'')).join(' ｜ ');
      out.push([fmtTimeRange(merged),title,desc]);
      travelBuf=[];
    }else{
      flushTravel();
      out.push(e);
    }
  }
  flushTravel();
  return out;
}
const day8RichEvents=[
['09:30–13:00','酒店退房 → 鹿兒島機場 → 抵達福岡','09:30辦理退房，從東横INN鹿児島中央站西口步行至鹿兒島中央站東口東21番乘車處，搭乘空港連絡巴士前往鹿兒島機場（直行班約40分鐘）。搭乘國內線航班前往福岡，13:00抵達福岡機場。','交通流程','鹿兒島中央ターミナル：鹿児島中央駅東口東21番乘車處｜鹿兒島機場：〒899-6404 鹿児島県霧島市溝辺町麓822｜福岡空港：〒812-0003 福岡県福岡市博多区大字下臼井778-1','空港連絡巴士直行班約40分鐘',null,null,'"🚶 09:30 辦理退房後，從東横INN鹿児島中央站西口步行前往鹿兒島中央站東口東21番乘車處。\n🚌 抵達東21番乘車處後，搭乘空港連絡巴士前往鹿兒島機場；依你提供的安排，搭乘直行班，車程約40分鐘。\n✈️ 抵達鹿兒島機場後辦理國內線報到、托運／領取行李及安檢，再搭乘國內線航班前往福岡，目標13:00抵達福岡空港。\n📍 鹿兒島中央ターミナル：鹿児島中央駅東口東21番乘車處；鹿兒島機場：〒899-6404 鹿児島県霧島市溝辺町麓822；福岡空港：〒812-0003 福岡県福岡市博多区大字下臼井778-1"'],
['13:00–13:55','福岡機場 → 博多站＋寄放行李','13:00抵達福岡機場後領取行李，前往地下2樓地下鐵福岡空港站。搭乘福岡市地下鐵空港線直達博多站，車程約5分鐘、2站；抵達後在站內或KITTE博多B1寄物櫃寄放大件行李。','交通＋行李','博多站：〒812-0012 福岡県福岡市博多区博多駅中央街1-1','地下鐵空港線直達，約5分鐘',null,null,'"🚶 13:00抵達福岡機場後，先領取行李，再前往地下2樓地下鐵福岡空港站。\n🚇 搭乘福岡市地下鐵空港線，福岡空港站→博多站為直達，不需轉車；車程約5分鐘、2站。\n🧳 抵達博多站後，先處理大件行李寄放，可使用博多站站內或KITTE博多B1寄物櫃，再步行前往午餐地點。\n📍 博多站：〒812-0012 福岡県福岡市博多区博多駅中央街1-1"'],
['14:00–15:00','午餐：すし酒場 さしす KITTE博多店','與博多站地下街相通，不用出站即可抵達。招牌炙燒壽司、海鮮軍艦與各式握壽司；全店約28席，現場候位入座。','餐廳｜壽司','〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F-14','11:00–23:00；料理L.O.22:00／飲品L.O.22:30','092-477-3950','https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkljHmpDqAGig05OJrDjP43-Vak02t-hoQqgn2G-9G9hcYt-psyLZXLxU3lX8tyzf1_MdqpZRaiA4pHwxsrd6QLZloa48TQiGTuoaObOBH9N0gL_Pjzqi46QpFq98ewDwjKD6hTxw=w1333-h1000-k-no','"🚶 從博多站站內依指標前往KITTE博多；午餐店位於KITTE博多B1F，與博多站地下街相通，不需要再次搭乘交通工具。寄放大行李後直接步行到店即可。"'],
['15:00–15:20','博多站 → 十日惠比須神社','從博多站搭乘JR鹿兒島本線或福北ゆたか線至吉塚站，僅1站、約2–3分鐘；從吉塚站西口出站，沿東公園步道步行約5分鐘抵達神社。','交通','吉塚站西口 → 十日惠比須神社：〒812-0045 福岡県福岡市博多区東公園7-1','JR約2–3分鐘＋步行約5分鐘',null,null,'"🚆 15:00從博多站搭乘JR鹿兒島本線或福北ゆたか線，往吉塚方向，至吉塚站僅1站，車程約2–3分鐘。\n🚶 抵達吉塚站後由西口出站，沿東公園方向步行約5分鐘前往十日惠比須神社。\n📍 目的地：〒812-0045 福岡県福岡市博多区東公園7-1"'],
['15:20–16:00','【新增景點】十日惠比須神社','位於東公園的綠意中，主祀事代主命與大國主命，為福岡著名的商業繁盛、開運與良緣神社。此時段社務所開放中，可從容參拜、求籤與授與御守。','景點｜神社','〒812-0045 福岡県福岡市博多区東公園7-1','社務所 9:00–17:00',null,'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlFh8aG5VDTP3Umt0mnXk0ZWwBFfsW0qr0HlfRznxxI5zl5zConh_b3SBOW3T11VUOtrN3R9Vazo5jm0_Q0FPOEhMAYU3NFD6rNTo3f71r8E2LXIqYu1aMCiwpxJnZBBClbzHFX0N95G4uZ=w1092-h1000-k-no','"🚶 由吉塚站西口出站後，沿東公園步道前進，約5分鐘抵達十日惠比須神社；此段不需要再搭乘巴士或地下鐵。"'],
['16:00–16:20','十日惠比須神社 → 上川端商店街／櫛田神社','從神社步行約4分鐘至地下鐵千代縣廳口站，搭乘地下鐵箱崎線至中洲川端站，約2站、3分鐘；從中洲川端站5號出口直接進入上川端商店街。','交通','中洲川端站 → 上川端商店街','約4分鐘步行＋3分鐘地下鐵',null,null,'"🚶 16:00離開十日惠比須神社，步行約4分鐘至地下鐵千代縣廳口站。\n🚇 由千代縣廳口站搭乘福岡市地下鐵箱崎線，往中洲川端／姪浜方向，至中洲川端站約2站、約3分鐘。\n🚶 抵達中洲川端站後由5號出口出站，可直接銜接上川端商店街。"'],
['16:20–17:05','櫛田神社 ＆ 上川端商店街','沿Kawabata Shopping Arcade南下，中段直接步入博多總鎮守櫛田神社；欣賞巨大的常設博多祇園飾山笠與千年神木，並漫步傳統老街及博多伴手禮店。','景點＋購物','櫛田神社：〒812-0026 福岡県福岡市博多区上川端町1-41｜上川端商店街：〒812-0026 福岡県福岡市博多区上川端町6-135','櫛田神社社務約9:00–17:00；商店街各店不同',null,'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk1IJg-5wUEe41NUt6cVcRTqr-VjsmuXgRLw3YCvEruySVGbHC8WlmdPd9rxFPSUnzRIqG1WptzaDTk77Zu-MWEUzLNwng2fHKNmKgEQHH-sY5Te6M7oPhAWjxTaf2MuBmkQtrYUQ=w1333-h1000-k-no','"🚶 從中洲川端站5號出口進入上川端商店街後，全程以步行為主。\n🚶 沿Kawabata Shopping Arcade南下，中段直接步入櫛田神社；商店街與神社位置相連，不需要再次搭乘交通工具。\n📍 櫛田神社：〒812-0026 福岡県福岡市博多区上川端町1-41；上川端商店街：〒812-0026 福岡県福岡市博多区上川端町6-135"'],
['17:10–18:15','Alpen FUKUOKA（博多運河城南館1–3F）','走過天橋直達Canal City南館，逛Alpen旗艦店，採買露營戶外裝備、運動服飾及高爾夫用品。','購物｜運動／戶外用品','福岡県福岡市博多区住吉1丁目2','營業至21:00',null,null,'"🚶 17:05離開櫛田神社／上川端商店街後，直接步行前往博多運河城。\n🌉 沿商店街南端往天橋方向前進，過橋後即可進入Canal City南館；本段不需要搭乘地下鐵或巴士。"'],
['18:15–18:45','GOOD MARKET KYUSHU','步行至キャナルシティ博多イーストビル2F，挑選九州各縣特色伴手禮，包括地方茶葉、調味料、精選乾麵與菓子等。','購物｜九州伴手禮','〒812-0038 福岡県福岡市博多区祇園町9-2 キャナルシティ博多 イーストビル2F','依商場當日營業時間',null,'https://maps.gstatic.com/tactile/pane/default_geocode-1x.png','"🚶 18:15從Alpen FUKUOKA離開後，留在Canal City館內步行前往East Building。\n🏬 由南館往East Building方向步行，前往キャナルシティ博多イーストビル2F的GOOD MARKET KYUSHU；不需要重新出館搭車。"'],
['18:45–19:15','博多運河城（南館1F 鋼彈基地／自由逛）','前往South Building 1F THE GUNDAM BASE FUKUOKA或其他品牌專櫃完成採購。','購物','〒812-0018 福岡県福岡市博多区住吉1丁目2','商店多數10:00–21:00',null,null,'"🚶 18:45從GOOD MARKET KYUSHU離開後，直接在Canal City館內步行返回South Building。\n🛍️ 前往South Building 1F的THE GUNDAM BASE FUKUOKA或其他品牌專櫃；全程不需要搭乘交通工具。"'],
['19:15–19:40','MaxValu Express 博多祇園店 補給','運河城步行約5分鐘抵達，24小時營業，採買水果、飲料與隔日早餐補給。','超市補給','〒812-0038 福岡県福岡市博多区祇園町7-20','24小時營業','092-263-4741','https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ-hfAAOutnJmY6WbMOpgJmqiPnlmfpAmnawBcgD6aUqfRlUGfFDB2HR8Jow9gH_HxgOH5aoc3Xwys9Oid3eLGt-nFCuj4CAj7enwGdxTX5dCirwUTERIQFEZ5unHzKjZpziQkvA=w1333-h1000-k-no','"🚶 19:15離開Canal City後，步行前往MaxValu Express博多祇園店，依你提供的安排約5分鐘。\n🛒 抵達後快速採買水果、飲料、零食及隔日早餐補給，控制在19:40前完成。"'],
['19:40–20:05','超市 → 博多站取回大行李','超市門口步行約2分鐘至地下鐵櫛田神社前站，搭乘地下鐵七隈線直達博多站，僅1站、約2分鐘，於博多站寄物櫃取回大件行李。','交通＋行李','博多站：〒812-0012 福岡県福岡市博多区博多駅中央街1-1','約1站、2分鐘',null,null,'"🚶 19:40離開MaxValu後，步行約2分鐘前往地下鐵櫛田神社前站。\n🚇 搭乘福岡市地下鐵七隈線，櫛田神社前站→博多站直達，僅1站、車程約2分鐘。\n🧳 抵達博多站後前往寄物櫃區，取回早上寄放的大件行李，再前往住宿飯店。"'],
['20:05–20:35','博多站 → 東橫INN博多西中洲 Check-in','在博多站搭乘地下鐵七隈線（往橋本方向）至天神南站，約3分鐘、2站；從5號或6號出口步行約4–5分鐘抵達飯店，辦理入住、放妥行李並稍作整理。','住宿','〒810-0002 福岡県福岡市中央区西中洲1-16','Check-in 15:00／Check-out 10:00；早餐6:30–9:00','092-739-1045','https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlnKU1af584tjEgEUgld4xTYrqhd1ICXXg5knZkX6al6D3ZogPPDT4d33EJtyDYGcfQ8S1LBUAUVKTUjAU6trtME-IgPDB-3iB0am5ZLACnM5v6ur9fACxVAqYYm93hUmXSFp_0yWhLJw=w1776-h1000-k-no','"🚇 20:05從博多站搭乘福岡市地下鐵七隈線，往橋本方向，博多站→天神南站約2站、車程約3分鐘。\n🚶 抵達天神南站後，依站內指標前往5號或6號出口；出站後步行約4–5分鐘抵達東横INN博多西中洲。\n🧳 辦理Check-in後放下大件行李與購物品，再稍作整理。"'],
['20:45–21:00','步行前往春吉','從飯店出發，步行約3–5分鐘穿過三光橋步道，前往春吉巷弄。','交通','春吉／三光橋一帶','約3–5分鐘',null,null,'"🚶 20:45離開飯店後直接步行前往春吉巷弄。\n🚶 沿三光橋步道前進，約3–5分鐘即可抵達炉ばた 三光橋；此段不需要搭乘地下鐵或計程車。"'],
['21:00–22:30','晚餐／宵夜：炉ばた 三光橋','隱身於春吉巷弄的炭火爐端燒，享用當令烤魚、現烤海鮮貝類與熱食；建議事先預約吧台座位。','餐廳｜爐端燒','〒810-0003 福岡県福岡市中央区春吉3-22-17','17:00–24:00','092-712-7373','https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlJWK-msSDJRUXtW3kbxWOFtfgubTvBjnywsjU2nUlQ_tNopWVY2ZycaglclZIeIJmSHSL0pEoaDa8K4PwbxsIHrDQXi_viEipNPJRFL2Y5JV4DQ5-kgZcpTsTnANZo9aRLKViPFw=w2109-h1000-k-no','"🚶 21:00前從東横INN博多西中洲出發，步行前往春吉3丁目的炉ばた 三光橋。\n🚶 沿三光橋方向步行約3–5分鐘即可抵達，晚餐結束後同樣可步行返回飯店。"']
];
function day8Card(e){
 const [time,title,desc,tag,address,hours,phone,img,transport]=e;
 // 只有真正的兩間餐廳顯示料理照片；景點／商店照片不再被誤判成餐廳卡。
 const isRestaurant=/すし酒場 さしす|Sushi Sakaba Sashisu|炉ばた 三光橋|Robata Sankobashi/.test(String(title));
 const photo=img&&isRestaurant
   ? '<div class="day8-food-photo"><div class="photo-badge">📷 該店料理實拍</div><img class="restaurant-img" src="'+img+'" alt="'+title+' 該店料理照片" loading="lazy"></div>'
   : '';
 return '<div class="event"><div class="dot"></div><div class="event-card"><div class="time">'+time+'</div><h3>'+title+'</h3><p class="day8-main-desc">'+desc+'</p><div class="day8-detail-card"><div class="day8-tag">'+tag+'</div>'+photo+'<div><b>📍 地址</b><br>'+address+'</div>'+(hours?'<div><b>🕐 營業／時間</b><br>'+hours+'</div>':'')+(phone?'<div><b>☎️ 電話</b><br>'+phone+'</div>':'')+(transport?'<div class="day8-transport"><b>🚶 交通安排</b><br>'+transport+'</div>':'')+'<a class="map-btn" href="'+maps(title,address)+'" target="_blank" rel="noopener">📍 Google Maps 導航</a></div></div></div>';
}

const day8Style=document.createElement('style');day8Style.textContent='.day8-detail-card{background:#f7f8f6;border:1px solid #e3ebe8;border-radius:14px;padding:13px;margin-top:10px;line-height:1.55;font-size:13px;color:#59666c}.day8-detail-card>div{margin-top:7px}.day8-tag{display:inline-flex!important;margin-top:0!important;background:#eaf8f5;color:#087f73;border-radius:999px;padding:5px 9px;font-weight:800}.day8-transport{background:#eef7f5;padding:8px;border-radius:10px;border-left:3px solid #087f73}.day8-main-desc{margin-bottom:8px}.day8-food-photo{margin-top:10px;border:1px solid #dfe9e6;border-radius:14px;overflow:hidden;background:#fff}.day8-food-photo .photo-badge{padding:8px 10px}.day8-food-photo .restaurant-img{width:100%;height:185px;object-fit:cover;display:block}@media(max-width:700px){.day8-detail-card{font-size:11px;padding:10px}.day8-food-photo .restaurant-img{height:170px}}';document.head.appendChild(day8Style);

function hotelDetailCard(){
return '<article class="embedded-hotel-card"><div class="embedded-hotel-head"><div><div class="embedded-hotel-badge">🏨 Day 4 晚～Day 7 晚</div><h3>東横INN鹿児島中央駅東口</h3><div class="embedded-hotel-jp">Toyoko Inn Kagoshima-chuo-eki Higashi-guchi</div></div><span>住宿</span></div><p>鹿兒島中央站東口的連續住宿飯店，Day 4 晚入住至 Day 7 晚退房。</p><div class="embedded-hotel-grid"><div><b>📍 地址</b><br>〒890-0053 鹿児島県鹿児島市中央町26-25</div><div><b>☎️ 電話</b><br>099-813-1045</div><div><b>🕐 入住／退房</b><br>Check-in 15:00／Check-out 10:00</div><div><b>🍳 免費早餐</b><br>自助形式 6:30–9:00</div><div><b>🚉 電車</b><br>JR鹿児島中央站東出口步行約2分鐘</div><div><b>🚗 自駕</b><br>九州自動車道鹿児島IC約10分鐘</div><div><b>📶 飯店設施</b><br>Wi-Fi、整體衛浴、睡衣、自助入住機、無障礙房間B</div><div><b>🅿️ 立體停車場</b><br>60台／先到先得／¥1,000・1晚；寬1.85m、深5m、高2m、重2.3t</div><div><b>🅿️ 平面停車場</b><br>2台／需預約／¥1,000・1晚</div><div><b>ℹ️ 停車超時</b><br>¥100／小時</div></div><div class="embedded-hotel-actions"><a class="trip-map-btn" target="_blank" rel="noopener" href="https://maps.app.goo.gl/8vViU2qwJbVZ5kXp7?g_st=ic">📍 Google Maps 導航</a><a class="trip-web-btn" target="_blank" rel="noopener" href="https://www.toyoko-inn.com/search/detail/00202/">官方飯店資料</a></div></article>';
}

function itinerary(){if(state.day){const d=days.find(x=>x.n===state.day);if(d.n===8){return `<div class="detail-head"><button class="back" onclick="state.day=null;render()">‹</button><div><h2>Day ${d.n}｜${d.title}</h2><div class="date">${d.date} ・ ${d.sub}</div></div></div><div class="timeline">${day8RichEvents.map((e,i)=>{const x=[...e];x.unshift(i+1);return day8Card(x.slice(1));}).join('')}</div>`}return `<div class="detail-head"><button class="back" onclick="state.day=null;render()">‹</button><div><h2>Day ${d.n}｜${d.title}</h2><div class="date">${d.date} ・ ${d.sub}</div></div></div><div class="timeline">${groupItineraryEvents(d.events).map((e,i)=>{const s=findSpot(e[1]);return `<div class="event"><div class="dot">${i+1}</div><div class="event-card"><div class="time">${e[0]}</div><h3>${e[1]}</h3><p>${e[2]||''}</p>${s&&d.n!==6?spotInfo(s):''}${d.n>=4&&d.n<=7&&(/東横INN鹿児島中央駅東口/.test(e[1])||e[1]==='住宿')?hotelDetailCard():''}</div></div>`}).join('')}</div>`}return `<div class="notice">行程景點已補上「營業／開放時間＋地址＋簡介＋Google Maps」。點 Day 卡片查看。</div><div class="day-grid">${days.map(d=>`<article class="day-card" onclick="state.day=${d.n};render()"><div class="day-no"><strong>${d.n}</strong><span>DAY</span></div><div class="day-main"><h3>${d.title}</h3><p>${d.date} ・ ${d.sub}</p></div><div class="arrow">›</div></article>`).join('')}</div>`}
function photoCard(r){return `<article class="restaurant"><div class="photo-badge">📷 該店實際餐點／飲品照片</div><img class="restaurant-img" src="${r.img}" alt="${r.name} 店家餐點照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>${r.name}</h3><div class="jp">${r.jp}</div></div><span class="category">${r.cat}</span></div><p class="desc">${r.desc}</p><div class="address">📍 ${r.address}</div><div class="hours">🕐 ${r.hours}</div><div class="restaurant-actions"><a class="map-btn" href="${maps(r.name,r.address)}" target="_blank" rel="noopener">Google Maps</a><a class="web-btn" href="https://www.google.com/search?q=${encodeURIComponent(r.name+' 福岡') }" target="_blank" rel="noopener">搜尋店家</a></div></div></article>`}
function free(){const q=state.query.trim().toLowerCase();const ss=spots.filter(s=>(state.region==='全部'||s[0]===state.region)&&(!q||s.join(' ').toLowerCase().includes(q)));const rr=restaurants.filter(r=>(state.region==='全部'||r.region===state.region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));const bb=shopping.filter(r=>(state.region==='全部'||r.region===state.region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));return `<div class="notice"><b>🎟️ 自由分頁</b><br>不是固定行程，是「臨時想去／想食」的候選庫。現在只分成 <b>購物</b> 和 <b>餐廳</b>，再用地區快速篩選。</div><input class="faq-search" value="${state.query}" oninput="state.query=this.value;render()" placeholder="搜尋醬油、咖啡、牛カツ、甜品…"><div class="filter-row">${regions.map(r=>`<button class="filter ${state.region===r?'active':''}" onclick="state.region='${r}';render()">${r}</button>`).join('')}</div><div class="section-title"><h2>🛍️ 購物</h2><span class="small">${bb.length}個</span></div><div class="cards">${bb.length?bb.map(photoCard).join(''):`<div class="empty">此地區暫無購物選項</div>`}</div><div class="section-title"><h2>🍴 餐廳</h2><span class="small">${rr.length}個</span></div><div class="cards">${rr.length?rr.map(photoCard).join(''):`<div class="empty">找不到符合條件的餐廳</div>`}</div>${ss.length?`<div class="section-title"><h2>📍 附近景點資料</h2><span class="small">${ss.length}個</span></div><div class="cards">${ss.map(s=>spotInfo(s)).join('')}</div>`:''}`}
function check(){const saved=JSON.parse(localStorage.getItem('kagoshima-check')||'[]');return `<div class="notice">出門前逐項打勾，狀態會儲存在手機瀏覽器。</div><div class="check-head"><b>✅ 出發前必備</b><b>${saved.length}/${checklist.length}</b></div><div class="checklist">${checklist.map((x,i)=>`<div class="check-item"><input id="c${i}" type="checkbox" ${saved.includes(i)?'checked':''} onchange="toggleCheck(${i},this.checked)"><label for="c${i}" class="${saved.includes(i)?'done':''}">${x}</label></div>`).join('')}</div>`}
function flight(){return `<div class="notice">✈️ 航班頁集中放出發、國內線及返港重點；時間以機票及航空公司最新通知為準。</div><div class="flight"><div class="route"><span>香港／台北 → 福岡</span><b>9/27</b></div><ul><li>6人香港 → 福岡：UO638</li><li>2人台北 → 福岡</li><li>8人會合後前往天神</li></ul></div><div class="flight"><div class="route"><span>福岡 → 鹿兒島</span><b>9/29</b></div><ul><li>博多 → 鹿児島中央：さくら753号</li><li>14:01–15:42，約100分鐘</li><li>抵達後租車</li></ul></div><div class="flight"><div class="route"><span>鹿兒島 → 福岡</span><b>10/04</b></div><ul><li>09:30酒店退房</li><li>10:00–10:40抵達鹿兒島機場並辦理登機</li><li>12:00鹿兒島 → 福岡（國內線，航程約50分鐘）</li><li>12:50抵達福岡機場</li><li>6人主行程於12:50完結；餘下旅伴接續福岡自由行</li></ul></div>`}
function faq(){return `<input class="faq-search" value="${state.query}" oninput="state.query=this.value;render()" placeholder="搜尋問題…">${faqs.filter(f=>!state.query||f[0].includes(state.query)||f[1].includes(state.query)).map(f=>`<div class="faq"><button onclick="this.nextElementSibling.hidden=!this.nextElementSibling.hidden">${f[0]} <span>＋</span></button><p hidden>${f[1]}</p></div>`).join('')}`}
function render(){document.querySelector('#app').innerHTML=`<div class="app">${header()}<main class="content">${state.tab==='itinerary'?itinerary():state.tab==='free'?free():state.tab==='check'?check():state.tab==='flight'?flight():faq()}</main>${tabs()}</div>`}
function setTab(t){state.tab=t;state.day=null;if(t!=='free'&&t!=='faq')state.query='';render();window.scrollTo(0,0)}
function toggleCheck(i,on){let a=JSON.parse(localStorage.getItem('kagoshima-check')||'[]');a=on?[...new Set([...a,i])]:a.filter(x=>x!==i);localStorage.setItem('kagoshima-check',JSON.stringify(a));render()}
window.setTab=setTab;window.toggleCheck=toggleCheck;window.render=render;window.state=state;render();