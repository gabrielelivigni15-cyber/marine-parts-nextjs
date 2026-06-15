import { Factory, Search, UserRound } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalogo", label: "Catalog" },
  { href: "/cerca-per-motore", label: "Parts Search" },
  { href: "/richiesta-preventivo", label: "Request Quote" },
  { href: "/b2b", label: "B2B" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Apex Industrial Parts home">
        <Factory size={26} aria-hidden="true" />
        <span>Apex Industrial Parts</span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link className="icon-button" href="/cerca-per-motore" aria-label="Search parts">
          <Search size={18} />
        </Link>
        <Link className="icon-button" href="/b2b" aria-label="B2B area">
          <UserRound size={18} />
        </Link>
      </div>
    </header>
  );
}
