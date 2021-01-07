import styled, { keyframes } from "styled-components"

const ProjectSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgb(17, 17, 17);
  padding: 100px 0px;
`
const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const ProjectContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & .animate {
    opacity: 0;
    &.slide_up {
      animation: ${slideUp} 0.5s ease forwards;
      animation-delay: 0.2s;
    }
  }

  & h2 {
    font-size: 36px;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }

  & .work_desc {
    text-align: center;
    margin: 50px 0px;
    color: rgb(189, 189, 189);
    font-size: 18px;
  }
  & .work_wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px 20px;
    width: 100%;
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`

const SingleProject = styled.div`
  & video {
    opacity: 0.4;
    transition: all 0.5s ease;
    border-radius: 4px;
    box-shadow: black 0px 0px 10px;
    width: 100%;
    cursor: pointer;
  }
  &:hover {
    & video,
    .link_icon,
    span {
      opacity: 1 !important;
    }
  }

  & .work_links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    & a {
      margin-right: 10px;
      text-decoration: none;
      color: inherit;
      &:hover {
        color: rgb(2, 212, 99);
      }
      & .link_icon {
        width: 20px;
        height: 20px;
        transition: all 0.2s ease 0s;
        filter: drop-shadow(black 0px 0px 3px);
        opacity: 0.4;
      }
    }

    & span {
      font-size: 14px;
      text-shadow: black 0px 0px 10px;
      opacity: 0.4;
      transition: all 0.2s ease 0s;
    }
  }
`

export { ProjectSection, Container, ProjectContainer, SingleProject }
