import styled, { keyframes } from "styled-components"
const AboutSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 0px;
`

const slideUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(80px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`

const zoom_in = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.1);
    }
    /* 20%{
        opacity: 0.6;
    } */
    100%{
        opacity: 1;
        transform: scale(1);
    }
`
const slideUpIn = keyframes`
    0%{
        opacity: 0;
        top: 100px;
        right: 30px;
        height: 70%;
        width: 40%;
        border-left: none;
        border-bottom: none;
    }
    30%{
        border-left: none;
        border-bottom: none;
    }
    100%{
        opacity: 1;
        right: -30px;
        top: -30px;
        height: 100%;
        width: 80%;
        border-left: block;
        border-bottom: block;
    }
`

const Container = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 1400px;
  & .about__container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    align-items: center;
    width: 90%;
    @media screen and (max-width: 768px) {
      flex-direction: column-reverse !important;
    }
    & .about__wrapper {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100% !important;
      }
      & .animate {
        opacity: 0;
        &.slide_up {
          animation: ${slideUp} 0.9s ease forwards;
        }
        &:nth-child(1) {
          animation-delay: 0.2s;
        }
        &:nth-child(2) {
          animation-delay: 0.4s;
        }
        &:nth-child(3) {
          animation-delay: 0.6s;
        }
        &:nth-child(4) {
          animation-delay: 0.8s;
        }
      }
      & h2 {
        font-size: 36px;
        text-transform: capitalize;
        @media screen and (max-width: 768px) {
          font-size: 24px;
        }
      }
      & .about_desc {
        width: 80%;
        margin-top: 50px;
        color: rgb(189, 189, 189);
        text-align: justify;
        line-height: 25px;
        font-size: 18px;
        @media screen and (max-width: 768px) {
          width: 100% !important;
        }
      }
      & .about_skills {
        list-style: none;
        margin: 25px 0px 0px;
        padding: 0px;
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        & .about_skill {
          transition: all 0.2s ease 0s;
          position: relative;
          font-size: 15px;
          color: rgb(189, 189, 189);
          margin-bottom: 10px;
          cursor: pointer;
          &:hover {
            color: rgb(2, 212, 99);
          }
          & span {
            font-size: 14px;
            text-transform: capitalize;
          }
          &.skill_jquery {
            color: rgb(51, 51, 51) !important;
            text-decoration: line-through;
            & .skill_icon {
              color: rgb(51, 51, 51) !important;
            }
          }
          & .skill_icon {
            margin-right: 15px;
            color: rgb(2, 212, 99);
            width: 18px;
            height: 18px;
          }
        }
      }
    }
    & .about_img {
      width: 50%;
      transition: opacity 0.5s ease;
      transition-delay: 0.3s;
      border-radius: 4px;
      position: relative;
      /* z-index: 0; */
      float: right;
      opacity: 0.4;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        margin-bottom: 50px;
        align-self: flex-start !important;
        width: 100% !important;
        justify-content: center;
      }

      &.animate {
        &.slide_up {
          & img,
          & .gatsby-image-wrapper {
            animation: ${zoom_in} 0.9s ease forwards;
            animation-delay: 0.6s;
          }
          &::after {
            animation: ${slideUpIn} 1s ease forwards;
            animation-delay: 0.9s;
          }
        }
      }

      & img,
      & .gatsby-image-wrapper {
        width: 80%;
        opacity: 0;
      }
      &:hover {
        opacity: 1 !important;
        &::after {
          box-shadow: inset rgb(2 212 99 / 35%) -8px 8px 6px 3px;
        }
      }
      &::after {
        opacity: 0;
        right: -30px;
        top: -30px;
        /* height: 100%;
                width: 80%; */
        transition: 1s ease;
        transition-property: box-shadow;
        transition-delay: 0.1s;
        border: 10px solid rgb(2, 212, 99);
        content: "";
        position: absolute;
        z-index: -2;
        @media screen and (max-width: 768px) {
          right: 30px !important;
        }
        @media screen and (min-width: 500px) and (max-width: 670px) {
          right: 15px !important;
        }
      }
    }
  }
`

export { AboutSection, Container }
