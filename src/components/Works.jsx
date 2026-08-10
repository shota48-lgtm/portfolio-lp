import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

// グループの見出し。データ側でなくここに置くのは、これが作品の属性でなく
// 見せ方の説明だから。作品が増減しても文言は変わらない
const GROUPS = [
  {
    key: 'measure',
    title: '測る仕組みそのもの',
    lead: '品質を測り、基準を割ったら止める側の実装',
  },
  {
    key: 'app',
    title: '業務で使うアプリケーション',
    lead: '決済・予約・診断・文書検索',
  },
]

export default function Works() {
  const measure = projects.filter((p) => p.group === 'measure')
  const apps = projects.filter((p) => p.group === 'app')

  return (
    <main id="works" className="works-section">
      <p className="label reveal">WORKS</p>
      <h2 className="reveal">つくったもの</h2>

      {/* グループ1: 全幅で大きく。1枚ずつ ul を分けるのは、
          全幅カードが grid の1カラムとして並ぶ必要があるため */}
      <section className="works-group" aria-labelledby="group-measure">
        <div className="works-group__head reveal">
          <h3 className="works-group__title" id="group-measure">
            {GROUPS[0].title}
          </h3>
          <p className="works-group__lead">{GROUPS[0].lead}</p>
        </div>
        <ul className="works works--featured">
          {measure.map((project) => (
            <ProjectCard key={project.repo} project={project} featured />
          ))}
        </ul>
      </section>

      {/* グループ2: 2カラムの compact 表示 */}
      <section className="works-group" aria-labelledby="group-app">
        <div className="works-group__head reveal">
          <h3 className="works-group__title" id="group-app">
            {GROUPS[1].title}
          </h3>
          <p className="works-group__lead">{GROUPS[1].lead}</p>
        </div>
        <ul className="works works--grid" data-reveal-group>
          {apps.map((project) => (
            <ProjectCard key={project.repo} project={project} compact />
          ))}
        </ul>
      </section>
    </main>
  )
}
