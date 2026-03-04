import Intro from './parts/Intro.jsx'
import Navbar from './parts/Navbar.jsx'
import Aboutme from './parts/Aboutme.jsx'

function App() {
  return (
    <div className="h-[200vh] min-h-screen bg-slate-50 dark:bg-neutral-950 font-mono">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 space-y-20 py-10 font-sans">
        <Intro />
        <Aboutme />
      </main>
    </div>
  );
}

export default App
