import styled, { keyframes } from "styled-components"

const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  padding: 50px 0px;
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 1400px;
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

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;

  & .animate {
    opacity: 0;
    &.slide_up {
      animation: ${slideUp} 0.9s ease forwards;
      animation-delay: 0.2s;
    }
  }

  & h2 {
    font-size: 36px;
    margin: 25px 0px 0px 0px;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  & .contact__desc {
    text-align: center;
    margin: 25px 0px;
    color: rgb(189, 189, 189);
    font-size: 18px;
  }
  & span.colored {
    color: rgb(2, 212, 99) !important;
  }
  & .contact__wrapper {
    margin: 15px 0px 25px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & .input__field--grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      width: 72%;
      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr) !important;
      }
    }
    & .input__field--grid,
    .input__textarea {
      @media screen and (max-width: 768px) {
        width: 100% !important;
      }
    }
    & .input__field {
      display: flex;
      flex-direction: column;
      &.focus label {
        color: #02d463;
      }
      & label {
        color: rgb(189, 189, 189);
        margin-bottom: 0.5rem;
        text-shadow: black 0px 0px 10px;
        font-size: 15px;
      }
      & input,
      & textarea {
        border-radius: 4px;
        border: 2px solid #111111;
        height: 60px;
        width: 100%;
        font-family: "JetBrains Mono Regular";
        color: rgb(2, 212, 99);
        transition: all 0.2s ease 0s;
        outline: none;
        font-size: inherit;
        padding: 15px;
        background: #111111;
        box-shadow: rgb(51, 51, 51) 0px 0px 10px;
        &:focus {
          border-color: rgb(2, 212, 99) !important;
          color: rgb(2, 212, 99) !important;
        }
      }
    }
    & .input__textarea {
      margin-top: 1rem;
      width: 72%;
      & textarea {
        height: 230px;
        resize: none;
      }
    }
    & .btn {
      margin-top: 2rem;
      color: white;
      cursor: pointer;
      font-size: inherit;
      background: rgb(2, 212, 99) !important;
      padding: 10px 17.5px;
      border-radius: 4px;
      border: 2px solid transparent;
      transition: all 0.2s ease 0s;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 20px;
      outline: none;
      appearance: none;
      &:hover {
        color: rgb(2, 212, 99);
        border-color: rgb(2, 212, 99);
        background: transparent !important;
      }
    }
  }
`

export { ContactSection, Container, ContactContainer }
