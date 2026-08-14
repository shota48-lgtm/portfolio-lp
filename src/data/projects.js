// group: 作品の並べ方を決める。
//   "measure" = 測る仕組みそのもの(品質を測り、基準を割ったら止める側)
//   "app"     = 業務で使うアプリケーション
// 「主要 / そのほか」で分けない。後者は受注を検討する読者にとって
// 判断材料になる4件であり、格下げして見せる理由がない。
// 領域が違うという並びなら、どちらも下がらない。
//
// short: 他の節から作品を指すときの短い呼び名。title は長すぎ、
// repo はリポジトリ名であって作品名ではないため、別に持たせる。
export const projects = [
  {
    title: "勤怠とつながる仮想オフィス tenko",
    repo: "tenko",
    short: "tenko",
    group: "app",
    summary:
      "ドット絵の村に社員のアバターが並び、在席状態・今日やること・話しかけ可否が一目で分かります。発言から勤怠の下書きが立ち、確定は必ず人間が押します。",
    tech: ["Next.js", "TypeScript", "WebSocket (Node.js)", "PostgreSQL (Neon)", "Auth.js v5"],
    image: "/works/tenko.jpg",
    url: "https://tenko-eight.vercel.app",
    github: "https://github.com/shota48-lgtm/tenko",
    status: "本番稼働中",
  },
  {
    title: "LLM出力の回帰テスト基盤 aegis",
    repo: "aegis",
    short: "aegis",
    group: "measure",
    summary:
      "問い合わせを仕分けし返信の下書きを作る一次対応ツール。毎回変わるLLMの出力に回帰テストをかけ、精度が基準から落ちたらCIで止めます。合成データと実データで精度が53.6ポイント違い、その原因まで測って公開しています。",
    tech: ["Python", "llama.cpp", "Qwen2.5-7B", "GitHub Actions"],
    image: "/works/aegis.png",
    url: "https://aegis-one-neon.vercel.app",
    github: "https://github.com/shota48-lgtm/aegis",
    status: "本番稼働中",
    latest: true,
  },
  {
    title: "ABテスト基盤 ablens",
    repo: "ablens",
    short: "ablens",
    group: "measure",
    summary:
      "LPのA/Bテストを配信から統計判定まで一気通貫で行う自作基盤。サンプル数が足りないうちは判定を出さない設計で、判定の根拠をすべて画面で示します。",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Playwright"],
    image: "/works/ablens.png",
    url: "https://ablens.vercel.app/demo",
    github: "https://github.com/shota48-lgtm/ablens",
    status: "本番稼働中",
  },
  {
    title: "デジタル商品の販売サイト",
    repo: "ec-app",
    short: "販売サイト",
    group: "app",
    summary:
      "カード決済つきの販売サイト。購入から返金まで一通り動きます。カード情報は自社サーバーを経由しない構成です。",
    tech: ["React", "Vite", "Supabase", "Stripe"],
    image: "/works/ec-app.png",
    url: "https://ec-app-seven.vercel.app",
    github: "https://github.com/shota48-lgtm/ec-app",
    status: "本番稼働中",
  },
  {
    title: "サロン予約管理",
    repo: "reservation-app",
    short: "予約管理",
    group: "app",
    summary:
      "公開の予約ページは会員登録なしで使えます。店側だけが顧客情報を見られる権限設計にしており、リンク先のトップは店舗管理者向けのログイン画面です。",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    image: "/works/reservation-app.png",
    url: "https://reservation-app-omega-blond.vercel.app",
    github: "https://github.com/shota48-lgtm/reservation-app",
    status: "本番稼働中",
  },
  {
    title: "スタイル診断アプリ",
    repo: "style-diagnosis-app",
    short: "スタイル診断",
    group: "app",
    summary:
      "13問の診断結果から、外部APIで実在の商品を検索して提案します。成立しない手法は検証記録を残して不採用にしました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "楽天市場API"],
    image: "/works/style-diagnosis.png",
    url: "https://style-diagnosis-app.vercel.app",
    github: "https://github.com/shota48-lgtm/style-diagnosis-app",
    status: "本番稼働中",
  },
  {
    title: "就業規則の質問応答システム",
    repo: "rag-kitei-qa",
    short: "就業規則QA",
    group: "app",
    summary:
      "就業規則について質問すると、根拠となる条文を示して回答します(RAG)。答えの正確さは50問の評価で測って公開。同じ条文検索は MCP サーバーとしても提供し、AIエージェントから直接呼び出せます。無料枠のため、しばらくアクセスがないとスリープします。開いて「Yes, get this app back up!」を押すと十数秒で起動します。",
    tech: ["Python", "Streamlit", "FAISS", "Gemini API", "MCP"],
    image: "/works/rag-kitei-qa.png",
    url: "https://rag-kitei-demo.streamlit.app/",
    github: "https://github.com/shota48-lgtm/rag-kitei-qa",
    // 他の6件と違い、無料枠のため無アクセスが続くとスリープする。
    // 「本番稼働中」とだけ書くと、Zzzz 画面を見た人には嘘になる
    status: "本番稼働中(スリープあり)",
  },
];

export const profile = {
  name: "菊地 祥太",
  role: "Webエンジニア",
  // ヒーローの補足文。見出し「測ってから、言い切る。」が姿勢しか語らないため、
  // ここで「何を測るのか」と「何を作れるのか」の両方を受ける
  catch:
    "「動きます」ではなく、実測値とテストの通過を証拠として出します。決済・予約・AIによる文書検索まで、要件定義から公開まで一人で作ります。",
  lead:
    "「動いています」ではなく、実行結果とテストの通過を証拠として提示します。手戻りの原因になる認識のズレを、着手前の設計段階で潰します。",
  crowdworksUrl: "https://crowdworks.jp/public/employees/7100072",
  crowdworksHandle: "Tofu_shota48",
};

// stats の出典(2026-08-10 実測。判断記録の追記に伴い再計測。
//              2026-08-13 tenko の公開に伴い PRODUCTS と DOMAINS を +1)
//   7   = 本番稼働中のアプリ数(tenko / aegis / ablens / ec-app /
//         reservation-app / style-diagnosis-app / rag-kitei-qa)
//         rag-kitei-qa は無料枠のためスリープするが、起こせば動くので数に含める
//   182 = ablens の自動テスト件数(単体168 + 統合14。npm run test:all の実行結果)
//         aegis には単体テストが存在しないため増えていない。
//         回帰検出は持つが別の指標であり、数字を増やすために定義を変えない。
//   164 = 判断記録の件数(開発ルートの JUDGMENT_HEURISTICS.md 137件 +
//         style-diagnosis-app 側で凍結された J1〜J27 の27件。
//         前者は Select-String '^## J\d+'、後者は '^### J\d+' での実測。
//         見出しの階層が両者で異なるため、同じパターンでは数えられない。
//         前回の161件から+3は J207〜J209 の追記による。
//         この数は開発が進むたびに増えるため、LPを更新する際は必ず測り直す)
//   7   = 対応ドメイン数(決済 / 予約 / 外部API / AI文書検索 / A/Bテスト計測 /
//         AI品質保証 / 勤怠・在席管理)
//         最後の1つが tenko。既存6領域のどれにも当てはまらないため領域を1つ足した
//
// desc は数字だけでは何を数えたのか伝わらないため付ける1行説明。
// href を持つのは DECISIONS のみ(該当セクションが本ページ内にあるため)。
// 大きな数字を4つ並べたうえで全部を強調すると、どれも強調にならない。
export const stats = [
  { num: 7, label: "PRODUCTS", desc: "本番稼働中" },
  { num: 182, label: "TESTS", desc: "自動テスト件数" },
  { num: 164, label: "DECISIONS", desc: "判断と撤回の記録", href: "#decisions" },
  { num: 7, label: "DOMAINS", desc: "扱った領域" },
];

export const services = [
  "カード決済つきの販売サイト",
  "予約・顧客管理システム",
  "会員機能つきWebアプリ",
  "外部APIと連携する仕組み",
  "既存サイトの改修・機能追加",
];
