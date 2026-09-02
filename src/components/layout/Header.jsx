import CV from "/docs/newCv_march_mojuba.pdf";
import { ArrowDownToLine } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationMenu = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 16);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 flex h-17 w-full items-center justify-between box-border border-b px-2.5 py-3 font-manrope font-semibold transition-[border-color,background-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-clay-red/20 bg-background/95 shadow-[0_6px_20px_rgba(43,43,43,0.08)] backdrop-blur-md"
          : "border-transparent bg-background shadow-none"
      }`}
    >
      {/* logo */}
      <div>
        <span className="capitalize p-2.5 text-sm bg-clay-red text-white rounded-full">
          <a href="#home" aria-label="Go to the top of the page">
            MO
          </a>
        </span>
      </div>
      {/* navigation menu */}
      <nav className="px-3 py-1.5 bg-warm-sand rounded-pill">
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
      <div>
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
    </header>
  );
}

export default Header;
