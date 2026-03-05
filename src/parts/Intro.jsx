function Intro() {
  return (
  <section id="Intro" className="scroll-mt-24 h-screen flex flex-col items-center justify-center text-center px-6">
  <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
        Hello, I am{" "}
        <a 
          href="#About" 
          className="text-violet-500 hover:text-violet-400 transition-colors cursor-pointer inline-block mt-2"
        >
          Arthur Ardilha da Costa
        </a>
      </h1>
  <p className="mt-8 text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
    I am a second-year computer science student at the University of South Florida. 
    My main interests are cybersecurity, data science, and web development.
  </p>
  </section>
  )
}

export default Intro;