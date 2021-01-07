import React, { Fragment, useEffect, useState } from "react"
import { Link } from "react-scroll"
import { StickyHeader, SideNav, Humburger } from "../style/StyledHeader"

const Header = () => {
  const [openLeftSide, setstate] = useState(false)

  const Links = () => (
    <Fragment>
      <Link
        smooth
        duration={999}
        className="navLink colored"
        to="home"
        rel="home"
      >
        Home
      </Link>
      <Link smooth duration={1000} className="navLink" to="about" rel="about">
        About
      </Link>
      <Link smooth duration={1000} className="navLink" to="work" rel="work">
        Projects
      </Link>
      <Link
        smooth
        duration={1000}
        className="navLink"
        to="contact"
        rel="contact"
      >
        Contact
      </Link>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="somewhere"
        className="navLink navbar__resume btn"
      >
        Resume
      </a>
    </Fragment>
  )

  const stickyHeader = () => {
    var header = document.querySelector("#header")
    var scrollTop = window.scrollY
    scrollTop > 210
      ? header.classList.add("scrolled")
      : header.classList.remove("scrolled")
  }

  useEffect(() => {
    window.addEventListener("scroll", () => stickyHeader())
    return () => window.removeEventListener("scroll", () => stickyHeader())
  }, [])

  return (
    <StickyHeader id="header">
      <nav id="navbar" className="animate">
        <Link className="navbar__logo" to="home" smooth duration={999}>
          Achaari
        </Link>
        <div className="hamburger__container">
          <Humburger
            aria-label="menu"
            className="hamburger"
            onClick={() => setstate(!openLeftSide)}
          >
            <i className={openLeftSide ? "close" : ""}>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </i>
          </Humburger>
        </div>
        <ul className="navbar__links">
          <Links />
        </ul>
      </nav>
      <SideNav className={openLeftSide && "open"}>
        <Links />
      </SideNav>
    </StickyHeader>
  )
}

export default Header
