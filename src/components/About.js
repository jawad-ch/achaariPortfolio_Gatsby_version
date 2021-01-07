import React from "react"
import { AboutSection, Container } from "../style/StyledAbout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  FaReact,
  FaHtml5,
  FaSass,
  FaBootstrap,
  FaJs,
  FaLaravel,
  FaFire,
} from "react-icons/fa"
import { SiPhp, SiGatsby } from "react-icons/si"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "images/aboutImg.PNG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <AboutSection id="about" className="section">
      <Container>
        <div className="about__container">
          <div className="about__wrapper">
            <h2 className="animate">about me</h2>
            <p className="about_desc animate">
              I started coding in December 2019, and I am a self-taught
              developer. I have a passion for modern looking websites with a few
              animations. I love what I am doing, and I am highly motivated to
              collaborate with someone. If you are up into some projects, just
              let me know!
            </p>
            <p className="about_desc animate">Technologies that I use:</p>
            <ul className="about_skills animate">
              <li className="about_skill">
                <FaHtml5 className="skill_icon" />
                <span>Html</span>
              </li>
              <li className="about_skill">
                <FaSass className="skill_icon" />
                <span>S(css)</span>
              </li>
              <li className="about_skill">
                <FaBootstrap className="skill_icon" />
                <span>Bootstrap</span>
              </li>
              <li className="about_skill">
                <FaJs className="skill_icon" />
                <span>JavaScript</span>
              </li>
              <li className="about_skill">
                <FaReact className="skill_icon" />
                <span>React</span>
              </li>
              <li className="about_skill">
                <SiGatsby className="skill_icon" />
                <span>Gatsby.js</span>
              </li>
              <li className="about_skill">
                <FaFire className="skill_icon" />
                <span>Firebase</span>
              </li>
              <li className="about_skill">
                <FaLaravel className="skill_icon" />
                <span>Laravel</span>
              </li>
              <li className="about_skill">
                <SiPhp className="skill_icon" />
                <span>PHP</span>
              </li>
            </ul>
          </div>
          <div className="about_img animate">
            <Img fluid={data.file.childImageSharp.fluid} alt="Achaari" />
          </div>
        </div>
      </Container>
    </AboutSection>
  )
}

export default About
