import { profile, services } from '../data/projects.js'

export default function Services() {
  return (
    <section className="services reveal" aria-label="依頼できること">
      <p className="services__title">依頼できること</p>
      {/* ヒーローから移設した段落(作業310)。仕事の進め方の説明は
          依頼を検討する文脈で読まれる方が効く */}
      <p className="services__lead">{profile.lead}</p>
      <ul className="services__list">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
