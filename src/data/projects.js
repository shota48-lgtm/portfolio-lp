export const projects = [
  {
    title: "デジタル商品の販売サイト",
    repo: "ec-app",
    category: ["EC・決済"],
    summary:
      "カード決済つきの販売サイト。購入から返金まで一通り動きます。カード情報は自社サーバーを経由しない構成です。",
    tech: ["React", "Vite", "Supabase", "Stripe"],
    image: "/works/ec-app.jpg",
    url: "https://ec-app-seven.vercel.app",
    status: "本番稼働中",
  },
  {
    title: "サロン予約管理",
    repo: "reservation-app",
    category: ["予約・顧客管理"],
    summary:
      "予約する側は会員登録なしで使えます。店側だけが顧客情報を見られる権限設計にしています。",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    image: "/works/reservation-app.jpg",
    url: "https://reservation-app-omega-blond.vercel.app",
    status: "本番稼働中",
  },
  {
    title: "スタイル診断アプリ",
    repo: "style-diagnosis-app",
    category: ["外部API連携"],
    summary:
      "13問の診断結果から、外部APIで実在の商品を検索して提案します。成立しない手法は検証記録を残して不採用にしました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "楽天市場API"],
    image: "/works/style-diagnosis-app.jpg",
    url: "https://style-diagnosis-app.vercel.app",
    status: "本番稼働中",
  },
];

export const profile = {
  name: "菊地 祥太",
  furigana: [
    ["菊地", "きくち"],
    ["祥太", "しょうた"],
  ],
  role: "Webエンジニア",
  catch:
    "決済・予約・データ管理を含むWebアプリを、要件定義から公開まで一人で作ります。",
  lead:
    "「動いています」ではなく、実行結果とテストの通過を証拠として提示します。手戻りの原因になる認識のズレを、着手前の設計段階で潰します。",
  crowdworksUrl: "https://crowdworks.jp/public/employees/7100072",
  crowdworksHandle: "Tofu_shota48",
};

// stats の出典
//   3  = 本番稼働中のアプリ数（ec-app / reservation-app / style-diagnosis-app）
//   89 = style-diagnosis-app の vitest 通過テスト件数
//   7  = ec-app の Supabase Edge Functions の関数数
export const stats = [
  { num: "3", label: "公開中のアプリ" },
  { num: "89", label: "自動テスト" },
  { num: "7", label: "決済まわりの処理" },
];

export const services = [
  "カード決済つきの販売サイト",
  "予約・顧客管理システム",
  "会員機能つきWebアプリ",
  "外部APIと連携する仕組み",
  "既存サイトの改修・機能追加",
];
