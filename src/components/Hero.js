import React from "react"
import { Link } from "react-scroll"
import {
  HomeSection,
  Container,
  HeroContent,
  HeroLeft,
  HeroRight,
} from "../style/StyledHome"
import cross from "../assets/images/cross.svg"
import tick from "../assets/images/tick.svg"
import circle from "../assets/images/circle.svg"
import square from "../assets/images/square.svg"
import Board from "./Board"

const Hero = () => {
  return (
    <HomeSection id="home" className="section">
      <Container className="hero__container">
        <div className="content__wrapper">
          <HeroContent>
            <HeroLeft>
              <p className="colored animate">Hi, I am</p>
              <h1 className="animate">Acharri Jaouad</h1>
              <h2 className="hero__sub animate">Full-Stack WebDeveloper</h2>
              <p className="hero__desc section__desc animate">
                I specialize in designing, building, and scaling beautiful,
                usable products with blazing-fast efficiency.
              </p>
              <div className="animate">
                <Link
                  to="work"
                  smooth
                  duration={1000}
                  className="btn btn--primary"
                >
                  See my work
                </Link>
              </div>
            </HeroLeft>
            <HeroRight>
              <Board />
            </HeroRight>
            <img src={cross} className="decoration __cross" alt="cross" />
            <img src={tick} className="decoration __tick" alt="tick" />
            <img src={circle} className="decoration __circle" alt="circle" />
            <img src={square} className="decoration __square" alt="square" />
          </HeroContent>
        </div>
      </Container>
    </HomeSection>
  )
}

export default Hero
