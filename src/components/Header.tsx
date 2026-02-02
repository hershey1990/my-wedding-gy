import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 transition-colors h-[58px] ${
        scrolled ? "bg-white/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="w-full">
        <ul className="list-none menu flex items-center justify-center gap-6 py-4">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="#our-votes">Nuestra Historia</a>
          </li>
          <li>
            <a href="#details">Detalles</a>
          </li>
          <li>
            <a href="">Confirmar asistencia</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
