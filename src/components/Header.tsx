import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`w-full fixed top-0 pt-10 left-0 z-20 transition-colors h-[58px] ${
        scrolled ? "bg-white/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="w-full h-full flex items-center justify-center relative">
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-[var(--color-font-primary)]" />
          <span className="w-6 h-0.5 bg-[var(--color-font-primary)]" />
          <span className="w-6 h-0.5 bg-[var(--color-font-primary)]" />
        </button>
        <ul className="list-none menu hidden md:flex items-center justify-center gap-6 py-4">
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
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur">
            <ul className="list-none menu flex flex-col items-center gap-4 py-4">
              <li>
                <a href="" onClick={() => setOpen(false)}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#our-votes" onClick={() => setOpen(false)}>
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#details" onClick={() => setOpen(false)}>
                  Detalles
                </a>
              </li>
              <li>
                <a href="" onClick={() => setOpen(false)}>
                  Confirmar asistencia
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
