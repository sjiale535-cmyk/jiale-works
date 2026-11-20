import { useEffect, useRef, useState } from 'react'
import portrait from '../assets/portrait-color-web.jpg'
import comicLianqi from '../assets/comic-lianqi-web.jpg'
import comicDaxia from '../assets/comic-daxia-web.jpg'
import comicLifePeak from '../assets/comic-life-peak.jpg'
import comicDragon from '../assets/comic-peerless-dragon.jpg'
import awardPoster from '../assets/award-xingshi-poster.jpg'
import magistratePoster from '../assets/short-substitute-magistrate.jpg'
import paperWifePoster from '../assets/short-paper-wife.png'
import weightlessPoster from '../assets/short-one-minute-weightless.png'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const Arrow = ({ diagonal = false }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d={diagonal ? 'M5 19 19 5M8 5h11v11' : 'M5 12h14M14 6l6 6-6 6'} />
  </svg>
)

const strengths = [
  { no: '01', title: 'AI 视觉生成', en: 'AI VISUAL', text: '熟悉 Midjourney、Seedance、可灵、Grok 等工具，保持角色、场景与风格的一致性。' },
  { no: '02', title: '创意与叙事', en: 'STORYTELLING', text: '从脚本、分镜到镜头节奏，能把抽象卖点转化为适合传播的视觉故事。' },
  { no: '03', title: '品牌视觉', en: 'BRAND SYSTEM', text: '以策略为起点建立视觉语言，让画面既有记忆点，也服务于品牌表达与商业目标。' },
  { no: '04', title: '动态与后期', en: 'MOTION & EDIT', text: '掌握 Premiere Pro、After Effects、C4D 与剪映，完成从素材到成片的闭环交付。' },
]

const gameNames = [
  'Shine On, Bella: Merge & Love',
  'Shine On, Bella: Merge & Love',
  'Shine On, Bella: Merge & Love',
  'Pretty Boutique: Merge & Love',
  'Pretty Boutique: Merge & Love',
  'Pretty Boutique: Merge & Love',
  '',
  '',
  '',
]

const gameVideos = Array.from({ length: gameNames.length }, (_, index) => ({
  src: publicAsset(`videos/game/${index + 1}.mp4`),
  poster: publicAsset(`posters/game/${index + 1}.jpg`),
  no: String(index + 1).padStart(2, '0'),
  title: `Creative ${String(index + 1).padStart(2, '0')}`,
  gameName: gameNames[index],
  role: '创意脚本 / AI 视觉生成 / 剪辑包装',
  tools: 'Midjourney / Seedance / Premiere Pro',
  format: '海外竖屏游戏买量素材',
}))

const foundationName = 'Foundation: Galactic Frontier'
const foundationVideos = Array.from({ length: 7 }, (_, index) => {
  const no = String(index + 1).padStart(2, '0')
  return {
    src: publicAsset(`videos/game/foundation/${no}.mp4`),
    poster: publicAsset(`posters/game/foundation/${no}.jpg`),
    no,
    title: `Creative ${no}`,
    gameName: foundationName,
    role: '分镜设计 / AI 视频生成 / 剪辑包装',
    tools: 'Codex / Seedream / Seedance / 剪映',
    format: '海外 SLG 游戏买量广告',
    detail: 'FunPlus 实习项目，参与镜头设计、AI 视频制作及素材版本迭代。',
  }
})

const comicProjects = [
  {
    no: '01',
    title: '炼气 3000 层',
    subtitle: '开局收女帝为徒',
    badge: '腾讯精品漫剧',
    image: comicLianqi,
    video: publicAsset('videos/comic/daxia-zhenyaolu.mp4'),
    detail: '参与角色与场景视觉资产生成、镜头调整及成片剪辑。',
    meta: [
      { label: 'ROLE', value: '视觉资产 / 镜头生成 / 剪辑' },
      { label: 'STATUS', value: '商业化上线' },
    ],
  },
  {
    no: '02',
    title: '大夏镇妖录',
    subtitle: '黑猪传',
    badge: '腾讯精品漫剧',
    image: comicDaxia,
    video: publicAsset('videos/comic/lianqi-3000.mp4'),
    detail: '参与角色与场景视觉资产生成、镜头调整及成片剪辑。',
    meta: [
      { label: 'ROLE', value: '视觉资产 / 镜头生成 / 剪辑' },
      { label: 'STATUS', value: '商业化上线' },
    ],
  },
  {
    no: '03',
    title: '人生巅峰全靠捡',
    subtitle: '第 16 集',
    badge: '红果上线',
    image: comicLifePeak,
    video: publicAsset('videos/comic/life-peak-episode-16.mp4'),
  },
  {
    no: '04',
    title: '绝世强龙',
    subtitle: '剧集预览',
    badge: '红果上线',
    image: comicDragon,
    video: publicAsset('videos/comic/peerless-dragon.mp4'),
  },
  {
    no: '05',
    title: 'Marry My Daddy',
    subtitle: 'Vibe Reels 上架 · 海外短剧',
    badge: 'VIBE REELS',
    video: publicAsset('videos/comic/marry-my-daddy.mp4'),
    detail: '面向海外观众的竖屏短剧内容，围绕强情节钩子与高密度叙事节奏完成影像呈现，现已于 Vibe Reels 上架。',
    meta: [
      { label: 'TYPE', value: '海外竖屏短剧' },
      { label: 'PLATFORM', value: 'Vibe Reels' },
    ],
  },
]

const shortFilms = [
  { title: '替身县令', image: magistratePoster, file: 'substitute-magistrate', subtitle: '3 分 48 秒' },
  { title: '纸妻', image: paperWifePoster, file: 'paper-wife', subtitle: '3 分 55 秒' },
  { title: '失重一分钟', image: weightlessPoster, file: 'one-minute-weightless', subtitle: '5 分 18 秒' },
].map(({ title, image, file, subtitle }) => ({
  title,
  image,
  subtitle,
  badge: '个人创作',
  video: publicAsset(`videos/shorts/${file}.mp4`),
}))

const awardProject = {
  title: '醒狮入梦',
  subtitle: '中国好创意 · 人工智能生成视频类',
  badge: '全国总决赛一等奖',
  video: publicAsset('videos/award/heritage-award.mp4'),
  detail: '以国家级非遗醒狮为创作核心，从剧本、视觉资产、分镜、生视频到剪辑包装，全部由我一人独立完成。',
  meta: [
    { label: 'ROLE', value: '独立创作 · 全流程完成' },
    { label: 'AWARD', value: '中国好创意全国总决赛一等奖' },
  ],
}

function FilmCards({ projects, onPreview, className = '' }) {
  return (
    <div className={`comic-project-grid ${className}`}>
      {projects.map((project) => (
        <article className="comic-project-card" key={project.title} data-reveal>
          <div className="comic-poster">
            {project.image ? (
              <img src={project.image} alt={`《${project.title}》海报`} loading="lazy" />
            ) : (
              <video src={project.video} muted loop autoPlay playsInline preload="metadata" aria-label={`${project.title}视频画面`} />
            )}
          </div>
          <div className="comic-project-info">
            <div>
              <span>{project.badge}</span>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
            </div>
            <button type="button" onClick={() => onPreview(project)}>
              点击预览 <i><Arrow diagonal /></i>
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

function CoverGrain() {
  const layer = useRef(null)

  useEffect(() => {
    const tile = document.createElement('canvas')
    tile.width = tile.height = 192
    const context = tile.getContext('2d')
    if (!context) return
    const noise = context.createImageData(tile.width, tile.height)
    for (let pixel = 0; pixel < noise.data.length; pixel += 4) {
      const shade = Math.random() < 0.5 ? 0 : 255
      noise.data[pixel] = noise.data[pixel + 1] = noise.data[pixel + 2] = shade
      noise.data[pixel + 3] = Math.random() * 64
    }
    context.putImageData(noise, 0, 0)
    layer.current.style.backgroundImage = `url(${tile.toDataURL()})`
  }, [])

  return <div className="cover-grain" ref={layer} aria-hidden="true" />
}

function OrbitVideo({ item, active }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (active) video.play().catch(() => {})
    else video.pause()
  }, [active])

  return (
    <video
      ref={videoRef}
      src={item.src}
      poster={item.poster}
      muted
      loop
      playsInline
      preload={active ? 'auto' : 'metadata'}
      draggable="false"
    />
  )
}

function GameOrbit({ items, onPreview }) {
  const [rotation, setRotation] = useState(0)
  const [inView, setInView] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const orbitRef = useRef(null)
  const drag = useRef({ active: false, moved: false, startX: 0, startRotation: 0, itemIndex: null })
  const angleStep = 360 / items.length
  const frontIndex = ((Math.round(-rotation / angleStep) % items.length) + items.length) % items.length

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting) setHasEntered(true)
    }, { threshold: 0.15 })
    observer.observe(orbitRef.current)
    return () => observer.disconnect()
  }, [])

  const openPreview = (item) => {
    onPreview({
      ...item,
      badge: '游戏买量广告',
      title: item.gameName || '游戏买量广告',
      subtitle: item.title,
      video: item.src,
      detail: item.detail || '海外 Merge 游戏投放素材 · 创意构思 / AI 生成 / 剪辑包装',
      meta: [
        { label: 'ROLE', value: item.role },
        { label: 'TOOLS', value: item.tools },
        { label: 'FORMAT', value: item.format },
      ],
    })
  }

  const startDrag = (event) => {
    const card = event.target.closest('.orbit-card.is-front')
    drag.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      startRotation: rotation,
      itemIndex: card ? Number(card.dataset.index) : null,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const moveDrag = (event) => {
    if (!drag.current.active) return
    if (Math.abs(event.clientX - drag.current.startX) > 6) drag.current.moved = true
    setRotation(drag.current.startRotation + (event.clientX - drag.current.startX) * 0.24)
  }

  const endDrag = (event) => {
    const { moved, itemIndex } = drag.current
    drag.current.active = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    if (!moved && itemIndex === frontIndex) openPreview(items[itemIndex])
  }

  return (
    <div
      className="game-orbit"
      ref={orbitRef}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onWheel={(event) => setRotation((value) => value - event.deltaY * 0.035)}
      aria-label="可拖动浏览的游戏买量视频"
    >
      <div className="game-orbit-stage">
        {items.map((item, index) => {
          const angle = (index * angleStep + rotation) * (Math.PI / 180)
          const depth = Math.cos(angle)
          const x = Math.sin(angle)
          const y = -depth * 28 + Math.abs(Math.sin(angle)) * 42
          const scale = 0.74 + ((depth + 1) / 2) * 0.3
          const isFront = index === frontIndex

          return (
            <article
              className={`orbit-card ${isFront ? 'is-front' : ''}`}
              key={item.src}
              data-index={index}
              style={{
                '--orbit-x': x,
                '--orbit-y': `${y}px`,
                '--orbit-z': `${depth * 160}px`,
                '--orbit-scale': scale,
                '--orbit-opacity': 0.36 + ((depth + 1) / 2) * 0.64,
                zIndex: Math.round((depth + 1) * 50),
              }}
            >
              {hasEntered && <OrbitVideo item={item} active={inView && isFront} />}
              <div className="orbit-card-shade" />
              <span className="orbit-index">{item.no}</span>
              <div className="orbit-label">
                <span>GAME AD · {item.title}</span>
                {item.gameName && <strong>{item.gameName}</strong>}
                {isFront && <em>CLICK TO PREVIEW ↗</em>}
              </div>
            </article>
          )
        })}
      </div>
      <div className="orbit-guide">
        <span>按住拖动</span>
        <i><b /></i>
        <span>DRAG TO EXPLORE</span>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activePreview, setActivePreview] = useState(null)
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionIds = ['top', 'about', 'videos', 'merge-ads', 'comic', 'shorts']
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.15, 0.35] },
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!activePreview) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && setActivePreview(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [activePreview])

  const go = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main>
      <section className="hero" id="top">
        <div className="cover-streaks" aria-hidden="true" />
        <div className="cover-glass" aria-hidden="true" />
        <CoverGrain />
        <nav className="nav shell">
          <button className="monogram" onClick={() => go('#top')} aria-label="回到顶部">
            <span>SONG</span> JIALE
          </button>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <button className={activeSection === 'top' ? 'is-active' : ''} onClick={() => go('#top')}>首页</button>
            <button className={activeSection === 'about' ? 'is-active' : ''} onClick={() => go('#about')}>关于</button>
            <button className={['videos', 'merge-ads'].includes(activeSection) ? 'is-active' : ''} onClick={() => go('#videos')}>游戏广告</button>
            <button className={activeSection === 'comic' ? 'is-active' : ''} onClick={() => go('#comic')}>AI漫剧</button>
            <button className={activeSection === 'shorts' ? 'is-active' : ''} onClick={() => go('#shorts')}>个人短片</button>
          </div>
          <a className="nav-contact" href="mailto:2949026597@qq.com">
            联系我 <Arrow diagonal />
          </a>
          <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开菜单">
            <span /><span />
          </button>
        </nav>

        <div className="hero-content shell">
          <div className="cover-main">
            <h1 className="cover-title"><span>VISUAL</span><span>DESIGN &amp; AI</span></h1>
            <div className="cover-author">
              <strong>宋家乐</strong>
              <span>SONG JIALE</span>
              <div className="cover-mark" aria-hidden="true"><i /><i /><i /></div>
            </div>
          </div>
          <div className="cover-edition">
            <strong>视觉设计</strong>
            <strong>作品集</strong>
            <span>PORTFOLIO<br />2025—2026</span>
          </div>
          <div className="cover-disciplines">
            <span>海外游戏广告</span>
            <span>商业 AI 漫剧</span>
            <span>个人 AI 短片</span>
          </div>
        </div>
      </section>

      <section className="about about-native" id="about">
        <div className="shell">
          <header className="section-head" data-reveal>
            <span>关于我</span>
          </header>
          <div className="about-native-grid">
            <figure className="about-portrait" data-reveal>
              <img src={portrait} alt="宋家乐个人肖像" />
              <figcaption><span>宋家乐 / SONG JIALE</span></figcaption>
            </figure>
            <div className="about-content" data-reveal>
              <h2>游戏广告与 AI 影像</h2>
              <p className="about-lead">数字媒体艺术本科在读，具备海外 SLG、Merge 游戏买量广告及商业 AI 漫剧制作经验，累计参与制作 70+ 条游戏广告素材。可独立完成分镜设计、AI 视觉生成、后期剪辑及素材迭代。</p>
              <div className="about-contact">
                <a href="tel:17739450561"><span>PHONE</span><strong>177 3945 0561</strong></a>
                <a href="mailto:2949026597@qq.com"><span>EMAIL</span><strong>2949026597@qq.com</strong></a>
                <div><span>EDUCATION</span><strong>郑州西亚斯学院 · 数字媒体艺术本科 · 2023—至今</strong></div>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="experience-list" data-reveal>
              <span className="detail-label">EXPERIENCE / 实习经历</span>
              <article><time>2026.10—11</time><div><h3>FunPlus · 游戏买量视频实习生（AI 方向）</h3><p>为《{foundationName}》参与创意优化、分镜设计、AI 视频制作及风格迭代，累计完成 20 条买量素材。</p></div></article>
              <article><time>2026.05—08</time><div><h3>触宝科技 · AIGC 实习生</h3><p>参与海外 Merge 游戏广告脚本、分镜、生成及剪辑交付，累计参与 50+ 条买量素材，并参与腾讯视频及红果上线的 AI 漫剧。</p></div></article>
              <article><time>2025.06—08</time><div><h3>周口市云帆电子商务有限公司 · 直播中控实习生</h3><p>参与 10+ 场电商直播，协助现场执行与数据复盘。产出 60+ 条直播切片，单条最高播放量超 50 万次。</p></div></article>
            </div>
            <div className="about-side" data-reveal>
              <span className="detail-label">TOOLS / 核心工具</span>
              <div className="about-tools">
                {['ChatGPT', 'Codex', 'Claude Code', 'Gemini', 'Midjourney', 'Seedream', 'Seedance 2.0 / 2.5', 'Oiioii', 'LibTV', 'Updream', 'Premiere Pro', 'After Effects', '剪映'].map(tool => <span key={tool}>{tool}</span>)}
              </div>
              <div className="about-stats">
                <div><strong>70<sup>+</sup></strong><span>累计参与游戏广告素材</span></div>
                <div><strong>04</strong><span>已上线 AI 漫剧</span></div>
                <div><strong>01</strong><span>全国一等奖</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="video-showcase section shell" id="videos" aria-labelledby="foundation-heading">
        <header className="section-head" data-reveal>
          <span>游戏买量 / GAME ADVERTISING</span>
          <p>从叙事切入、玩法展示到卖点与素材版本迭代。</p>
        </header>

        <div className="video-category game-category">
          <div className="video-category-head" data-reveal>
            <div>
              <span>FUNPLUS · SLG 游戏广告</span>
              <h2 id="foundation-heading" className="foundation-title">{foundationName}</h2>
            </div>
            <p>负责分镜设计、AI 视频制作、剪辑与风格迭代。实习期间完成 20 条买量素材，本站精选其中 7 条。</p>
          </div>
          <div data-reveal>
            <GameOrbit items={foundationVideos} onPreview={setActivePreview} />
          </div>
        </div>

      </section>

      <section className="video-showcase section shell" id="merge-ads" aria-labelledby="merge-heading">
        <div className="video-category-head" data-reveal>
          <div>
            <span>触宝科技 · MERGE 游戏广告</span>
            <h2 id="merge-heading">Merge 游戏买量</h2>
          </div>
          <p>《Shine On, Bella: Merge &amp; Love》与《Pretty Boutique: Merge &amp; Love》的海外买量素材，覆盖剧情开场、玩法展示与卖点包装。</p>
        </div>
        <div data-reveal>
          <GameOrbit items={gameVideos} onPreview={setActivePreview} />
        </div>
      </section>

      <section className="comic-page section shell" id="comic">
        <div className="comic-category">
          <div className="video-category-head" data-reveal>
            <div>
              <span>腾讯视频 · 红果 · Vibe Reels</span>
              <h2>AI 漫剧与短剧</h2>
            </div>
            <p>项目涵盖角色与场景视觉资产生成、镜头调整和成片剪辑。点击卡片下方的按钮即可观看剧集片段。</p>
          </div>
          <FilmCards projects={comicProjects} onPreview={setActivePreview} />
        </div>
      </section>

      <section className="comic-page section shell" id="shorts" aria-labelledby="short-films-title">
        <header className="video-category-head" data-reveal>
          <h2 id="short-films-title">个人 AI 短片</h2>
          <p>三部由我独立制作的 AI 短片，可点击海报下方的按钮观看完整影片。</p>
        </header>
        <FilmCards projects={shortFilms} onPreview={setActivePreview} className="short-film-grid" />
      </section>

      <section className="award-work section shell" id="work">
        <header className="section-head" data-reveal><span>获奖作品 / AWARD FILM</span></header>
        <div className="award-showcase" data-reveal>
          <figure className="award-poster">
            <img src={awardPoster} alt="《醒狮入梦》作品海报" />
          </figure>
          <div className="award-view-panel">
            <span className="award-competition">
              <strong>中国好创意</strong>
              <span>「非遗出海·智创未来」人工智能生成视频类</span>
            </span>
            <h2>醒狮入梦</h2>
            <p className="award-result">全国总决赛一等奖</p>
            <p>以国家级非遗醒狮为主题。剧本、视觉资产、分镜、视频生成和剪辑包装均由我独立完成。</p>
            <button type="button" onClick={() => setActivePreview(awardProject)}>
              点击观看完整影片 <i><Arrow diagonal /></i>
            </button>
          </div>
        </div>
      </section>

      <section className="ability section shell" id="ability">
        <div className="ability-heading" data-reveal>
          <h2>创作能力</h2>
        </div>
        <div className="ability-grid">
          {strengths.map((item) => (
            <article key={item.no} data-reveal>
              <p className="ability-en">{item.en}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" />
        <div className="shell contact-inner" data-reveal>
          <h2>联系我</h2>
          <a className="big-mail" href="mailto:2949026597@qq.com">
            <span>电子邮箱</span>
            2949026597@qq.com
            <i><Arrow diagonal /></i>
          </a>
          <div className="footer-bottom">
            <span>© 2026 SONG JIALE</span>
            <span>VISUAL · AI · BRAND DESIGNER</span>
            <button onClick={() => go('#top')}>BACK TO TOP ↑</button>
          </div>
        </div>
      </footer>

      {activePreview && (
        <div className="preview-modal" role="dialog" aria-modal="true" aria-label={`${activePreview.title}视频预览`}>
          <button className="preview-backdrop" type="button" onClick={() => setActivePreview(null)} aria-label="关闭预览" />
          <div className="preview-dialog">
            <div className="preview-dialog-head">
              <div>
                <span>{activePreview.badge}</span>
                <strong>{activePreview.title} · {activePreview.subtitle}</strong>
                {activePreview.detail && <p>{activePreview.detail}</p>}
              </div>
              <button type="button" onClick={() => setActivePreview(null)}>关闭 ×</button>
            </div>
            {activePreview.meta && (
              <div className="preview-meta">
                {activePreview.meta.map(item => (
                  <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
                ))}
              </div>
            )}
            <video src={activePreview.video} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </main>
  )
}

export default App
