import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTelegram, FaXTwitter, FaBars, FaXmark } from 'react-icons/fa6'

const NavBar = () => {
  const location = useLocation()
  const active = (p) => location.pathname === p
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (label, to, isRoute = true) => {
    const cls = `text-[11px] tracking-[0.14em] uppercase transition-colors ${
      isRoute && active(to) ? 'text-brand border-b border-brand pb-0.5' : 'text-fg-2 hover:text-brand'
    }`
    if (isRoute) {
      return (
        <Link key={label} to={to} className={cls} onClick={() => setMenuOpen(false)}>
          {label}
        </Link>
      )
    }
    return (
      <a key={label} href="#" className={cls} onClick={() => setMenuOpen(false)}>
        {label}
      </a>
    )
  }

  return (
    <header
      className={`sticky top-0 z-[200] border-b border-brand/15 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'bg-[#03060c]/98 shadow-lg shadow-black/40' : 'bg-[#03060c]/92'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-3">
        <div className="flex items-center justify-between gap-4 min-h-[48px]">
          <Link to="/home" className="shrink-0 flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="UFO Disclosure"
              className="w-9 h-9 rounded-full object-cover border border-brand/30 group-hover:border-brand/60 transition-colors"
            />
            <span className="text-fg font-semibold text-sm sm:text-base tracking-[0.1em] font-display hidden sm:inline">
              UFO DISCLOSURE
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 flex-wrap justify-center">
            {navLink('HOME', '/home')}
            {navLink('ARCHIVE', '#', false)}
            {navLink('ROADMAP', '/roadmap')}
            {navLink('NETWORK', '#', false)}
            {navLink('CHAT', '#', false)}
            {navLink('COINS', '#', false)}
            {navLink('PRICING', '#', false)}
            {navLink('LOGIN', '#', false)}
            {navLink('REGISTER', '#', false)}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-brand/25 text-brand/80 hover:text-brand hover:border-brand/50 transition-colors"
              aria-label="Telegram"
            >
              <FaTelegram />
            </a>
            <a
              href="#"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded border border-brand/25 text-brand/80 hover:text-brand hover:border-brand/50 transition-colors"
              aria-label="X"
            >
              <FaXTwitter className="text-sm" />
            </a>
            <Link to="/echo" className="dsc-echo-pill hidden md:inline-flex font-display hover:opacity-90">
              ECHO
            </Link>

            <button
              type="button"
              className="lg:hidden w-9 h-9 flex items-center justify-center border border-brand/25 text-brand/80 hover:text-brand hover:border-brand/50 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-brand/10 bg-[#03060c]/98 px-5 py-4 flex flex-col gap-4">
          {[
            { label: 'HOME', to: '/home', isRoute: true },
            { label: 'ECHO AI', to: '/echo', isRoute: true },
            { label: 'NETWORK', to: '/echo-world', isRoute: true },
            { label: 'ARCHIVE', to: '#', isRoute: false },
            { label: 'CHAT', to: '#', isRoute: false },
            { label: 'COINS', to: '#', isRoute: false },
            { label: 'PRICING', to: '#', isRoute: false },
            { label: 'LOGIN', to: '#', isRoute: false },
            { label: 'REGISTER', to: '#', isRoute: false },
          ].map(({ label, to, isRoute }) => navLink(label, to, isRoute))}

          <div className="flex gap-3 pt-2 border-t border-brand/10">
            <a href="#" className="flex items-center gap-2 text-brand/70 hover:text-brand text-[11px] tracking-widest uppercase transition-colors">
              <FaTelegram /> Telegram
            </a>
            <a href="#" className="flex items-center gap-2 text-brand/70 hover:text-brand text-[11px] tracking-widest uppercase transition-colors">
              <FaXTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
