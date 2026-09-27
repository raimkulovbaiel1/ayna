
"use client";
import Link from "next/link";
import Image from "next/image";
export function Footer() {
  return (
    <footer>
      <Link className="logo" href="/">
        <span className="logo-mark">
          <Image
            src="/logo/logo.jpg"
            alt="MoveCare"
            width={50}
            height={50}
          />
        </span>

        <span>
          Posture &<span> <br /> Foot Alignment</span>
        </span>
      </Link>

      <p>КОРРЕКЦИЯ ОСАНКИ И СТОП.</p>

      <nav className="footer-nav">
        <Link href="/results">Результаты</Link>
        <Link href="/schedule">Расписание</Link>
        <Link href="/booking">Запись</Link>
        <Link href="/admin">Заявки</Link>
        <Link href="/trainer">Тренер</Link>
      </nav>

      <div className="footer-contacts">

        <a
          href="https://www.instagram.com/aiana.fit?stkn=MWlnM2gycjV5ZXF2bg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          📷 Instagram
        </a>

        <a href="tel:+996709848476">
          📞 +996 709 848 476
        </a>

        <a
          href="https://wa.me/996709848476"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>

      <small>© 2026 MoveCare</small>
    </footer>
  );
}