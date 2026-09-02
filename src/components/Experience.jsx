import { BriefcaseBusiness, MapPin } from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "Junior Software Engineer",
      company: "Neegles",
      location: "Remote",
      period: "Jan 2026 - Present",
      responsibilities: [
        "Tested software releases, identified bugs, and implemented fixes to improve reliability.",
        "Implemented security measures to help protect application data.",
        "Collaborated with the team on software solutions and participated in code reviews.",
        "Developed user-friendly web applications focused on a better customer experience.",
      ],
    },
    {
      role: "Full-Stack Web Developer Intern",
      company: "Neegles",
      location: "Remote",
      period: "Apr 2025 - Jan 2026",
      responsibilities: [
        "Built responsive interfaces for desktop and mobile with accessibility in mind.",
        "Implemented front-end and back-end features using React.js and Express.js.",
        "Maintained a clean codebase to make future changes easier to implement.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <span className="mb-12 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red lg:mb-16">
        03 / Experience
      </span>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] lg:gap-16 xl:gap-24">
        <div className="self-start">
          <div className="mb-3 flex items-center gap-2 text-clay-red">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            <p className="text-sm font-semibold uppercase tracking-wide">
              Work history
            </p>
          </div>

          <h2 className="text-section max-w-[10ch] uppercase">
            Work Experience
          </h2>

          <p className="mt-6 max-w-sm font-manrope leading-7 text-black/70">
            Practical experience across software development, full-stack web
            development.
          </p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-2 top-2 w-px bg-clay-red/20"
          />

          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative pb-12 pl-10 last:pb-0 sm:pl-12"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 grid size-4 place-items-center rounded-full bg-background ring-2 ring-clay-red"
              >
                <span className="size-1.5 rounded-full bg-clay-red" />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.12em] text-clay-red">
                {experience.period}
              </p>

              <h3 className="mt-3 font-space-grotesk text-[clamp(1.5rem,2.5vw,2rem)] font-bold uppercase leading-tight tracking-tight">
                {experience.role}
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-black/65">
                <span>{experience.company}</span>
                <span aria-hidden="true" className="size-1 rounded-full bg-clay-red" />
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-clay-red" aria-hidden="true" />
                  {experience.location}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 font-manrope text-sm leading-6 text-black/70 sm:text-base sm:leading-7"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-clay-red"
                    />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
