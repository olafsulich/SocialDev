import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import useScrollPosition from '../navigation/shared/hooks/useScrollPosition';

const SCROLL_POSITION = 20;

const Navigation = () => {
  const [scrolled, setScrolled] = useScrollPosition(SCROLL_POSITION);

  return (
    <nav className={scrolled ? 'nav scroll' : 'nav'}>
      <div className="nav-container">
        <div className="brand">
          <Link href="/">
            <a href="/">
              <img src="/images/term.png" className="favicon" alt="Floppy Diskette" />
              <span className="text">SocialDev</span>
            </a>
          </Link>
          <input
            style={{
              width: '400px',
              height: '30px',
              border: '3px solid #EDF2FF',
              background: 'none',
              color: '#B5C2CA',
              borderRadius: '10px',
              marginLeft: '2rem',
              padding: '4px 0 4px 10px',
            }}
            placeholder="Szukaj artykułów"
          />
        </div>
        <div className="links">
          <a>papap</a>
          <a>papap</a>
          <a>papap</a>
          {/* <Link></Link>
          {menuLinks.map((link) => (
            <Link key={link.name} to={link.link} activeClassName="active">
              {link.name}
            </Link>
          ))} */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
