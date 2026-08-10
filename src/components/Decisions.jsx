import { decisions } from '../data/decisions.js'
import { stats } from '../data/projects.js'

const TOTAL = stats.find((s) => s.label === 'DECISIONS').num

// 見出しとメタ行。展開したままの1件目と、折りたたむ2件目以降で
// 同じものを出すため部品にしている。
// 折りたたんだ側でこれを削らないこと(下のコメント参照)
function Head({ d }) {
  return (
    <>
      <div className="decision__head">
        <span className="decision__id">{d.id}</span>
        <h3 className="decision__title">{d.title}</h3>
      </div>
      <p className="decision__meta">
        <time dateTime={d.date}>{d.date}</time>
        <span className="decision__reason">{d.reason}</span>
      </p>
    </>
  )
}

// 1件目だけ構造が違う理由:
//
// 375px で測ったところ、このセクションだけが 3.2画面(ページの22.6%)と
// 突出しており、2位のセクションを1画面近く引き離していた。
// 一方で全件を畳むと、閉じた状態にはタイトルしか残らない。
// このセクションの目的は「164という数字を実物にすること」であり、
// 実物とは本文の中の実測値である。タイトルだけの記録は
// 「主張はあるが根拠は見えない」状態で、ページ全体が否定している
// 見せ方そのものになる。
//
// そこで1件目だけ開いたままにする。開いた1件が「記録とはこういうものだ」
// という見本になり、残りにも同種の実測値が入っていると分かる。
// これが開く動機になる。
//
// 畳んだ側でもメタ行(日付+掲載理由)は必ず出す。
// ここを隠すと閉じた状態がタイトルだけになり、全件折りたたみと
// 変わらなくなる。あとから「1件目も揃えて畳もう」「メタ行は
// 補助情報だから隠そう」と統一しないこと。どちらもこの節を壊す。
const OPEN_COUNT = 1

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
          {decisions.map((d, i) =>
            i < OPEN_COUNT ? (
              <li key={d.id} className="decision reveal">
                <Head d={d} />
                {/* 原文のまま。要約・省略しない */}
                <p className="decision__body">{d.body}</p>
              </li>
            ) : (
              <li key={d.id} className="decision decision--fold reveal">
                <details className="fold">
                  <summary className="decision__summary">
                    <Head d={d} />
                    <span className="fold__chevron" aria-hidden="true" />
                  </summary>
                  {/* 原文のまま。開閉で本文を削らない */}
                  <p className="decision__body">{d.body}</p>
                </details>
              </li>
            ),
          )}
        </ol>

        <p className="decisions__more reveal">
          これは{TOTAL}件のうちの4件です。
          全部を載せても読まれないため、実測値が入っているものを選びました。
        </p>
      </div>
    </section>
  )
}
