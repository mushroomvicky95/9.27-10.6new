const days=[
{n:1,date:'27/9（日）',title:'抵達福岡',sub:'香港／台北會合 → 天神入住',events:[['17:00','6人從香港出發，抵達福岡機場','航班 UO638'],['18:00','2人從台北出發，抵達福岡機場，8人會合',''],['18:30','的士前往天神市區酒店','機場往天神約20–30分鐘；毋須租車'],['19:30','天神晚餐選擇','博多もつ鍋 前田屋／水たき 長野'],['住宿','Richmond Hotel Tenjin Nishidori','第1晚']]},
{n:2,date:'28/9（一）',title:'天神早午餐＋LaLaport＋GUNDAM',sub:'自由活動 → 購物 → 夜間投影表演',events:[['早上','酒店周邊自由活動','散步、補眠、臨時購物或咖啡'],['12:30','天神早午餐','NOOICE tenjin／いくら博多店／manu coffee 大名店'],['14:30','的士前往 LaLaport 福岡','約20–25分鐘'],['15:00–17:30','LaLaport 福岡＋GUNDAM SIDE-F','購物、RX-93ff ν鋼彈、GUNDAM PARK'],['17:30–18:00','商場內咖啡休息','自由安排'],['19:00–19:30','GUNDAM 夜間投影／燈光表演','實際演出時間以當日公告為準'],['20:00','返回天神','約20–25分鐘'],['20:30','天神晚餐','自由分頁按地區選擇'],['住宿','Richmond Hotel Tenjin Nishidori','第2晚']]},
{n:3,date:'29/9（二）',title:'福岡 → 鹿兒島中央 → 霧島溫泉',sub:'九州新幹線 → 租車 → 酒店會席',events:[['11:00','酒店退房',''],['11:00–13:00','天神早午餐＋自由活動','やりうどん福岡店'],['13:15','博多站搭九州新幹線','さくら753号'],['14:01–15:42','博多 → 鹿児島中央','約100分鐘'],['15:45','鹿児島中央站辦理租車','建議2部7–8人座廂型車'],['16:30','前往霧島観光ホテル','約60分鐘'],['17:30','入住霧島観光ホテル','溫泉放鬆'],['19:00','酒店內會席料理',''],['住宿','霧島観光ホテル（AUBEGIO）','1晚']]},
{n:4,date:'30/9（三）',title:'霧島神話之里＋霧島神宮＋仙巖園',sub:'展望台 → 神宮 → 錦江灣庭園',events:[['早上','酒店早餐，慢慢收拾',''],['11:00','酒店退房',''],['11:30–12:30','霧島神話之里公園','展望台、遊覽設施'],['12:45','霧島神宮參拜','免費參拜'],['13:15','前往仙巖園','車程約1小時'],['14:15–16:00','仙巖園','庭園、櫻島／錦江灣、貓神社、薩摩切子'],['16:30','入住鹿兒島中央站西口酒店',''],['20:00','晚餐選擇','みやま本舗／焼肉なべしま'],['住宿','東横INN鹿児島中央駅西口','第1/4晚']]},
{n:5,date:'1/10（四）',title:'櫻島自駕一日遊',sub:'渡輪帶車 → 火山展望 → 足湯',events:[['10:30','自駕前往櫻島渡輪碼頭','約15分鐘'],['11:00','櫻島渡輪','可連人帶車上船，航程約15分鐘'],['11:30–12:00','櫻島遊客中心','火山地質與噴發歷史'],['12:15–13:00','湯之平展望所','360度櫻島、錦江灣及鹿兒島市景'],['13:15–14:15','櫻島午餐','櫻島市場食堂／お食事処海月'],['14:30–15:15','有村熔岩展望所','熔岩遊步道與火山景觀'],['15:30–16:15','長腳湯（足湯）','免費足湯休息'],['16:45','渡輪返回鹿兒島',''],['19:00','鹿兒島晚餐選擇','鹿兒島屋台村／めっけもん／新港食堂'],['住宿','東横INN鹿児島中央駅西口','第2/4晚']]},
{n:6,date:'2/10（五）',title:'南薩摩：知覽＋指宿砂浴',sub:'武家屋敷 → 古民家午餐 → 砂蒸溫泉',events:[['10:30','出發前往知覽','約1小時'],['11:30–12:30','知覽武家屋敷庭園','7個公開庭園、傳統生垣街景'],['12:30–14:00','Café Cochi 午餐','百年古民家洋食、和牛牛筋咖哩'],['14:15','前往指宿','約30分鐘'],['15:00–16:30','砂むし會館 砂樂','天然砂蒸溫泉'],['16:45','池田湖／開聞岳遠望（二選一）','視體力彈性安排'],['19:30','鹿兒島晚餐選擇','大衆酒場かどや／とりくら／豚とろ'],['住宿','東横INN鹿児島中央駅西口','第3/4晚']]},
{n:7,date:'3/10（六）',title:'精品咖啡＋平川動物公園＋天文館',sub:'輕鬆上午 → 動物園 → 白熊刨冰 → 採購',events:[['10:30','精品咖啡','danken COFFEE／可否三昧／Voila Coffee／くじらcafé'],['12:00–13:00','午餐','うなぎの末よし'],['13:30–16:00','平川動物公園','約130種900點動物、樹熊、長頸鹿等'],['16:30–18:00','天文館通＋白熊刨冰','天文館むじゃき本店'],['18:00','AMU PLAZA／天文館伴手禮',''],['18:45','晚餐選擇','ざぼんラーメン／いちにいさん／Gyudo!'],['21:00','整理行李，準備翌日還車',''],['住宿','東横INN鹿児島中央駅西口','第4/4晚']]},
{n:8,date:'4/10（日）',title:'鹿兒島 → 福岡｜6人主行程完結＋餘下旅伴福岡自由行',sub:'鹿兒島機場 → 12:50抵達福岡 → 博多午餐 → 大名採買 → 櫛田神社 → 川端 → Canal City → Check-in → 春吉宵夜',events:[['09:30','酒店退房','東横INN鹿児島中央駅西口退房；確認護照、行李及機場交通。'],['10:00–10:40','抵達鹿兒島機場，辦理登機','由酒店／鹿兒島中央站一帶前往鹿兒島機場，車程約40分鐘；抵達後辦理國內線登機。'],['12:00–12:50','鹿兒島 → 福岡（國內線）','國內線航程約50分鐘；實際航班號及登機資訊以機票／航空公司最新資料為準。'],['12:50','抵達福岡機場｜6人主行程完結','12:50抵達福岡機場。6人主行程至此完結；餘下旅伴由此接續福岡自由行。'],['12:50–13:25','福岡機場 → 博多站＋寄放／確認行李','前往博多站，確認大行李寄物櫃後再到KITTE博多。'],['13:30–14:30','午餐：Sushi Sakaba Sashisu KITTE Hakata','建議13:15左右抵達排隊／抽號碼牌。KITTE博多B1F；招牌有とろ鉄火巻、エビ7-SEVEN-等。'],['14:30–14:55','前往 Beauty shop SEAM FUKUOKA','午餐後前往天神大名；以計程車或地鐵＋步行為主，預留交通時間。'],['14:55–15:20','Beauty shop SEAM FUKUOKA 採買','購買TOKIO等沙龍用品；星期日18:00關店，安排下午較早時段完成。'],['15:35–16:05','櫛田神社','參拜、購買御守及觀賞飾山笠。社務所約9:00–17:00。'],['16:05–16:35','川端商店街','由櫛田神社旁直接進入，快速逛博多人形、和菓子及伴手禮。'],['16:40–18:30','博多運河城 CANAL CITY HAKATA','GOOD MARKET KYUSHU（East Building 2F）＋THE GUNDAM BASE FUKUOKA（South Building 1F）；水舞以當日公告為準。'],['18:30–19:20','MaxValu Express Hakata Gion＋回博多站取件','補水果、飲品及零食，再回博多站領取早前寄放的大行李及美容用品。'],['19:20–20:15','Toyoko INN Hakata Nishi-nakasu Check-in','取回行李後前往酒店；放下行李、伴手禮及購物品，稍作休息。'],['20:15–21:00','酒店休息＋步行前往宵夜','整理行李後前往春吉，酒店與餐廳距離近。'],['21:00–22:30','深夜食堂：炉ばた 三光橋（Robata Sankobashi）','春吉爐端燒；建議21:00入座，吃完步行返回酒店。'],['住宿','Toyoko INN Hakata Nishi-nakasu','〒810-0002 福岡県福岡市中央区西中洲1-16']]},
{n:9,date:'4/10–6/10',title:'附加：福岡自行安排',sub:'10/5 太宰府・表參道甜品・市區晚餐・中洲宵夜',events:[
['4/10 晚上','福岡市內自由活動＋晚餐','按「福岡市區／博多」篩選'],
['10/5 10:20–11:15','天神 → 太宰府｜西鐵電車','建議由西鐵福岡（天神）站出發，經西鐵二日市轉太宰府線；天神→太宰府約30分鐘。10/5為星期一，出發前用西鐵當日時刻表確認班次。今天不開車，以電車＋步行為主。'],
['11:30–12:45','午餐：拉麵 魁源（網頁資料對應：らーめん おいげん）太宰府店','位於太宰府站出站左側，官方資料寫「太宰府駅から徒歩1分」。招牌包括海老香る醤油らぁ麺、豚骨らぁ麺及炭火豚重セット。'],
['12:45–13:05','表參道甜品①｜天山 太宰府店','必吃鬼瓦最中；粒餡、白餡、八女茶餡可選。官方資料：太宰府市宰府2-7-12，10:00–17:00，太宰府站步行約3分鐘。'],
['13:05–13:25','表參道甜品②｜カタラーナ専門店 AMARILLO','九州初的卡塔拉娜專門店；季節千層卡塔拉娜、6種塔卡塔拉娜、卡塔拉娜奶昔。地址宰府2-6-20，11:00–17:00。'],
['13:25–13:45','表參道甜品③｜梅枝餅 かさの家','百年老舖梅枝餅；安排現烤一份或外帶伴手禮。地址宰府2-7-26，店舖營業時間依當日公告。'],
['13:45–14:15','表參道甜品④｜人氣布丁二選一','A：天山太宰府ぷりん店（宰府3-1-28，10:00–17:00）／B：小鳥居茶房（宰府3-2-14，11:00–17:00，招牌生プリンアイス）。建議現場只選一家，避免14:15參拜時間被壓縮。'],
['14:15–15:25','太宰府天滿宮參拜','穿過太鼓橋與心字池後參拜；10月開門時間為6:30、閉門19:00。重點：御神牛、樓門、本殿／期間設施，以及御守。'],
['15:25–16:30','天開稻荷社＋奧之院','由太宰府天滿宮北神苑方向步行上山；官方境內圖標示天開稻荷社步行約6分鐘，之後再往奧之院。保留約65分鐘，比原先10–15分鐘更充裕。'],
['16:30–17:30','表參道伴手禮 → 太宰府站 → 返回天神','沿參道回站，買梅枝餅、天山和菓子及其他伴手禮；17:30左右搭西鐵回天神。'],
['18:30–20:30','10/5市區晚餐選擇｜清爽暖胃方向','不安排燒烤，保留21:00中洲生蠔吧的食量。可選：①博多華味鳥 天神店（水炊き）②元祖博多めんたい重 西中洲（明太子飯）③博多牛腸鍋（前田屋／やま中等，當日確認分店與座位）。'],
['21:00–23:00','宵夜：ヤングオイスター Young Oyster｜中洲生蠔吧','安排生食生蠔拼盤、烤生蠔及飲品。官方資料：福岡市博多区中洲2-8-19，18:00–翌3:00，LO約2:30；中洲川端站步行約3分鐘。10/5是星期一，正常營業。'],
['6/10','最後採購','博多站藥妝、伴手禮；預留退稅及機場交通'] ]}
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
['福岡延伸','拉麵 魁源（らーめん おいげん）太宰府店','你提供的「拉麵 魁源」名稱，網頁資料對應到太宰府站左側的「らーめん おいげん」。海老香る醤油らぁ麺、豚骨らぁ麺、炭火豚重是官方列出的主要品項。','10:00–16:00；湯頭售罄可能提早結束','〒818-0117 福岡県太宰府市宰府1-10-32','food'],
['福岡延伸','天山 太宰府店','太宰府參道和菓子店；鬼瓦最中可選粒餡、白餡、八女茶餡，另有季節限定草莓大福最中。','10:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府2-7-12','dessert'],
['福岡延伸','カタラーナ専門店 AMARILLO','九州初的卡塔拉娜專門店；可吃季節千層卡塔拉娜、6種塔卡塔拉娜及卡塔拉娜奶昔。','11:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府2-6-20','dessert'],
['福岡延伸','梅枝餅 かさの家','太宰府參道老舖梅枝餅店；安排現烤一份或外帶禮盒。','店舖依當日公告','〒818-0117 福岡県太宰府市宰府2-7-26','dessert'],
['福岡延伸','天山太宰府ぷりん店','太宰府站附近布丁店；八女茶等口味可作甜品巡禮二選一。','10:00–17:00','〒818-0117 福岡県太宰府市宰府3-1-28','dessert'],
['福岡延伸','小鳥居茶房','參道巷弄古民家咖啡；招牌生プリンアイス，另有抹茶口味。','11:00–17:00；不定休','〒818-0117 福岡県太宰府市宰府3-2-14','dessert'],
['福岡延伸','天開稻荷社','太宰府天滿宮北神苑的稻荷社；官方介紹其為九州最古老的稻荷社之一，後方可繼續前往石造的奧之院。','依太宰府天滿宮境內參拜安排','福岡県太宰府市宰府4丁目7-1 天開稲荷社','japan'],
['福岡延伸','10/5市區晚餐選擇','清爽暖胃方向：博多華味鳥（水炊き）、元祖博多めんたい重（明太子飯）、或牛腸鍋。為21:00中洲生蠔宵夜保留食量。','18:30–20:30','天神／西中洲一帶；依當日選擇','food'],
['福岡延伸','ヤングオイスター Young Oyster','中洲生蠔吧；生食生蠔、烤生蠔、白酒及調酒。10/5星期一營業至翌3:00，時間彈性高。','18:00–翌3:00；料理LO約2:30','〒810-0801 福岡県福岡市博多区中洲2-8-19 1F','food'],
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
function spotInfo(s){return `<div class="info-card spot-detail"><h3>📍 ${s[1]}</h3><p>${s[2]}</p><div class="spot-meta"><div><b>營業／開放時間</b><br>${s[3]}</div><div><b>地址</b><br>${s[4]}</div></div><a class="map-btn" href="${maps(s[1],s[4])}" target="_blank" rel="noopener">Google Maps 導航</a></div>`}
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
['09:30–12:50','酒店退房 → 鹿兒島機場 → 福岡','09:30退房；不租車。步行至鹿兒島中央站，再搭空港連絡巴士前往鹿兒島機場，車程約40分鐘；12:00搭機前往福岡，12:50抵達。','交通｜酒店→鹿兒島中央站步行約5分鐘；鹿兒島中央站→鹿兒島機場搭空港連絡巴士；12:00國內線飛福岡。','酒店：〒890-0045 鹿児島県鹿児島市武1-6-1｜鹿兒島機場：〒899-6404 鹿児島県霧島市溝辺町麓822','空港連絡巴士直行約40分鐘；班次依10/4當日公告',null,null,'09:30退房 → 巴士 → 12:00航班 → 12:50抵達福岡'],
['12:50–13:25','福岡機場 → 博多站＋寄放行李','12:50抵達福岡機場後，搭地下鐵空港線直達博多站，先寄放大型行李再前往午餐。','交通｜福岡空港站→博多站地下鐵空港線約5分鐘；今天全程不開車，以地下鐵、步行及必要時計程車為主。','福岡空港：福岡県福岡市博多区下臼井778-1｜博多站：福岡県福岡市博多区博多駅中央街1-1','地下鐵空港線直達；抵達博多先處理寄物',null,null,''],
['13:30–14:30','午餐：Sushi Sakaba Sashisu KITTE Hakata','博多站直結的壽司酒場；安排為抵達福岡後第一餐，建議直接排隊。','餐廳｜壽司／海鮮','〒812-0012 福岡県福岡市博多区博多駅中央街9-1 KITTE博多 B1F-14','11:00–23:00；料理LO 22:00、飲品LO 22:30','092-477-3950','https://tblg.k-img.com/restaurant/images/Rvw/187264/640x640_rect_e363d9c70282ef572b3e802a9c8afac9.jpg','🚶 博多站／KITTE博多內步行即可'],
['14:30–14:55','博多 → SEAM FUKUOKA','午餐後前往天神大名。今天沒有租車，直接搭計程車最省轉乘。','交通｜計程車','〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F','約10–15分鐘，依路況','050-8885-4534',null,'🚕 博多／KITTE博多 → SEAM，直接計程車'],
['14:55–15:20','SEAM FUKUOKA 採買','美容用品採買；星期日安排在18:00前完成。','購物','〒810-0041 福岡県福岡市中央区大名2丁目1-53 BPRスクエア天神大名 1F','10:00–19:00；星期日10:00–18:00','050-8885-4534',null,'🚶 店內步行'],
['15:20–15:35','SEAM FUKUOKA → 櫛田神社','完成採買後直接回博多區，這段時間較緊，建議搭計程車。','交通｜計程車','〒812-0026 福岡県福岡市博多区上川端町1-41','約10–15分鐘，依路況','092-291-2951',null,'🚕 SEAM → 櫛田神社直接計程車'],
['15:35–16:05','櫛田神社','博多總鎮守；安排參拜、拍照及看境內飾山笠。','景點','〒812-0026 福岡県福岡市博多区上川端町1-41','開門4:00–22:00；社務9:00–17:00','092-291-2951',null,'🚶 參拜後步行到川端商店街'],
['16:05–16:35','川端商店街','由櫛田神社旁直接接上商店街，快速逛街及伴手禮採買。','散步＋購物','〒812-0026 福岡県福岡市博多区上川端町6-135','各店舖不同','092-281-6223',null,'🚶 櫛田神社→川端商店街'],
['16:35–18:30','川端商店街 → Canal City → 購物','步行前往 Canal City，集中完成伴手禮及動漫購物。','景點＋購物','〒812-0018 福岡県福岡市博多区住吉1丁目2','商店10:00–21:00；餐廳11:00–23:00','',null,'🚶 川端→Canal City步行；或由櫛田神社前站轉七隈線'],
['18:30–19:00','Canal City → MaxValu Express Hakata Gion → 補給','步行前往超市，快速購買水果、飲品及零食。','購物＋補給','〒812-0038 福岡県福岡市博多区祇園町7-20','24小時營業','092-263-4741',null,'🚶 Canal City→MaxValu約5–10分鐘'],
['19:00–19:20','MaxValu → 博多站取回大行李','完成補給後取回上午寄放的大行李，再前往酒店。','交通＋行李','福岡県福岡市博多区博多駅中央街1-1','',null,null,'🚕 建議計程車；有大行李時避免再搬運轉乘'],
['19:20–20:15','Toyoko INN Hakata Nishi-nakasu Check-in','辦理入住、放下行李及購物品。','住宿','〒810-0002 福岡県福岡市中央区西中洲1-16','Check-in 15:00；Check-out 10:00；早餐6:30–9:00','092-739-1045',null,'🚕 博多站→酒店直接計程車；替代為七隈線至天神南再步行'],
['20:15–21:00','酒店休息 → 春吉宵夜','放下行李後休息，再前往春吉晚餐。','交通','〒810-0002 福岡県福岡市中央区西中洲1-16','',null,null,'🚶 酒店→三光橋步行約3–5分鐘'],
['21:00–22:30','深夜食堂：炉ばた 三光橋（Robata Sankobashi）','春吉爐端燒；主打海鮮、貝類、蝦及季節蔬菜，建議預約。','餐廳｜爐端燒','〒810-0003 福岡県福岡市中央区春吉3-22-17','17:00–24:00（部分資料列24:30）','092-712-7373','https://tblg.k-img.com/restaurant/images/Rvw/235133/640x640_rect_4837a4fa52b35cf52a77406a0622e6ea.jpg','🚶 Toyoko INN Hakata Nishi-nakasu→三光橋步行約3–5分鐘']
];
function day8Card(e){
 const [time,title,desc,tag,address,hours,phone,img,transport]=e;
 const restaurant=!!img;
 return '<div class="event"><div class="dot"></div><div class="event-card"><div class="time">'+time+'</div><h3>'+title+'</h3><p class="day8-main-desc">'+desc+'</p><div class="day8-detail-card"><div class="day8-tag">'+tag+'</div><div><b>📍 地址</b><br>'+address+'</div>'+(hours?'<div><b>🕐 營業／時間</b><br>'+hours+'</div>':'')+(phone?'<div><b>☎️ 電話</b><br>'+phone+'</div>':'')+(transport?'<div class="day8-transport"><b>🚶 交通安排</b><br>'+transport+'</div>':'')+'<a class="map-btn" href="'+maps(title,address)+'" target="_blank" rel="noopener">📍 Google Maps 導航</a></div>'+(restaurant?'<article class="restaurant day8-restaurant"><div class="photo-badge">📷 該店料理實拍</div><img class="restaurant-img" src="'+img+'" alt="'+title+' 該店料理照片" loading="lazy"><div class="restaurant-body"><div class="jp">'+(title.includes('Sashisu')?'すし酒場 さしす KITTE博多店':'炉ばた 三光橋')+'</div><p class="desc">'+desc+'</p><div class="address">📍 '+address+'</div><div class="hours">🕐 '+hours+'</div><div class="hours">☎️ '+phone+'</div></div></article>':'')+'</div></div>';
}
const day8Style=document.createElement('style');day8Style.textContent='.day8-detail-card{background:#f7f8f6;border:1px solid #e3ebe8;border-radius:14px;padding:13px;margin-top:10px;line-height:1.55;font-size:13px;color:#59666c}.day8-detail-card>div{margin-top:7px}.day8-tag{display:inline-flex!important;margin-top:0!important;background:#eaf8f5;color:#087f73;border-radius:999px;padding:5px 9px;font-weight:800}.day8-transport{background:#eef7f5;padding:8px;border-radius:10px;border-left:3px solid #087f73}.day8-restaurant{margin-top:12px;border:1px solid #dfe9e6;border-radius:16px;overflow:hidden;background:#fff}.day8-restaurant .restaurant-img{width:100%;height:185px;object-fit:cover;display:block}.day8-restaurant .restaurant-body{padding:12px}.day8-main-desc{margin-bottom:8px}@media(max-width:700px){.day8-detail-card{font-size:11px;padding:10px}.day8-restaurant .restaurant-img{height:170px}}';document.head.appendChild(day8Style);

function itinerary(){if(state.day){const d=days.find(x=>x.n===state.day);if(d.n===8){return `<div class="detail-head"><button class="back" onclick="state.day=null;render()">‹</button><div><h2>Day ${d.n}｜${d.title}</h2><div class="date">${d.date} ・ ${d.sub}</div></div></div><div class="timeline">${day8RichEvents.map((e,i)=>{const x=[...e];x.unshift(i+1);return day8Card(x.slice(1));}).join('')}</div>`}return `<div class="detail-head"><button class="back" onclick="state.day=null;render()">‹</button><div><h2>Day ${d.n}｜${d.title}</h2><div class="date">${d.date} ・ ${d.sub}</div></div></div><div class="timeline">${groupItineraryEvents(d.events).map((e,i)=>{const s=findSpot(e[1]);return `<div class="event"><div class="dot">${i+1}</div><div class="event-card"><div class="time">${e[0]}</div><h3>${e[1]}</h3><p>${e[2]||''}</p>${s?spotInfo(s):''}</div></div>`}).join('')}</div>`}return `<div class="notice">行程景點已補上「營業／開放時間＋地址＋簡介＋Google Maps」。點 Day 卡片查看。</div><div class="day-grid">${days.map(d=>`<article class="day-card" onclick="state.day=${d.n};render()"><div class="day-no"><strong>${d.n}</strong><span>DAY</span></div><div class="day-main"><h3>${d.title}</h3><p>${d.date} ・ ${d.sub}</p></div><div class="arrow">›</div></article>`).join('')}</div>`}
function photoCard(r){return `<article class="restaurant"><div class="photo-badge">📷 該店實際餐點／飲品照片</div><img class="restaurant-img" src="${r.img}" alt="${r.name} 店家餐點照片" loading="lazy"><div class="restaurant-body"><div class="restaurant-title"><div><h3>${r.name}</h3><div class="jp">${r.jp}</div></div><span class="category">${r.cat}</span></div><p class="desc">${r.desc}</p><div class="address">📍 ${r.address}</div><div class="hours">🕐 ${r.hours}</div><div class="restaurant-actions"><a class="map-btn" href="${maps(r.name,r.address)}" target="_blank" rel="noopener">Google Maps</a><a class="web-btn" href="https://www.google.com/search?q=${encodeURIComponent(r.name+' 福岡') }" target="_blank" rel="noopener">搜尋店家</a></div></div></article>`}
function free(){const q=state.query.trim().toLowerCase();const ss=spots.filter(s=>(state.region==='全部'||s[0]===state.region)&&(!q||s.join(' ').toLowerCase().includes(q)));const rr=restaurants.filter(r=>(state.region==='全部'||r.region===state.region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));const bb=shopping.filter(r=>(state.region==='全部'||r.region===state.region)&&(!q||Object.values(r).join(' ').toLowerCase().includes(q)));return `<div class="notice"><b>🎟️ 自由分頁</b><br>不是固定行程，是「臨時想去／想食」的候選庫。現在只分成 <b>購物</b> 和 <b>餐廳</b>，再用地區快速篩選。</div><input class="faq-search" value="${state.query}" oninput="state.query=this.value;render()" placeholder="搜尋醬油、咖啡、牛カツ、甜品…"><div class="filter-row">${regions.map(r=>`<button class="filter ${state.region===r?'active':''}" onclick="state.region='${r}';render()">${r}</button>`).join('')}</div><div class="section-title"><h2>🛍️ 購物</h2><span class="small">${bb.length}個</span></div><div class="cards">${bb.length?bb.map(photoCard).join(''):`<div class="empty">此地區暫無購物選項</div>`}</div><div class="section-title"><h2>🍴 餐廳</h2><span class="small">${rr.length}個</span></div><div class="cards">${rr.length?rr.map(photoCard).join(''):`<div class="empty">找不到符合條件的餐廳</div>`}</div>${ss.length?`<div class="section-title"><h2>📍 附近景點資料</h2><span class="small">${ss.length}個</span></div><div class="cards">${ss.map(s=>spotInfo(s)).join('')}</div>`:''}`}
function check(){const saved=JSON.parse(localStorage.getItem('kagoshima-check')||'[]');return `<div class="notice">出門前逐項打勾，狀態會儲存在手機瀏覽器。</div><div class="check-head"><b>✅ 出發前必備</b><b>${saved.length}/${checklist.length}</b></div><div class="checklist">${checklist.map((x,i)=>`<div class="check-item"><input id="c${i}" type="checkbox" ${saved.includes(i)?'checked':''} onchange="toggleCheck(${i},this.checked)"><label for="c${i}" class="${saved.includes(i)?'done':''}">${x}</label></div>`).join('')}</div>`}
function flight(){return `<div class="notice">✈️ 航班頁集中放出發、國內線及返港重點；時間以機票及航空公司最新通知為準。</div><div class="flight"><div class="route"><span>香港／台北 → 福岡</span><b>9/27</b></div><ul><li>6人香港 → 福岡：UO638</li><li>2人台北 → 福岡</li><li>8人會合後前往天神</li></ul></div><div class="flight"><div class="route"><span>福岡 → 鹿兒島</span><b>9/29</b></div><ul><li>博多 → 鹿児島中央：さくら753号</li><li>14:01–15:42，約100分鐘</li><li>抵達後租車</li></ul></div><div class="flight"><div class="route"><span>鹿兒島 → 福岡</span><b>10/04</b></div><ul><li>09:30酒店退房</li><li>10:00–10:40抵達鹿兒島機場並辦理登機</li><li>12:00鹿兒島 → 福岡（國內線，航程約50分鐘）</li><li>12:50抵達福岡機場</li><li>6人主行程於12:50完結；餘下旅伴接續福岡自由行</li></ul></div>`}
function faq(){return `<input class="faq-search" value="${state.query}" oninput="state.query=this.value;render()" placeholder="搜尋問題…">${faqs.filter(f=>!state.query||f[0].includes(state.query)||f[1].includes(state.query)).map(f=>`<div class="faq"><button onclick="this.nextElementSibling.hidden=!this.nextElementSibling.hidden">${f[0]} <span>＋</span></button><p hidden>${f[1]}</p></div>`).join('')}`}
function render(){document.querySelector('#app').innerHTML=`<div class="app">${header()}<main class="content">${state.tab==='itinerary'?itinerary():state.tab==='free'?free():state.tab==='check'?check():state.tab==='flight'?flight():faq()}</main>${tabs()}</div>`}
function setTab(t){state.tab=t;state.day=null;if(t!=='free'&&t!=='faq')state.query='';render();window.scrollTo(0,0)}
function toggleCheck(i,on){let a=JSON.parse(localStorage.getItem('kagoshima-check')||'[]');a=on?[...new Set([...a,i])]:a.filter(x=>x!==i);localStorage.setItem('kagoshima-check',JSON.stringify(a));render()}
window.setTab=setTab;window.toggleCheck=toggleCheck;window.render=render;window.state=state;render();