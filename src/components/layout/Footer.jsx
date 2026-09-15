import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <>
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
    </>
  );
}
