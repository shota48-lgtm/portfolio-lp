import { profile } from '../data/projects.js'

// 連絡先はここに集約する。読者を分類する節を作らず、
// 受注も採用も同じ1行で受ける。
// 「採用のお問い合わせ」の語は省かない。これがないと
// 受注専門と読まれ、採用担当が連絡してよいか分からなくなる
export default function Footer() {
  return (
    <footer className="foot">
      <p className="foot__contact">
        お仕事のご相談・採用のお問い合わせは
        <a href={profile.crowdworksUrl} target="_blank" rel="noreferrer">
          クラウドワークス（{profile.crowdworksHandle}）
        </a>
        または
        <a
          href="https://github.com/shota48-lgtm"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        まで。
      </p>
      <p className="foot__copy">© 2026 Shota Kikuchi</p>
    </footer>
  )
}
