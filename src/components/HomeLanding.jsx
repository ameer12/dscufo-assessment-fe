import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaChartLine, FaCopy, FaVolumeHigh } from 'react-icons/fa6'
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

const HomeLanding = () => {
  const [audioOn, setAudioOn] = useState(true)
  const [copied, setCopied] = useState(false)

  const copyContract = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-brand/90 font-display">
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

              <h1 className="dsc-title text-brand font-display relative z-10">ECHO AI</h1>
              <h2 className="dsc-subtitle text-brand/95 mt-2 font-display relative z-10">
                SIGNAL INTELLIGENCE SYSTEM ONLINE
              </h2>
              <p className="text-fg-2 mt-6 max-w-xl leading-relaxed text-sm sm:text-base relative z-10">
                A classified intelligence interface built for the UFO Disclosures network.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-8 relative z-10">
                <Link to="/echo-world" className="dsc-cta-primary inline-flex items-center gap-2">
                  ENTER THE NETWORK
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link to="/echo" className="dsc-cta-secondary inline-flex items-center gap-2">
                  ENTER ECHO AI
                  <FaChartLine className="text-xs" />
                </Link>
              </div>

              <div className="mt-10 max-w-xl relative z-10">
                <p className="text-[11px] uppercase tracking-[0.18em] text-brand/90 mb-2 font-display">
                  CONTRACT ADDRESS
                </p>
                <button
                  type="button"
                  onClick={copyContract}
                  className="dsc-contract w-full text-left flex items-center justify-between gap-3 group"
                >
                  <span className="text-brand/90 text-xs sm:text-sm break-all font-mono">{CONTRACT}</span>
                  <span className="shrink-0 text-brand/70 group-hover:text-brand" title="Copy">
                    <FaCopy />
                    {copied && <span className="sr-only">Copied</span>}
                  </span>
                </button>
                {copied && (
                  <p className="text-[10px] text-brand mt-1 tracking-widest uppercase">Copied to clipboard</p>
                )}
              </div>
            </div>

            <div className="space-y-3 pb-2">
              <div className="dsc-panel">
                <p className="dsc-panel-title font-display">ECHO SYSTEM ACTIVE</p>
                <div className="dsc-panel-row">
                  <span>STATUS</span>
                  <strong>ONLINE</strong>
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
                      className={`h-1.5 flex-1 rounded-sm ${i < 12 ? 'bg-brand/85' : 'bg-brand/15'}`}
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
              <FaVolumeHigh />
              <span>{audioOn ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE OVERVIEW ── */}
      <section id="intelligence-overview" className="dsc-section dsc-intel-section px-5 sm:px-10 py-14 border-t border-brand/10">
        <div className="max-w-[1400px] mx-auto">
          <p className="dsc-section-tag font-display">// INTELLIGENCE OVERVIEW</p>
          <div className="dsc-intel-grid mt-8">
            {INTEL_CARDS.map((card) => (
              <IntelCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10">
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
          <div className="dsc-panel p-8 min-h-[220px] flex items-center justify-center">
            <p className="text-brand font-display text-2xl tracking-[0.4em] glow-text">Ω</p>
          </div>
        </div>
      </section>

      {/* ── WALLET ── */}
      <section className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10 bg-bg-2/40">
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
              <p className="text-center text-[10px] text-brand/80 mt-3 tracking-widest uppercase">
                LOCKED
              </p>
            </div>
            <div className="space-y-4">
              {WALLET_SEGMENTS.map((seg) => (
                <div key={seg.label}>
                  <div className="flex justify-between text-xs text-fg-2 mb-1">
                    <span className="tracking-wide uppercase">{seg.label}</span>
                    <span className="text-brand font-semibold">{seg.pct}%</span>
                  </div>
                  <div className="dsc-bar-track">
                    <div className="dsc-bar-fill" style={{ width: `${seg.pct}%` }} />
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
      <section id="community" className="dsc-section px-5 sm:px-10 py-16 border-t border-brand/10">
        <div className="max-w-[1400px] mx-auto">
          <p className="dsc-section-tag font-display">// SECTOR: OMEGA-7</p>
          <h2 className="dsc-title text-brand font-display mt-2 text-4xl sm:text-5xl">COMMUNITY ACCESS</h2>
          <p className="text-fg-2 mt-4 max-w-xl text-sm">
            Operators working as one. United by truth. Stronger together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {['PRIVATE NETWORK', 'SECURE CHANNELS', 'UNITED MISSION', 'STRONGER TOGETHER'].map((item) => (
              <div key={item} className="dsc-panel text-center py-6">
                <p className="text-brand text-xl font-display mb-2">Ω</p>
                <p className="text-[11px] tracking-[0.14em] text-fg uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeLanding
