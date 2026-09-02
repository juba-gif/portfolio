import { FiSearch, FiSliders, FiTrendingUp } from "react-icons/fi";
import { FaCode } from "react-icons/fa6";
import { SiCrunchyroll } from "react-icons/si";
import { IoGameControllerOutline, IoCarSportOutline } from "react-icons/io5";
import { GiSoccerBall } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";

function About() {
  const ideology = [
    {
      id: 1,
      icon: FiSearch,
      title: "Understand",
      text: "Start with the problem, not the implementation.",
      footer: "Problem & context",
    },
    {
      id: 2,
      icon: FaCode,
      title: "Build",
      text: "Turn the solution into something simple, reliable and functional.",
      footer: "Solution & execution",
    },
    {
      id: 3,
      icon: FiSliders,
      title: "Refine",
      text: "Improve the code, performance and user experience continuously.",
      footer: "Quality & UX",
    },
    {
      id: 4,
      icon: FiTrendingUp,
      title: "Grow",
      text: "Design with change and future requirements in mind.",
      footer: "Scalability & change",
    },
  ];

  const hobbies = [
    {
      id: 1,
      icon: SiCrunchyroll,
      title: "Anime",
      text: "My top 3: One Piece, Naruto and Gurren Lagann, in that order.",
    },
    {
      id: 2,
      icon: IoGameControllerOutline,
      title: "Gaming",
      text: "I do indulge in some form of gaming",
    },
    {
      id: 3,
      icon: IoCarSportOutline,
      title: "Cars",
      text: "BMW is king",
    },
    {
      id: 4,
      icon: GiSoccerBall,
      title: "Football",
      text: "A Manchester United fan through the good and the very questionable.",
    },
  ];
  return (
    <>
      {/* about me section */}
      <section
        id="about"
        className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <span className="mb-12 font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red lg:mb-16">
          01 / ABOUT
        </span>

        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,1fr)] lg:gap-12 xl:gap-16">
          {/* About and process */}
          <div className="min-w-0">
            {/* text */}
            <div className="flex max-w-xl flex-col">
              <h2 className="text-section uppercase">
                <span className="block">More than a</span>
                <span className="block text-clay-red">developer</span>
              </h2>
              <p className="mt-6 font-manrope text-sm leading-7 text-black/70 sm:text-base">
                I'm a curious problem solver who enjoys building things that
                make life easier. I love understanding how ideas turn into real
                products people use every day. Always learning, always building. The goal is to become a cracked engineer amongst other things.
              </p>

              <div className="mt-8 inline-flex flex-wrap items-center gap-x-5 gap-y-2 font-manrope text-xs font-semibold uppercase tracking-wide text-black/70">
                <p className="flex items-center gap-1 rounded-pill bg-warm-sand px-2 py-2">
                  <FaMapMarkerAlt className="text-clay-red" />
                  Oyo, Nigeria
                </p>
                <p className="flex items-center gap-1 rounded-pill bg-warm-sand px-2 py-2">
                  <span className="block size-2 rounded-full bg-dark-green"></span>
                  Available for work
                </p>
              </div>
            </div>

            {/* ideology */}
            <div className="mt-14 sm:mt-16">
              <div className="grid grid-cols-2 items-stretch gap-x-3 gap-y-10 sm:grid-cols-4 sm:gap-x-4 xl:gap-x-6">
                {ideology.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.id} className="flex min-w-0 flex-col">
                      {/* Step number */}
                      <span className="mb-4 font-manrope text-xs font-bold tracking-wider text-clay-red xl:mb-5 xl:text-sm">
                        0{item.id}
                      </span>

                      {/* Icon + connecting line */}
                      <div className="flex w-full items-center justify-start">
                        {/* Icon */}
                        <div className="flex size-14 items-center justify-center rounded-full bg-warm-sand shadow-sm xl:size-20">
                          <Icon
                            aria-hidden="true"
                            className="size-6 text-clay-red xl:size-8"
                          />
                        </div>
                      </div>

                      {/* Title */}
                      <p className="mt-5 font-space-grotesk text-sm font-bold uppercase tracking-wide text-black xl:mt-7 xl:text-lg">
                        {item.title}
                      </p>

                      {/* Small red underline */}
                      <span className="mt-3 h-0.5 w-6 rounded-full bg-clay-red" />

                      {/* Description */}
                      <p className="mt-4 max-w-40 font-manrope text-xs leading-5 text-black/70 xl:mt-5 xl:text-sm xl:leading-6">
                        {item.text}
                      </p>

                      {/* Footer */}
                      <span className="mt-auto max-w-32 pt-6 font-manrope text-xs font-semibold leading-5 text-clay-red xl:text-sm">
                        {item.footer}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* hobbies */}
          <div className="flex w-full max-w-md flex-col items-center justify-self-start rounded-3xl border border-clay-red/15 bg-warm-sand/30 px-5 py-8 text-center shadow-sm lg:justify-self-end xl:px-8 xl:py-10">
            {/* Heading */}
            <div className="mb-4 flex w-full items-center gap-3 xl:mb-6">
              <span className="h-8 w-1 bg-clay-red" />

              <h3 className="font-space-grotesk text-[clamp(2rem,2.2vw,2.25rem)] font-bold uppercase leading-none tracking-tight">
                Hobbies
              </h3>
            </div>

            {/* Hobbies */}
            <div className="w-full">
              {hobbies.map((hobby, index) => {
                const Icon = hobby.icon;

                return (
                  <div
                    key={hobby.id}
                    className={`flex items-center gap-4 py-4 text-left xl:gap-6 xl:py-5 ${
                      index !== hobbies.length - 1
                        ? "border-b border-black/10"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-clay-red shadow-sm xl:size-14">
                      <Icon
                        aria-hidden="true"
                        className="size-5 text-background xl:size-6"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <p className="font-space-grotesk text-sm font-bold uppercase tracking-wide xl:text-base">
                        {hobby.title}
                      </p>

                      <p className="mt-1 max-w-52 font-manrope text-xs leading-5 text-black/65 xl:mt-2 xl:text-sm xl:leading-6">
                        {hobby.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
