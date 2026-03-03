import { useState } from 'react'
import Intro from './parts/Intro.jsx'
import Navbar from './parts/Navbar.jsx'
import Aboutme from './parts/Aboutme.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 space-y-20 py-10">
        <Intro />
        <Aboutme />
      </main>
    </div>
  );
}

export default App
