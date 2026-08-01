import { useMemo, useState } from 'react'
import './App.css'
import { projects, profile, stats, services } from './data/projects.js'
import ProjectCard from './components/ProjectCard.jsx'

const ALL = 'すべて'

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

  return (
    <div className="page">
      <div className="topbar">
        <div className="topbar__left">
          <span className="topbar__avatar" aria-hidden="true">祥</span>
          <span className="topbar__name">shota</span>
        </div>
        <span className="topbar__url">portfolio-lp-weld.vercel.app</span>
      </div>

      <header className="hero">
        <div className="hero__avatar" aria-hidden="true">祥</div>
        <div className="hero__body">
          <p className="hero__role">{profile.role}</p>
          <h1 className="hero__name">
            <ruby>
              菊地<rt>きくち</rt>
            </ruby>
            {'　'}
            <ruby>
              祥太<rt>しょうた</rt>
            </ruby>
          </h1>
          <p className="hero__catch">{profile.catch}</p>
          <p className="hero__lead">{profile.lead}</p>
        </div>
        <div className="cta">
          <span className="cta__text">お仕事の依頼はこちら</span>
          <a
            className="cta__btn"
            href={profile.crowdworksUrl}
            target="_blank"
            rel="noreferrer"
          >
            相談する
          </a>
        </div>
      </header>

      <div className="stats">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="stats__num">{s.num}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </div>

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

      <ul className="works">
        {visible.map((project, index) => (
          <ProjectCard key={project.repo} project={project} index={index} />
        ))}
      </ul>

      <section className="services" aria-label="依頼できること">
        <p className="services__title">依頼できること</p>
        <ul className="services__list">
          {services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <footer className="foot">
        <span>
          クラウドワークスにて受発注 — {profile.crowdworksHandle}
        </span>
        <span>© 2026 Shota Kikuchi</span>
      </footer>
    </div>
  )
}

export default App
