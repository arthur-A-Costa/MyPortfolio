import { SiGithub } from "react-icons/si";
import portfolioImg from '/ThisPortfolio.png';

const projects = [
  {
    image: portfolioImg,
    title: "Personal Portfolio",
    description: "A responsive personal portfolio built with React and Tailwind CSS v4, featuring smooth scrolling, a dynamic navbar, and an interactive skills showcase.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML"],
    github: "https://github.com/arthur-A-Costa/MyPortfolio",
  },
  {
    image: null,
    title: "RentEscrow",
    description: "A short description of what this project does, the problem it solves, and what you learned from building it.",
    tags: ["Python", "FastAPI", "Solidity"],
    github: "https://github.com/yourusername/your-repo",
  },
  {
    image: null,
    title: "NovaBay",
    description: "A short description of what this project does, the problem it solves, and what you learned from building it.",
    tags: ["SQL", "Supabase", "React", "JavaScript", "Vite", "HTML"],
    github: "https://github.com/yourusername/your-repo",
  },
];

function Projects() {
  return (
    <section id="Projects" className="scroll-mt-24 py-12 px-6 max-w-6xl mx-auto">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white font-sans mb-3">
          My Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-base leading-relaxed">
          A collection of projects I have developed or contributed to — each one a step forward in sharpening my skills and deepening my understanding of software development.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-violet-500/15 backdrop-blur-md
                       border border-violet-500/50 rounded-2xl overflow-hidden
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_12px_rgba(139,92,246,0.25)]
                       hover:border-violet-500/80 hover:bg-violet-500/25
                       hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_16px_rgba(139,92,246,0.4)]
                       transition-all duration-300"
          >
            {/* Image */}
            <div className="md:w-72 h-48 md:h-auto bg-neutral-900/50 flex items-center justify-center flex-shrink-0">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-neutral-600 text-sm">No image yet</span>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-6 flex-1">
              <div>
                <h3 className="text-xl font-bold text-white font-sans mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom row: tags left, github right */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-violet-500/20
                                 border border-violet-400/30 text-violet-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-full
                             bg-violet-500/20 border border-violet-400/30 text-violet-300
                             hover:bg-violet-500/40 hover:border-violet-400/60
                             transition-all duration-300 text-xs font-medium"
                >
                  <SiGithub className="text-base" />
                  View Repo
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;