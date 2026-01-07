import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="logo">PEP</div>
      <div className="navlinks">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-btns">
        <button>Get started</button>
        <button>c</button>
      </div>
    </header>
  );
}

export default Header;
