export interface Character {
  id: string
  name: string
  furigana?: string
  age?: number
  birthday?: {
    month: number
    day: number
  }
  height?: number
  memo?: string
  scenarios?: string[]
}

export async function getCharacters(): Promise<Character[]> {
  return characters
}

export async function getCharacterById(
  id: string,
): Promise<Character | undefined> {
  return characters.find((c) => c.id === id)
}

export function getCharacterImage(id: string): string {
  return `/portraits/${id}.png`
}

const characters = [
  {
    id: "hisui_remu",
    name: "翡翠 玲夢",
    furigana: "ひすい れむ",
    age: 20,
    birthday: {
      month: 2,
      day: 11,
    },
    height: 153,
    memo: "頑固で勝ち気な性格の考古学者。\n運動はあまり得意ではなく、疲れやすい体質\n規則正しい生活を好み、夜更かしはせず10時に眠る。",
    scenarios: [
      "静なるテロリスタ(HO篤学者)",
      "さよなら天国、またきて地獄",
      "イースの偉大なる図書館へようこそ！",
    ],
  },
  {
    id: "ono_kanon",
    name: "小野 奏音",
    furigana: "おの かのん",
    age: 27,
    memo: "「あの有名な 小野探偵...?!」と人々に噂されることを夢見て、私立探偵として地道に活動中。\n\n口癖は「私に任せてくれ!」\n大学中退後に「小野探偵事務所」を設立。\n自信たっぷり。喋る時の身振り手振りが大きい。\n\n特技は、悪いことが起きても一晩寝たら忘れること。\n欠点は、しょっちゅう無くしものをすること。",
    scenarios: ["同居人"],
  },
  {
    id: "sakura",
    name: "サクラ",
    furigana: "さくら",
    memo: "チンチラをモチーフにした人型ロボット。\nのんびりマイペースな性格。",
    scenarios: ["VOID(HO4)"],
  },
  {
    id: "shizu_kaoru",
    name: "静 かおる",
    furigana: "しづ かおる",
    age: 24,
    memo: "家族経営の花屋「フラワーショップ しづ」の配達担当。\n家族や地元の人々に愛されてまっすぐ育った青年。真面目な性格で人に頼られることが多く、頼まれごとは断れない。\n\n相棒はグラベルロードバイク。趣味は植物を育てることと、ソロキャンプ。",
    scenarios: ["狂骨(エモクロアTRPG)"],
  },
  {
    id: "ukiha_kento",
    name: "浮葉 賢人",
    furigana: "うきは けんと",
    age: 19,
    birthday: {
      month: 6,
      day: 26,
    },
    memo: "国公立大学の一年生。責任感が強く、面倒見の良い性格。\n高校時代は陸上部のキャプテンだった。現在は塾講師のアルバイトをしている。",
    scenarios: ["救いに非ず"],
  },
  {
    id: "asami_en",
    name: "浅見 遠",
    furigana: "あさみ えん",
    age: 28,
    memo: "大正十二年を生きる精神科医。物腰が低く人当たりはいいものの、心のうちでは現状に不満を抱いている。",
    scenarios: ["異説・狂人日記"],
  },
  {
    id: "shinkai_tomoru",
    name: "深海 灯",
    furigana: "しんかい ともる",
    age: 27,
    memo: "身長が高くひょろっとしていて目つきが悪い。周囲から不気味がられることがある。\n\n高校生の頃から作曲活動を行い、作品をインターネット上に公開している。転調が多く不気味で不穏なサウンドが特徴的で、一部の人から支持を受けている。とはいえ知名度が低く音楽活動の収入はほぼないため、スーパー店員のバイトで生計を立てている。",
    scenarios: ["傀逅"],
  },
  {
    id: "mikumo_mikuru",
    name: "三雲 みくる",
    furigana: "みくも みくる",
    age: 22,
    memo: "料理人。卵をメインとした創作料理が得意。\n陽気な性格で、無計画なところがある。\n料理人の両親に幼い頃から厳しく料理の指導を受けていて、修行のためにパリに留学させられたが、パリでの生活が嫌になって両親には内緒で日本に突然帰国した過去を持つ。\n現在は料理系動画投稿者として気ままに活動している。両親にばれないように顔出しはしていない。\n\n「ボクは好きな料理をのんびり楽しくできればそれでいいんだ〜」",
    scenarios: ["傀逅"],
  },
  {
    id: "yuu_kyuu",
    name: "幽 久",
    furigana: "ゆう きゅう",
    age: 25,
    height: 194,
    memo: "両親は中国人だが、日本生まれ日本育ち。\n幽霊が見えると主張しており、恐怖心を抱えながら日常を過ごしている。\n魔除けや幸運をもたらす御守りとして勾玉を身につけている。\n(なお霊感商法に引っかかっている)",
    scenarios: ["救世主(HO2)"],
  },
  {
    id: "watarai_itsuki",
    name: "渡会 依月",
    furigana: "わたらい いつき",
    age: 28,
    memo: "探偵事務所の助手をしている。\n\nパチンコで所持金ぜんぶ溶かし、自宅の電気も水道も止まって途方に暮れ、ゴミ捨て場で寝てたところを探偵に拾われた。それからは居心地のよい探偵事務所に居座っている。\n\n愛嬌だけは人一倍ある。\n面倒なことは人に任せて、自分は苦労せずに楽しく生きたいと思っている。\n地元の人たちとの交友関係は広く顔がきくことから、まれに探偵に助力することもある。",
    scenarios: ["同居人"],
  },
  {
    id: "miru_momi",
    name: "三瑠 籾",
    furigana: "みる もみ",
    age: 17,
    memo: "略して「みるも」と呼ばれている。\n日常に自由と刺激を求めている。リスクをいとわず、後先を考えずに動いて危険な状況に陥ることもある。\n\n見た目に反して礼儀正しい一面があり敬語で喋る。\n好きな食べ物は2日目のカレー。\n\n周りのものに好奇心旺盛。\n近ごろ手料理にハマっている。得意料理はおしるこ。",
    scenarios: ["サイレン清掃会社(HO3)", "毒入りスープ"],
  },
  {
    id: "ame_chan",
    name: "あめちゃん",
    furigana: "あめちゃん",
    age: 24,
    memo: "根暗な性格だが、好きな分野の話になると陽気になる。\n知的好奇心を満たすことが生き甲斐。\n引きこもりのため体力がない。\n趣味: プログラミング、ネットサーフィン、アニメ、電子工作\n\n「ども...魔女って呼ばれてます...。情報集めるのとか得意です...はは...。」\n「私に興味持ってくれるんですか？珍しい人ですね...。」",
    scenarios: [
      "かいぶつたちとマホラカルト(HO魔女)",
      "ワンルーム・ディスコン(HO1)",
    ],
  },
  {
    id: "tenchi_akira",
    name: "天稚 晃",
    furigana: "てんち あきら",
    age: 27,
    height: 173,
    memo: "調子が良く社交的な性格。\n7年目の中堅ホスト。NO.1を目指していると周囲には向上心を見せるが、NO.4止まり。\n本人のだらしのなさからボロが出て客との関係が長続きしないのが原因。大量の飲酒と喫煙と、生活習慣の乱れによる不眠とで晃の生活は破滅している。\n\n自腹を切って同伴で指名を賄っているため常に金欠。",
    scenarios: ["とある家(略)"],
  },
  {
    id: "asari_koharu",
    name: "朝莉 心春",
    furigana: "あさり こはる",
    age: 18,
    birthday: {
      month: 3,
      day: 22,
    },
    height: 152,
    memo: "無邪気で明るく、ちょっぴり照れ屋。所謂女の子らしい女の子。\n\n友だちと一緒に過ごす時間を気に入っている。\n他人の笑顔を見るのが好きで献身的に振る舞う。争いは避け、他人に逆わない。\n良くも悪くも八方美人。\n\nハンドメイドが得意で、アクセサリーづくりを趣味にしている。",
    scenarios: ["あトの祀リ(HO1)"],
  },
  {
    id: "momoi_mio",
    name: "桃井 実央",
    furigana: "ももい みお",
    age: 17,
    height: 158,
    memo: "楽観的なお嬢様。トラブルにみまわれることは数あれど、桃井にとっては何ということはない。\n私立の女子中高一貫校に通う生徒であるが、学校を抜け出し知的好奇心の赴くままに各地を転々と訪れて人生修行中。実家のお世話係の人間から姿を追われているので、正体を隠すためにお面をつけている。\n尊敬するお父さまに恥じない、凛とした女性になりたいと思っている。",
    scenarios: ["人の心は妖面の如し(HO4)"],
  },
  {
    id: "hanamaru_yukichi",
    name: "花丸 諭吉",
    furigana: "はなまる ゆきち",
    age: 26,
    height: 187,
    memo: "上機嫌な商人。普段からニコニコと笑顔を浮かべている。\n\n「笑う門には福来たる、福あるところに金来たる、ですよ ♪」",
    scenarios: ["メイキン・ウーピーは東京駅で恋をする"],
  },
  {
    id: "maika",
    name: "マイカ",
    furigana: "まいか",
    age: 16,
    height: 160,
    memo: "身軽なおてんば少女。\n人のいない場所でひとり、くるくると舞っている。",
    scenarios: ["花冷えに亡く季節(HO2)"],
  },
  {
    id: "ii_kanji",
    name: "伊井 寛治",
    furigana: "いい かんじ",
    age: 16,
    height: 169,
    memo: "ぶすっとした表情をしていて、素直になれない男の子。\n右目を失明して野球を引退したが、内心では野球を諦めきれないでいる。\n自己顕示欲は強く生意気。焚き付けられると乗っかってしまう。",
    scenarios: ["魔法少女希望譚 HARD(PC4)"],
  },
  {
    id: "nelson_bone_skeleton",
    name: "ネルソン・ボーン・スケルトン",
    furigana: "ねるそん ぼーん すけるとん",
    age: 23,
    height: 188,
    memo: "王曰く、クリストファー・コロンブスは狂っている。\n......王曰く、ネルソン・ボーン・スケルトンは寝坊助(ねぼすけ)である。\n\nたくましい肉体をもつ航海士。\n三度の飯と同じくらい眠ることが好きで、眠たげな表情を浮かべている。\n探究心が強く航海技術に秀でているが、だらしなく抜けているところがある。",
    scenarios: ["新世界より(HO探求)"],
  },
  {
    id: "uetsuji_rika",
    name: "上辻 里佳",
    furigana: "うえつじ りか",
    age: 27,
    height: 156,
    memo: "お人形さんのような容姿をしていて、かなり中性的で華奢な美人。\n子役として活動を始め、近頃は演技派俳優として注目されている。",
    scenarios: ["海も枯れるまで(HO1)"],
  },
  {
    id: "godou_syuya",
    name: "悟道 修也",
    furigana: "ごどう しゅうや",
    age: 28,
    height: 166,
    birthday: {
      month: 9,
      day: 21,
    },
    memo: "考えるよりも先に行動するタイプの刑事。\n誰に対しても物怖じしない性格で、低身長を感じさせない堂々とした佇まいをしている。\n\n電子機器の取り扱いが苦手で、パソコンのキーボードを人差し指でしか打てない。事務仕事が遅い。\n趣味はドライブとアコースティックギターの弾き語り。",
    scenarios: [
      "晦むムーンレイル(HO朔)",
      "刑事が戦闘訓練するだけ",
      "only pray",
    ],
  },
  {
    id: "sakuma_ichika",
    name: "佐久間 苺果",
    furigana: "さくま いちか",
    age: 28,
    memo: "宗教家。気怠げで、ぶつぶつ棒読みで喋る。\n中性的な見た目をしている男性。\n趣味は漫画を読むこと。特に少女漫画が好き。\n「花柵イチゴ」というペンネームで少女漫画を描いている。絵は下手。説教という体裁で信者に自作漫画を読ませている。",
    scenarios: ["悪辣(HO4)"],
  },
  {
    id: "yoshiki_syusui",
    name: "芳岐 宗水",
    furigana: "よしき しゅうすい",
    age: 25,
    height: 186,
    birthday: {
      month: 3,
      day: 30,
    },
    memo: "「拝掌教」の敬虔な信者。\nにこやかで口調は物腰丁寧だが、言動ははっきりしている。\n教祖に尽くすことが好きで、教祖のお世話をすることに生きがいを感じている。\n基本的には教祖の行いを全て褒め称えて肯定するが、教祖がだらしない様子をみせたらぷすぷす怒って正してくる。",
    scenarios: ["鰯と柊(HO柊)"],
  },
  {
    id: "marie",
    name: "マリー",
    furigana: "まりー",
    height: 135,
    memo: "洋菓子店「ルージュ(rouge)」のオーナー。\n見た目はまさしく少女のようだが成人女性。\n几帳面な性格で、好みには口うるさい。\nわりとピュアで常識人。",
    scenarios: [
      "愛罠蜂(HOオーナー)",
      "愛や恋では穿てない",
      "Pretty Hugging Race!!!",
      "僕の静脈になって",
    ],
  },
  {
    id: "kasei_jin",
    name: "華世衣 仁",
    furigana: "かせい じん",
    age: 33,
    height: 180,
    memo: "人なつっこい性格の公安警察。\n他人に過剰に干渉するので煙たがられるかもしれない。\n\n職業柄、他人を信じることに慎重な立場を取っている。\nどんなに善良な人だろうと、置かれる環境や何らかのきっかけによって、悪に転じてしまうこともあると思っているからである。\n仕事に対する責任感は強く、危険な仕事も進んで請け負う。\n\n名前は偽名。",
    scenarios: ["胡桃炸裂症候群 -Drosselmeyer Syndrome-(HO公安)"],
  },
  {
    id: "shijima_minato",
    name: "司縞 湊",
    furigana: "しじま みなと",
    age: 25,
    birthday: {
      month: 12,
      day: 24,
    },
    memo: "毒舌だが、面倒見がよい性格の新人刑事。温かい家庭環境や家族に憧れがある。",
    scenarios: ["プルガトリウムの夜(HO2)"],
  },
  {
    id: "shiratama_ibuki",
    name: "白玉 イブキ",
    furigana: "しらたま いぶき",
    age: 31,
    birthday: {
      month: 10,
      day: 14,
    },
    height: 182,
    memo: "おっとりした性格の殺し屋のお姉さん。\n目つきが悪い。\n他人の持ち物をうらやましがって、仕留めた相手の死体から衣服を奪って適当に身に着けている。",
    scenarios: ["欲望街(HO3)"],
  },
  {
    id: "madou_hiromi",
    name: "魔瞳 浩美",
    furigana: "まどう ひろみ",
    age: 25,
    memo: "小難しい口調で喋り、不敵な笑みを浮かべている刑事。\n根は仲間思いで寂しがり屋な人間。頼まれごとは断れない。",
    scenarios: ["SQUIRREL -警視庁危殆事件捜査課-(HO4)"],
  },
  {
    id: "hatano_yui",
    name: "羽多野 結",
    furigana: "はたの ゆい",
    age: 35,
    height: 155,
    birthday: {
      month: 7,
      day: 10,
    },
    memo: "不機嫌な態度の刑事。\n仕事にはいたって真面目で、不真面目な同僚が居るとキレる。笑うのが下手。\n機械類に強い。\n\nぬいぐるみを集めることが趣味で、「ゆるいくま」という熊のキャラクターがお気に入り。\n好きな食べ物はハンバーグ。",
    scenarios: [
      "庭師は何を口遊む(HO2)",
      "KisS Your Cheeks",
      "探索者はかく語りき",
      "同窓会",
      "静穏客旅",
      "暑と寒",
      "刑事が戦闘訓練するだけ",
      "夢から覚めても夢がいい",
      "インサイドバニー",
      "確信的イナモラメント",
    ],
  },
  {
    id: "natsuki_mikan",
    name: "夏生 蜜柑",
    furigana: "なつき みかん",
    age: 27,
    height: 173,
    memo: "気を張っていて常に不機嫌な顔をしている。\n強気で負けず嫌いな性格なため、なにか言われたら言い返さないと気が済まないタイプ。\n痛いことは苦手で痛みで泣く。泣きながら怒る。",
    scenarios: ["DOGMA(HO2)", "The Hog Game"],
  },
  {
    id: "godou_kazuto",
    name: "悟道 一翔",
    furigana: "ごどう かずと",
    age: 27,
    height: 170,
    birthday: {
      month: 3,
      day: 4,
    },
    memo: '警視庁警備部特殊強襲部隊 狙撃支援班｢アクィラ｣に所属する狙撃手。バディとのチーム名は「グラナト」(ガーネットのドイツ語読み)。\n自他ともに認める高い射撃能力を持っており、放つ弾丸は正確無比である。\n実力に自信があり、堂々としている。\n\n深夜アニメ好き。\n銃と魔法の世界が舞台の美少女アニメシリーズ「ガンガール☆あにま」の古参オタク。\nピンク髪のツインテール少女「らぶりん」推し。\n(正式名称は"一星愛梨 いちほしあいり"、愛称が"らぶりん")\n孤高に逆境へと立ち向かう彼女の姿に感銘を受けて、一翔もライフル射撃部に入部した。\n一翔はらぶりんの同人誌を買うために毎年コミックマーケットに一般参加している。',
    scenarios: ["若鷲の双眸(HO狙撃手)", "刑事が戦闘訓練するだけ"],
  },
  {
    id: "endou_renka",
    name: "縁堂 連香",
    furigana: "えんどう れんか",
    age: 25,
    height: 174,
    memo: "真面目な性格の刑事。\n双子の弟に比較され、劣等感を抱いて生きてきた。",
    scenarios: ["愛哀鬼帰(HO兄)"],
  },
  {
    id: "dorothy_frost",
    name: "ドロシー・フロスト",
    furigana: "どろしー ふろすと",
    age: 22,
    height: 162,
    memo: "小さな島の教会で司祭をしている、のんびりした性格の女の子。\n食べることが好きで料理も得意。よく盗み食いをしている。\n\n「もぐもぐ...はっ。今日のおひるごはんに使うはずだったのに、食べちゃいましたぁ。」",
    scenarios: ["プロヴィデンスの箱庭(HO2)"],
  },
  {
    id: "higure_towa",
    name: "日暮 十和",
    furigana: "ひぐれ とわ",
    age: 26,
    height: 177,
    birthday: {
      month: 4,
      day: 13,
    },
    memo: "子供と動物が好きなお兄さん。\n警察官を辞め、小さいアパートを借りて日暮探偵事務所を細々とやっている。",
    scenarios: ["同居人"],
  },
  {
    id: "todoroki_seiya",
    name: "轟 誠弥",
    furigana: "とどろき せいや",
    age: 26,
    height: 177,
    memo: "元気で、声量が取り柄の新人刑事。\n未来ある人々の暮らしを守りたいと願い、刑事を志した。\n学生時代は応援部に所属していた。轟が身につけているたすきやメガホンは、轟が身を引き締めるための装備品。\n\n「本日より配属されましたッ! 轟 誠弥と申しますッ!」 \n「前方の車、止まりなさ〜いッ!」",
    scenarios: ["レゾンデートル(HO1)", "刑事が戦闘訓練するだけ"],
  },
  {
    id: "shinogi_taiga",
    name: "凌 大雅",
    furigana: "しのぎ たいが",
    age: 39,
    birthday: {
      month: 7,
      day: 2,
    },
    height: 178,
    memo: "K県警K課の刑事。さぼり魔で、責任感がないおじさん。\n自分の利益になりそうなら平気で嘘をつき、年上年下問わず甘える。\n人のことを「◯◯たん」呼びし、構ってもらおうとする。\n左手の人差し指に小さな青い石がついた指輪をしている。\n\n趣味はウクレレを弾くこと、セルフ自撮り、食べログに長文レビューを書くこと。\n誰かが可哀想な目に遭うと、ウクレレを弾いて悲しいBGMを演出する。",
    scenarios: ["K県警K課(HO法螺吹き)", "刑事が戦闘訓練するだけ"],
  },
  {
    id: "saigami_shinji",
    name: "才神 シンジ",
    furigana: "さいがみ しんじ",
    age: 27,
    height: 165,
    birthday: {
      month: 12,
      day: 18,
    },
    memo: "お高く止まっている感じの喋り方をする公安刑事。",
    scenarios: ["永虹灰帰のポリス(HO2)", "かにはゆでたらあかくなるんだ"],
  },
]
