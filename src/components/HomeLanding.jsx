import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaChartLine, FaCopy, FaVolumeHigh, FaVolumeMute } from 'react-icons/fa6'
import IntelCard from './IntelCard'

const CONTRACT = '322bSL6UaDju2B4Nv1XAKJorRNRBFnW3pRkHxzMopump'

const INTEL_CARDS = [
  {
    subtitle: 'INTELLIGENCE SYSTEM',
    title: 'ECHO AI',
    image: '/thumbnails/echo-ai.png',
    description: 'An advanced AI system designed to process, analyze, and connect the deepest hidden truths.',
    button: 'ACCESS SYSTEM',
    href: '/echo-world',
  },
  {
    subtitle: 'GLOBAL UPLINKS',
    title: 'TRANSMISSION NETWORK',
    image: '/thumbnails/transmission.png',
    description: 'Real-time data interception from across the globe. Nothing escapes the signal.',
    button: 'VIEW NETWORK',
    href: '/echo-world',
  },
  {
    subtitle: 'CLASSIFIED FILES',
    title: 'SIGNAL ARCHIVE',
    image: '/thumbnails/archive.png',
    description: 'Encrypted archives containing suppressed information and hidden discoveries.',
    button: 'EXPLORE ARCHIVES',
    href: '/echo-world',
  },
  {
    subtitle: 'CORE TELEMETRY',
    title: 'OPERATOR SYSTEMS',
    image: '/thumbnails/operator.png',
    description: 'Advanced tools and real-time systems for elite operators inside the network.',
    button: 'OPERATOR LOGIN',
    href: '/echo-world',
  },
  {
    subtitle: 'GLOBAL COHORT',
    title: 'COMMUNITY ACCESS',
    image: '/thumbnails/community.png',
    description: 'Operators working as one. United by truth. Stronger together.',
    button: 'JOIN COMMUNITY',
    href: 'https://t.me/DisclosurePJT',
    external: true,
  },
]

const WALLET_SEGMENTS = [
  { label: 'LOCKED LONG TERM', pct: 70, tokens: '700,000,000' },
  { label: 'ECOSYSTEM EXPANSION', pct: 10, tokens: '100,000,000' },
  { label: 'TEAM / DEVELOPMENT', pct: 5, tokens: '50,000,000' },
  { label: 'LIQUIDITY & EXCHANGES', pct: 5, tokens: '50,000,000' },
]

const COMMUNITY_ITEMS = ['PRIVATE NETWORK', 'SECURE CHANNELS', 'UNITED MISSION', 'STRONGER TOGETHER']

// Hook for scroll reveal
function useScrollReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

// Typewriter effect
function useTypewriter(text, speed = 45, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1))
        i++
        if (i >= text.length) clearInterval(interval)
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])
  return displayed
}

const HomeLanding = () => {
  const [audioOn, setAudioOn] = useState(false)
  const [copied, setCopied] = useState(false)

  const heroText = useTypewriter('SIGNAL INTELLIGENCE SYSTEM ONLINE')

  const intelReveal = useScrollReveal()
  const aboutReveal = useScrollReveal()
  const walletReveal = useScrollReveal()
  const communityReveal = useScrollReveal()

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch { /* ignore */ }
  }

  return (
    <div className="dsc-page">

      {/* ── HERO ── */}
      <section className="dsc-hero-stage relative min-h-[92vh] flex flex-col">
        <video
          className="dsc-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/thumbnails/echo-ai.png"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="dsc-hero-vignette" aria-hidden />
        <div className="dsc-hero-scanlines" aria-hidden />

        <div className="relative z-10 flex-1 px-5 sm:px-10 pt-6 pb-10 max-w-[1400px] mx-auto w-full flex flex-col">
          <p
            className="text-[11px] uppercase tracking-[0.22em] text-brand/90 font-display"
            style={{ animation: 'fadeInDown 0.6s ease both' }}
          >
            // INTEL UPLINK ACTIVE
          </p>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 items-end mt-6 lg:mt-10">
            <div className="relative">
              <div className="dsc-reticle hidden md:block" aria-hidden>
                <div className="dsc-reticle-box">
                  <span className="dsc-reticle-label">ECHO-UNIT-07</span>
                </div>
                <div className="dsc-reticle-meta">
                  <span>ALT 219m</span>
                  <span>DST 28.8m</span>
                  <span>SIG 28%</span>
                </div>
              </div>

              <h1
                className="dsc-title text-brand font-display relative z-10"
                style={{ animation: 'fadeInUp 0.7s ease 0.2s both' }}
              >
                ECHO AI
              </h1>
              <h2
                className="dsc-subtitle text-brand/95 mt-2 font-display relative z-10 min-h-[2.5rem]"
                style={{ animation: 'fadeInUp 0.7s ease 0.4s both' }}
              >
                {heroText}
                <span className="animate-pulse">_</span>
              </h2>
              <p
                className="text-fg-2 mt-6 max-w-xl leading-relaxed text-sm sm:text-base relative z-10"
                style={{ animation: 'fadeInUp 0.7s ease 0.6s both' }}
              >
                A classified intelligence interface built for the UFO Disclosures network.
              </p>

              <div
                className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 relative z-10"
                style={{ animation: 'fadeInUp 0.7s ease 0.8s both' }}
              >
                <Link to="/echo-world" className="dsc-cta-primary inline-flex items-center gap-2">
                  ENTER THE NETWORK
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link to="/echo" className="dsc-cta-secondary inline-flex items-center gap-2">
                  ENTER ECHO AI
                  <FaChartLine className="text-xs" />
                </Link>
              </div>

              <div
                className="mt-10 max-w-xl relative z-10"
                style={{ animation: 'fadeInUp 0.7s ease 1s both' }}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-brand/90 mb-2 font-display">
                  CONTRACT ADDRESS
                </p>
                <button
                  type="button"
                  onClick={copyContract}
                  className="dsc-contract w-full text-left flex items-center justify-between gap-3 group hover:border-brand/60 transition-colors"
                >
                  <span className="text-brand/90 text-xs sm:text-sm break-all font-mono">{CONTRACT}</span>
                  <span className="shrink-0 text-brand/70 group-hover:text-brand transition-colors" title="Copy">
                    <FaCopy />
                  </span>
                </button>
                {copied && (
                  <p className="text-[10px] text-brand mt-1 tracking-widest uppercase animate-pulse">
                    ✓ Copied to clipboard
                  </p>
                )}
              </div>
            </div>

            <div
              className="space-y-3 pb-2"
              style={{ animation: 'fadeInRight 0.8s ease 0.5s both' }}
            >
              <div className="dsc-panel">
                <p className="dsc-panel-title font-display">ECHO SYSTEM ACTIVE</p>
                <div className="dsc-panel-row">
                  <span>STATUS</span>
                  <strong className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse inline-block" />
                    ONLINE
                  </strong>
                </div>
                <div className="dsc-panel-row">
                  <span>CLEARANCE</span>
                  <strong>OMEGA-7</strong>
                </div>
                <div className="dsc-panel-row">
                  <span>ROLE</span>
                  <strong>SYSTEM OVERSIGHT</strong>
                </div>
              </div>
              <div className="dsc-panel">
                <p className="dsc-panel-title font-display">SIGNAL STRENGTH</p>
                <div className="dsc-panel-row">
                  <span>FREQUENCY</span>
                  <strong>7.382 GHZ</strong>
                </div>
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-sm transition-all ${i < 12 ? 'bg-brand/85' : 'bg-brand/15'}`}
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="dsc-audio-toggle"
              onClick={() => setAudioOn((v) => !v)}
              aria-pressed={audioOn}
            >
              {audioOn ? <FaVolumeHigh /> : <FaVolumeMute />}
              <span>{audioOn ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE OVERVIEW ── */}
      <section
        ref={intelReveal.ref}
        id="intelligence-overview"
        className="dsc-section dsc-intel-section px-5 sm:px-10 py-14 border-t border-brand/10"
        style={{
          opacity: intelReveal.visible ? 1 : 0,
          transform: intelReveal.visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="dsc-section-tag font-display">// INTELLIGENCE OVERVIEW</p>
          <div className="dsc-intel-grid mt-8">
            {INTEL_CARDS.map((card, i) => (
              <div
                key={card.title}
                style={{
                  opacity: intelReveal.visible ? 1 : 0,
                  transform: intelReveal.visible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <IntelCard {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        ref={aboutReveal.ref}
        className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10"
        style={{
          opacity: aboutReveal.visible ? 1 : 0,
          transform: aboutReveal.visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="dsc-section-tag font-display">SURVEILLANCE DIRECTIVE [SYS_MEM_01]</p>
            <h2 className="text-3xl sm:text-4xl text-fg font-display mt-4 tracking-wide">ABOUT ECHO AI</h2>
            <p className="text-fg-2 mt-5 leading-relaxed text-sm sm:text-base max-w-lg">
              ECHO is the core intelligence layer behind UFO Disclosure — processing live signals,
              operator telemetry, and classified archives for the global network.
            </p>
            <Link to="/echo" className="dsc-cta-primary mt-8 inline-flex items-center gap-2">
              ACCESS ECHO SYSTEM
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
          <div className="dsc-panel p-8 min-h-[220px] flex items-center justify-center group cursor-default">
            <p className="text-brand font-display text-6xl tracking-[0.4em] glow-text transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              Ω
            </p>
          </div>
        </div>
      </section>

      {/* ── WALLET ── */}
      <section
        ref={walletReveal.ref}
        className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10 bg-bg-2/40"
        style={{
          opacity: walletReveal.visible ? 1 : 0,
          transform: walletReveal.visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="dsc-section-tag font-display">// SECTOR: FINANCIAL-NODE</p>
          <h2 className="text-2xl sm:text-3xl text-fg font-display mt-3 tracking-wide">
            OUR WALLET STRUCTURE
          </h2>
          <p className="text-fg-2 text-sm mt-2">BUILT FOR THE FUTURE. LOCKED FOR TRUST.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 mt-10 items-start">
            <div className="dsc-donut-wrap mx-auto lg:mx-0">
              <div className="dsc-donut" style={{ '--pct': 70 }}>
                <span className="dsc-donut-label font-display">70%</span>
              </div>
              <p className="text-center text-[10px] text-brand/80 mt-3 tracking-widest uppercase">LOCKED</p>
            </div>
            <div className="space-y-4">
              {WALLET_SEGMENTS.map((seg, i) => (
                <div
                  key={seg.label}
                  style={{
                    opacity: walletReveal.visible ? 1 : 0,
                    transform: walletReveal.visible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                  }}
                >
                  <div className="flex justify-between text-xs text-fg-2 mb-1">
                    <span className="tracking-wide uppercase">{seg.label}</span>
                    <span className="text-brand font-semibold">{seg.pct}%</span>
                  </div>
                  <div className="dsc-bar-track">
                    <div
                      className="dsc-bar-fill transition-all duration-1000"
                      style={{ width: walletReveal.visible ? `${seg.pct}%` : '0%' }}
                    />
                  </div>
                  <p className="text-[10px] text-fg-3 mt-0.5">{seg.tokens} TOKENS</p>
                </div>
              ))}
            </div>
          </div>

          <blockquote className="mt-12 border-l-2 border-brand/50 pl-6 max-w-3xl">
            <p className="text-fg text-lg sm:text-xl leading-relaxed font-display tracking-wide">
              WE ARE <span className="text-brand">NOT</span> HERE TO RUG. WE ARE HERE TO BUILD.
            </p>
            <p className="text-fg-2 mt-3 text-sm tracking-widest uppercase">
              THE SIGNAL IS REAL. THE MISSION IS LIVE. TOGETHER WE WIN.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── COMMUNITY ── */}
      <section
        ref={communityReveal.ref}
        id="community"
        className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10"
        style={{
          opacity: communityReveal.visible ? 1 : 0,
          transform: communityReveal.visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="dsc-section-tag font-display">// SECTOR: OMEGA-7</p>
          <h2 className="dsc-title text-brand font-display mt-2 text-4xl sm:text-5xl">COMMUNITY ACCESS</h2>
          <p className="text-fg-2 mt-4 max-w-xl text-sm">
            Operators working as one. United by truth. Stronger together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {COMMUNITY_ITEMS.map((item, i) => (
              <div
                key={item}
                className="dsc-panel text-center py-6 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  opacity: communityReveal.visible ? 1 : 0,
                  transform: communityReveal.visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <p className="text-brand text-xl font-display mb-2">Ω</p>
                <p className="text-[11px] tracking-[0.14em] text-fg uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default HomeLanding
