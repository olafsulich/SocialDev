import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navOnScroll = () =>
    window && window.scrollY > 20 ? setScrolled(true) : setScrolled(false);

  useEffect(() => {
    window.addEventListener("scroll", navOnScroll);

    return () => window.removeEventListener("scroll", navOnScroll);
  });

  return (
    <nav className={scrolled ? "nav scroll" : "nav"}>
      <div className="nav-container">
        <div className="brand">
          <Link href="/">
            <a href="/">
              <img
                src="/images/user.jpeg"
                className="favicon"
                alt="Floppy Diskette"
              />
              <span className="text">SocialDev</span>
            </a>
          </Link>
        </div>
        <div className="links">
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
