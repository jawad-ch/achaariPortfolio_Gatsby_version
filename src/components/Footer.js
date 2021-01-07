import React from "react"

import { FooterSection, FooterContainer } from "../style/StyledFooter"
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperclip,
} from "react-icons/fa"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <div className="footer_links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/jaouad_636/"
            className="footer_link animate"
          >
            <FaInstagram className="footer_link_icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jawad-ch"
            className="footer_link animate"
          >
            <FaGithub className="footer_link_icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jaouad-achaari-031a01199/"
            className="footer_link animate"
          >
            <FaLinkedin className="footer_link_icon" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:jawadaitali636@gmail.com"
            className="footer_link animate"
          >
            <FaEnvelope className="footer_link_icon" />
          </a>
          <Link
            smooth
            duration={1000}
            to="home"
            className="footer_link animate"
          >
            <FaPaperclip className="footer_link_icon" />
          </Link>
        </div>
        <div className="footer_desc">
          <p className="footer__copy animate">
            {" "}
            Copyright {new Date().getFullYear()} &copy; Achaari Jaouad{" "}
          </p>
          <p className="footer__credit animate">
            Created by{" "}
            <Link
              to="home"
              smooth
              duration={1000}
              target="_blank"
              rel="noopener noreferrer"
              title="Achaari Jaouad | Front__back-End Developer"
            >
              Achaari Jaouad
            </Link>
          </p>
        </div>
      </FooterContainer>
    </FooterSection>
  )
}

export default Footer
