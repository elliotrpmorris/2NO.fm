function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__link">
          <a
            href="/about"
            rel="noopener noreferrer"
          >
            About
          </a>
        </li>
        <li className="nav__link">
          <a
            href="/posts"
            rel="noopener noreferrer"
          >
            Posts
          </a>
        </li>
         <li className="nav__link">
          <a
            href="/sponsor"
            rel="noopener noreferrer"
          >
            Sponsor
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
