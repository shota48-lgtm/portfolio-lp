export const projects = [
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
    latest: true,
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
      "就業規則について質問すると、根拠となる条文を示して回答します。規程に書かれていないことには無理に答えない設計で、答えの正確さは50問の評価で測って公開しています。",
    tech: ["Python", "Streamlit", "FAISS", "Gemini API"],
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

// stats の出典(2026-08-08 実測)
//   5   = 本番稼働中のアプリ数(ablens / ec-app / reservation-app /
//         style-diagnosis-app / rag-kitei-qa)
//   182 = ablens の自動テスト件数(単体168 + 統合14。npm run test:all の実行結果)
//   115 = 判断記録の件数(開発ルートの JUDGMENT_HEURISTICS.md 88件 +
//         style-diagnosis-app 側で凍結された J1〜J27 の27件。
//         Select-String '^## J\d+' での実測)
//   5   = 対応ドメイン数(決済 / 予約 / 外部API / AI文書検索 / A/Bテスト計測)
export const stats = [
  { num: 5, label: "PRODUCTS" },
  { num: 182, label: "TESTS" },
  { num: 115, label: "DECISIONS" },
  { num: 5, label: "DOMAINS" },
];

export const services = [
  "カード決済つきの販売サイト",
  "予約・顧客管理システム",
  "会員機能つきWebアプリ",
  "外部APIと連携する仕組み",
  "既存サイトの改修・機能追加",
];
