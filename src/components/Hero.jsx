import avatar from "../assets/images/avatar-image.webp";
import CV from "/docs/newCv_march_mojuba.pdf";
import { ArrowDownToLine, ArrowRight, Mail, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

function Hero() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/juba-gif",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mojuba-oladuntoye-a02aa819a/",
      icon: LinkedinIcon,
    },
    {
      name: "Email",
      href: "mailto:oladuntoyemojuba@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-x-clip pt-12 md:pt-17"
    >
      <div className="mx-auto flex w-full justify-center px-4 py-6 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-16">
        <div className="flex w-full max-w-[1600px] flex-col gap-8 lg:gap-5">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)] md:gap-8 lg:gap-16">
            {/* text section */}
            <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:text-left">
              <p className="text-sm font-medium">
                Hello, I'm
                <span
                  className="ml-1 inline-block origin-[70%_70%] animate-wave"
                  aria-hidden="true"
                >
                  👋🏾
                </span>
              </p>

              <div className="mt-2 text-hero text-[clamp(2.7rem,13vw,4.5rem)] uppercase sm:text-[clamp(3.5rem,10vw,5rem)] md:text-[clamp(3rem,6vw,5.25rem)] lg:text-[clamp(4rem,7vw,7.5rem)]">
                <h1>Mojuba</h1>
                <h1 className="text-clay-red">Oladuntoye</h1>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 md:justify-start">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm sm:tracking-[0.14em]">
                  A full-stack JavaScript developer
                </p>
                <span className="block size-1.5 shrink-0 rounded-full bg-clay-red" />
              </div>

              <p className="mx-auto mt-3 max-w-md leading-7 text-black/70 md:mx-0">
                I build modern, scalable web applications focused on performance
                and thoughtful UX.
              </p>

              {/* cta buttons */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:justify-center md:justify-start">
                <a
                  href="#projects"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-clay-red px-4 text-sm font-semibold text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red sm:w-auto"
                >
                  View Projects
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
                <a
                  href={CV}
                  download={CV}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-clay-red px-4 text-sm font-semibold transition-colors hover:bg-clay-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red sm:w-auto"
                >
                  Download CV
                  <ArrowDownToLine size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* hero image */}
            <div className="relative isolate mx-auto flex w-full max-w-[18rem] shrink-0 justify-center sm:max-w-[22rem] md:mx-0 md:max-w-[24rem] md:justify-self-end lg:max-w-[30rem]">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 left-1/2 z-0 h-12 w-[82%] -translate-x-1/2 rounded-full bg-warm-sand opacity-90 blur-lg"
              />
              <div className="hero-float relative w-full">
                <span
                  aria-hidden="true"
                  className="image-section-icons float-1 left-0 top-[10%] sm:left-[-2%]"
                >
                  JS
                </span>

                <span
                  aria-hidden="true"
                  className="image-section-icons float-2 bottom-[18%] left-[-2%] sm:left-[-6%]"
                >
                  {"</>"}
                </span>

                <span
                  aria-hidden="true"
                  className="image-section-icons float-3 right-0 top-[5%] sm:right-[1%]"
                >
                  {"{ }"}
                </span>

                <span
                  aria-hidden="true"
                  className="image-section-icons float-4 bottom-[14%] right-[-2%] sm:right-[-5%]"
                >
                  TS
                </span>

                <div className="relative z-10 overflow-clip rounded-b-[50%]">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-[27%] z-0 aspect-square h-[70%] -translate-x-1/2 rounded-full bg-warm-sand/70"
                  />
                  <img
                    src={avatar}
                    alt="Portrait of Mojuba Oladuntoye"
                    className="relative z-10 block w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="text-label text-black/60">Connect with me</p>
            <div className="mt-3 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="grid size-10 place-items-center rounded-full border border-clay-red/30 transition-colors hover:border-clay-red hover:bg-clay-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
                  >
                    <Icon size={19} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-black/55 transition-colors hover:text-clay-red"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em]">
            Scroll to Explore
          </span>

          <ArrowDown
            size={18}
            aria-hidden="true"
            className="animate-bounce transition-transform group-hover:translate-y-1"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
