import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaLock, FaCircle } from 'react-icons/fa6'

const PHASES = [
  {
    id: 'PHASE-01',
    code: 'SYS_INIT',
    title: 'GENESIS PROTOCOL',
    status: 'complete',
    date: 'Q1 2025',
    items: [
      'Token contract deployed',
      'Echo AI architecture initialized',
      'Community channels established',
      'Initial liquidity locked',
      'Website & brand launch',
    ],
  },
  {
    id: 'PHASE-02',
    code: 'SIGNAL_EXPAND',
    title: 'SIGNAL EXPANSION',
    status: 'active',
    date: 'Q2 2025',
    items: [
      'Echo AI beta access',
      'Transmission network v1',
      'Operator onboarding system',
      'Intelligence archive v1',
      'CEX listing negotiations',
    ],
  },
  {
    id: 'PHASE-03',
    code: 'NET_UPLINK',
    title: 'NETWORK UPLINK',
    status: 'upcoming',
    date: 'Q3 2025',
    items: [
      'Full Echo AI deployment',
      'Cross-chain bridge',
      'Operator dashboard v2',
      'Classified file system',
      'Global signal relay network',
    ],
  },
  {
    id: 'PHASE-04',
    code: 'FULL_DISCLOSURE',
    title: 'FULL DISCLOSURE',
    status: 'locked',
    date: 'Q4 2025',
    items: [
      'ECHO mainnet launch',
      'Decentralized intelligence DAO',
      'Major exchange listings',
      'Mass operator recruitment',
      'The signal goes global',
    ],
  },
]

const STATUS_CONFIG = {
  complete: { label: 'COMPLETE', color: '#00f5ff', bg: 'rgba(0,245,255,0.08)', icon: FaCheck },
  active:   { label: 'ACTIVE',   color: '#00f5ff', bg: 'rgba(0,245,255,0.05)', icon: FaCircle },
  upcoming: { label: 'PENDING',  color: 'rgba(0,245,255,0.45)', bg: 'rgba(0,245,255,0.02)', icon: FaCircle },
  locked:   { label: 'LOCKED',   color: 'rgba(0,245,255,0.25)', bg: 'rgba(0,0,0,0.2)', icon: FaLock },
}

function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function PhaseCard({ phase, index }) {
  const { ref, visible } = useScrollReveal()
  const [hovered, setHovered] = useState(false)
  const cfg = STATUS_CONFIG[phase.status]
  const Icon = cfg.icon
  const isLocked = phase.status === 'locked'
  const isActive = phase.status === 'active'

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateY(0) scale(1)'
          : index % 2 === 0 ? 'translateY(40px) scale(0.97)' : 'translateY(40px) scale(0.97)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.15}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* connector line */}
      {index < PHASES.length - 1 && (
        <div
          className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px z-10"
          style={{
            background: `linear-gradient(90deg, ${cfg.color}, transparent)`,
            opacity: 0.4,
          }}
        />
      )}

      <div
        className="relative flex flex-col h-full p-6 border transition-all duration-500"
        style={{
          borderColor: hovered ? cfg.color : 'rgba(0,229,255,0.1)',
          background: hovered ? cfg.bg : 'rgba(255,255,255,0.01)',
          boxShadow: hovered ? `0 0 32px ${cfg.color}18, inset 0 0 20px ${cfg.color}06` : 'none',
        }}
      >
        {/* corners */}
        {['tl','tr','bl','br'].map(pos => (
          <div
            key={pos}
            className="absolute w-3 h-3 pointer-events-none transition-all duration-500"
            style={{
              top: pos.includes('t') ? 0 : 'auto',
              bottom: pos.includes('b') ? 0 : 'auto',
              left: pos.includes('l') ? 0 : 'auto',
              right: pos.includes('r') ? 0 : 'auto',
              borderColor: hovered ? cfg.color : 'rgba(0,229,255,0.2)',
              borderStyle: 'solid',
              borderWidth: pos === 'tl' ? '1px 0 0 1px' : pos === 'tr' ? '1px 1px 0 0' : pos === 'bl' ? '0 0 1px 1px' : '0 1px 1px 0',
              filter: hovered ? `drop-shadow(0 0 4px ${cfg.color})` : 'none',
              transform: hovered
                ? pos === 'tl' ? 'translate(-3px,-3px)' : pos === 'tr' ? 'translate(3px,-3px)' : pos === 'bl' ? 'translate(-3px,3px)' : 'translate(3px,3px)'
                : 'translate(0,0)',
            }}
          />
        ))}

        {/* laser sweep on active */}
        {isActive && hovered && (
          <div
            className="absolute left-0 w-full h-px pointer-events-none z-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${cfg.color}, transparent)`,
              boxShadow: `0 0 8px ${cfg.color}`,
              animation: 'roadmap-laser 2s linear infinite',
            }}
          />
        )}

        {/* header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: 'rgba(0,245,255,0.5)' }}>
              {phase.id}
            </p>
            <h3
              className="font-display font-bold tracking-wide text-sm uppercase"
              style={{ color: hovered ? cfg.color : '#fff', textShadow: hovered ? `0 0 12px ${cfg.color}60` : 'none' }}
            >
              {phase.title}
            </h3>
          </div>
          <div
            className="flex items-center gap-1.5 px-2 py-1 border text-[9px] font-display tracking-widest shrink-0"
            style={{ borderColor: `${cfg.color}40`, color: cfg.color, background: `${cfg.color}10` }}
          >
            <Icon className={`text-[8px] ${isActive ? 'animate-pulse' : ''}`} />
            {cfg.label}
          </div>
        </div>

        {/* date */}
        <p className="text-[10px] tracking-[0.16em] mb-4" style={{ color: 'rgba(0,245,255,0.45)' }}>
          TARGET: {phase.date}
        </p>

        {/* items */}
        <ul className="space-y-2 flex-1">
          {phase.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs transition-all duration-300"
              style={{
                color: isLocked ? 'rgba(255,255,255,0.2)' : hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)',
                transitionDelay: `${i * 30}ms`,
              }}
            >
              <span className="mt-1 shrink-0 w-1 h-1 rounded-full" style={{ background: cfg.color, opacity: isLocked ? 0.2 : 0.7 }} />
              <span className="leading-relaxed tracking-wide">{isLocked ? '[ CLASSIFIED ]' : item}</span>
            </li>
          ))}
        </ul>

        {/* bottom tag */}
        <div className="mt-5 pt-3 border-t flex items-center justify-between" style={{ borderColor: 'rgba(0,245,255,0.08)' }}>
          <span className="text-[9px] tracking-[0.14em] font-display" style={{ color: 'rgba(0,245,255,0.3)' }}>
            {phase.code}
          </span>
          {!isLocked && (
            <span className="text-[9px] tracking-widest uppercase" style={{ color: cfg.color, opacity: hovered ? 1 : 0, transition: 'opacity 0.3s' }}>
              UPLINK ACTIVE →
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function RoadmapPage() {
  const heroReveal = useScrollReveal(0.05)
  const statsReveal = useScrollReveal()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setTick(v => v + 1), 1800)
    return () => clearInterval(t)
  }, [])

  const completed = PHASES.filter(p => p.status === 'complete').length
  const progress = Math.round((completed / PHASES.length) * 100)

  return (
    <div className="dsc-page min-h-screen">

      {/* scanlines overlay */}
      <div className="dsc-hero-scanlines fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.025 }} />

      {/* ── HERO ── */}
      <section
        ref={heroReveal.ref}
        className="relative px-5 sm:px-10 pt-16 pb-12 border-b"
        style={{ borderColor: 'rgba(0,245,255,0.1)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <p
            className="dsc-section-tag font-display"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'none' : 'translateY(-12px)', transition: 'all 0.5s ease' }}
          >
            // MISSION DIRECTIVE — CLASSIFIED
          </p>

          <h1
            className="font-display font-bold tracking-wide mt-4 glow-text"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 0.95,
              color: '#00f5ff',
              opacity: heroReveal.visible ? 1 : 0,
              transform: heroReveal.visible ? 'none' : 'translateY(20px)',
              transition: 'all 0.7s ease 0.1s',
            }}
          >
            MISSION<br />ROADMAP
          </h1>

          <p
            className="text-fg-2 mt-5 max-w-lg text-sm leading-relaxed"
            style={{ opacity: heroReveal.visible ? 1 : 0, transform: heroReveal.visible ? 'none' : 'translateY(16px)', transition: 'all 0.7s ease 0.25s' }}
          >
            Four phases. One objective. The signal will not be suppressed.
            Track the evolution of the DSCUFO intelligence network in real time.
          </p>

          {/* progress bar */}
          <div
            className="mt-8 max-w-sm"
            style={{ opacity: heroReveal.visible ? 1 : 0, transition: 'opacity 0.7s ease 0.4s' }}
          >
            <div className="flex justify-between text-[10px] tracking-widest uppercase mb-2" style={{ color: 'rgba(0,245,255,0.6)' }}>
              <span>MISSION PROGRESS</span>
              <span style={{ color: '#00f5ff' }}>{progress}%</span>
            </div>
            <div className="h-px w-full" style={{ background: 'rgba(0,245,255,0.1)' }}>
              <div
                className="h-full"
                style={{
                  width: heroReveal.visible ? `${progress}%` : '0%',
                  background: 'linear-gradient(90deg, #00f5ff, #5799ff)',
                  boxShadow: '0 0 8px #00f5ff',
                  transition: 'width 1.5s cubic-bezier(0.16,1,0.3,1) 0.6s',
                }}
              />
            </div>
            <p className="text-[9px] mt-1 tracking-widest" style={{ color: 'rgba(0,245,255,0.35)' }}>
              {completed} OF {PHASES.length} PHASES COMPLETE
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        ref={statsReveal.ref}
        className="px-5 sm:px-10 py-6 border-b"
        style={{ borderColor: 'rgba(0,245,255,0.06)', background: 'rgba(0,245,255,0.01)' }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'PHASES TOTAL', value: PHASES.length },
            { label: 'COMPLETE', value: completed },
            { label: 'IN PROGRESS', value: 1 },
            { label: 'SIGNAL INTEGRITY', value: `${[78,81,84,87,90][tick % 5]}%` },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                opacity: statsReveal.visible ? 1 : 0,
                transform: statsReveal.visible ? 'none' : 'translateY(16px)',
                transition: `all 0.5s ease ${i * 0.08}s`,
              }}
            >
              <p className="font-display font-bold text-2xl sm:text-3xl" style={{ color: '#00f5ff' }}>
                {stat.value}
              </p>
              <p className="text-[9px] tracking-[0.16em] uppercase mt-1" style={{ color: 'rgba(0,245,255,0.45)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PHASE CARDS ── */}
      <section className="px-5 sm:px-10 py-14">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PHASES.map((phase, i) => (
              <PhaseCard key={phase.id} phase={phase} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-5 sm:px-10 py-14 border-t" style={{ borderColor: 'rgba(0,245,255,0.1)' }}>
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="dsc-section-tag font-display mb-4">// READY TO JOIN THE NETWORK?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/echo-world" className="dsc-cta-primary inline-flex items-center gap-2 justify-center">
              ENTER THE NETWORK <FaArrowRight className="text-xs" />
            </Link>
            <Link to="/echo" className="dsc-cta-secondary inline-flex items-center gap-2 justify-center">
              ACCESS ECHO AI
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes roadmap-laser {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}
