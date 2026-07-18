export const projects = [
  {
    title: "reservation-app",
    category: ["Webアプリ", "予約管理"],
    summary: "サロン向け顧客予約管理アプリ。Supabase+RLS（行単位アクセス制御）で顧客データの権限分離を設計。",
    tech: ["React", "Vite", "Supabase", "Tailwind CSS"],
    url: "https://reservation-app-omega-blond.vercel.app",
    status: "本番稼働中",
  },
  {
    title: "ec-app",
    category: ["Webアプリ", "EC"],
    summary: "デジタルコンテンツ販売ミニEC。Stripe Checkout連携、Webhook署名検証、期限付きダウンロード、返金APIまで実装。",
    tech: ["React", "Vite", "Supabase", "Stripe"],
    url: "https://ec-app-seven.vercel.app",
    status: "本番稼働中",
  },
  {
    title: "style-diagnosis-app",
    category: ["Webアプリ", "AI活用"],
    summary: "AIがコーディネートを提案し、実商品の購入URLまで提示するスタイル診断アプリ。",
    tech: ["Next.js"],
    url: null,
    status: "開発中",
  },
]
