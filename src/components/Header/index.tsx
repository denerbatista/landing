import "./style.css";

function Header() {
  return (
    <header>
      <img src="src\assets\logo.jpg" alt="logo do evento AnimeConnect" />

      <nav>
        <ul>
          <li><a href="#section-hero">Home</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Cronograma</a></li>
          <li><a href="#section-tickets">Ingressos</a></li>
          <li><a href="">Localização</a></li>
          <li><a href="#section-form">Newsletter</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
