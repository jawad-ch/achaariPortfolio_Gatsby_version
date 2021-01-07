import styled, { keyframes } from "styled-components"
import mainBackground from "../assets/images/mainBackground.jpg"

const HomeSection = styled.section`
  background-image: url(${mainBackground});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    background-attachment: scroll;
  }
`
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  &.hero__container {
    justify-content: flex-start;
    position: relative;
    width: 100%;
    margin-top: 100px;
    & .content__wrapper {
      display: flex;
      justify-content: center;
      margin: 5rem 0px;
      width: 90%;
      max-width: 1400px;
      @media screen and (max-width: 768px) {
        margin: 2rem 0px !important;
      }
    }
  }
`

const slideUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(70px) scale(0.9);
    }
    100%{
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`
const zoomIn = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.1);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

const HeroLeft = styled.div`
  & .colored {
    color: rgb(2, 212, 99);
  }
  & .animate {
    opacity: 0;
    &.slide_up {
      animation: ${slideUp} 0.9s ease forwards;
      transform-origin: bottom center;
      &:nth-child(1) {
        animation-delay: 0.6s;
      }
      &:nth-child(2) {
        animation-delay: 1s;
      }
      &:nth-child(3) {
        animation-delay: 1.6s;
      }
      &:nth-child(4) {
        animation-delay: 2s;
      }
      &:nth-child(5) {
        animation-delay: 2.6s;
      }
    }
  }
  & h1 {
    font-size: 64px;
    @media screen and (max-width: 768px) {
      font-size: 48px;
    }
  }
  & h2 {
    font-size: 36px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  & .hero__desc {
    width: 80%;
    margin: 50px 0px;
    color: rgb(189, 189, 189);
    text-align: justify;
    font-size: 18px;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }
  & .btn {
    padding: 10px 17.5px;
    border-radius: 4px;
    border: 2px solid transparent;
    transition: all 0.2s ease 0s;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px;
    outline: none;
    appearance: none;
    color: white;
    background: rgb(2, 212, 99);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: rgb(2, 212, 99);
      border: 2px solid rgb(2, 212, 99);
      background: transparent;
    }
  }
`

const HeroRight = styled.div`
  position: relative;
  perspective: 600px;

  & .board {
    width: 100%;
    background: rgb(33, 33, 33, 0);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 40px;
    position: absolute;
    left: 15px;
    top: -50px;
    padding-top: 56.25%;
    transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(-1deg);
    @media screen and (max-width: 768px) {
      position: relative !important;
      top: auto !important;
      left: 0px !important;
      transform: none !important;
      border: 5px solid rgb(34, 34, 34) !important;
      border-radius: 5px !important;
    }
    @media screen and (max-width: 1080px) {
      bottom: -50px !important;
    }
    @media screen and (max-width: 1280px) {
      bottom: -200px;
      right: -100px;
    }
    & .board_grid {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(2, 1fr);
      position: absolute;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      outline: rgb(34, 34, 34) solid 10px;
      @media screen and (max-width: 768px) {
        outline: 0px !important;
        gap: 5px !important;
      }
      & .animate {
        opacity: 0;
        &.slide_up {
          animation: ${zoomIn} 1s ease forwards;
          &:nth-child(1) {
            animation-delay: 2s;
          }
          &:nth-child(2) {
            animation-delay: 2.3s;
          }
          &:nth-child(3) {
            animation-delay: 2.6s;
          }
          &:nth-child(4) {
            animation-delay: 2.9s;
          }
        }
      }
      & .board_wrapper {
        width: 100%;
        height: 100%;
        background: rgb(17, 17, 17, 0.5);
        border-radius: 4px;
        position: relative;
        & .board_box {
          width: 100%;
          height: 100%;
          position: absolute;
          overflow: hidden;
          outline: none;
          left: -10px;
          top: -10px;
          filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 10px);
          @media screen and (max-width: 768px) {
            left: -5px !important;
            top: -5px !important;
          }
          & .front {
            position: absolute;
            width: 100%;
            height: 100%;
            will-change: transform, opacity;
            background-size: cover;
            background-position: center center;
            border-radius: 4px;
            opacity: 1;
            transform: perspective(600px) rotateX(0deg);
            transition: all 0.5s ease;
            &.flipped {
              opacity: 0;
              transform: perspective(600px) rotateX(180deg);
            }
          }
          & .back {
            background: rgb(34, 34, 34);
            width: 100%;
            height: 100%;
            border-radius: 4px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            flex-direction: column;
            opacity: 0;
            transform: perspective(600px) rotateX(0deg) rotateX(180deg);
            transition: all 0.5s ease;
            &.flipped {
              opacity: 1;
              transform: perspective(600px) rotateX(180deg) rotateX(180deg);
            }
          }
        }
      }
    }
  }
`

const HeroContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  & ${HeroLeft}, & ${HeroRight} {
    width: 50%;
    z-index: 1;
    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  & .decoration {
    position: absolute;
    z-index: 0;
    cursor: pointer;
    transition-delay: 0.2s !important;

    @media screen and (max-width: 768px) {
      opacity: 0.5;
    }

    &.__cross {
      left: 50%;
      top: 0px;
      transition: all 0.6s ease 0s;
      filter: drop-shadow(rgb(255, 82, 82) 0px 0px 15px);
      &:hover {
        transform: rotate(90deg);
        filter: none;
      }
    }
    &.__tick {
      left: 35%;
      bottom: 10%;
      transition: all 0.6s ease 0s;
      filter: drop-shadow(rgb(2, 212, 99) 0px 0px 15px);
      @media screen and (max-width: 768px) {
        left: 65% !important;
        top: 50% !important;
      }
      &:hover {
        transform: scale(0.6);
        filter: none;
      }
    }
    &.__circle {
      left: 75%;
      top: 20%;
      transition: all 0.6s ease 0s;
      filter: drop-shadow(rgb(0, 205, 226) 0px 0px 15px);
      /* @media screen and (max-width: 768px){
                top: 40% !important;
            } */
      &:hover {
        transform: scale(1.2);
        filter: none;
      }
    }
    &.__square {
      z-index: 1;
      left: 9.8%;
      bottom: 43%;
      display: none;
      transform: rotate(50deg);
      transition: all 0.6s ease 0s;
      filter: drop-shadow(#e93841 0px 0px 15px);
      @media screen and (max-width: 768px) {
        bottom: 73% !important;
        left: 1% !important;
        display: block;
      }
      &:hover {
        transform: rotate(230deg) scale(0.6);
        filter: none;
      }
    }
  }
`

export { HomeSection, Container, HeroContent, HeroRight, HeroLeft }
