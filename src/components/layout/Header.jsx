import CV from "/docs/newCv_march_mojuba.pdf";
import { ArrowDownToLine, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";

const navigationMenu = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!isMobileNavOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMobileNavOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileNavOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 box-border flex h-12 w-full items-center justify-between border-b px-3 py-1.5 font-manrope font-semibold transition-[border-color,background-color,box-shadow] duration-300 md:h-17 md:px-2.5 md:py-3 ${
          isScrolled
            ? "border-clay-red/20 bg-background/95 shadow-[0_6px_20px_rgba(43,43,43,0.08)] backdrop-blur-md"
            : "border-transparent bg-background shadow-none"
        }`}
      >
        {/* logo */}
        <div>
          <a
            href="#home"
            aria-label="Go to the top of the page"
            className="grid size-8 place-items-center rounded-full bg-clay-red text-xs text-white md:size-10 md:text-sm"
          >
            MO
          </a>
        </div>
        {/* navigation menu */}
        <nav className="px-3 py-1.5 bg-warm-sand rounded-pill hidden md:block">
          <ul className="flex gap-1 text-nav">
            {navigationMenu.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block cursor-pointer hover:bg-[#F7F2EA] py-1.5 px-2.5 rounded-pill transition-colors duration-300 delay-75 ease-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* download cv button */}
        <div className="hidden md:block">
          <a
            href={CV}
            download={CV}
            className="py-2 px-3 text-sm rounded-lg border border-clay-red inline-flex gap-2 items-center"
          >
            <span>Download CV</span>

            <span>
              <ArrowDownToLine size={16} aria-hidden="true" />
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileNavOpen}
          className="grid size-9 place-items-center rounded-full border border-clay-red/25 bg-warm-sand/60 transition-colors hover:border-clay-red hover:bg-warm-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay-red md:hidden"
          onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
        >
          <Menu size={19} aria-hidden="true" />
        </button>
      </header>

      <MobileNav
        isMobileOpen={isMobileNavOpen}
        links={navigationMenu}
        setMobileNav={setIsMobileNavOpen}
      />
    </>
  );
}

export default Header;
