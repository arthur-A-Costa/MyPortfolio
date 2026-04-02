import { 
  SiPython, SiCplusplus, SiC, SiJavascript, SiReact, 
  SiHtml5, SiTailwindcss, SiNodedotjs, 
  SiGit, SiGithub, SiSupabase, SiFirebase, 
  SiPostgresql, SiDjango, SiFastapi
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { FaAws } from "react-icons/fa";

function Skills() {
  const skillList = [
    { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
    { name: "C", icon: <SiC />, color: "text-[#A8B9CC]" },
    { name: "C++", icon: <SiCplusplus />, color: "text-[#00599C]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "HTML5", icon: <SiHtml5 />, color: "text-[#E34F26]" },
    { name: "CSS3", icon: <DiCss3 />, color: "text-[#1572B6]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "text-[#339933]" },
    { name: "Git", icon: <SiGit />, color: "text-[#F05032]" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white" },
    { name: "AWS", icon: <FaAws />, color: "text-[#FF9900]" },
    { name: "Supabase", icon: <SiSupabase />, color: "text-[#3ECF8E]" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
    { name: "SQL", icon: <SiPostgresql />, color: "text-[#336791]" },
    { name: "Django", icon: <SiDjango />, color: "text-[#092E20]" },
    { name: "FastAPI", icon: <SiFastapi />, color: "text-[#009688]" },
  ];

  return (
    <section id="Skills" className="scroll-mt-24 py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white font-sans mb-12 text-center">
        Technical Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {skillList.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 p-5 w-60
           bg-violet-400/20 backdrop-blur-md
           border border-violet-300/40
           shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_0_12px_rgba(139,92,246,0.15)]
           rounded-xl
           hover:scale-105 hover:border-violet-400/70 hover:bg-violet-500/30
           hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_16px_rgba(139,92,246,0.3)]
           transition-all duration-300 group cursor-default"
          >
            <div className={`text-3xl ${skill.color} group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]`}>
              {skill.icon}
            </div>
            <span className="text-neutral-300 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;