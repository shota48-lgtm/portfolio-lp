# ROLLBACK

LPの全面刷新がうまくいかなかったときに、公開されていた状態へ戻すための手順。

数ヶ月後の自分が読んで、そのまま実行できるように書いている。
コマンドはコピーしてそのまま貼れる形にしてある。

## タグ v1-before-redesign について

2026-08-10 時点の main を固定したもの。**全面刷新を始める直前の状態**であり、
このときの内容が本番で公開されていた。

| 項目 | 内容 |
|---|---|
| コミット | `92a39b06a2b8f49b8fb99231f1181cfddf8b3dfd` |
| 掲載作品 | 6件（aegis / ablens / ec-app / reservation-app / style-diagnosis-app / rag-kitei-qa） |
| 最新作 | aegis（先頭に featured 表示 + LATEST バッジ） |
| stats | PRODUCTS 6 / TESTS 182 / DECISIONS 161 / DOMAINS 6 |
| 構成 | React + Vite / Vercel |
| 公開URL | https://portfolio-lp-weld.vercel.app/ |

リモートにも push 済みなので、clone し直しても残っている。

## 1. まず考えること

戻す方法は2つあり、**目的によって選ぶものが違う**。

| やりたいこと | 使う手段 | 所要 |
|---|---|---|
| 公開されている画面だけ急いで戻したい | Vercel の Instant Rollback（下記3） | 1分 |
| コードごと刷新前に戻したい | git のリセット（下記2） | 5分 |

**まず Vercel で戻すのが安全。** 公開画面が直れば急ぎの用は済む。
コードをどうするかは、落ち着いてから判断すればよい。

## 2. main を刷新前に戻す（git）

作業ツリーに未コミットの変更がないことを確認してから実行する。

```bash
cd "$env:USERPROFILE\OneDrive\デスクトップ\claude\portfolio-lp"

# 1. 未コミットの変更がないか確認する（何も出なければOK）
git status --short

# 2. main に移動して最新を取得する
git checkout main
git fetch origin

# 3. タグの時点まで戻す
git reset --hard v1-before-redesign

# 4. リモートにも反映する
git push --force-with-lease origin main
```

### 注意

- **`--force-with-lease` を使うこと。** `--force` は他の人（別環境の自分を含む）が
  push した内容を無条件に消す。`--force-with-lease` は、リモートが自分の知らない
  状態に進んでいたら失敗して止まってくれる。
- 手順3の `reset --hard` は**未コミットの変更を捨てる**。手順1を飛ばさないこと。
- force push なので、実行前に他の作業が動いていないことを確認する。

### 戻さずに中身だけ見たい場合

```bash
# タグの時点をそのまま取り出して確認する（main は動かない）
git checkout v1-before-redesign
# 見終わったら戻る
git checkout main
```

## 3. Vercel で前のデプロイに戻す（Instant Rollback）

コードを一切触らずに、公開されている画面だけを前のデプロイへ戻せる。

1. https://vercel.com/dashboard を開く
2. プロジェクト **portfolio-lp** を選ぶ
3. 上部の **Deployments** タブを開く
4. 戻したいデプロイ（刷新前の最後のもの。コミット `92a39b0` のもの）を探す
5. 右端の **⋯**（三点メニュー）から **Promote to Production** を選ぶ
   - 表記が **Instant Rollback** になっている場合もある。どちらも同じ結果になる
6. 確認ダイアログで実行する

反映は1分ほどで終わる。ビルドは走らない（既にビルド済みの成果物を差し替えるだけ）。

**この操作は git には影響しない。** リポジトリは刷新後のままなので、
次に push すると再び刷新版がデプロイされる。
恒久的に戻すなら、上の「2. main を刷新前に戻す」も実行すること。

## 4. 作業ブランチを破棄する

刷新をやめて、作業内容を捨てる場合。

```bash
cd "$env:USERPROFILE\OneDrive\デスクトップ\claude\portfolio-lp"

# main に移動してから消す（作業中のブランチは削除できない）
git checkout main

# ローカルのブランチを削除する
git branch -D feature/lp-redesign

# リモートにも push していた場合は、そちらも削除する
git push origin --delete feature/lp-redesign
```

`-D` は未マージでも強制的に消す。**消したブランチのコミットは通常の方法では戻せない。**
残しておきたいものがないか確認してから実行すること。

判断がつかないうちは、削除せず放置してよい。ブランチは残っていても害がない。

## 5. 戻したあとの確認

```bash
# コミットがタグと一致しているか
git log --oneline -1
git rev-parse HEAD
git rev-parse "v1-before-redesign^{commit}"
# → 後ろ2つが同じハッシュなら戻っている

# ビルドが通るか
npm install
npm run build
```

公開画面は https://portfolio-lp-weld.vercel.app/ を開いて、
作品が6件あり、先頭が aegis になっていることを確認する。
