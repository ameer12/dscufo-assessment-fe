import { Link, useLocation } from 'react-router-dom'
import { FaTelegram, FaXTwitter } from 'react-icons/fa6'

const NavBar = () => {
  const location = useLocation()
  const active = (p) => location.pathname === p

  const navLink = (label, to, isRoute = true) => {
    const cls = `text-[11px] tracking-[0.14em] uppercase transition-colors ${
      isRoute && active(to) ? 'text-brand border-b border-brand pb-0.5' : 'text-fg-2 hover:text-brand'
    }`
    if (isRoute) {
      return (
        <Link key={label} to={to} className={cls}>
          {label}
        </Link>
      )
    }
    return (
      <a key={label} href="#" className={cls}>
        {label}
      </a>
    )
  }

  return (
    <header className="sticky top-0 z-[200] border-b border-brand/15 bg-[#03060c]/92 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-3">
        <div className="flex items-center justify-between gap-4 min-h-[48px]">
          <Link to="/home" className="shrink-0 flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="UFO Disclosure"
              className="w-9 h-9 rounded-full object-cover border border-brand/30"
            />
            <span className="text-fg font-semibold text-sm sm:text-base tracking-[0.1em] font-display hidden sm:inline">
              UFO DISCLOSURE
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 flex-wrap justify-center">
            {navLink('HOME', '/home')}
            {navLink('ARCHIVE', '#', false)}
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
