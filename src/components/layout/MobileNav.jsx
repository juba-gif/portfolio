import { ArrowDownToLine, ArrowRight, X } from "lucide-react";
import CV from "/docs/newCv_march_mojuba.pdf";

export default function MobileNav({ isMobileOpen, links, setMobileNav }) {
  const closeMenu = () => setMobileNav(false);

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={isMobileOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/35 backdrop-blur-[2px] transition-opacity duration-300 md:hidden ${
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        inert={!isMobileOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[min(86vw,24rem)] flex-col overflow-y-auto border-l border-clay-red/20 bg-[#f8ead5] text-black shadow-[-18px_0_50px_rgba(43,43,43,0.18)] transition-transform duration-300 ease-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative flex items-center justify-between border-b border-black/10 px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-clay-red text-xs font-bold text-white">
              MO
            </span>
            <div>
              <p className="font-space-grotesk text-sm font-semibold leading-none">
                Mojuba Oladuntoye
              </p>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-black/50">
                Portfolio
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/35 transition-colors hover:border-clay-red hover:bg-clay-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Portfolio sections" className="px-6 py-7">
          <p className="text-label mb-3 text-clay-red">Explore</p>
          <ul>
            {links.map((link, index) => (
              <li
                key={link.href}
                className="border-b border-black/10 last:border-b-0"
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
                >
                  <span className="w-6 text-[0.65rem] font-bold tracking-[0.12em] text-clay-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-space-grotesk text-2xl font-semibold tracking-tight transition-colors group-hover:text-clay-red">
                    {link.label}
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="ml-auto text-black/35 transition-[color,transform] group-hover:translate-x-1 group-hover:text-clay-red"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative mt-auto overflow-hidden border-t border-black/10 p-6">
          <div
            aria-hidden="true"
            className="absolute -bottom-16 -right-14 size-36 rounded-full border-[22px] border-clay-red/10"
          />
          <div className="relative">
            <p className="text-label text-black/45">
              Full-stack JavaScript developer
            </p>
            <a
              href={CV}
              download={CV}
              className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-clay-red px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(189,68,68,0.24)] transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-clay-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red"
            >
              Download CV
              <ArrowDownToLine size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
