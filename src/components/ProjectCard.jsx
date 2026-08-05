import { useEffect, useRef, useState } from 'react'

function useInView() {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export default function ProjectCard({ project, index = 0 }) {
  const [ref, isInView] = useInView()
  const { title, summary, tech, image, url, github } = project

  return (
    <li>
      <div
        ref={ref}
        className={`work${isInView ? ' work--visible' : ''}`}
        style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
      >
        <a href={url} target="_blank" rel="noreferrer" className="work__thumb-link">
          <div className="work__thumb">
            <img src={image} alt={`${title}の画面`} loading="lazy" />
          </div>
        </a>
        <p className="work__title">{title}</p>
        <p className="work__summary">{summary}</p>
        <ul className="work__tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="work__links">
          <a href={url} target="_blank" rel="noreferrer" className="work__link">
            サイトを見る →
          </a>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="work__link">
              GitHub →
            </a>
          )}
        </div>
      </div>
    </li>
  )
}
