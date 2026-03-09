import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio",
      description: "My developer portfolio built with React and Tailwind.",
      image: "/Project1.png",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      link: "#",
      github: "https://github.com/mshubham17/portfolio",
    },
    {
      title: "Next Project",
      description: "Currently working on something exciting.",
      image: "/projects/project4.png",
      tags: [""],
      inProgress: true,
    },
    {
      title: "Soil Sentry (Arduino-Based Soil Moisture Monitoring Device)",
      description:
        "Built a real-time soil moisture detection system using Arduino microcontrollers and analog sensors for precision irrigation.",
      image: "/Project2.png",
      tags: ["Arduino", "Embedded Systems", "C++"],
      github: "https://github.com/mshubham17/soil-sentry-system",
    },
    {
      title: "Wireless Switch (Arduino-Powered Remote Control System)",
      description:
        "Developed a wireless control interface for appliances using Arduino and RF modules.",
      image: "/Project3.png",
      tags: ["Arduino", "Embedded Systems", "C++"],
      github: "https://github.com/mshubham17/wireless-swtich",
    },
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-4xl md:text-5xl font-serif italic font-normal text-white">
            {" "}
            Featured Work
          </span>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of my recent projects. Click on the links to view the
            code or live demo.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {(showAll ? projects : projects.slice(0, 2)).map((project, idx) => (
            <div
              key={idx}
              className={`group relative glass rounded-2xl overflow-hidden ${
                project.inProgress ? "opacity-60" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden aspect-video ${project.inProgress ? "blur-sm pointer-events-none" : ""}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {!project.inProgress && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.link && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.link}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {!project.inProgress && (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  )}
                </div>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Badge */}
              {project.inProgress && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-5 py-2 rounded-full glass text-primary font-medium">
                    Updating Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <AnimatedBorderButton onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less Projects" : "View All Projects"}
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
