import { useEffect } from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Works from './components/Works.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Decisions from './components/Decisions.jsx'
import Contact from './components/Contact.jsx'
import ForRecruiters from './components/ForRecruiters.jsx'
import Footer from './components/Footer.jsx'

// スクロール連動の表示(作業294-1/294-2)。
// 初期非表示(opacity:0)は body への is-ready 付与で有効化する。
// JS が無効な環境では is-ready が付かず、全コンテンツが最初から見える。
// カード群はコンテナ(data-reveal-group)単位で発火させる:
// 個別監視だとスクロール速度によって出現順序が乱れるため、
// 1枚目が入った時点でグループ全体へ 80ms 刻みの delay を配って順に出す
function useRevealAnimations() {
  useEffect(() => {
    document.body.classList.add('is-ready')
    const STAGGER_MS = 80
    const STAGGER_MAX = 5

    const groupIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.querySelectorAll('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${Math.min(i, STAGGER_MAX - 1) * STAGGER_MS}ms`
          el.classList.add('is-in')
        })
        groupIo.unobserve(e.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    const soloIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        e.target.classList.add('is-in')
        soloIo.unobserve(e.target)
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    document.querySelectorAll('[data-reveal-group]').forEach((g) => groupIo.observe(g))
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.classList.contains('is-in')) return
      if (!el.closest('[data-reveal-group]')) soloIo.observe(el)
    })

    return () => {
      groupIo.disconnect()
      soloIo.disconnect()
    }
    // 絞り込みを廃止し作品の出し分けが無くなったため、監視の張り直しは不要。
    // 初回マウント時に一度だけ張る
  }, [])
}

function App() {
  useRevealAnimations()

  return (
    <div className="page" id="top">
      <Nav />
      <Hero />
      <Works />

      {/* 背景を一段明るくする帯を2箇所置く(UI_SPEC 第7章:
          全セクションを同色にすると区切りが視覚的に消える)。
          帯1は「何ができるか」を答える2節、帯2は判断の記録。
          暗→明→暗→明→暗 の並びになり、9セクションでも切れ目が残る */}
      <div className="band">
        <Skills />
        <Services />
      </div>

      <div className="band">
        <Decisions />
      </div>

      <Contact />
      <ForRecruiters />
      <Footer />
    </div>
  )
}

export default App
