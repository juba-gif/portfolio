import { ArrowRight, Database, Monitor, Server, Wrench } from "lucide-react";

function Stack() {
  const stack = [
    {
      title: "Frontend",
      icon: Monitor,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Sass", "CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      technologies: ["Node.js", "Express.js", "Fastify", "REST APIs"],
    },
    {
      title: "Storage",
      icon: Database,
      technologies: ["MySQL", "Sequelize", "Redis"],
    },
    {
      title: "Tools",
      icon: Wrench,
      technologies: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section
      id="stack"
      className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-12 sm:px-6 lg:px-8 lg:py-32"
    >
      <span className="mb-12 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red lg:mb-16">
        02 / STACK
      </span>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] lg:gap-16 xl:gap-24">
        {/* text section */}
        <div>
          <div className=" mb-2  text-clay-red">
            <p className="capitalize">My Stack</p>
          </div>
          <h2 className="text-section max-w-[11ch] uppercase">
            Here's what I build with
          </h2>
          <p className="mt-6 max-w-sm font-manrope leading-7 text-black/70">
            I work across the full stack from creating clean responsive
            interfaces to building reliable APIs.
          </p>

          <div className="mt-8">
            <a
              href="#projects"
              className="text-clay-red group inline-flex items-center gap-2"
            >
              View projects
              <ArrowRight
                size={17}
                aria-hidden="true"
                className=" transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* stack section */}
        <div className="w-full max-w-2xl lg:justify-self-end">
          {stack.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="grid grid-cols-1 gap-5 border-b border-clay-red/10 py-7 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[11.25rem_minmax(0,1fr)] sm:gap-6"
              >
                <div className="flex items-center gap-4 self-start">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-clay-red/15 bg-warm-sand text-clay-red shadow-sm">
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="font-manrope text-sm font-semibold uppercase tracking-wide text-clay-red">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-warm-sand px-4 py-2 font-manrope text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stack;
