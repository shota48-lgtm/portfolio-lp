import { projects, profile } from '../data/projects.js'

const byRepo = (repo) => projects.find((p) => p.repo === repo)

// 面接前に見ていただきたい3点。
// リンク先は「仕組みそのものを見せたいものはコード、
// 画面で挙動が見えるものはデモ」で分けている。
// 回帰検出はCIの設定とコードでしか見えず、デモ画面には出てこない。
// 逆に「判定を出さない」挙動は画面を見るのが最も早い
const POINTS = [
  {
    title: 'aegis の回帰検出',
    detail: '精度が基準を割ったらCIで止まる仕組み',
    href: byRepo('aegis').github,
    linkText: 'GitHub で見る',
  },
  {
    title: '判断の記録',
    detail: '測って決めたことと、撤回したことの記録',
    href: '#decisions',
    linkText: 'このページ内',
  },
  {
    title: 'ablens の統計判定',
    detail: 'サンプル数が足りないうちは判定を出さない設計',
    href: byRepo('ablens').url,
    linkText: 'デモを見る',
  },
]

// 使用技術。できること(skills)が「何を作れるか」を書くのに対し、
// こちらは道具の名前を並べる。採用担当が要件と照合する用途のため、
// 説明文を付けず一覧性を優先する
const STACK = [
  { key: '言語', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  {
    key: 'フレームワーク',
    items: ['React', 'Next.js', 'Vite', 'Streamlit', 'Tailwind CSS'],
  },
  { key: 'データベース', items: ['PostgreSQL', 'Supabase'] },
  { key: 'CI・テスト', items: ['GitHub Actions', 'Playwright'] },
  {
    key: 'その他',
    items: ['Stripe', 'llama.cpp', 'FAISS', 'MCP', 'Gemini API', '楽天市場API'],
  },
]

export default function ForRecruiters() {
  return (
    <section id="for-recruiters" className="recruit" aria-label="採用のご担当者へ">
      <div className="recruit__inner reveal">
        <p className="label">FOR RECRUITERS</p>
        <h2>採用のご担当者へ</h2>

        <p className="recruit__status">
          2026年12月までの転職を目標に活動しています。
          AI・DX推進、またはフルスタック開発の領域を希望しています。
        </p>

        <h3 className="recruit__sub">面接前に見ていただきたい3点</h3>
        <ul className="recruit__points">
          {POINTS.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                {...(p.href.startsWith('#')
                  ? {}
                  : { target: '_blank', rel: 'noreferrer' })}
              >
                {p.title}
              </a>
              <span className="recruit__point-detail">{p.detail}</span>
              <span className="recruit__point-where">{p.linkText} →</span>
            </li>
          ))}
        </ul>

        <h3 className="recruit__sub">使用技術</h3>
        <dl className="recruit__stack">
          {STACK.map((s) => (
            <div key={s.key} className="recruit__stack-row">
              <dt>{s.key}</dt>
              <dd>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>

        <h3 className="recruit__sub">連絡先</h3>
        {/* メールアドレスは書かない。スクレイピングの対象になるため。
            GitHub のプロフィールに寄せれば、採用担当は必ずそこを見る */}
        <ul className="recruit__contact">
          <li>
            <span className="recruit__contact-key">GitHub</span>
            <a
              href="https://github.com/shota48-lgtm"
              target="_blank"
              rel="noreferrer"
            >
              github.com/shota48-lgtm
            </a>
          </li>
          <li>
            <span className="recruit__contact-key">クラウドワークス</span>
            <a href={profile.crowdworksUrl} target="_blank" rel="noreferrer">
              {profile.crowdworksHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
