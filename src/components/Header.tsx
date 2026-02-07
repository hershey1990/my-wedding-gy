import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);

      const offset = 140;
      const sections = ["our-votes", "details", "gifts", "rsvp", "dress-code"];
      let current = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + offset >= top) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id: string) =>
    activeSection === id ? "!text-[var(--shade-900)]" : "";

  return (
    <header
      className={`w-full fixed top-0 pt-10 left-0 z-20 transition-colors  ${
        scrolled ? "bg-white/70 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="w-full h-full flex items-center justify-center relative">
        <ul className="list-none menu text-center [&>li]:inline-block [&>li]:mx-4">
          <li>
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className={getLinkClass("home")}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#our-votes"
              onClick={() => setActiveSection("our-votes")}
              className={getLinkClass("our-votes")}
            >
              Nuestra Historia
            </a>
          </li>
          <li>
            <a
              href="#details"
              onClick={() => setActiveSection("details")}
              className={getLinkClass("details")}
            >
              Detalles
            </a>
          </li>
          <li>
            <a
              href="#gifts"
              onClick={() => setActiveSection("gifts")}
              className={getLinkClass("gifts")}
            >
              Regalos
            </a>
          </li>
          <li>
            <a
              href="#rsvp"
              onClick={() => setActiveSection("rsvp")}
              className={getLinkClass("rsvp")}
            >
              Confirmar asistencia
            </a>
          </li>
          <li>
            <a
              href="#dress-code"
              onClick={() => setActiveSection("dress-code")}
              className={getLinkClass("dress-code")}
            >
              Código de vestimenta
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
