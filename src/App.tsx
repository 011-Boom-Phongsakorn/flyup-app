import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import FeaturedProjects from './components/FeaturedProjects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}

export default App
