import { Factory, Search, UserRound } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Inizio" },
  { href: "/catalogo", label: "Catalogo" },
  { href: "/cerca-per-motore", label: "Ricerca Ricambi" },
  { href: "/richiesta-preventivo", label: "Preventivo" },
  { href: "/b2b", label: "B2B" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Home Apex Ricambi Industriali">
        <Factory size={26} aria-hidden="true" />
        <span>Apex Ricambi Industriali</span>
      </Link>
      <nav className="main-nav" aria-label="Navigazione principale">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="icon-button" href="/cerca-per-motore" aria-label="Cerca ricambi">
          <Search size={18} />
        </Link>
        <Link className="icon-button" href="/b2b" aria-label="Area B2B">
          <UserRound size={18} />
        </Link>
      </div>
    </header>
  );
}
