import { Link } from 'react-router-dom'
import { FaTelegram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => (
  <footer className="mt-auto border-t border-brand/15 bg-[#03060c]">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2 sm:col-span-1">
          <Link to="/home" className="text-fg font-semibold tracking-[0.1em] font-display hover:text-brand">
            UFO DISCLOSURE
          </Link>
          <p className="text-fg-3 text-xs mt-3 max-w-xs leading-relaxed">
            THE SIGNAL IS REAL. CLASSIFIED INTELLIGENCE FOR OPERATORS ONLY.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-brand/70 hover:text-brand" aria-label="Telegram">
              <FaTelegram />
            </a>
            <a href="#" className="text-brand/70 hover:text-brand" aria-label="X">
              <FaXTwitter />
            </a>
          </div>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.18em] text-brand/80 uppercase mb-3 font-display">Links</p>
          <ul className="space-y-2 text-fg-2 text-xs">
            <li><Link to="/home" className="hover:text-brand">Home</Link></li>
            <li><a href="#" className="hover:text-brand">Archive</a></li>
            <li><a href="#" className="hover:text-brand">Network</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.18em] text-brand/80 uppercase mb-3 font-display">Community</p>
          <ul className="space-y-2 text-fg-2 text-xs">
            <li><a href="#" className="hover:text-brand">Chat</a></li>
            <li><a href="#" className="hover:text-brand">Coins</a></li>
            <li><a href="#" className="hover:text-brand">Pricing</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.18em] text-brand/80 uppercase mb-3 font-display">ECHO</p>
          <ul className="space-y-2 text-fg-2 text-xs">
            <li><Link to="/echo-world" className="hover:text-brand">Enter network</Link></li>
            <li><Link to="/echo" className="hover:text-brand">ECHO AI</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center text-fg-3 text-xs mt-10 tracking-widest uppercase">
        © 2026 UFO DISCLOSURE. THE SIGNAL IS REAL.
      </p>
    </div>
  </footer>
)

export default Footer
