import avatar from "../assets/images/avatar-image.webp";
import CV from "/docs/newCv_march_mojuba.pdf";
import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Hero() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/juba-gif",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mojuba-oladuntoye-a02aa819a/",
      icon: FaLinkedinIn,
    },
    {
      name: "Email",
      href: "mailto:oladuntoyemojuba@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section className="flex min-h-svh items-center pt-17">
      <div className="mx-auto w-full  px-4 py-10">
        <div className="grid items-center gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-[clamp(5rem,8vw,8rem)] lg:gap-y-8">
          {/* text section */}
          <div className="w-full max-w-2xl">
            <p className="text-sm font-medium">
              Hello, I&apos;m{" "}
              <span
                className="inline-block origin-[70%_70%] animate-wave"
                aria-hidden="true"
              >
                👋🏾
              </span>
            </p>

            <div className="ml-[-0.06em] mt-4 text-hero uppercase">
              <h1>Mojuba</h1>
              <h1 className="text-clay-red">Oladuntoye</h1>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.14em]">
                A full-stack JavaScript developer
              </p>
              <span className="block size-1.5 shrink-0 rounded-full bg-clay-red" />
            </div>

            <p className="mt-3 max-w-md leading-7 text-black/70">
              I build modern, scalable web applications focused on performance
              and thoughtful UX.
            </p>

            {/* cta buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-clay-red px-4 text-sm font-semibold text-white transition-colors hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
              >
                View Projects
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href={CV}
                download={CV}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-clay-red px-4 text-sm font-semibold transition-colors hover:bg-clay-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
              >
                Download CV
                <ArrowDownToLine size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* hero image */}
          <div className="relative isolate shrink-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 left-1/2 z-0 h-12 w-[82%] -translate-x-1/2 rounded-full bg-warm-sand opacity-90 blur-lg"
            />

            <div className="hero-float relative z-10 overflow-clip rounded-b-[50%]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[27%] z-0 aspect-square h-[70%] -translate-x-1/2 rounded-full bg-warm-sand/70"
              />
              <img
                src={avatar}
                alt="Portrait"
                className="relative z-10 block w-[clamp(14rem,65vw,30rem)] lg:w-[clamp(20rem,32vw,30rem)]"
              />
            </div>
          </div>

          <div className="justify-self-start lg:col-start-1">
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
    </section>
  );
}

export default Hero;
