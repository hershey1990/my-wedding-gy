export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-20">
      <nav className="max-w-[120px] ml-16 mt-16">
        <ul className="list-none menu">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Nuestra Historia</a>
          </li>
          <li>
            <a href="">Detalles</a>
          </li>
          <li>
            <a href="">RSVP</a>
          </li>
          <li>
            <a href="">Galería</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
