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
  const { title, summary, tech, image, url } = project

  return (
    <li>
      <a
        ref={ref}
        href={url}
        target="_blank"
        rel="noreferrer"
        className={`work${isInView ? ' work--visible' : ''}`}
        style={{ transitionDelay: `${Math.min(index, 5) * 70}ms` }}
      >
        <div className="work__thumb">
          <img src={image} alt={`${title}の画面`} loading="lazy" />
        </div>
        <p className="work__title">{title}</p>
        <p className="work__summary">{summary}</p>
        <ul className="work__tech">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <span className="work__link">サイトを見る →</span>
      </a>
    </li>
  )
}
