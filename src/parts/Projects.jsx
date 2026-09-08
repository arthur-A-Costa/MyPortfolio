import { SiGithub } from "react-icons/si";
import portfolioImg from '/ThisPortfolio.png';
import NovaBayImg from '/NovaBayMenu.jpg';
import LlmAgenticImg from '/Image_Banking_Chat_Project.jpeg';
import DataEngineeringImg from '/Data_Engineering_Project_Img.png'; 

const projects = [
  {
    image: portfolioImg,
    title: "Personal Portfolio",
    description: "A responsive personal portfolio built with React and Tailwind CSS v4, featuring smooth scrolling, a dynamic navbar, and an interactive skills showcase.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Vite", "HTML"],
    github: "https://github.com/arthur-A-Costa/MyPortfolio",
  },
  {
    image: LlmAgenticImg,
    title: "LLM_Agentic_Banking_Chatbot",
    description: "A multi-agentic banking chatbot focused on customer support. It utilizes specialized agents, intelligent routing, persisten conversation memory, evaluation pipeline, and tool based data retrieval to answer questions and recommend products. It demonstrates knowledge of agent orchestration, structured data access and retrieval, and RAG (Retrieval-Augmented Generation) techniques.",
    tags: ["SQL", "Ollama", "LangChain", "LangGraph", "MCP server", "Python", "FastAPI", "Docker", "EXA", "RAG", "Docling", "PGVector", "PostgreSQL", "Streamlit"],
    github: "https://github.com/arthur-A-Costa/LLM_Agentic_Banking_Chatbot",
  },
  {
    image: DataEngineeringImg,
    title: "Data-Warehouse-Lakehouse-ETL-Project",
    description: "An end-to-end data engineering pipeline project that simulates the complete extraction, transformation, and loading (ETL) process, combining the integration of both a data warehouse and a data lakehouse architecture. The project applies historical change management, Star Schema design, and Medallion architecture to create a complete data engineering solution for scalable analytics.",
    tags: ["SQL", "PostgreSQL", "Python", "Docker", "Apache Spark", "FastAPI", "Apache Airflow", "Apache Iceberg", "MinIO"],
    github: "https://github.com/arthur-A-Costa/Data-Warehouse-Lakehouse-ETL-Project",
  },
  {
    image: null,
    title: "RentEscrow",
    description: "Engineered a decentralized rental escrow application as a Hackathon Finalist at Brasa Connect Code & Croak 2026. Built custom Solidity smart contracts for automated security deposit management, integrating FastAPI and GoPlus security checks to protect multi-party transactions against fraudulent signatures and contract exploits.",
    tags: ["Python", "FastAPI", "Solidity"],
    github: "https://github.com/TarikCO/RentEscrow",
  },
  {
    image: NovaBayImg,
    title: "NovaBay",
    description: "Winner project of the 2026 HackUSF Climate Teach-In Sustainability Challenge. NovaBay is a coastal resilience GIS platform visualizing Tampa Bay environmental risk data. Implemented high-performance spatial mapping layers using MapLibre and deck.gl over a PostGIS-backed API to deliver real-time flood zone analyses and vulnerability metrics.",
    tags: ["SQL", "Supabase", "React", "JavaScript", "Vite", "HTML"],
    github: "https://github.com/TarikCO/NovaBay",
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

              {/* Bottom Row: Badges on left, Button pinned right */}
              <div className="mt-6 flex items-end justify-between gap-4">
                {/* Tech Badges Container */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Repo Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white transition-all shrink-0 ml-auto"
                >
                  <SiGithub size={14} />
                  <span>View Repo</span>
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