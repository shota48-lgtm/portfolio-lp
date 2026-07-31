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
    category: ["Webアプリ", "外部API連携"],
    summary: "パーソナルカラーと骨格の診断結果から、楽天市場APIで実在の商品を検索し、トップス・ボトムス・シューズの3点でコーディネートを提案。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "楽天市場API"],
    url: "https://style-diagnosis-app.vercel.app",
    status: "本番稼働中",
  },
]
