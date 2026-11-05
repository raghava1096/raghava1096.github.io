import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Highlights from './components/Highlights'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="container">
        <Stats />
        <Highlights />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>Built with React and Vite · source on GitHub</p>
      </footer>
    </>
  )
}
