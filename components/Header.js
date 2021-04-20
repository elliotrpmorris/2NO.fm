import Subscribe from './Subscribe';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
        <Link href="/">
        <a className="header__logo-link" aria-label="2No.fm">
          <img src="/static/2NO.fm_Logo.png" alt="2NO.fm" />
        </a>
      </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">What 2No In Today's Society.</h2>
      </div>
      <Nav/>
    </div>
    {/* <Subscribe /> */}
  </header>
);

export default Header;
