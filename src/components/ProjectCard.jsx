// featured: 全幅・21:9・LATEST バッジ付きの大きい表示(グループ1)
// compact: 2カラム・16:10・要約2行・技術3件の小さい表示(グループ2)
// どちらも指定しない場合は従来の通常表示
export default function ProjectCard({ project, featured = false, compact = false }) {
  const { title, summary, tech, image, url, github, latest } = project

  // compact では技術タグを上位3件に絞る。カードを小さくする以上、
  // 中の要素も減らさないと、面積あたりの情報量だけが上がって窮屈になる
  const shownTech = compact ? tech.slice(0, 3) : tech
  const hiddenTech = tech.length - shownTech.length

  const cls = ['card', 'reveal']
  if (featured) cls.push('card--featured')
  if (compact) cls.push('card--compact')

  return (
    <li className={cls.join(' ')}>
      <a href={url} target="_blank" rel="noreferrer" className="card__thumb-link">
        <div className="card__thumb">
          {/* width/height を明示して CLS を防ぐ。画面外なので lazy */}
          <img
            src={image}
            width="1280"
            height="800"
            loading="lazy"
            alt={`${title}の画面`}
          />
        </div>
      </a>
      <div className="card__body">
        <div className="card__head">
          <h3 className="card__title">{title}</h3>
          {latest && <span className="card__badge">LATEST</span>}
        </div>
        <p className="card__summary">{summary}</p>
        <ul className="card__tech">
          {shownTech.map((t) => (
            <li key={t}>{t}</li>
          ))}
          {hiddenTech > 0 && (
            <li className="card__tech-more">+{hiddenTech}</li>
          )}
        </ul>
        <div className="card__links">
          <a href={url} target="_blank" rel="noreferrer" className="card__link">
            サイトを見る →
          </a>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="card__link">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
