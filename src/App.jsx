import { useMemo } from 'react'
import './App.css'
import { projects } from './data/projects.js'
import ProjectCard from './components/ProjectCard.jsx'

const CROWDWORKS_URL = 'https://crowdworks.jp/public/employees/7100072'

function App() {
  const categories = useMemo(
    () => [...new Set(projects.flatMap((p) => p.category))],
    [],
  )

  return (
    <div className="page">
      <header className="hero">
        <p className="hero__eyebrow">Portfolio</p>
        <p className="hero__furigana">きくち　しょうた</p>
        <h1 className="hero__name">菊地　祥太</h1>
        <p className="hero__catch">
          生成AIを活用したソフトウェア開発。要件定義から実装・運用まで、一気通貫で対応します。
        </p>
      </header>

      <section className="section" aria-label="対応領域">
        <ul className="tag-list">
          {categories.map((category) => (
            <li key={category} className="tag-list__item">
              {category}
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-label="実績一覧">
        <h2 className="section__title">実績</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="section section--strength" aria-label="開発体制の強み">
        <h2 className="section__title">開発体制の強み</h2>
        <p className="strength__text">
          設計・実装・検収を三者体制で分離し、それぞれが専念することで判断のブレを防いでいます。
          <br />
          要件定義・UI設計から実装、検収・品質担保までを一貫した体制で進行します。
          <br />
          自己申告に頼らず、実行結果・差分・動作確認といった検証可能な証拠に基づいて進捗を管理します。
        </p>
      </section>

      <section className="section section--cta" aria-label="お問い合わせ">
        <h2 className="section__title">お仕事のご相談</h2>
        <p className="cta__text">クラウドワークスにて受発注しています。まずはお気軽にご相談ください。</p>
        <p className="cta__handle">クラウドワークスでは Tofu_shota48 として活動しています</p>
        <a className="cta__button" href={CROWDWORKS_URL} target="_blank" rel="noreferrer">
          クラウドワークスで相談する
        </a>
      </section>
    </div>
  )
}

export default App
