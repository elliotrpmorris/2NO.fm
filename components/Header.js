import Subscribe from './Subscribe';
import Nav from './Nav';
import Link from 'next/link';

const Header = () => (
  <header className="header">
    <div className="header__left">
       <Link href="/">
         <h1 className="header__title">2NO.fm</h1>
       </Link>
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">What 2 No In Today's Society.</h2>
      </div>
      <hr/>
      <Nav/>
    </div>
    {/* <Subscribe /> */}
  </header>
);

export default Header;
