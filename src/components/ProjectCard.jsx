export default function ProjectCard({ project, featured = false }) {
  const { title, summary, tech, image, url, github, latest } = project

  return (
    <li className={`card reveal${featured ? ' card--featured' : ''}`}>
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
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
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
