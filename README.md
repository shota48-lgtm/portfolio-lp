# portfolio-lp

制作実績をまとめたポートフォリオサイトです。公開中のWebアプリを、
用途・技術タグ・スクリーンショットつきのカードで紹介しています。

**公開URL**: https://portfolio-lp-weld.vercel.app/

## 技術構成

- React + Vite
- Vercel（本番デプロイ、SPA向けrewrites設定は `vercel.json`）

## ローカルでの実行方法

```bash
npm install
npm run dev
```

ビルド:

```bash
npm run build
```

## ディレクトリ構成

```
src/
  data/         掲載プロジェクト・プロフィール・実績数値の定義（projects.js）
  components/   セクション別コンポーネント（プロジェクトカード等）
public/
  works/        各プロジェクトのスクリーンショット
```

## ライセンス

MIT（[LICENSE](LICENSE)）。Copyright (c) 2026 Shota Kikuchi
