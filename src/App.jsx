import Intro from './parts/Intro.jsx'
import Navbar from './parts/Navbar.jsx'
import Aboutme from './parts/Aboutme.jsx'
import Skills from './parts/Skills.jsx';
import Projects from './parts/Projects.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 font-mono">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 font-sans w-full">
        <Intro />
        <Aboutme />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App
