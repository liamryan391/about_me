import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { focusRing, pageWrap } from "./styles";

export type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className={`${pageWrap} sticky top-0 z-30`}>
      <div className="flex min-h-[76px] items-center justify-between gap-4 py-3 backdrop-blur-xl">
        <a className={`flex min-w-0 items-center gap-3 rounded-lg font-extrabold ${focusRing}`} href="#top" aria-label="Liam Ryan home">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#123d3f] text-white shadow-[0_12px_26px_rgba(18,61,63,0.2)]">
            LR
          </span>
          <span className="grid min-w-0">
            <span>Liam Ryan</span>
            <small className="truncate text-xs font-semibold text-[#465654]">SOC Analyst candidate</small>
          </span>
        </a>

        <button
          className={`grid h-11 w-11 place-items-center rounded-lg border border-[#d6ded9] bg-white/95 text-[#182423] lg:hidden ${focusRing}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>

        <nav
          id="primary-navigation"
          className={`absolute left-4 right-4 top-[70px] rounded-lg border border-[#d6ded9] bg-white p-1.5 shadow-[0_18px_45px_rgba(24,36,35,0.12)] lg:static lg:flex lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            menuOpen ? "grid" : "hidden"
          }`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`rounded-lg px-4 py-2.5 text-sm font-bold text-[#465654] hover:bg-[#e8f2ee] hover:text-[#123d3f] lg:py-2 ${focusRing}`}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
