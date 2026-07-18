import { useEffect, useRef, useState } from 'react'
import './ProjectCard.css'

function useInView(options) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [options])

  return [ref, isInView]
}

export default function ProjectCard({ project, index = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const { title, summary, tech, url, status } = project

  const CardTag = url ? 'a' : 'div'
  const cardProps = url ? { href: url, target: '_blank', rel: 'noreferrer' } : {}

  return (
    <CardTag
      ref={ref}
      {...cardProps}
      className={`project-card${isInView ? ' project-card--visible' : ''}${url ? ' project-card--linked' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 80}ms` }}
    >
      <div className="project-card__header">
        <h3 className="project-card__title">{title}</h3>
        <span className={`project-card__status${status === '本番稼働中' ? ' project-card__status--live' : ''}`}>
          {status}
        </span>
      </div>

      <p className="project-card__summary">{summary}</p>

      <ul className="project-card__tech">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {url && <span className="project-card__link">サイトを見る →</span>}
    </CardTag>
  )
}
