// できること(技術面)。「依頼できること」(services)が仕事の単位で書くのに対し、
// こちらは技術の単位で書く。読者が違う(発注者 / 採用担当)ため併存させる。
//
// 各項目は実際に作った作品から導いている。works に根拠となる repo を持たせ、
// 裏取りできない項目を書けないようにしてある。
// 「できます」と書けるのは、動いているものがある範囲だけとする。
export const skills = [
  {
    label: "フロントエンド実装",
    detail: "React / Next.js / Vite。要件定義から画面設計まで含めて作ります。",
    works: ["ec-app", "reservation-app", "style-diagnosis-app", "ablens"],
  },
  {
    label: "Python でのバックエンドとデータ処理",
    detail:
      "Streamlit のほか、外部パッケージを使わず標準ライブラリのみで組む構成も扱います。",
    works: ["rag-kitei-qa", "aegis"],
  },
  {
    label: "データベース設計と権限の分離",
    detail:
      "PostgreSQL / Supabase。誰がどの行を見られるかを、アプリ側でなくDB側で担保します。",
    works: ["reservation-app", "ablens"],
  },
  {
    label: "カード決済の実装",
    detail:
      "Stripe による購入と返金。カード情報が自社サーバーを経由しない構成にします。",
    works: ["ec-app"],
  },
  {
    label: "LLM の組み込みと、出力の品質測定",
    detail:
      "RAG、ローカルLLM、採点器の検証まで。毎回変わる出力を、測れる形にします。",
    works: ["rag-kitei-qa", "aegis"],
  },
  {
    label: "自動テストとCIによる回帰検出",
    detail:
      "GitHub Actions / Playwright。精度が基準から落ちたらCIで止める仕組みまで作ります。",
    works: ["ablens", "aegis"],
  },
  {
    label: "統計的な判定ロジックの自作",
    detail:
      "A/Bテストの有意差判定。判定の根拠を説明できるよう、外部ライブラリに委譲せず実装します。",
    works: ["ablens"],
  },
];
