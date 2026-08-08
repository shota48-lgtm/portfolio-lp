import { useEffect, useRef } from 'react'
import { profile, stats } from '../data/projects.js'

// ヒーローの立体配置(手前が最新作 ablens。J156:
// 作品のスクリーンショットこそがポートフォリオの主役の絵)。
// 重ねは2枚(案B。J160): 手前の中身が読めることを最優先に手前を拡大し、
// 「まだある」ことは奥1枚とラベル、直下の作品一覧で伝える
const STACK = [
  { src: '/works/ec-app.png', pos: 'back' },
  { src: '/works/ablens.png', pos: 'front' },
]

function useCountUp(ref, target) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // prefers-reduced-motion ではカウントアップせず、HTMLの最終値のまま
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      // requestAnimationFrame を使う。setInterval は描画フレームと同期せず、
      // タブ非表示や高負荷時にコールバックが溜まって進行が飛ぶ。
      // rAF + 経過時間ベースなら常に滑らかで終了時刻も正確
      const DURATION = 1200
      let start = null
      const frame = (ts) => {
        if (start === null) start = ts
        const t = Math.min((ts - start) / DURATION, 1)
        const eased = 1 - Math.pow(1 - t, 3) // ease-out
        el.textContent = String(Math.round(target * eased))
        if (t < 1) requestAnimationFrame(frame)
        else el.textContent = String(target)
      }
      requestAnimationFrame(frame)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, target])
}

function Stat({ num, label }) {
  const ref = useRef(null)
  useCountUp(ref, num)
  return (
    <div className="hero-stat">
      {/* HTMLに最終値を書いておく(JS無効時でも数値が見えるように) */}
      <span className="hero-stat__num" ref={ref}>{num}</span>
      <span className="hero-stat__label">{label}</span>
    </div>
  )
}

function BrowserFrame({ src, pos, front }) {
  return (
    <div className={`shot shot--${pos}`}>
      <div className="shot__chrome" aria-hidden="true">
        <i /><i /><i />
      </div>
      {/* ヒーローの画像は LCP 候補のため loading="lazy" を付けない
          (lazy にすると読み込みが後回しになり LCP が悪化する)。
          手前の1枚のみ fetchpriority="high" で最優先に読ませる。
          手前は .shot__crop で要点(A/B数値+判定ブロック)を切り出して拡大表示 */}
      {front ? (
        <div className="shot__crop">
          <img src={src} width="1280" height="800" alt="ablens のテスト結果画面(データ収集中の判定)" fetchPriority="high" />
        </div>
      ) : (
        <img src={src} width="1280" height="800" alt="" aria-hidden="true" />
      )}
    </div>
  )
}

export default function Hero() {
  const visualRef = useRef(null)

  // 294-4: カーソル追従。pointermove を rAF で間引き、±3度だけ傾ける
  useEffect(() => {
    const node = visualRef.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e) => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const r = node.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width - 0.5
        const ny = (e.clientY - r.top) / r.height - 0.5
        node.style.setProperty('--tilt-y', `${(nx * 6).toFixed(2)}deg`)
        node.style.setProperty('--tilt-x', `${(-ny * 6).toFixed(2)}deg`)
      })
    }
    const onLeave = () => {
      node.style.setProperty('--tilt-y', '0deg')
      node.style.setProperty('--tilt-x', '0deg')
    }
    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    return () => {
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <p className="hero__label">5 PRODUCTS SHIPPED</p>
          <h1 className="hero__title">
            {/* AI のみグラデーションテキスト。@supports フォールバックはCSS側 */}
            <span className="grad">AI</span>も決済も、<br />
            ひとりで作る。
          </h1>
          {/* ヒーローの本文は1段落のみ(作業310)。ファーストビューは
              3秒で通過する場所であり、2段落は読ませる量として重い。
              証拠提示の段落(profile.lead)は「依頼できること」へ移設 */}
          <p className="hero__lead">{profile.catch}</p>
          <div className="hero__actions">
            <a
              className="btn btn--primary"
              href={profile.crowdworksUrl}
              target="_blank"
              rel="noreferrer"
            >
              相談する
            </a>
            <a className="btn btn--ghost" href="#works">
              制作物を見る
            </a>
          </div>
        </div>

        <div className="hero__visual" ref={visualRef}>
          {STACK.map((s) => (
            <BrowserFrame key={s.src} src={s.src} pos={s.pos} front={s.pos === 'front'} />
          ))}
          <p className="hero__visual-label" aria-hidden="true">05 / ABLENS</p>
        </div>
      </div>

      <div className="hero__stats">
        {stats.map((s) => (
          <Stat key={s.label} num={s.num} label={s.label} />
        ))}
      </div>
    </header>
  )
}
