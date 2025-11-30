// Vocabulary data - 500 English quiz questions
const vocabulary = [
    { word: "stay up late", correct: "夜更かしする", options: ["見てみる・チェックする", "（用紙に）書き込む", "〜に頼る・依存する"] },
    { word: "go back", correct: "戻る", options: ["〜とうまくやる", "話す", "〜に頼る・依存する"] },
    { word: "wash", correct: "洗う", options: ["見る（じっと）", "確認する", "遊ぶ・ぶらぶらする"] },
    { word: "watch", correct: "見る（じっと）", options: ["理解する", "終える", "脱ぐ・離陸する"] },
    { word: "spend", correct: "（時間・お金を）使う", options: ["シャットダウンする", "うまくいく・解決する", "戻る"] },
    { word: "agree with", correct: "〜に同意する", options: ["欲しいと思う", "立ち寄る", "提出する"] },
    { word: "know", correct: "知っている", options: ["勉強する", "登録する", "見る"] },
    { word: "pick someone up", correct: "〜を迎えに行く", options: ["〜とうまくやる", "話す（言語）", "〜を心配する"] },
    { word: "tell", correct: "伝える", options: ["脱ぐ・離陸する", "見つける", "節約する・保存する"] },
    { word: "go to bed", correct: "寝る", options: ["〜を迎えに行く", "食べる", "シャットダウンする"] },
    { word: "live", correct: "住む", options: ["使う", "落ち着く", "戻る"] },
    { word: "belong to", correct: "〜に所属する", options: ["乗り込む・入る", "見てみる・チェックする", "見る（じっと）"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["拾う・迎えに行く", "試す", "手に入れる"] },
    { word: "wait", correct: "待つ", options: ["〜を起こす", "寝る", "乗り込む・入る"] },
    { word: "get tired", correct: "疲れる", options: ["シャットダウンする", "〜について考える", "来る"] },
    { word: "eat", correct: "食べる", options: ["来る", "〜に所属する", "聞く"] },
    { word: "grow up", correct: "成長する", options: ["早起きする", "忘れる", "〜とうまくやる"] },
    { word: "wake someone up", correct: "〜を起こす", options: ["早起きする", "伝える", "売る"] },
    { word: "try", correct: "試す", options: ["拾う・迎えに行く", "待つ", "与える"] },
    { word: "run into", correct: "偶然出会う", options: ["言う", "聞く", "音量を下げる・断る"] },
    { word: "know", correct: "知っている", options: ["成長する", "話す（言語）", "売る"] },
    { word: "meet", correct: "会う", options: ["見る", "チェックインする", "聞く"] },
    { word: "log out", correct: "ログアウトする", options: ["アプリにログインする", "開ける", "提出する"] },
    { word: "go", correct: "行く", options: ["乗り込む・入る", "（用紙に）書き込む", "見てみる・チェックする"] },
    { word: "meet", correct: "会う", options: ["成長する", "する", "（電源を）消す"] },
    { word: "get off", correct: "降りる", options: ["疲れる", "理解する", "（電源を）つける"] },
    { word: "think about", correct: "〜について考える", options: ["理解する", "元気づける", "寝る"] },
    { word: "talk", correct: "話す", options: ["〜を心配する", "洗う", "使う"] },
    { word: "cook", correct: "料理する", options: ["〜について考える", "使う", "中止する"] },
    { word: "take a break", correct: "休憩する", options: ["降りる", "在宅勤務をする", "旅行する"] },
    { word: "open up", correct: "打ち明ける", options: ["尋ねる", "待つ", "延期する"] },
    { word: "feel sick", correct: "気分が悪い", options: ["うまくいく・解決する", "会う", "脱ぐ・離陸する"] },
    { word: "look", correct: "見る", options: ["尋ねる", "〜に同意する", "〜を迎えに行く"] },
    { word: "see", correct: "見る", options: ["座る", "わかる・見つけ出す", "電話する"] },
    { word: "work from home", correct: "在宅勤務をする", options: ["洗う", "世話をする", "早起きする"] },
    { word: "work out", correct: "うまくいく・解決する", options: ["見る", "準備をする", "登録する"] },
    { word: "hear", correct: "聞こえる", options: ["休憩する", "現れる・音量を上げる", "配る"] },
    { word: "work from home", correct: "在宅勤務をする", options: ["洗う", "（電源を）つける", "立ち上がる"] },
    { word: "try", correct: "試す", options: ["〜に同意する", "寝る", "スピードを落とす"] },
    { word: "meet", correct: "会う", options: ["乗る", "現れる・音量を上げる", "住む"] },
    { word: "clean", correct: "掃除する", options: ["（電源を）つける", "飲む", "書き留める"] },
    { word: "belong to", correct: "〜に所属する", options: ["起床する", "わかる・見つけ出す", "知っている"] },
    { word: "hand in", correct: "提出する", options: ["延期する", "忘れる", "尋ねる"] },
    { word: "go", correct: "行く", options: ["持っている", "戻る", "身に着ける"] },
    { word: "take care of", correct: "世話をする", options: ["（お金が）かかる", "別れる", "与える"] },
    { word: "shut down", correct: "シャットダウンする", options: ["〜について考える", "降りる", "わかる・見つけ出す"] },
    { word: "understand", correct: "理解する", options: ["故障する", "外出する", "（電源を）つける"] },
    { word: "look for", correct: "探す", options: ["見る", "戻ってくる", "手伝う"] },
    { word: "cook", correct: "料理する", options: ["見てみる・チェックする", "現れる・音量を上げる", "持っている"] },
    { word: "slow down", correct: "スピードを落とす", options: ["飲む", "世話をする", "提出する"] },
    { word: "fall asleep", correct: "眠りに落ちる", options: ["起きる", "座る", "〜を迎えに行く"] },
    { word: "save", correct: "節約する・保存する", options: ["別れる", "〜に頼る・依存する", "試す"] },
    { word: "break down", correct: "故障する", options: ["打ち明ける", "見る", "〜に同意する"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["世話をする", "確認する", "理解する"] },
    { word: "pick someone up", correct: "〜を迎えに行く", options: ["立ち寄る", "疲れる", "伝える"] },
    { word: "forget", correct: "忘れる", options: ["洗う", "身に着ける", "起きる"] },
    { word: "go out", correct: "外出する", options: ["提出する", "〜を迎えに行く", "買う"] },
    { word: "have", correct: "持っている", options: ["聞く", "立ち上がる", "食べる"] },
    { word: "cost", correct: "（お金が）かかる", options: ["起きる", "スピードを落とす", "わかる・見つけ出す"] },
    { word: "cost", correct: "（お金が）かかる", options: ["ログアウトする", "（用紙に）書き込む", "ログインする"] },
    { word: "see", correct: "見る", options: ["拾う・迎えに行く", "設定する・準備する", "欲しいと思う"] },
    { word: "check it out", correct: "見てみる・チェックする", options: ["アプリにログインする", "設定する・準備する", "ログアウトする"] },
    { word: "close", correct: "閉める", options: ["チェックインする", "探す", "休憩する"] },
    { word: "look forward to", correct: "〜を楽しみにする", options: ["チェックアウトする", "節約する・保存する", "学ぶ"] },
    { word: "get in", correct: "乗り込む・入る", options: ["来る", "確認する", "学ぶ"] },
    { word: "go back", correct: "戻る", options: ["成長する", "支払う", "見る"] },
    { word: "hear", correct: "聞こえる", options: ["〜に同意する", "始める", "探す"] },
    { word: "look", correct: "見る", options: ["現れる", "掃除する", "打ち明ける"] },
    { word: "get ready", correct: "準備をする", options: ["覚えている", "〜を降ろす", "終える"] },
    { word: "pay", correct: "支払う", options: ["乗り込む・入る", "開ける", "シャットダウンする"] },
    { word: "move", correct: "動く・引っ越す", options: ["聞こえる", "必要とする", "支払う"] },
    { word: "hand in", correct: "提出する", options: ["住む", "〜を楽しみにする", "チェックインする"] },
    { word: "wake up", correct: "起きる", options: ["聞く", "確認する", "（電源を）消す"] },
    { word: "pick someone up", correct: "〜を迎えに行く", options: ["落ち着く", "拾う・迎えに行く", "住む"] },
    { word: "wash", correct: "洗う", options: ["理解する", "開ける", "元気づける"] },
    { word: "get", correct: "手に入れる", options: ["動く・引っ越す", "確認する", "〜に同意する"] },
    { word: "learn", correct: "学ぶ", options: ["気分が悪い", "料理する", "〜を迎えに行く"] },
    { word: "check", correct: "確認する", options: ["立ち寄る", "〜を心配する", "降りる"] },
    { word: "look after", correct: "世話をする", options: ["現れる", "売る", "降りる"] },
    { word: "cost", correct: "（お金が）かかる", options: ["閉める", "延期する", "〜を心配する"] },
    { word: "shut down", correct: "シャットダウンする", options: ["見る", "理解する", "買う"] },
    { word: "remember", correct: "覚えている", options: ["現れる", "（用紙に）書き込む", "聞く"] },
    { word: "get ready", correct: "準備をする", options: ["理解する", "電話する", "見る"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["外出する", "会う", "話す"] },
    { word: "put on", correct: "身に着ける", options: ["早起きする", "動く・引っ越す", "旅行する"] },
    { word: "understand", correct: "理解する", options: ["試す", "座る", "〜とうまくやる"] },
    { word: "help", correct: "手伝う", options: ["ログアウトする", "忘れる", "来る"] },
    { word: "put off", correct: "延期する", options: ["座る", "立ち寄る", "食べる"] },
    { word: "carry out", correct: "実行する", options: ["世話をする", "乗り込む・入る", "元気づける"] },
    { word: "make", correct: "作る", options: ["見つける", "座る", "わかる・見つけ出す"] },
    { word: "hurry up", correct: "急ぐ", options: ["〜に頼る・依存する", "在宅勤務をする", "シャットダウンする"] },
    { word: "feel sick", correct: "気分が悪い", options: ["手伝う", "延期する", "取る・連れて行く"] },
    { word: "call", correct: "電話する", options: ["見る", "言う", "支払う"] },
    { word: "study", correct: "勉強する", options: ["別れる", "探す", "知っている"] },
    { word: "sell", correct: "売る", options: ["戻ってくる", "支払う", "言う"] },
    { word: "save", correct: "節約する・保存する", options: ["〜に同意する", "（用紙に）書き込む", "気分が悪い"] },
    { word: "talk", correct: "話す", options: ["料理する", "〜を楽しみにする", "〜に所属する"] },
    { word: "go", correct: "行く", options: ["延期する", "成長する", "必要とする"] },
    { word: "know", correct: "知っている", options: ["拾う・迎えに行く", "動く・引っ越す", "ログインする"] },
    { word: "eat", correct: "食べる", options: ["気分が悪い", "必要とする", "うまくいく・解決する"] },
    { word: "break down", correct: "故障する", options: ["音量を下げる・断る", "伝える", "座る"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["乗る", "持っている", "アプリにログインする"] },
    { word: "slow down", correct: "スピードを落とす", options: ["気分が悪い", "必要とする", "実行する"] },
    { word: "finish", correct: "終える", options: ["（お金が）かかる", "買う", "立ち上がる"] },
    { word: "open", correct: "開ける", options: ["始める", "提出する", "忘れる"] },
    { word: "break down", correct: "故障する", options: ["使う", "身に着ける", "立ち上がる"] },
    { word: "know", correct: "知っている", options: ["（時間・お金を）使う", "会う", "寝る"] },
    { word: "log in to the app", correct: "アプリにログインする", options: ["実行する", "見る（じっと）", "勉強する"] },
    { word: "close", correct: "閉める", options: ["会う", "戻ってくる", "理解する"] },
    { word: "put on", correct: "身に着ける", options: ["延期する", "料理する", "話す"] },
    { word: "give", correct: "与える", options: ["（電源を）つける", "（電源を）消す", "中止する"] },
    { word: "call", correct: "電話する", options: ["うまくいく・解決する", "実行する", "起きる"] },
    { word: "open", correct: "開ける", options: ["尋ねる", "乗り込む・入る", "中止する"] },
    { word: "get in", correct: "乗り込む・入る", options: ["登録する", "理解する", "話す（言語）"] },
    { word: "pick up", correct: "拾う・迎えに行く", options: ["見る（じっと）", "行く", "始める"] },
    { word: "check it out", correct: "見てみる・チェックする", options: ["手伝う", "遊ぶ・ぶらぶらする", "スピードを落とす"] },
    { word: "get off", correct: "降りる", options: ["飲む", "音量を下げる・断る", "わかる・見つけ出す"] },
    { word: "drop by", correct: "立ち寄る", options: ["実行する", "元気づける", "来る"] },
    { word: "pay", correct: "支払う", options: ["話題に出す・育てる", "起床する", "作る"] },
    { word: "pick up", correct: "拾う・迎えに行く", options: ["延期する", "元気づける", "手伝う"] },
    { word: "think", correct: "考える", options: ["（お金が）かかる", "提出する", "伝える"] },
    { word: "move", correct: "動く・引っ越す", options: ["料理する", "遊ぶ・ぶらぶらする", "手に入れる"] },
    { word: "save", correct: "節約する・保存する", options: ["書き留める", "寝る", "開ける"] },
    { word: "ask", correct: "尋ねる", options: ["アプリにログインする", "〜を降ろす", "理解する"] },
    { word: "open", correct: "開ける", options: ["戻ってくる", "〜を心配する", "確認する"] },
    { word: "talk", correct: "話す", options: ["座る", "会う", "提出する"] },
    { word: "check it out", correct: "見てみる・チェックする", options: ["降りる", "現れる・音量を上げる", "動く・引っ越す"] },
    { word: "log in to the app", correct: "アプリにログインする", options: ["気分が悪い", "売る", "わかる・見つけ出す"] },
    { word: "turn off", correct: "（電源を）消す", options: ["実行する", "旅行する", "元気づける"] },
    { word: "look for", correct: "探す", options: ["偶然出会う", "世話をする", "在宅勤務をする"] },
    { word: "try", correct: "試す", options: ["書き留める", "現れる", "立ち上がる"] },
    { word: "get along with", correct: "〜とうまくやる", options: ["理解する", "滞在する", "作る"] },
    { word: "get ready", correct: "準備をする", options: ["〜に同意する", "身に着ける", "アプリにログインする"] },
    { word: "hand in", correct: "提出する", options: ["乗り込む・入る", "聞く", "登録する"] },
    { word: "stay up late", correct: "夜更かしする", options: ["待つ", "現れる", "（時間・お金を）使う"] },
    { word: "turn up", correct: "現れる・音量を上げる", options: ["話す", "言う", "設定する・準備する"] },
    { word: "listen", correct: "聞く", options: ["言う", "（電源を）つける", "欲しいと思う"] },
    { word: "grow up", correct: "成長する", options: ["夜更かしする", "〜を降ろす", "忘れる"] },
    { word: "learn", correct: "学ぶ", options: ["落ち着く", "登録する", "話す"] },
    { word: "look after", correct: "世話をする", options: ["眠りに落ちる", "買う", "偶然出会う"] },
    { word: "wait", correct: "待つ", options: ["落ち着く", "乗る", "立ち上がる"] },
    { word: "buy", correct: "買う", options: ["使う", "必要とする", "理解する"] },
    { word: "check in", correct: "チェックインする", options: ["する", "乗り込む・入る", "手に入れる"] },
    { word: "think", correct: "考える", options: ["飲む", "作る", "身に着ける"] },
    { word: "cook", correct: "料理する", options: ["始める", "立ち上がる", "（電源を）つける"] },
    { word: "calm down", correct: "落ち着く", options: ["手に入れる", "世話をする", "見てみる・チェックする"] },
    { word: "go to bed", correct: "寝る", options: ["探す", "延期する", "実行する"] },
    { word: "cheer up", correct: "元気づける", options: ["早起きする", "終える", "する"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["現れる", "〜とうまくやる", "住む"] },
    { word: "check out", correct: "チェックアウトする", options: ["乗り越える", "アプリにログインする", "買う"] },
    { word: "break up", correct: "別れる", options: ["開ける", "学ぶ", "現れる・音量を上げる"] },
    { word: "travel", correct: "旅行する", options: ["〜を降ろす", "見つける", "取る・連れて行く"] },
    { word: "come", correct: "来る", options: ["旅行する", "疲れる", "売る"] },
    { word: "log out", correct: "ログアウトする", options: ["使う", "支払う", "世話をする"] },
    { word: "talk", correct: "話す", options: ["元気づける", "開ける", "掃除する"] },
    { word: "know", correct: "知っている", options: ["〜を降ろす", "〜に所属する", "チェックアウトする"] },
    { word: "put on", correct: "身に着ける", options: ["（時間・お金を）使う", "尋ねる", "現れる"] },
    { word: "get up", correct: "起床する", options: ["スピードを落とす", "世話をする", "言う"] },
    { word: "open", correct: "開ける", options: ["眠りに落ちる", "尋ねる", "偶然出会う"] },
    { word: "log out", correct: "ログアウトする", options: ["知っている", "早起きする", "言う"] },
    { word: "get in", correct: "乗り込む・入る", options: ["探す", "確認する", "準備をする"] },
    { word: "break up", correct: "別れる", options: ["開ける", "早起きする", "準備をする"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["忘れる", "理解する", "話す（言語）"] },
    { word: "log in to the app", correct: "アプリにログインする", options: ["（電源を）消す", "待つ", "〜を迎えに行く"] },
    { word: "buy", correct: "買う", options: ["準備をする", "（電源を）消す", "覚えている"] },
    { word: "get up", correct: "起床する", options: ["元気づける", "降りる", "知っている"] },
    { word: "try", correct: "試す", options: ["遊ぶ・ぶらぶらする", "寝る", "会う"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["書き留める", "身に着ける", "ログインする"] },
    { word: "make", correct: "作る", options: ["動く・引っ越す", "飲む", "立ち上がる"] },
    { word: "shut down", correct: "シャットダウンする", options: ["話す", "元気づける", "言う"] },
    { word: "have", correct: "持っている", options: ["旅行する", "音量を下げる・断る", "ログアウトする"] },
    { word: "sell", correct: "売る", options: ["〜とうまくやる", "チェックインする", "立ち上がる"] },
    { word: "take off", correct: "脱ぐ・離陸する", options: ["世話をする", "聞く", "見つける"] },
    { word: "watch", correct: "見る（じっと）", options: ["起床する", "理解する", "急ぐ"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["伝える", "〜を起こす", "寝る"] },
    { word: "sign up", correct: "登録する", options: ["世話をする", "忘れる", "（時間・お金を）使う"] },
    { word: "get along with", correct: "〜とうまくやる", options: ["覚えている", "戻る", "忘れる"] },
    { word: "understand", correct: "理解する", options: ["チェックアウトする", "見つける", "滞在する"] },
    { word: "check out", correct: "チェックアウトする", options: ["売る", "現れる", "支払う"] },
    { word: "grow up", correct: "成長する", options: ["脱ぐ・離陸する", "旅行する", "現れる"] },
    { word: "hurry up", correct: "急ぐ", options: ["〜を起こす", "開ける", "うまくいく・解決する"] },
    { word: "eat", correct: "食べる", options: ["シャットダウンする", "登録する", "する"] },
    { word: "turn on", correct: "（電源を）つける", options: ["見てみる・チェックする", "戻る", "見る（じっと）"] },
    { word: "belong to", correct: "〜に所属する", options: ["現れる", "聞く", "立ち上がる"] },
    { word: "take off", correct: "脱ぐ・離陸する", options: ["偶然出会う", "（電源を）つける", "〜について考える"] },
    { word: "find", correct: "見つける", options: ["中止する", "起床する", "手伝う"] },
    { word: "get along with", correct: "〜とうまくやる", options: ["滞在する", "シャットダウンする", "欲しいと思う"] },
    { word: "start", correct: "始める", options: ["偶然出会う", "取る・連れて行く", "（電源を）つける"] },
    { word: "hang out", correct: "遊ぶ・ぶらぶらする", options: ["料理する", "見つける", "開ける"] },
    { word: "get tired", correct: "疲れる", options: ["世話をする", "〜について考える", "提出する"] },
    { word: "write down", correct: "書き留める", options: ["待つ", "話す", "〜とうまくやる"] },
    { word: "go", correct: "行く", options: ["節約する・保存する", "試す", "打ち明ける"] },
    { word: "close", correct: "閉める", options: ["ログインする", "話す（言語）", "座る"] },
    { word: "belong to", correct: "〜に所属する", options: ["中止する", "遊ぶ・ぶらぶらする", "支払う"] },
    { word: "write down", correct: "書き留める", options: ["起きる", "聞こえる", "（時間・お金を）使う"] },
    { word: "slow down", correct: "スピードを落とす", options: ["戻る", "シャットダウンする", "書き留める"] },
    { word: "calm down", correct: "落ち着く", options: ["（電源を）消す", "乗り込む・入る", "遊ぶ・ぶらぶらする"] },
    { word: "come back", correct: "戻ってくる", options: ["わかる・見つけ出す", "忘れる", "終える"] },
    { word: "clean", correct: "掃除する", options: ["伝える", "世話をする", "探す"] },
    { word: "finish", correct: "終える", options: ["閉める", "起きる", "外出する"] },
    { word: "remember", correct: "覚えている", options: ["寝る", "準備をする", "気分が悪い"] },
    { word: "hurry up", correct: "急ぐ", options: ["する", "住む", "開ける"] },
    { word: "study", correct: "勉強する", options: ["滞在する", "尋ねる", "（電源を）消す"] },
    { word: "break up", correct: "別れる", options: ["来る", "座る", "音量を下げる・断る"] },
    { word: "help", correct: "手伝う", options: ["乗り越える", "開ける", "作る"] },
    { word: "cook", correct: "料理する", options: ["世話をする", "探す", "聞く"] },
    { word: "wake someone up", correct: "〜を起こす", options: ["支払う", "試す", "理解する"] },
    { word: "remember", correct: "覚えている", options: ["アプリにログインする", "始める", "聞く"] },
    { word: "break down", correct: "故障する", options: ["支払う", "開ける", "掃除する"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["閉める", "開ける", "作る"] },
    { word: "hear", correct: "聞こえる", options: ["食べる", "起きる", "忘れる"] },
    { word: "have", correct: "持っている", options: ["来る", "乗り込む・入る", "登録する"] },
    { word: "bring up", correct: "話題に出す・育てる", options: ["中止する", "書き留める", "食べる"] },
    { word: "do", correct: "する", options: ["旅行する", "終える", "起きる"] },
    { word: "take off", correct: "脱ぐ・離陸する", options: ["〜を迎えに行く", "旅行する", "打ち明ける"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["見る", "落ち着く", "〜に同意する"] },
    { word: "want", correct: "欲しいと思う", options: ["書き留める", "旅行する", "音量を下げる・断る"] },
    { word: "look after", correct: "世話をする", options: ["わかる・見つけ出す", "来る", "言う"] },
    { word: "check out", correct: "チェックアウトする", options: ["起きる", "ログインする", "待つ"] },
    { word: "sit down", correct: "座る", options: ["疲れる", "伝える", "閉める"] },
    { word: "meet", correct: "会う", options: ["乗り越える", "ログアウトする", "〜に同意する"] },
    { word: "turn on", correct: "（電源を）つける", options: ["勉強する", "欲しいと思う", "見てみる・チェックする"] },
    { word: "want", correct: "欲しいと思う", options: ["乗り越える", "シャットダウンする", "作る"] },
    { word: "shut down", correct: "シャットダウンする", options: ["元気づける", "現れる・音量を上げる", "夜更かしする"] },
    { word: "fill out", correct: "（用紙に）書き込む", options: ["〜に所属する", "登録する", "（お金が）かかる"] },
    { word: "come", correct: "来る", options: ["〜を心配する", "スピードを落とす", "休憩する"] },
    { word: "look for", correct: "探す", options: ["現れる", "旅行する", "登録する"] },
    { word: "call", correct: "電話する", options: ["落ち着く", "〜を心配する", "話題に出す・育てる"] },
    { word: "cook", correct: "料理する", options: ["在宅勤務をする", "起床する", "会う"] },
    { word: "put on", correct: "身に着ける", options: ["中止する", "理解する", "与える"] },
    { word: "agree with", correct: "〜に同意する", options: ["戻る", "忘れる", "うまくいく・解決する"] },
    { word: "get ready", correct: "準備をする", options: ["する", "〜に同意する", "学ぶ"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["提出する", "伝える", "洗う"] },
    { word: "wash", correct: "洗う", options: ["〜を降ろす", "スピードを落とす", "節約する・保存する"] },
    { word: "close", correct: "閉める", options: ["見る（じっと）", "シャットダウンする", "手に入れる"] },
    { word: "meet", correct: "会う", options: ["聞こえる", "脱ぐ・離陸する", "理解する"] },
    { word: "put off", correct: "延期する", options: ["覚えている", "チェックアウトする", "話題に出す・育てる"] },
    { word: "fall asleep", correct: "眠りに落ちる", options: ["夜更かしする", "見る（じっと）", "聞こえる"] },
    { word: "carry out", correct: "実行する", options: ["（時間・お金を）使う", "考える", "成長する"] },
    { word: "want", correct: "欲しいと思う", options: ["考える", "伝える", "〜に所属する"] },
    { word: "write down", correct: "書き留める", options: ["準備をする", "（時間・お金を）使う", "スピードを落とす"] },
    { word: "open", correct: "開ける", options: ["戻る", "ログインする", "立ち寄る"] },
    { word: "finish", correct: "終える", options: ["スピードを落とす", "来る", "〜を降ろす"] },
    { word: "call off", correct: "中止する", options: ["ログインする", "旅行する", "聞こえる"] },
    { word: "break down", correct: "故障する", options: ["見る", "（用紙に）書き込む", "覚えている"] },
    { word: "put on", correct: "身に着ける", options: ["起床する", "見る", "〜を起こす"] },
    { word: "travel", correct: "旅行する", options: ["〜を楽しみにする", "電話する", "（用紙に）書き込む"] },
    { word: "drop by", correct: "立ち寄る", options: ["考える", "聞こえる", "夜更かしする"] },
    { word: "come back", correct: "戻ってくる", options: ["会う", "待つ", "偶然出会う"] },
    { word: "carry out", correct: "実行する", options: ["節約する・保存する", "（用紙に）書き込む", "する"] },
    { word: "get over", correct: "乗り越える", options: ["始める", "待つ", "中止する"] },
    { word: "drop by", correct: "立ち寄る", options: ["世話をする", "音量を下げる・断る", "外出する"] },
    { word: "depend on", correct: "〜に頼る・依存する", options: ["遊ぶ・ぶらぶらする", "座る", "見てみる・チェックする"] },
    { word: "hand in", correct: "提出する", options: ["降りる", "尋ねる", "夜更かしする"] },
    { word: "stay up late", correct: "夜更かしする", options: ["アプリにログインする", "拾う・迎えに行く", "提出する"] },
    { word: "feel sick", correct: "気分が悪い", options: ["在宅勤務をする", "開ける", "起きる"] },
    { word: "go to bed", correct: "寝る", options: ["〜とうまくやる", "料理する", "夜更かしする"] },
    { word: "live", correct: "住む", options: ["急ぐ", "（電源を）つける", "提出する"] },
    { word: "sign up", correct: "登録する", options: ["うまくいく・解決する", "話す（言語）", "待つ"] },
    { word: "wait", correct: "待つ", options: ["〜を心配する", "立ち寄る", "〜を楽しみにする"] },
    { word: "go", correct: "行く", options: ["〜に所属する", "ログアウトする", "眠りに落ちる"] },
    { word: "set up", correct: "設定する・準備する", options: ["戻ってくる", "配る", "聞こえる"] },
    { word: "calm down", correct: "落ち着く", options: ["在宅勤務をする", "住む", "成長する"] },
    { word: "bring up", correct: "話題に出す・育てる", options: ["旅行する", "行く", "遊ぶ・ぶらぶらする"] },
    { word: "speak", correct: "話す（言語）", options: ["与える", "チェックインする", "話す"] },
    { word: "use", correct: "使う", options: ["食べる", "うまくいく・解決する", "試す"] },
    { word: "set up", correct: "設定する・準備する", options: ["会う", "考える", "打ち明ける"] },
    { word: "log in", correct: "ログインする", options: ["うまくいく・解決する", "落ち着く", "わかる・見つけ出す"] },
    { word: "cost", correct: "（お金が）かかる", options: ["提出する", "落ち着く", "準備をする"] },
    { word: "hand in", correct: "提出する", options: ["〜に頼る・依存する", "疲れる", "気分が悪い"] },
    { word: "take", correct: "取る・連れて行く", options: ["行く", "身に着ける", "作る"] },
    { word: "get in", correct: "乗り込む・入る", options: ["起床する", "故障する", "行く"] },
    { word: "shut down", correct: "シャットダウンする", options: ["話す（言語）", "配る", "起床する"] },
    { word: "worry about", correct: "〜を心配する", options: ["掃除する", "話す", "座る"] },
    { word: "save", correct: "節約する・保存する", options: ["（電源を）つける", "取る・連れて行く", "急ぐ"] },
    { word: "get on", correct: "乗る", options: ["欲しいと思う", "見る", "落ち着く"] },
    { word: "live", correct: "住む", options: ["使う", "立ち寄る", "起きる"] },
    { word: "go to bed", correct: "寝る", options: ["座る", "尋ねる", "急ぐ"] },
    { word: "wake someone up", correct: "〜を起こす", options: ["眠りに落ちる", "使う", "聞こえる"] },
    { word: "take care of", correct: "世話をする", options: ["設定する・準備する", "来る", "旅行する"] },
    { word: "stay", correct: "滞在する", options: ["理解する", "現れる", "学ぶ"] },
    { word: "open up", correct: "打ち明ける", options: ["必要とする", "〜を楽しみにする", "故障する"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["配る", "忘れる", "〜を降ろす"] },
    { word: "put on", correct: "身に着ける", options: ["世話をする", "伝える", "会う"] },
    { word: "worry about", correct: "〜を心配する", options: ["（時間・お金を）使う", "偶然出会う", "拾う・迎えに行く"] },
    { word: "use", correct: "使う", options: ["終える", "与える", "疲れる"] },
    { word: "wake up", correct: "起きる", options: ["行く", "降りる", "学ぶ"] },
    { word: "spend", correct: "（時間・お金を）使う", options: ["〜とうまくやる", "伝える", "動く・引っ越す"] },
    { word: "come back", correct: "戻ってくる", options: ["探す", "スピードを落とす", "眠りに落ちる"] },
    { word: "finish", correct: "終える", options: ["旅行する", "見つける", "持っている"] },
    { word: "check out", correct: "チェックアウトする", options: ["滞在する", "〜を心配する", "洗う"] },
    { word: "put off", correct: "延期する", options: ["（電源を）消す", "始める", "〜を心配する"] },
    { word: "need", correct: "必要とする", options: ["理解する", "気分が悪い", "乗り込む・入る"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["〜を心配する", "〜について考える", "会う"] },
    { word: "look", correct: "見る", options: ["チェックアウトする", "夜更かしする", "見る（じっと）"] },
    { word: "come back", correct: "戻ってくる", options: ["偶然出会う", "〜を起こす", "忘れる"] },
    { word: "close", correct: "閉める", options: ["〜を楽しみにする", "手に入れる", "準備をする"] },
    { word: "feel sick", correct: "気分が悪い", options: ["アプリにログインする", "行く", "拾う・迎えに行く"] },
    { word: "open", correct: "開ける", options: ["急ぐ", "旅行する", "〜とうまくやる"] },
    { word: "come back", correct: "戻ってくる", options: ["理解する", "旅行する", "手伝う"] },
    { word: "go back", correct: "戻る", options: ["持っている", "忘れる", "欲しいと思う"] },
    { word: "forget", correct: "忘れる", options: ["設定する・準備する", "見る", "〜を心配する"] },
    { word: "shut down", correct: "シャットダウンする", options: ["手に入れる", "聞こえる", "考える"] },
    { word: "get in", correct: "乗り込む・入る", options: ["見る", "始める", "書き留める"] },
    { word: "get along with", correct: "〜とうまくやる", options: ["〜を迎えに行く", "外出する", "音量を下げる・断る"] },
    { word: "drink", correct: "飲む", options: ["元気づける", "買う", "話す"] },
    { word: "check", correct: "確認する", options: ["落ち着く", "〜について考える", "〜に同意する"] },
    { word: "bring up", correct: "話題に出す・育てる", options: ["音量を下げる・断る", "勉強する", "行く"] },
    { word: "check it out", correct: "見てみる・チェックする", options: ["〜に頼る・依存する", "外出する", "わかる・見つけ出す"] },
    { word: "hear", correct: "聞こえる", options: ["使う", "遊ぶ・ぶらぶらする", "元気づける"] },
    { word: "go", correct: "行く", options: ["話題に出す・育てる", "試す", "戻る"] },
    { word: "wake up early", correct: "早起きする", options: ["行く", "立ち寄る", "探す"] },
    { word: "call", correct: "電話する", options: ["見る", "〜を起こす", "食べる"] },
    { word: "pay", correct: "支払う", options: ["（時間・お金を）使う", "世話をする", "延期する"] },
    { word: "forget", correct: "忘れる", options: ["言う", "偶然出会う", "休憩する"] },
    { word: "run into", correct: "偶然出会う", options: ["身に着ける", "終える", "遊ぶ・ぶらぶらする"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["身に着ける", "行く", "チェックインする"] },
    { word: "drop by", correct: "立ち寄る", options: ["乗る", "アプリにログインする", "作る"] },
    { word: "meet", correct: "会う", options: ["夜更かしする", "話題に出す・育てる", "（電源を）消す"] },
    { word: "slow down", correct: "スピードを落とす", options: ["〜に同意する", "在宅勤務をする", "節約する・保存する"] },
    { word: "hand in", correct: "提出する", options: ["（お金が）かかる", "シャットダウンする", "立ち上がる"] },
    { word: "tell", correct: "伝える", options: ["する", "住む", "考える"] },
    { word: "study", correct: "勉強する", options: ["食べる", "する", "眠りに落ちる"] },
    { word: "drink", correct: "飲む", options: ["見る", "聞く", "立ち寄る"] },
    { word: "break down", correct: "故障する", options: ["遊ぶ・ぶらぶらする", "〜に同意する", "見る"] },
    { word: "get on", correct: "乗る", options: ["確認する", "洗う", "必要とする"] },
    { word: "watch", correct: "見る（じっと）", options: ["話す（言語）", "延期する", "寝る"] },
    { word: "look after", correct: "世話をする", options: ["聞く", "降りる", "学ぶ"] },
    { word: "take a break", correct: "休憩する", options: ["見つける", "〜とうまくやる", "乗り越える"] },
    { word: "break up", correct: "別れる", options: ["電話する", "使う", "在宅勤務をする"] },
    { word: "get ready", correct: "準備をする", options: ["書き留める", "必要とする", "開ける"] },
    { word: "wake someone up", correct: "〜を起こす", options: ["滞在する", "電話する", "確認する"] },
    { word: "sign up", correct: "登録する", options: ["伝える", "見る", "降りる"] },
    { word: "wait", correct: "待つ", options: ["設定する・準備する", "立ち上がる", "話す（言語）"] },
    { word: "find", correct: "見つける", options: ["チェックインする", "（お金が）かかる", "聞く"] },
    { word: "get in", correct: "乗り込む・入る", options: ["〜を起こす", "洗う", "確認する"] },
    { word: "go to bed", correct: "寝る", options: ["節約する・保存する", "（時間・お金を）使う", "急ぐ"] },
    { word: "take care of", correct: "世話をする", options: ["うまくいく・解決する", "〜を心配する", "会う"] },
    { word: "slow down", correct: "スピードを落とす", options: ["シャットダウンする", "見る（じっと）", "〜とうまくやる"] },
    { word: "need", correct: "必要とする", options: ["起床する", "〜を楽しみにする", "書き留める"] },
    { word: "check", correct: "確認する", options: ["実行する", "必要とする", "ログインする"] },
    { word: "finish", correct: "終える", options: ["身に着ける", "うまくいく・解決する", "手伝う"] },
    { word: "pay", correct: "支払う", options: ["配る", "起きる", "準備をする"] },
    { word: "grow up", correct: "成長する", options: ["（用紙に）書き込む", "現れる", "見つける"] },
    { word: "have", correct: "持っている", options: ["会う", "住む", "起きる"] },
    { word: "cheer up", correct: "元気づける", options: ["落ち着く", "〜を楽しみにする", "戻ってくる"] },
    { word: "move", correct: "動く・引っ越す", options: ["待つ", "乗り越える", "元気づける"] },
    { word: "put on", correct: "身に着ける", options: ["在宅勤務をする", "始める", "旅行する"] },
    { word: "come", correct: "来る", options: ["尋ねる", "閉める", "住む"] },
    { word: "hurry up", correct: "急ぐ", options: ["住む", "売る", "戻る"] },
    { word: "ask", correct: "尋ねる", options: ["設定する・準備する", "欲しいと思う", "寝る"] },
    { word: "get in", correct: "乗り込む・入る", options: ["眠りに落ちる", "外出する", "待つ"] },
    { word: "have", correct: "持っている", options: ["偶然出会う", "配る", "開ける"] },
    { word: "put on", correct: "身に着ける", options: ["動く・引っ越す", "試す", "早起きする"] },
    { word: "turn on", correct: "（電源を）つける", options: ["〜を心配する", "見る（じっと）", "必要とする"] },
    { word: "pick up", correct: "拾う・迎えに行く", options: ["スピードを落とす", "（時間・お金を）使う", "理解する"] },
    { word: "need", correct: "必要とする", options: ["支払う", "欲しいと思う", "〜を降ろす"] },
    { word: "make", correct: "作る", options: ["配る", "待つ", "〜を迎えに行く"] },
    { word: "get over", correct: "乗り越える", options: ["洗う", "売る", "現れる・音量を上げる"] },
    { word: "know", correct: "知っている", options: ["戻ってくる", "乗り込む・入る", "座る"] },
    { word: "log in to the app", correct: "アプリにログインする", options: ["閉める", "覚えている", "提出する"] },
    { word: "log in", correct: "ログインする", options: ["アプリにログインする", "乗り越える", "（用紙に）書き込む"] },
    { word: "eat", correct: "食べる", options: ["戻る", "疲れる", "立ち上がる"] },
    { word: "spend", correct: "（時間・お金を）使う", options: ["滞在する", "眠りに落ちる", "チェックアウトする"] },
    { word: "go out", correct: "外出する", options: ["気分が悪い", "うまくいく・解決する", "持っている"] },
    { word: "go", correct: "行く", options: ["手伝う", "世話をする", "忘れる"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["立ち上がる", "〜を起こす", "電話する"] },
    { word: "open up", correct: "打ち明ける", options: ["手に入れる", "シャットダウンする", "飲む"] },
    { word: "save", correct: "節約する・保存する", options: ["〜に同意する", "持っている", "欲しいと思う"] },
    { word: "check", correct: "確認する", options: ["書き留める", "元気づける", "見てみる・チェックする"] },
    { word: "get over", correct: "乗り越える", options: ["拾う・迎えに行く", "手に入れる", "滞在する"] },
    { word: "forget", correct: "忘れる", options: ["売る", "終える", "現れる・音量を上げる"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["忘れる", "座る", "節約する・保存する"] },
    { word: "say", correct: "言う", options: ["眠りに落ちる", "チェックインする", "電話する"] },
    { word: "check in", correct: "チェックインする", options: ["立ち上がる", "飲む", "売る"] },
    { word: "take", correct: "取る・連れて行く", options: ["書き留める", "考える", "ログアウトする"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["拾う・迎えに行く", "勉強する", "見てみる・チェックする"] },
    { word: "come", correct: "来る", options: ["洗う", "（お金が）かかる", "早起きする"] },
    { word: "make", correct: "作る", options: ["配る", "売る", "聞こえる"] },
    { word: "stay", correct: "滞在する", options: ["アプリにログインする", "考える", "立ち上がる"] },
    { word: "cost", correct: "（お金が）かかる", options: ["〜を楽しみにする", "気分が悪い", "戻ってくる"] },
    { word: "depend on", correct: "〜に頼る・依存する", options: ["見る", "〜について考える", "手に入れる"] },
    { word: "see", correct: "見る", options: ["疲れる", "理解する", "滞在する"] },
    { word: "get tired", correct: "疲れる", options: ["聞く", "乗り越える", "する"] },
    { word: "come", correct: "来る", options: ["（時間・お金を）使う", "知っている", "旅行する"] },
    { word: "go back", correct: "戻る", options: ["滞在する", "取る・連れて行く", "〜に所属する"] },
    { word: "write down", correct: "書き留める", options: ["洗う", "与える", "〜について考える"] },
    { word: "write down", correct: "書き留める", options: ["行く", "乗り込む・入る", "うまくいく・解決する"] },
    { word: "sign up", correct: "登録する", options: ["提出する", "行く", "うまくいく・解決する"] },
    { word: "worry about", correct: "〜を心配する", options: ["掃除する", "考える", "伝える"] },
    { word: "open up", correct: "打ち明ける", options: ["飲む", "別れる", "買う"] },
    { word: "stay up late", correct: "夜更かしする", options: ["うまくいく・解決する", "（用紙に）書き込む", "住む"] },
    { word: "go out", correct: "外出する", options: ["眠りに落ちる", "手に入れる", "使う"] },
    { word: "calm down", correct: "落ち着く", options: ["外出する", "早起きする", "延期する"] },
    { word: "find", correct: "見つける", options: ["考える", "提出する", "見る"] },
    { word: "agree with", correct: "〜に同意する", options: ["来る", "与える", "滞在する"] },
    { word: "get tired", correct: "疲れる", options: ["〜に頼る・依存する", "行く", "夜更かしする"] },
    { word: "check it out", correct: "見てみる・チェックする", options: ["〜を迎えに行く", "急ぐ", "料理する"] },
    { word: "call", correct: "電話する", options: ["食べる", "〜とうまくやる", "〜に同意する"] },
    { word: "take", correct: "取る・連れて行く", options: ["食べる", "起床する", "世話をする"] },
    { word: "get up", correct: "起床する", options: ["アプリにログインする", "食べる", "〜とうまくやる"] },
    { word: "give", correct: "与える", options: ["旅行する", "試す", "立ち寄る"] },
    { word: "use", correct: "使う", options: ["待つ", "世話をする", "〜に頼る・依存する"] },
    { word: "forget", correct: "忘れる", options: ["夜更かしする", "〜を起こす", "〜を迎えに行く"] },
    { word: "pick up", correct: "拾う・迎えに行く", options: ["起きる", "実行する", "故障する"] },
    { word: "call", correct: "電話する", options: ["取る・連れて行く", "〜に所属する", "動く・引っ越す"] },
    { word: "come back", correct: "戻ってくる", options: ["節約する・保存する", "成長する", "ログアウトする"] },
    { word: "find", correct: "見つける", options: ["登録する", "使う", "実行する"] },
    { word: "listen", correct: "聞く", options: ["確認する", "シャットダウンする", "戻ってくる"] },
    { word: "hang out", correct: "遊ぶ・ぶらぶらする", options: ["話題に出す・育てる", "閉める", "戻ってくる"] },
    { word: "get along with", correct: "〜とうまくやる", options: ["話す（言語）", "登録する", "会う"] },
    { word: "hand out", correct: "配る", options: ["学ぶ", "理解する", "来る"] },
    { word: "cost", correct: "（お金が）かかる", options: ["（用紙に）書き込む", "早起きする", "実行する"] },
    { word: "break down", correct: "故障する", options: ["支払う", "探す", "話題に出す・育てる"] },
    { word: "wake up early", correct: "早起きする", options: ["見る", "起床する", "世話をする"] },
    { word: "use", correct: "使う", options: ["戻る", "〜を起こす", "見る"] },
    { word: "fill out", correct: "（用紙に）書き込む", options: ["買う", "落ち着く", "欲しいと思う"] },
    { word: "carry out", correct: "実行する", options: ["音量を下げる・断る", "聞こえる", "ログインする"] },
    { word: "start", correct: "始める", options: ["立ち上がる", "わかる・見つけ出す", "〜について考える"] },
    { word: "break up", correct: "別れる", options: ["戻る", "見る", "考える"] },
    { word: "talk", correct: "話す", options: ["伝える", "与える", "見つける"] },
    { word: "slow down", correct: "スピードを落とす", options: ["（時間・お金を）使う", "〜に所属する", "飲む"] },
    { word: "carry out", correct: "実行する", options: ["売る", "成長する", "（お金が）かかる"] },
    { word: "wait", correct: "待つ", options: ["滞在する", "疲れる", "（電源を）つける"] },
    { word: "try", correct: "試す", options: ["〜に頼る・依存する", "〜を降ろす", "乗る"] },
    { word: "come back", correct: "戻ってくる", options: ["する", "試す", "食べる"] },
    { word: "remember", correct: "覚えている", options: ["動く・引っ越す", "拾う・迎えに行く", "旅行する"] },
    { word: "get", correct: "手に入れる", options: ["座る", "成長する", "見る"] },
    { word: "stay up late", correct: "夜更かしする", options: ["世話をする", "チェックインする", "見つける"] },
    { word: "forget", correct: "忘れる", options: ["寝る", "理解する", "洗う"] },
    { word: "remember", correct: "覚えている", options: ["起床する", "準備をする", "知っている"] },
    { word: "stay up late", correct: "夜更かしする", options: ["（電源を）つける", "聞こえる", "〜を心配する"] },
    { word: "hear", correct: "聞こえる", options: ["持っている", "遊ぶ・ぶらぶらする", "（お金が）かかる"] },
    { word: "go", correct: "行く", options: ["探す", "寝る", "料理する"] },
    { word: "make", correct: "作る", options: ["飲む", "アプリにログインする", "乗り越える"] },
    { word: "carry out", correct: "実行する", options: ["降りる", "洗う", "試す"] },
    { word: "hurry up", correct: "急ぐ", options: ["疲れる", "〜を楽しみにする", "閉める"] },
    { word: "pay", correct: "支払う", options: ["話題に出す・育てる", "シャットダウンする", "外出する"] },
    { word: "stay", correct: "滞在する", options: ["拾う・迎えに行く", "現れる", "座る"] },
    { word: "think", correct: "考える", options: ["学ぶ", "気分が悪い", "（用紙に）書き込む"] },
    { word: "eat", correct: "食べる", options: ["する", "世話をする", "脱ぐ・離陸する"] },
    { word: "wake up early", correct: "早起きする", options: ["別れる", "話す（言語）", "〜を起こす"] },
    { word: "call off", correct: "中止する", options: ["ログインする", "〜を迎えに行く", "開ける"] },
    { word: "speak", correct: "話す（言語）", options: ["眠りに落ちる", "〜に頼る・依存する", "する"] },
    { word: "want", correct: "欲しいと思う", options: ["見てみる・チェックする", "買う", "言う"] },
    { word: "stand up", correct: "立ち上がる", options: ["設定する・準備する", "配る", "試す"] },
    { word: "listen", correct: "聞く", options: ["ログアウトする", "見る", "座る"] },
    { word: "pay", correct: "支払う", options: ["音量を下げる・断る", "設定する・準備する", "登録する"] },
    { word: "fill out", correct: "（用紙に）書き込む", options: ["聞く", "覚えている", "準備をする"] },
    { word: "belong to", correct: "〜に所属する", options: ["考える", "探す", "乗り込む・入る"] },
    { word: "drop by", correct: "立ち寄る", options: ["（お金が）かかる", "節約する・保存する", "探す"] },
    { word: "open", correct: "開ける", options: ["持っている", "気分が良くなる", "知っている"] },
    { word: "turn off", correct: "（電源を）消す", options: ["手伝う", "休憩する", "〜を心配する"] },
    { word: "listen", correct: "聞く", options: ["降りる", "登録する", "試す"] },
    { word: "remember", correct: "覚えている", options: ["〜を降ろす", "必要とする", "節約する・保存する"] },
    { word: "cook", correct: "料理する", options: ["わかる・見つけ出す", "提出する", "〜を心配する"] },
    { word: "turn up", correct: "現れる・音量を上げる", options: ["売る", "急ぐ", "シャットダウンする"] },
    { word: "set up", correct: "設定する・準備する", options: ["必要とする", "試す", "〜を降ろす"] },
    { word: "set up", correct: "設定する・準備する", options: ["持っている", "ログインする", "〜に所属する"] },
    { word: "write down", correct: "書き留める", options: ["飲む", "成長する", "早起きする"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["伝える", "見る", "〜について考える"] },
    { word: "look for", correct: "探す", options: ["ログインする", "使う", "理解する"] },
    { word: "remember", correct: "覚えている", options: ["現れる", "理解する", "戻る"] },
    { word: "spend", correct: "（時間・お金を）使う", options: ["元気づける", "知っている", "する"] },
    { word: "try", correct: "試す", options: ["登録する", "世話をする", "〜に同意する"] },
    { word: "hang out", correct: "遊ぶ・ぶらぶらする", options: ["書き留める", "〜を起こす", "掃除する"] },
    { word: "get", correct: "手に入れる", options: ["うまくいく・解決する", "〜を起こす", "落ち着く"] },
    { word: "meet", correct: "会う", options: ["（電源を）消す", "うまくいく・解決する", "洗う"] },
    { word: "wake up early", correct: "早起きする", options: ["〜とうまくやる", "急ぐ", "話す"] },
    { word: "fill out", correct: "（用紙に）書き込む", options: ["提出する", "世話をする", "アプリにログインする"] },
    { word: "get ready", correct: "準備をする", options: ["試す", "滞在する", "住む"] },
    { word: "run into", correct: "偶然出会う", options: ["見る", "疲れる", "延期する"] },
    { word: "go", correct: "行く", options: ["使う", "見てみる・チェックする", "起きる"] },
    { word: "try", correct: "試す", options: ["気分が良くなる", "世話をする", "配る"] },
    { word: "do", correct: "する", options: ["疲れる", "〜とうまくやる", "学ぶ"] },
    { word: "speak", correct: "話す（言語）", options: ["話題に出す・育てる", "覚えている", "勉強する"] },
    { word: "cheer up", correct: "元気づける", options: ["（時間・お金を）使う", "旅行する", "登録する"] },
    { word: "turn on", correct: "（電源を）つける", options: ["〜に所属する", "取る・連れて行く", "世話をする"] },
    { word: "do", correct: "する", options: ["〜を楽しみにする", "料理する", "外出する"] },
    { word: "learn", correct: "学ぶ", options: ["理解する", "世話をする", "（電源を）つける"] },
    { word: "think about", correct: "〜について考える", options: ["支払う", "（電源を）消す", "考える"] },
    { word: "talk", correct: "話す", options: ["必要とする", "持っている", "戻ってくる"] },
    { word: "take off", correct: "脱ぐ・離陸する", options: ["降りる", "聞く", "終える"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["準備をする", "（電源を）つける", "起床する"] },
    { word: "find out", correct: "わかる・見つけ出す", options: ["立ち寄る", "乗り込む・入る", "学ぶ"] },
    { word: "use", correct: "使う", options: ["現れる", "世話をする", "言う"] },
    { word: "ask", correct: "尋ねる", options: ["支払う", "うまくいく・解決する", "休憩する"] },
    { word: "hang out", correct: "遊ぶ・ぶらぶらする", options: ["わかる・見つけ出す", "〜を起こす", "伝える"] },
    { word: "open", correct: "開ける", options: ["〜に所属する", "取る・連れて行く", "身に着ける"] },
    { word: "hand in", correct: "提出する", options: ["戻る", "起きる", "節約する・保存する"] },
    { word: "turn down", correct: "音量を下げる・断る", options: ["行く", "見てみる・チェックする", "〜を心配する"] },
    { word: "run into", correct: "偶然出会う", options: ["来る", "登録する", "話す（言語）"] },
    { word: "write down", correct: "書き留める", options: ["降りる", "（お金が）かかる", "待つ"] },
    { word: "get over", correct: "乗り越える", options: ["〜に所属する", "眠りに落ちる", "覚えている"] },
    { word: "meet", correct: "会う", options: ["持っている", "来る", "〜について考える"] },
    { word: "drop someone off", correct: "〜を降ろす", options: ["探す", "飲む", "作る"] },
    { word: "get up", correct: "起床する", options: ["見つける", "旅行する", "準備をする"] },
    { word: "finish", correct: "終える", options: ["買う", "中止する", "（電源を）消す"] },
    { word: "open", correct: "開ける", options: ["見る", "アプリにログインする", "見てみる・チェックする"] },
    { word: "show up", correct: "現れる", options: ["食べる", "座る", "現れる・音量を上げる"] }
];


let currentScreen = 'registration';
let username = '';
let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalAnswers = 0;
let startTime = null;
let questionStartTime = null;
let todayTotalCorrect = 0; // Today's cumulative correct answers
let todayTotalAnswers = 0; // Today's cumulative total answers (correct + incorrect)
let totalLifetimeCorrect = 0; // Lifetime cumulative correct answers
let previousLevel = 1; // Previous level before this session
let progressChart = null; // Chart.js instance
let shuffledQuestions = []; // Shuffled question pool for current session
let questionPoolIndex = 0; // Current index in shuffled pool
let currentQuestion = null; // Current question object

// DOM elements
const registrationScreen = document.getElementById('registration-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const levelupScreen = document.getElementById('levelup-screen');

const usernameInput = document.getElementById('username-input');
const registerBtn = document.getElementById('register-btn');
const startBtn = document.getElementById('start-btn');
const viewResultsBtn = document.getElementById('view-results-btn');
const finishBtn = document.getElementById('finish-btn');
const endBtn = document.getElementById('end-btn');

const wordDisplay = document.getElementById('word-display');
const choiceBtns = document.querySelectorAll('.choice-btn');
const correctCountEl = document.getElementById('correct-count');
const totalCountEl = document.getElementById('total-count');
const totalCountFractionEl = document.getElementById('total-count-fraction');
const timeSpentEl = document.getElementById('time-spent');

const quizUsernameEl = document.getElementById('quiz-username');
const resultsUsernameEl = document.getElementById('results-username');
const levelupUsernameEl = document.getElementById('levelup-username');
const levelupTextEl = document.getElementById('levelup-text');


// Initialize app
function init() {
    console.log('App initialized');

    // Check if username exists in localStorage
    try {
        const savedUsername = localStorage.getItem('username');
        console.log('Saved username:', savedUsername);
        if (savedUsername) {
            username = savedUsername;
            showScreen('start');
        } else {
            showScreen('registration');
        }
    } catch (error) {
        console.error('Error accessing localStorage:', error);
        showScreen('registration');
    }

    // Load today's cumulative score and lifetime score
    loadTodayScore();
    loadLifetimeScore();

    // Ensure all days are recorded
    if (username) {
        ensureAllDaysRecorded();
    }

    // Event listeners
    console.log('Setting up event listeners');
    if (registerBtn) {
        registerBtn.addEventListener('click', handleRegistration);
        console.log('Register button listener added');
    } else {
        console.error('Register button not found');
    }

    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
    }

    if (viewResultsBtn) {
        viewResultsBtn.addEventListener('click', showResults);
    }

    if (finishBtn) {
        finishBtn.addEventListener('click', handleFinish);
    }

    if (endBtn) {
        endBtn.addEventListener('click', () => showScreen('start'));
    }

    choiceBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => handleAnswer(index));
    });

    console.log('All event listeners set up');
}

// Get today's date as string (YYYY-MM-DD)
function getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

// Load today's cumulative score
function loadTodayScore() {
    const today = getTodayDateString();
    const scoreKey = `score_${username}_${today}`;
    const answersKey = `answers_${username}_${today}`;
    const savedScore = localStorage.getItem(scoreKey);
    const savedAnswers = localStorage.getItem(answersKey);
    todayTotalCorrect = savedScore ? parseInt(savedScore) : 0;
    todayTotalAnswers = savedAnswers ? parseInt(savedAnswers) : 0;
}

// Save today's cumulative score and answers
function saveTodayScore() {
    const today = getTodayDateString();
    const scoreKey = `score_${username}_${today}`;
    const answersKey = `answers_${username}_${today}`;
    localStorage.setItem(scoreKey, todayTotalCorrect.toString());
    localStorage.setItem(answersKey, todayTotalAnswers.toString());
}



// Get score history for the last N days
function getScoreHistory(days = 7) {
    const history = [];
    const today = new Date();

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        const scoreKey = `score_${username}_${dateString}`;
        const answersKey = `answers_${username}_${dateString}`;
        const score = localStorage.getItem(scoreKey);
        const answers = localStorage.getItem(answersKey);
        const dailyCorrect = score ? parseInt(score) : 0;
        const dailyAnswers = answers ? parseInt(answers) : 0;

        // Format as M/D (e.g., 11/26)
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const displayDate = `${month}/${day}`;

        history.push({
            date: dateString,
            displayDate: displayDate,
            score: dailyCorrect,  // Use correct answers for graph
            answers: dailyAnswers  // Total answers
        });
    }

    return history;
}

// Generate comment based on score comparison
// Comment data from CSV


// Load lifetime cumulative score
function loadLifetimeScore() {
    const lifetimeKey = `lifetime_${username}`;
    const savedScore = localStorage.getItem(lifetimeKey);
    totalLifetimeCorrect = savedScore ? parseInt(savedScore) : 0;
    previousLevel = calculateLevel(totalLifetimeCorrect);
}

// Save lifetime cumulative score
function saveLifetimeScore() {
    const lifetimeKey = `lifetime_${username}`;
    localStorage.setItem(lifetimeKey, totalLifetimeCorrect.toString());
}

// Get or set first used date
function getFirstUsedDate() {
    const firstUsedKey = `firstUsed_${username}`;
    let firstUsedDate = localStorage.getItem(firstUsedKey);

    if (!firstUsedDate) {
        // Set today as first used date
        const today = new Date();
        firstUsedDate = today.toISOString().split('T')[0];
        localStorage.setItem(firstUsedKey, firstUsedDate);
    }

    return firstUsedDate;
}

// Save score with 0 for days not opened
function ensureAllDaysRecorded() {
    const firstUsedDate = getFirstUsedDate();
    const firstDate = new Date(firstUsedDate);
    const today = new Date();

    // Loop through all days from first used to today
    const currentDate = new Date(firstDate);
    while (currentDate <= today) {
        const dateString = currentDate.toISOString().split('T')[0];
        const scoreKey = `score_${username}_${dateString}`;
        const answersKey = `answers_${username}_${dateString}`;

        // If no record exists, set to 0
        if (localStorage.getItem(scoreKey) === null) {
            localStorage.setItem(scoreKey, '0');
        }
        if (localStorage.getItem(answersKey) === null) {
            localStorage.setItem(answersKey, '0');
        }

        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Calculate level from total correct answers
function calculateLevel(totalCorrect) {
    return Math.floor(totalCorrect / 10) + 1;
}

// Check if user leveled up
function checkLevelUp() {
    const newLevel = calculateLevel(totalLifetimeCorrect);
    return newLevel > previousLevel ? newLevel : null;
}

// Show screen
function showScreen(screen) {
    registrationScreen.classList.add('hidden');
    startScreen.classList.add('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    levelupScreen.classList.add('hidden');

    switch (screen) {
        case 'registration':
            registrationScreen.classList.remove('hidden');
            break;
        case 'start':
            startScreen.classList.remove('hidden');
            break;
        case 'quiz':
            quizScreen.classList.remove('hidden');
            quizUsernameEl.textContent = username + 'さん';
            break;
        case 'results':
            resultsScreen.classList.remove('hidden');
            resultsUsernameEl.textContent = username + 'さん';
            break;
        case 'levelup':
            levelupScreen.classList.remove('hidden');
            levelupUsernameEl.textContent = username + 'さん';
            break;
    }

    currentScreen = screen;
}

// Handle registration
function handleRegistration() {
    console.log('handleRegistration called');
    const name = usernameInput.value.trim();
    console.log('Username entered:', name);
    if (name) {
        username = name;
        try {
            localStorage.setItem('username', name);
            console.log('Username saved to localStorage');
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('localStorageへの保存に失敗しました。ブラウザの設定を確認してください。');
        }
        loadTodayScore();
        loadLifetimeScore();

        // Set first used date
        getFirstUsedDate();
        ensureAllDaysRecorded();

        showScreen('start');
    } else {
        alert('名前を入力してください。');
    }
}

// Start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0; // Reset session correct answers
    totalAnswers = 0;
    startTime = Date.now();

    // Shuffle questions for this session
    shuffledQuestions = shuffleArray(vocabulary);
    questionPoolIndex = 0;

    showScreen('quiz');
    loadQuestion();
}

// Load question
function loadQuestion() {
    // Check if we ran out of questions
    if (questionPoolIndex >= shuffledQuestions.length) {
        // Reshuffle if needed (start over with new order)
        shuffledQuestions = shuffleArray(vocabulary);
        questionPoolIndex = 0;
    }

    currentQuestion = shuffledQuestions[questionPoolIndex];
    questionPoolIndex++;

    wordDisplay.textContent = currentQuestion.word;

    // Create shuffled choices
    const choices = [currentQuestion.correct, ...currentQuestion.options];
    const shuffledChoices = shuffleArray(choices);

    // Update choice buttons
    choiceBtns.forEach((btn, index) => {
        btn.classList.remove('correct', 'incorrect', 'disabled');
        const choiceText = btn.querySelector('.choice-text');
        choiceText.textContent = shuffledChoices[index];
        btn.dataset.answer = shuffledChoices[index];
    });

    questionStartTime = Date.now();
}

// Handle answer
function handleAnswer(index) {
    const selectedBtn = choiceBtns[index];
    const selectedAnswer = selectedBtn.dataset.answer;
    const question = currentQuestion;
    const isCorrect = selectedAnswer === question.correct;

    // Disable all buttons
    choiceBtns.forEach(btn => btn.classList.add('disabled'));

    // Show feedback
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        correctAnswers++;
    } else {
        selectedBtn.classList.add('incorrect');
        // Highlight correct answer
        choiceBtns.forEach(btn => {
            if (btn.dataset.answer === question.correct) {
                btn.classList.add('correct');
            }
        });
    }

    totalAnswers++;

    // Move to next question after 1 second
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1000);
}

// Show results
function showResults() {
    let timeSpent = 0;

    // Check if quiz has been started
    if (startTime !== null) {
        const endTime = Date.now();
        timeSpent = Math.floor((endTime - startTime) / 1000);

        // Update today's cumulative score and answers
        todayTotalCorrect += correctAnswers;
        todayTotalAnswers += totalAnswers;
        saveTodayScore();

        // Update lifetime cumulative score
        totalLifetimeCorrect += correctAnswers;
        saveLifetimeScore();
    }

    // Update stats
    correctCountEl.textContent = correctAnswers;
    totalCountFractionEl.textContent = totalAnswers;
    totalCountEl.textContent = totalAnswers;
    timeSpentEl.textContent = timeSpent;

    // Save time spent
    if (timeSpent > 0) {
        saveTimeSpent(timeSpent);
    }

    // Ensure all days are recorded
    ensureAllDaysRecorded();

    // Render calendar and table
    renderCalendar();
    renderDataTable();

    showScreen('results');
}

// Draw progress chart


// Render calendar
function renderCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const calendarMonth = document.getElementById('calendar-month');
    const streakText = document.getElementById('streak-text');

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    // Set month display
    calendarMonth.textContent = `${month + 1}月`;

    // Get first day of month and total days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    // Clear calendar
    calendarGrid.innerHTML = '';

    // Add day headers
    const dayHeaders = ['日', '月', '火', '水', '木', '金', '土'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        calendarGrid.appendChild(header);
    });

    // Add empty cells for days before month starts
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyDay);
    }

    // Add days of month
    const todayDate = today.getDate();
    const todayString = getTodayDateString();

    for (let day = 1; day <= totalDays; day++) {
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;

        // Check if this day has study data
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const answersKey = `answers_${username}_${dateString}`;
        const answers = localStorage.getItem(answersKey);
        const hasStudied = answers && parseInt(answers) > 0;

        if (dateString === todayString && hasStudied) {
            dayEl.classList.add('today');
        } else if (hasStudied && day < todayDate) {
            dayEl.classList.add('studied');
        }

        calendarGrid.appendChild(dayEl);
    }

    // Calculate streak
    const streak = calculateStreak();
    streakText.textContent = `${streak}日連続学習！`;
}

// Calculate consecutive study days
function calculateStreak() {
    let streak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split('T')[0];
        const answersKey = `answers_${username}_${dateString}`;
        const answers = localStorage.getItem(answersKey);

        if (answers && parseInt(answers) > 0) {
            streak++;
        } else {
            break;
        }
    }

    return streak;
}

// Render data table
function renderDataTable() {
    const dataTable = document.getElementById('data-table');
    const cumulativeText = document.getElementById('cumulative-text');

    // Get all data from first used date to today
    const firstUsedDate = getFirstUsedDate();
    const firstDate = new Date(firstUsedDate);
    const today = new Date();

    const allData = [];
    let cumulativeTotal = 0;

    const currentDate = new Date(firstDate);
    while (currentDate <= today) {
        const dateString = currentDate.toISOString().split('T')[0];
        const scoreKey = `score_${username}_${dateString}`;
        const answersKey = `answers_${username}_${dateString}`;
        const timeKey = `time_${username}_${dateString}`;

        const score = localStorage.getItem(scoreKey);
        const answers = localStorage.getItem(answersKey);
        const time = localStorage.getItem(timeKey);

        const correctCount = score ? parseInt(score) : 0;
        const answerCount = answers ? parseInt(answers) : 0;
        const timeSpent = time ? parseInt(time) : 0;

        cumulativeTotal += answerCount;

        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        allData.push({
            date: `${month}/${day}`,
            dateString: dateString,
            correct: correctCount,
            answers: answerCount,
            time: timeSpent,
            cumulative: cumulativeTotal
        });

        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Update cumulative text
    cumulativeText.textContent = `累計学習量${cumulativeTotal}問！`;

    // Create table
    const table = document.createElement('table');
    table.className = 'generated-table';

    const todayString = getTodayDateString();

    // Create header row with dates
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.className = 'table-header-row';

    // First column is empty (for row labels)
    const emptyTh = document.createElement('th');
    emptyTh.className = 'table-header-cell no-background';
    emptyTh.textContent = '';
    headerRow.appendChild(emptyTh);

    // Add date columns
    allData.forEach(data => {
        const th = document.createElement('th');
        th.className = 'table-header-cell';
        if (data.dateString === todayString) {
            th.classList.add('highlight');
        }
        th.textContent = data.date;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create body with transposed data
    const tbody = document.createElement('tbody');
    const metrics = [
        { label: '正答数', key: 'correct' },
        { label: '解答数', key: 'answers' },
        { label: '解答時間', key: 'time' },
        { label: '累計解答数', key: 'cumulative' }
    ];

    metrics.forEach((metric, index) => {
        const tr = document.createElement('tr');
        tr.className = 'table-data-row';

        // First cell is the metric label
        const labelTd = document.createElement('td');
        labelTd.className = 'table-row-label';
        labelTd.textContent = metric.label;
        tr.appendChild(labelTd);

        // Add data cells for each date
        allData.forEach(data => {
            const td = document.createElement('td');
            td.className = 'table-data-cell';
            if (data.dateString === todayString) {
                td.classList.add('highlight');
            }
            td.textContent = data[metric.key];
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // Clear and add table
    dataTable.innerHTML = '';
    dataTable.appendChild(table);
}

// Save time spent for today
function saveTimeSpent(timeSpent) {
    const today = getTodayDateString();
    const timeKey = `time_${username}_${today}`;

    // Get existing time and add to it
    const existingTime = localStorage.getItem(timeKey);
    const totalTime = existingTime ? parseInt(existingTime) + timeSpent : timeSpent;

    localStorage.setItem(timeKey, totalTime.toString());
}

// Handle finish button click
function handleFinish() {
    showScreen('start');
}

// Utility: Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Start app
init();
