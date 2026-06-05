import './App.css'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Page from './components/Page'
import ScrollToTop from './components/ScrollToTop'
import HomeLanding from './components/HomeLanding'
import EchoWorldPage from './components/EchoWorldPage'
import EchoPage from './components/EchoPage'
import RoadmapPage from './components/RoadmapPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeLanding />} />
      <Route path="/home" element={<HomeLanding />} />
      <Route path="/echo-world" element={<EchoWorldPage />} />
      <Route path="/echo" element={<EchoPage />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/home'

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-bg text-fg">
        <NavBar />
        {isHome ? (
          <main className="flex-1">
            <AppRoutes />
          </main>
        ) : (
          <Page>
            <AppRoutes />
          </Page>
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
