import styled, { keyframes } from "styled-components"

const FooterSection = styled.footer`
  height: 100px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(17, 17, 17);
  color: white;
  border-top: 1px solid rgb(33, 33, 33);

  @media screen and (max-width: 768px) {
    height: 120px !important;
  }
`
const anime = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  & .footer_links {
    & .footer_link {
      color: white;
      margin-right: 20px;
      transition: all 0.6s ease 0s;
      text-decoration: none;
      opacity: 0;
      cursor: pointer;
      &.animate {
        animation: ${anime} 0.9s ease forwards;
        &:nth-child(1) {
          animation-delay: 0.2s;
        }
        &:nth-child(2) {
          animation-delay: 0.6s;
        }
        &:nth-child(3) {
          animation-delay: 1s;
        }
        &:nth-child(4) {
          animation-delay: 1.4s;
        }
        &:nth-child(5) {
          animation-delay: 1.8s;
        }
      }
      & .footer_link_icon {
        width: 20px;
        height: 20px;
        filter: drop-shadow(black 0px 0px 3px);
      }
      &:hover {
        color: rgb(2, 212, 99);
      }
    }
  }
  & .footer_desc {
    text-shadow: black 0px 0px 10px;
    & .footer__copy {
      font-size: 14px;
      opacity: 0;
      &.animate {
        &.slide_up {
          animation: ${anime} 0.9s ease forwards;
          animation-delay: 1s;
        }
      }
    }
    & .footer__credit {
      font-size: 12px;
      color: rgb(51, 51, 51);
      opacity: 0;
      &.animate {
        &.slide_up {
          animation: ${anime} 0.9s ease forwards;
          animation-delay: 1.2s;
        }
      }
      & a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
    }
  }
`

export { FooterSection, FooterContainer }
