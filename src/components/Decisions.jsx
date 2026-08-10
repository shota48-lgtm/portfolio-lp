import { decisions } from '../data/decisions.js'
import { stats } from '../data/projects.js'

const TOTAL = stats.find((s) => s.label === 'DECISIONS').num

export default function Decisions() {
  return (
    <section id="decisions" className="decisions">
      <div className="decisions__inner">
        <p className="label reveal">DECISIONS</p>
        <h2 className="reveal">判断の記録</h2>
        <p className="decisions__lead reveal">
          何を作れるかより、迷ったときに何を根拠に決めたかの方が、
          次の仕事では効いてきます。
          測って決めた記録も、あとから誤りと分かって撤回した記録も、
          書き直さずそのまま残しています。
        </p>

        <ol className="decisions__list" data-reveal-group>
          {decisions.map((d) => (
            <li key={d.id} className="decision reveal">
              <div className="decision__head">
                <span className="decision__id">{d.id}</span>
                <h3 className="decision__title">{d.title}</h3>
              </div>
              <p className="decision__meta">
                <time dateTime={d.date}>{d.date}</time>
                <span className="decision__reason">{d.reason}</span>
              </p>
              {/* 原文のまま。要約・省略しない */}
              <p className="decision__body">{d.body}</p>
            </li>
          ))}
        </ol>

        <p className="decisions__more reveal">
          これは{TOTAL}件のうちの4件です。
          全部を載せても読まれないため、実測値が入っているものを選びました。
        </p>
      </div>
    </section>
  )
}
