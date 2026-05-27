import { Link } from 'react-router-dom'
import { FaArrowRight, FaChartLine } from 'react-icons/fa6'

const EchoWorldPage = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-16 text-center">
    <p className="dsc-section-tag">// TRANSMISSION NETWORK UPLINK</p>
    <h1 className="dsc-page-title text-3xl sm:text-5xl text-brand mt-4 tracking-wide glow-text">ECHO WORLD</h1>
    <p className="text-fg-2 mt-4 max-w-lg text-sm leading-relaxed">
      Global operator network interface. Real-time signal routing and classified intelligence channels are active.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 mt-10">
      <Link to="/home" className="dsc-cta-primary inline-flex items-center gap-2">
        RETURN TO COMMAND
        <FaArrowRight className="text-xs" />
      </Link>
      <Link to="/echo" className="dsc-cta-secondary inline-flex items-center gap-2">
        ENTER ECHO AI
        <FaChartLine className="text-xs" />
      </Link>
    </div>
  </div>
)

export default EchoWorldPage
