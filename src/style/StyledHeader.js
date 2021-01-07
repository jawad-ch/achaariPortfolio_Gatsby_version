import styled, { keyframes } from "styled-components"

const slideUp = keyframes`
    0%{
        opacity: 0;
        transform: translateY(-70px) scale(0.9);
    }
    100%{
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`

const StickyHeader = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  transition: all 0.6s ease 0s;
  position: absolute;
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
    width: 90%;
    max-width: 1400px;
    &.animate {
      opacity: 0;
      &.slide_up {
        animation: ${slideUp} 2s ease forwards;
      }
    }
    & .navbar__logo {
      font-family: "Grand Hotel";
      font-size: 36px;
      color: white;
      transition: all 0.2s ease 0s;
      text-shadow: black 0px 0px 10px;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: rgb(2, 212, 99);
        transition: all 0.2s ease 0s;
      }
    }

    & .navbar__links {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }

  &.scrolled {
    position: fixed;
    transition: all 0.4s ease 0s;
    z-index: 5;
    background: rgb(26, 26, 26);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px;
    height: 60px;
  }
  & .navLink {
    margin-left: 20px;
    transition: all 0.2s ease 0s;
    text-shadow: black 0px 0px 10px;
    text-decoration: none;
    color: #fff;
    letter-spacing: 0.3px;
    cursor: pointer;
    font-size: 17px;
    &:hover {
      color: rgb(2, 212, 99);
    }
    &.colored {
      text-shadow: black 0px 0px 10px;
      color: rgb(2, 212, 99);
    }
    &.navbar__resume.btn {
      padding: 10px 17.5px;
      border-radius: 4px;
      border: 2px solid transparent;
      transition: all 0.2s ease 0s;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px;
      outline: none;
      appearance: none;
      color: rgb(2, 212, 99);
      border: 2px solid rgb(2, 212, 99);
      &:hover {
        background: rgb(2, 212, 99);
        color: #fff;
      }
    }
  }
`
const Humburger = styled.button`
  display: block;
  position: relative;
  cursor: pointer;
  z-index: 4;
  outline: none;
  background: none;
  border: none;
  display: none;
  background: transparent;
  @media screen and (max-width: 768px) {
    display: block;
  }
  &:hover {
    & .top,
    & .middle,
    & .bottom {
      background-color: rgb(2, 212, 99) !important;
    }
  }

  & i {
    width: 25px;
    height: 20px;
    position: relative;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;

    &.close {
      & .top {
        transform: rotate(45deg);
        top: 48%;
        width: 100%;
      }
      & .middle {
        transform: rotate(-45deg);
        top: 48%;
        width: 100%;
      }
      & .bottom {
        transform: rotate(-45deg);
        top: 48%;
        width: 100%;
      }
    }

    & span {
      position: absolute;
      height: 3px;
      width: 100%;
      transition: all 0.35s cubic-bezier(0.26, 0.1, 0.27, 1.55) 0s;
      background-color: rgb(255, 255, 255);
      &.top {
        top: 0%;
        width: 75%;
        left: 0%;
      }
      &.middle {
        top: 45%;
        width: 75%;
      }
      &.bottom {
        top: 90%;
        width: 75%;
        left: 0%;
      }
    }
  }
`
const SideNav = styled.ul`
  width: 0px;
  padding: 0;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 3;
  background-color: rgb(17, 17, 17);
  transition: all 0.2s ease-in-out 0s;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & a {
    margin: 30px 0px;
    display: block;
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;
    &.colored {
      color: #fff !important;
      &:hover {
        color: rgb(2, 212, 99) !important;
      }
    }
  }
  &.open {
    transition: all 0.5s ease 0s;
    width: 40% !important;
    @media screen and (min-width: 768px) {
      width: 0px !important;
    }
  }
`

export { StickyHeader, SideNav, Humburger }
