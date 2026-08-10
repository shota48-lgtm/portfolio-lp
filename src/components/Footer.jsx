import { profile } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="foot">
      <span>クラウドワークスにて受発注 — {profile.crowdworksHandle}</span>
      <span>© 2026 Shota Kikuchi</span>
    </footer>
  )
}
