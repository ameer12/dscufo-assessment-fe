import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const EchoPage = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-16 text-center">
    <p className="dsc-section-tag">// ECHO AI CORE</p>
    <h1 className="dsc-page-title text-3xl sm:text-5xl text-brand mt-4 tracking-wide glow-text">ECHO AI</h1>
    <p className="text-fg-2 mt-4 max-w-lg text-sm leading-relaxed">
      Signal intelligence layer online. Process, analyze, and connect classified transmissions across the UFO Disclosure network.
    </p>
    <Link to="/echo-world" className="dsc-cta-primary mt-10 inline-flex items-center gap-2">
      ENTER THE NETWORK
      <FaArrowRight className="text-xs" />
    </Link>
  </div>
)

export default EchoPage
