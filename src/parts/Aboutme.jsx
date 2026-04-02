function Aboutme() {
  return (
    <section id="About" className="scroll-mt-24 py-30 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Photo Container */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full">
            {/* Blue Glow Background Effect */}
            <div className="absolute -inset-1 bg-violet-500 rounded-2xl blur opacity-25"></div>
            
            <img 
              src="/PhotoRAComplete.jpeg" 
              alt="Arthur Ardilha da Costa" 
              className="relative rounded-2xl object-contain w-full h-full border-2 border-neutral-800 shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="space-y-6 text-left">
          <h2 className="text-3xl font-bold text-white font-sans tracking-tight">
            About Me
          </h2>
          
          <p className="text-neutral-400 text-lg leading-relaxed">
            I am a high-achieving student at the University of South Florida. 
            Currently, I balance my academic rigor with leadership as a Resident Assistant.
          </p>

          <p className="text-neutral-400 text-lg leading-relaxed">
            I'm passionate about building secure, data-driven applications. My experience 
            ranges from C++ data structures to modern web development with React.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Aboutme