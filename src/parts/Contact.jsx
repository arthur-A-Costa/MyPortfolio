import { useState } from "react";
import { SiGithub, SiGmail } from "react-icons/si";
import { Copy, Check, MapPin, Send, FileDown } from "lucide-react";
import { FaLinkedin, } from "react-icons/fa6";

function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactList = [
    {
      key: "email",
      label: "Email",
      value: "arthur20costa05@gmail.com",
      copyText: "arthur20costa05@gmail.com",
      icon: <SiGmail />,
      color: "text-[#EA4335]",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/arthur-ardilha-da-costa",
      copyText: "https://www.linkedin.com/in/arthur-ardilha-da-costa/",
      icon: <FaLinkedin />,
      color: "text-[#0A66C2]",
    },
    {
      key: "github",
      label: "GitHub",
      value: "github.com/arthur-A-Costa",
      copyText: "https://github.com/arthur-A-Costa",
      icon: <SiGithub />,
      color: "text-white",
    },
  ];

  return (
    <footer
      id="Contact"
      className="scroll-mt-32 w-full border-t border-white/10 bg-neutral-900/60 backdrop-blur-md pt-16 pb-10 px-6 mt-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <h2 className="text-3xl font-bold text-white font-mono tracking-tight">
              Get In Touch
            </h2>
            <p className="mt-2 text-neutral-400 text-sm max-w-md">
              Feel free to reach out if you have any questions or opportunities! Available for research, internships, and software development projects.
            </p>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-neutral-300 text-sm bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
            <MapPin size={16} className="text-violet-400 shrink-0" />
            <span>Tampa, FL • University of South Florida</span>
          </div>

          {/* Resume Download Button */}
            <a
              href="/Arthur_Ardilha_daCosta_Resume.pdf"
              download="Arthur_Ardilha_daCosta_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white bg-white/5 border border-white/10 hover:bg-violet-500 font-medium text-xs transition-all duration-200 hover:shadow-lg hover:shadow-violet-600/30 cursor-pointer"
            >
              <FileDown size={15} />
              <span>Download My Resume</span>
            </a>
        </div>

        {/* Contact Information & Copy Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {contactList.map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 overflow-hidden mr-2">
                <div className={`text-xl ${item.color} shrink-0`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white truncate select-all">
                    {item.value}
                  </p>
                </div>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={() => handleCopy(item.copyText, item.key)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all duration-200 shrink-0 cursor-pointer"
                title={`Copy ${item.label}`}
                aria-label={`Copy ${item.label}`}
              >
                {copiedKey === item.key ? (
                  <Check size={16} className="text-green-400" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Rights Reserved Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
          <p>© {new Date().getFullYear()} Arthur Ardilha da Costa. All rights reserved.</p>
          <p>Built with React, Vite & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;