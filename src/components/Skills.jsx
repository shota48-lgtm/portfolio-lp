import { skills } from '../data/skills.js'
import { projects } from '../data/projects.js'

// repo から短い呼び名を引く。skills.js は repo で作品を指しており、
// 表示名を skills.js 側に持たせると projects.js と二重管理になる
const SHORT = Object.fromEntries(projects.map((p) => [p.repo, p.short]))

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <p className="label reveal">SKILLS</p>
        <h2 className="reveal">できること</h2>
        <p className="skills__lead reveal">
          「できます」とだけ書いても、他と区別がつきません。
          どの作品で実際に作ったかを項目ごとに添えています。
        </p>

        <ul className="skills__list" data-reveal-group>
          {skills.map((s) => (
            <li key={s.label} className="skill reveal">
              <h3 className="skill__label">{s.label}</h3>
              <p className="skill__detail">{s.detail}</p>
              {/* 根拠の作品名はリンクにしない。理由はコンポーネント末尾 */}
              <p className="skill__works">
                <span className="skill__works-key">実装した作品</span>
                {s.works.map((repo) => SHORT[repo]).join(' / ')}
              </p>
            </li>
          ))}
        </ul>

        <p className="skills__back reveal">
          それぞれの中身は <a href="#works">つくったもの</a> にあります。
        </p>
      </div>
    </section>
  )
}

// 作品名をリンクにしなかった理由:
// 7項目に平均2件の作品が付くため、リンクにすると十数個のリンクが並ぶ。
// その行き先は直前の「つくったもの」に出したものと同じで、
// 同じ場所への導線を二重に持つことになる。
// この節の役割は移動させることではなく、各項目に裏付けがあると示すこと。
// 作品へ戻りたい読者のために、節の末尾に #works への導線を1つだけ置く。
