import CV from "/docs/newCv_march_mojuba.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const navigationMenu = ["About", "Stack", "Projects", "Contact"];

  return (
    <header className="flex justify-between items-center px-2.5 py-3 fixed z-50 top-0 bg-background font-manrope font-semibold w-full h-17 box-border">
      {/* logo */}
      <div>
        <span className="capitalize p-2.5 text-sm bg-clay-red text-white rounded-full">
          <a href="#">MO</a>
        </span>
      </div>
      {/* navigation menu */}
      <nav className="px-3 py-1.5 bg-warm-sand rounded-pill">
        <ul className="flex gap-1 text-nav">
          {navigationMenu.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:bg-[#F7F2EA] py-1.5 px-2.5 rounded-pill transition-colors duration-300 delay-75 ease-out"
            >
              {link}
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
            <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
