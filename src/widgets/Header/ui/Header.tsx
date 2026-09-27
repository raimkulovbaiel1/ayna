"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/results", label: "Результаты" },
  { href: "/schedule", label: "Расписание" },
  { href: "/trainer", label: "Тренер" },
  { href: "/#posture", label: "Осанка" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Link className="logo" href="/" onClick={closeMenu}>
          <span className="logo-mark">
            <Image
              src="/logo/logo.jpg"
              alt="MoveCare"
              width={50}
              height={50}
            />
          </span>

          <span>
            Posture &{" "}
            <span>
              <br />
              Foot Alignment
            </span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="desktop-nav">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                className={isActive ? "active" : undefined}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      >
        <div
          className="mobile-menu"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mobile-menu-header">
            <span>Меню</span>

            <button
              className="mobile-menu-close"
              type="button"
              onClick={closeMenu}
              aria-label="Закрыть меню"
            >
              ×
            </button>
          </div>

          <nav className="mobile-nav">
            {links.map((link, index) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-nav-link ${
                    isActive ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span className="mobile-nav-number">
                    0{index + 1}
                  </span>

                  <span>{link.label}</span>

                  <span className="mobile-nav-arrow">→</span>
                </Link>
              );
            })}
          </nav>

          <div className="mobile-menu-footer">
            <span>MOVECARE</span>
            <small>Коррекция осанки и стоп</small>
          </div>
        </div>
      </div>
    </>
  );
}