import { useRef } from 'react'
import { profile } from '../data/projects.js'

// アンカーナビ。PCは全項目を横並び、767px以下は details ベースの開閉にする。
//
// details を使う理由: 開閉に JavaScript が要らない。JSが無効でも、
// React の読み込みに失敗しても、メニューは開く。
// PC側は CSS で summary を隠し、パネルを常時表示に上書きしている
// (details の子要素は display の指定で表示状態を上書きできる)。
//
// リンク押下後に閉じる処理だけは JS で行うが、これは無くても
// 移動そのものは成立する上乗せ分であり、依存も増やさない
// (react の useRef のみ)。開閉の本体を JS に持たせない、が方針。
const ITEMS = [
  { href: '#works', label: 'つくったもの' },
  { href: '#skills', label: 'できること' },
  { href: '#decisions', label: '判断の記録' },
]

export default function Nav() {
  const detailsRef = useRef(null)

  const close = () => {
    const el = detailsRef.current
    if (el) el.open = false
  }

  return (
    <div className="topbar">
      <a className="topbar__left" href="#top">
        <span className="topbar__avatar" aria-hidden="true">祥</span>
        <span className="topbar__name">{profile.name} — {profile.role}</span>
      </a>

      <details className="nav" ref={detailsRef}>
        <summary className="nav__toggle" aria-label="メニューを開く">
          <span className="nav__toggle-bars" aria-hidden="true">
            <i /><i /><i />
          </span>
        </summary>
        <nav className="nav__panel" aria-label="ページ内の移動">
          <ul className="nav__list">
            {ITEMS.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              {/* 画面内に「相談する」を2つ置かない(J123)。
                  ヘッダーのCTAはこの1つに統合し、遷移先はページ下部の
                  CONTACT とする。外部(クラウドワークス)への遷移は
                  CONTACT 内の1箇所に集約する */}
              <a className="nav__cta" href="#contact" onClick={close}>
                相談する
              </a>
            </li>
          </ul>
        </nav>
      </details>
    </div>
  )
}
