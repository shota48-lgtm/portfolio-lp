export const projects = [
  {
    title: "LLM出力の回帰テスト基盤 aegis",
    repo: "aegis",
    category: ["AI・品質保証"],
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
    category: ["A/Bテスト・計測"],
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
    category: ["EC・決済"],
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
    category: ["予約・顧客管理"],
    summary:
      "予約する側は会員登録なしで使えます。店側だけが顧客情報を見られる権限設計にしています。",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    image: "/works/reservation-app.png",
    url: "https://reservation-app-omega-blond.vercel.app",
    github: "https://github.com/shota48-lgtm/reservation-app",
    status: "本番稼働中",
  },
  {
    title: "スタイル診断アプリ",
    repo: "style-diagnosis-app",
    category: ["外部API連携"],
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
    category: ["AI・文書検索"],
    summary:
      "就業規則について質問すると、根拠となる条文を示して回答します(RAG)。答えの正確さは50問の評価で測って公開。同じ条文検索は MCP サーバーとしても提供し、AIエージェントから直接呼び出せます。",
    tech: ["Python", "Streamlit", "FAISS", "Gemini API", "MCP"],
    image: "/works/rag-kitei-qa.png",
    url: "https://rag-kitei-demo.streamlit.app/",
    github: "https://github.com/shota48-lgtm/rag-kitei-qa",
    status: "本番稼働中",
  },
];

export const profile = {
  name: "菊地 祥太",
  role: "Webエンジニア",
  catch:
    "決済・予約・AIによる文書検索まで、Webアプリを要件定義から公開まで一人で作ります。",
  lead:
    "「動いています」ではなく、実行結果とテストの通過を証拠として提示します。手戻りの原因になる認識のズレを、着手前の設計段階で潰します。",
  crowdworksUrl: "https://crowdworks.jp/public/employees/7100072",
  crowdworksHandle: "Tofu_shota48",
};

// stats の出典(2026-08-10 実測。aegis の追加に伴い再計測)
//   6   = 本番稼働中のアプリ数(aegis / ablens / ec-app / reservation-app /
//         style-diagnosis-app / rag-kitei-qa)
//   182 = ablens の自動テスト件数(単体168 + 統合14。npm run test:all の実行結果)
//         aegis には単体テストが存在しないため増えていない。
//         回帰検出は持つが別の指標であり、数字を増やすために定義を変えない。
//   161 = 判断記録の件数(開発ルートの JUDGMENT_HEURISTICS.md 134件 +
//         style-diagnosis-app 側で凍結された J1〜J27 の27件。
//         前者は Select-String '^## J\d+'、後者は '^### J\d+' での実測。
//         見出しの階層が両者で異なるため、同じパターンでは数えられない)
//   6   = 対応ドメイン数(決済 / 予約 / 外部API / AI文書検索 / A/Bテスト計測 /
//         AI品質保証)
export const stats = [
  { num: 6, label: "PRODUCTS" },
  { num: 182, label: "TESTS" },
  { num: 161, label: "DECISIONS" },
  { num: 6, label: "DOMAINS" },
];

export const services = [
  "カード決済つきの販売サイト",
  "予約・顧客管理システム",
  "会員機能つきWebアプリ",
  "外部APIと連携する仕組み",
  "既存サイトの改修・機能追加",
];
