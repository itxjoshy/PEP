import "../styles/header.css";

function Header() {
  return (
    <header>
      <div className="logo">PEP</div>
      <div className="navlinks">
        <nav>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
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
