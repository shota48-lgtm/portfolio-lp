import { profile } from '../data/projects.js'

// 下部CTA(作業293)。ablens の解析指摘 NO_BOTTOM_CTA の解消。
// 「採用のご担当者へ」の導線は次フェーズでこのセクション内に追加する
export default function Contact() {
  return (
    <section id="contact" className="bottom-cta" aria-label="お問い合わせ">
      <div className="bottom-cta__inner reveal">
        <p className="label">CONTACT</p>
        <h2>つくるものが決まっていなくても、大丈夫です。</h2>
        <p className="bottom-cta__sub">
          何をどう作るかの整理からお手伝いします。まずは課題をお聞かせください。
        </p>
        <a
          className="btn btn--primary"
          href={profile.crowdworksUrl}
          target="_blank"
          rel="noreferrer"
        >
          相談する
        </a>
      </div>
    </section>
  )
}
