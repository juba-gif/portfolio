import {
  ArrowRight,
  ArrowLeft,
  Check,
  SquareArrowOutUpRight,
} from "lucide-react";
import portfolioImage from "../assets/images/portfolio-screenshot.webp";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      subHeading: "My Personal Portfolio",
      image: portfolioImage,
      description: "A modern fully responeive personal portfolio",
      stack: ["React", "Tailwind"],
      highlights: [
        "Responsive design",
        "Data-driven rendering",
        "Reusable components",
        "Custom design system",
        "Accessible interactions",
        "Optimized assets",
      ],
      githubLink: "https://github.com/juba-gif/portfolio",
      liveDemo: "#",
    },
  ];
  return (
    <>
      <section
        id="projects"
        className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <span className="mb-12 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red lg:mb-16">
          03 / Projects
        </span>
        {/* projects section header */}
        <div className=" flex justify-between items-center">
          <h2 className="text-section uppercase">
            <span className="block">Projects </span>
            <span className="block text-clay-red">i've built</span>
          </h2>
          {/* project buttons  */}
          <div className="flex gap-2.5">
            <button className="p-4 bg-warm-sand rounded-full cursor-pointer">
              <ArrowLeft size={25} aria-hidden="true" />
            </button>
            <button className="p-4 bg-warm-sand rounded-full cursor-pointer">
              <ArrowRight size={25} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* projects dashboard */}
        <div className="w-full h-180 rounded-3xl bg-warm-sand/50 border-warm-sand border-2 p-4 grid grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-15 ">
          {projects.map((project) => {
            return (
              <>
                <img
                  src={project.image}
                  alt=""
                  srcset=""
                  className="shadow-lg rounded-3xl"
                />

                <div>
                  <div>
                    <span className="uppercase flex gap-2 items-center text-clay-red font-bold">
                      <span className="inline-block h-3 w-3 rounded-full bg-clay-red"></span>
                      Featured Project
                    </span>
                    <div>
                      <h3 className="font-space-grotesk text-[clamp(2rem,2.2vw,2.25rem)] font-bold uppercase leading-none tracking-tight">
                        {project.title}
                      </h3>
                      <span className="font-black text-xs">
                        {project.subHeading}
                      </span>
                    </div>
                    <p className="text-xs">{project.description}</p>
                    <ul className="flex gap-2">
                      {project.stack.map((element) => {
                        return (
                          <li
                            key={element}
                            className="rounded-full bg-warm-sand px-4 py-2 font-manrope text-sm"
                          >
                            {element}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <span className="inline-block w-full h-1 bg-warm-sand"></span>
                  {/* engineering highlights */}
                  <div>
                    <span>Engineering Highlights</span>
                    <ul>
                      {project.highlights.map((element) => {
                        return (
                          <>
                            <div className="flex gap-2 items-center">
                              <span className="inline-flex h-3 w-3 rounded-full bg-clay-red items-center justify-center">
                                <Check size={10} className="text-warm-sand" />
                              </span>
                              <li key={element}>{element}</li>
                            </div>
                          </>
                        );
                      })}
                    </ul>
                  </div>

                  {/* links */}
                  <div className="flex gap-5">
                    <a
                      href={project.liveDemo}
                      className="bg-clay-red inline-flex gap-2 items-center px-5 py-3 rounded-lg text-sm font-medium text-white"
                    >
                      Live Demo
                      <SquareArrowOutUpRight size={15} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      className=" px-5 py-3 rounded-lg text-sm font-medium border border-clay-red inline-flex gap-2 items-center justify-center"
                    >
                      GitHub
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
