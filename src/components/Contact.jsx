import { useState } from "react";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

function Contact() {
  const email = "oladuntoyemojuba@gmail.com";
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      setEmailCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1600px] px-4 pb-8 pt-24 sm:px-6 lg:px-8 lg:pt-32"
    >
      <span className="mb-12 block font-manrope text-xs font-bold uppercase tracking-[0.18em] text-clay-red lg:mb-16">
        05 / Contact
      </span>

      <div className="rounded-3xl bg-clay-red px-6 py-10 text-background sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <h2 className="text-section uppercase">
              <span className="block">Let's build</span>
              <span className="block text-warm-sand">something useful</span>
            </h2>

            <p className="mt-6 max-w-xl font-manrope text-sm leading-7 text-background/80 sm:text-base">
              Have a project, role, or idea you would like to discuss? I am open
              to full-stack development opportunities and collaborations.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-pill border border-background/20 bg-background/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide">
              <span className="size-2 rounded-full bg-warm-sand" />
              Available for work
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-warm-sand">
              Get in touch
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-3 block break-all font-space-grotesk text-[clamp(1.35rem,2.3vw,2.25rem)] font-semibold leading-tight transition-colors hover:text-warm-sand"
            >
              {email}
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-background px-5 py-3 text-sm font-semibold text-clay-red transition-transform hover:-translate-y-px"
              >
                <Mail size={17} aria-hidden="true" />
                Send an Email
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-background/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-background hover:text-clay-red"
              >
                {emailCopied ? (
                  <Check size={17} aria-hidden="true" />
                ) : (
                  <Copy size={17} aria-hidden="true" />
                )}
                {emailCopied ? "Copied" : "Copy Email"}
              </button>

              <a
                href="https://www.linkedin.com/in/mojuba-oladuntoye-a02aa819a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="grid size-11 place-items-center rounded-lg border border-background/30 transition-colors hover:bg-background hover:text-clay-red"
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href="https://github.com/juba-gif"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="grid size-11 place-items-center rounded-lg border border-background/30 transition-colors hover:bg-background hover:text-clay-red"
              >
                <GithubIcon size={18} />
              </a>
            </div>

            <p className="sr-only" aria-live="polite">
              {emailCopied ? "Email address copied to clipboard" : ""}
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-8 flex flex-col gap-3 border-t border-clay-red/15 py-6 font-manrope text-xs text-black/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mojuba Oladuntoye</p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 font-semibold uppercase tracking-wide transition-colors hover:text-clay-red"
        >
          Back to top
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </footer>
    </section>
  );
}

export default Contact;
