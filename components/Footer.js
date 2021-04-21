import Link from 'next/link';

const Footer = () => (
  <footer className="bottom">
    <p>&copy; Elliot Morris && Thomas France {new Date().getFullYear()}</p>
    <p>
      Website made with React, Next.js and stylus. The source is on{' '}
      <a
        href="https://github.com/elliotrpmorris"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
