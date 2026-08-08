import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { projects, profile, services } from './data/projects.js'
import Hero from './components/Hero.jsx'
import ProjectCard from './components/ProjectCard.jsx'

const ALL = 'すべて'

// スクロール連動の表示(作業294-1/294-2)。
// 初期非表示(opacity:0)は body への is-ready 付与で有効化する。
// JS が無効な環境では is-ready が付かず、全コンテンツが最初から見える。
// カード群はコンテナ(data-reveal-group)単位で発火させる:
// 個別監視だとスクロール速度によって出現順序が乱れるため、
// 1枚目が入った時点でグループ全体へ 80ms 刻みの delay を配って順に出す
function useRevealAnimations(deps) {
  useEffect(() => {
    document.body.classList.add('is-ready')
    const STAGGER_MS = 80
    const STAGGER_MAX = 5

    const groupIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i, STAGGER_MAX - 1) * STAGGER_MS}ms`
          el.classList.add('is-in')
        })
        groupIo.unobserve(e.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    const soloIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('is-in')
        soloIo.unobserve(e.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    document.querySelectorAll('[data-reveal-group]').forEach((g) => groupIo.observe(g))
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.classList.contains('is-in')) return
      if (!el.closest('[data-reveal-group]')) soloIo.observe(el)
    })

    return () => {
      groupIo.disconnect()
      soloIo.disconnect()
    }
    // フィルタ切替で作品カードが入れ替わるたびに監視し直す
  }, deps)
}

function App() {
  const [filter, setFilter] = useState(ALL)

  const categories = useMemo(
    () => [ALL, ...new Set(projects.flatMap((p) => p.category))],
    [],
  )

  const visible = useMemo(
    () =>
      filter === ALL
        ? projects
        : projects.filter((p) => p.category.includes(filter)),
    [filter],
  )

  useRevealAnimations([filter])

  const [featured, ...rest] = visible

  return (
    <div className="page">
      <div className="topbar">
        <div className="topbar__left">
          <span className="topbar__avatar" aria-hidden="true">祥</span>
          <span className="topbar__name">{profile.name} — {profile.role}</span>
        </div>
        <a
          className="topbar__cta"
          href={profile.crowdworksUrl}
          target="_blank"
          rel="noreferrer"
        >
          相談する
        </a>
      </div>

      <Hero />

      <main id="works" className="works-section">
        <p className="label reveal">WORKS</p>
        <h2 className="reveal">つくったもの</h2>

        <nav aria-label="制作物の絞り込み">
          <ul className="filters">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  className="filter"
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {featured && (
          <ul className="works works--featured">
            <ProjectCard project={featured} featured={featured.latest === true} />
          </ul>
        )}
        {rest.length > 0 && (
          <ul className="works works--grid" data-reveal-group>
            {rest.map((project) => (
              <ProjectCard key={project.repo} project={project} />
            ))}
          </ul>
        )}
      </main>

      <section className="services reveal" aria-label="依頼できること">
        <p className="services__title">依頼できること</p>
        <ul className="services__list">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      {/* 下部CTA(作業293)。ablens の解析指摘 NO_BOTTOM_CTA の解消 */}
      <section className="bottom-cta" aria-label="お問い合わせ">
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

      <footer className="foot">
        <span>クラウドワークスにて受発注 — {profile.crowdworksHandle}</span>
        <span>© 2026 Shota Kikuchi</span>
      </footer>
    </div>
  )
}

export default App
