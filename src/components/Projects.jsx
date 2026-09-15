import {
  ArrowRight,
  ArrowLeft,
  Check,
  SquareArrowOutUpRight,
} from "lucide-react";
import portfolioImage from "../assets/images/portfolio-screenshot.webp";
import { useEffect, useRef, useState } from "react";
import { GithubIcon } from "./icons/BrandIcons";

function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectMenuRef = useRef(null);
  const projectMenuItemsRef = useRef([]);

  const projects = [
    {
      title: "Portfolio",
      subHeading: "My Personal Portfolio",
      image: portfolioImage,
      description: "A modern, fully responsive personal portfolio",
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
    <section
      id="projects"
      className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32"
    >
        <span className="mb-8 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red sm:mb-10 lg:mb-16">
          04 / Projects
        </span>
        {/* projects section header */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-section uppercase">
            <span className="block">Projects </span>
            <span className="block text-clay-red">i've built</span>
          </h2>
          {/* project buttons  */}
          <div className="flex gap-2.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={showPreviousProject}
              disabled={projects.length <= 1}
              aria-label="Show previous project"
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-warm-sand transition-colors hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-warm-sand disabled:hover:text-inherit sm:size-14"
            >
              <ArrowLeft className="size-5 sm:size-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={showNextProject}
              disabled={projects.length <= 1}
              aria-label="Show next project"
              className="grid size-11 cursor-pointer place-items-center rounded-full bg-warm-sand transition-colors hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-warm-sand disabled:hover:text-inherit sm:size-14"
            >
              <ArrowRight className="size-5 sm:size-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* projects dashboard */}
        <div
          key={activeProject.title}
          className="mt-8 grid h-auto w-full grid-cols-1 gap-6 rounded-2xl border-2 border-warm-sand bg-warm-sand/50 p-3 sm:gap-8 sm:rounded-3xl sm:p-4 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,3fr)] lg:gap-10"
        >
          <div className="overflow-hidden rounded-xl sm:rounded-3xl">
            <img
              src={activeProject.image}
              alt={`${activeProject.title} project screenshot`}
              className="h-auto w-full rounded-xl object-cover object-top shadow-lg sm:rounded-3xl"
            />
          </div>

          <div className="flex min-w-0 flex-col px-1 pb-1 sm:px-2 sm:pb-2 lg:p-0">
            <div className="pb-5">
              <span className="flex items-center gap-1 text-xs font-bold uppercase text-clay-red">
                <span className="inline-block size-2 rounded-full bg-clay-red" />
                Featured Project
              </span>
              <div className="my-4 flex flex-col gap-2.5 sm:my-5">
                <div>
                  <h3 className="font-space-grotesk text-[clamp(1.75rem,8vw,2.25rem)] font-bold uppercase leading-none tracking-tight sm:text-[clamp(2rem,4vw,2.25rem)] lg:text-[clamp(2rem,2.2vw,2.25rem)]">
                    {activeProject.title}
                  </h3>
                  <span className="mt-1 block text-xs font-black">
                    {activeProject.subHeading}
                  </span>
                </div>
                <p className="max-w-xl text-sm leading-6 text-black/70">
                  {activeProject.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {activeProject.stack.map((element) => (
                  <li
                    key={element}
                    className="rounded-full bg-warm-sand px-3 py-1.5 font-manrope text-xs font-semibold sm:px-4 sm:py-2 sm:text-sm"
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
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {activeProject.highlights.map((element) => (
                    <li key={element} className="flex items-center gap-2 text-sm sm:text-base">
                      <span className="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-clay-red">
                        <Check size={10} className="text-warm-sand" aria-hidden="true" />
                      </span>
                      {element}
                    </li>
                  ))}
                </ul>
              </div>

              {/* links */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap lg:gap-4">
                <a
                  href={activeProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-clay-red px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red sm:w-auto"
                >
                  Live Demo
                  <SquareArrowOutUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  href={activeProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-clay-red px-5 py-3 text-sm font-medium transition-colors hover:bg-clay-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red sm:w-auto"
                >
                  GitHub
                  <GithubIcon aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* project selector carousel */}
        <div className="mt-4 flex w-full items-center gap-2 rounded-2xl border border-warm-sand bg-warm-sand/50 p-2 sm:mt-6 sm:gap-4 sm:rounded-3xl sm:p-4">
          <button
            type="button"
            onClick={showPreviousProject}
            disabled={projects.length <= 1}
            aria-label="Show previous project in carousel"
            className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-clay-red bg-background text-clay-red transition-all duration-300 hover:-translate-y-px hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-background disabled:hover:text-clay-red sm:size-11"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>

          <div
            ref={projectMenuRef}
            className="min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                    className={`flex min-w-[min(64vw,12rem)] snap-start items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:min-w-48 sm:rounded-2xl sm:px-4 sm:py-3 ${
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
            disabled={projects.length <= 1}
            aria-label="Show next project in carousel"
            className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full border border-clay-red bg-background text-clay-red transition-all duration-300 hover:-translate-y-px hover:bg-clay-red hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-background disabled:hover:text-clay-red sm:size-11"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
      </section>
  );
}

export default Projects;
