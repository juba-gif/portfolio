import {
  ArrowRight,
  ArrowLeft,
  Check,
  SquareArrowOutUpRight,
} from "lucide-react";
import portfolioImage from "../assets/images/portfolio-screenshot.webp";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectMenuRef = useRef(null);
  const projectMenuItemsRef = useRef([]);

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

  const activeProject = projects[activeProjectIndex];


  const showPreviousProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    );
  };

  const showNextProject = () => {
    setActiveProjectIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
    );
  };

  useEffect(() => {
    const menu = projectMenuRef.current;
    const activeMenuItem = projectMenuItemsRef.current[activeProjectIndex];

    if (!menu || !activeMenuItem) return;

    const centeredPosition =
      activeMenuItem.offsetLeft -
      (menu.clientWidth - activeMenuItem.offsetWidth) / 2;

    menu.scrollTo({
      left: Math.max(0, centeredPosition),
      behavior: "smooth",
    });
  }, [activeProjectIndex]);

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
            <button
              type="button"
              onClick={showPreviousProject}
     
              aria-label="Show previous project"
              className="cursor-pointer rounded-full bg-warm-sand p-4 transition-colors hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-warm-sand disabled:hover:text-inherit"
            >
              <ArrowLeft size={25} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNextProject}
              aria-label="Show next project"
              className="cursor-pointer rounded-full bg-warm-sand p-4 transition-colors hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-warm-sand disabled:hover:text-inherit"
            >
              <ArrowRight size={25} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* projects dashboard */}
        <div
          key={activeProject.title}
          className="mt-8 grid h-auto w-full grid-cols-[minmax(0,7fr)_minmax(0,3fr)] gap-15 rounded-3xl border-2 border-warm-sand bg-warm-sand/50 p-4"
        >
          <div>
            <img
              src={activeProject.image}
              alt={`${activeProject.title} project screenshot`}
              className="h-auto w-full rounded-3xl object-cover object-center shadow-lg"
            />
          </div>

          <div className="flex flex-col">
            <div className="pb-5">
              <span className="flex items-center gap-1 text-xs font-bold uppercase text-clay-red">
                <span className="inline-block h-2 w-2 rounded-full bg-clay-red"></span>
                Featured Project
              </span>
              <div className="my-5 flex flex-col gap-2.5">
                <div>
                  <h3 className="font-space-grotesk text-[clamp(2rem,2.2vw,2.25rem)] font-bold uppercase leading-none tracking-tight">
                    {activeProject.title}
                  </h3>
                  <span className="text-xs font-black">
                    {activeProject.subHeading}
                  </span>
                </div>
                <p className="text-xs">{activeProject.description}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {activeProject.stack.map((element) => (
                  <li
                    key={element}
                    className="rounded-full bg-warm-sand px-4 py-2 font-manrope text-sm"
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
            {/* horizontal divider */}
            <span className="inline-block h-0.5 w-full bg-warm-sand"></span>

            <div className="flex flex-1 flex-col justify-between">
              {/* engineering highlights */}
              <div className="pt-5">
                <span className="font-black">Engineering Highlights</span>
                <ul className="mt-3 space-y-2">
                  {activeProject.highlights.map((element) => (
                    <li key={element} className="flex items-center gap-2">
                      <span className="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-clay-red">
                        <Check size={10} className="text-warm-sand" />
                      </span>
                      {element}
                    </li>
                  ))}
                </ul>
              </div>

              {/* links */}
              <div className="flex gap-5">
                <a
                  href={activeProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-clay-red px-5 py-3 text-sm font-medium text-white"
                >
                  Live Demo
                  <SquareArrowOutUpRight size={15} />
                </a>
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-clay-red px-5 py-3 text-sm font-medium"
                >
                  GitHub
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project selector carousel */}
        <div className="mt-6 flex w-full items-center gap-3 rounded-3xl border border-warm-sand bg-warm-sand/50 p-3 sm:gap-4 sm:p-4">
          <button
            type="button"
            onClick={showPreviousProject}

            aria-label="Show previous project in carousel"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-clay-red bg-background text-clay-red transition-all duration-300 hover:-translate-y-px hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-background disabled:hover:text-clay-red"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>

          <div
            ref={projectMenuRef}
            className="min-w-0 flex-1 snap-x snap-mandatory overflow-x-hidden"
            aria-label="Select a featured project"
          >
            <div className="flex w-max gap-3">
              {projects.map((project, index) => {
                const isActive = index === activeProjectIndex;

                return (
                  <button
                    ref={(element) => {
                      projectMenuItemsRef.current[index] = element;
                    }}
                    key={project.title}
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                    aria-pressed={isActive}
                    className={`flex min-w-40 snap-start items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 sm:min-w-48 ${
                      isActive
                        ? "border-clay-red bg-clay-red text-white shadow-sm"
                        : "border-warm-sand bg-background/60 text-black hover:border-clay-red hover:bg-warm-sand/50"
                    }`}
                  >
                    <span className="font-space-grotesk text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-sm font-semibold">
                      {project.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={showNextProject}
            aria-label="Show next project in carousel"
            className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-clay-red bg-background text-clay-red transition-all duration-300 hover:-translate-y-px hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-background disabled:hover:text-clay-red"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;
