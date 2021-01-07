import React, { useEffect, useState } from "react"
import {
  ContactSection,
  ContactContainer,
  Container,
} from "../style/StyledContact"
import emailjs from "emailjs-com"

function Contact() {
  const [contactState, setContact] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    error: "",
    disable: false,
  })

  const handelChange = e => {
    setContact({ ...contactState, [e.target.name]: e.target.value })
  }

  const validEmail = email => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(email)) {
      return true
    } else {
      return false
    }
  }

  const sendEmail = e => {
    e.preventDefault()
    setContact({ ...contactState, disable: true })
    const { name, email, message } = contactState
    if (name && email && message) {
      if (validEmail(email)) {
        emailjs
          .sendForm(
            "gmail",
            "template_ib0zsq9",
            e.target,
            "user_kUFzTDyk2Q1EHx4YGzI0f"
          )
          .then(
            result => {
              setContact({
                name: "",
                email: "",
                message: "",
                error: "",
                sent: true,
                disabled: false,
              })
              const fieldInputs = document.querySelectorAll(
                ".input__field-input"
              )
              fieldInputs.forEach(input => {
                input.style.borderColor = "#111111"
              })
              setTimeout(() => {
                setContact({
                  ...contactState,
                  name: "",
                  email: "",
                  message: "",
                  error: "",
                  sent: false,
                })
              }, 10000)
            },
            error => {
              setContact({
                ...contactState,
                disable: false,
                error:
                  "failed to send your Message please try again after a while",
              })
            }
          )
      } else {
        setContact({
          ...contactState,
          disable: false,
          error: "Invalid Email please enter a valid Email",
        })
        const emailInput = document.querySelector(
          ".input__field-input[name*='email']"
        )
        emailInput.style.borderColor = "#C94545"
        emailInput.style.color = "#C94545"
      }
    } else {
      setContact({
        ...contactState,
        disable: false,
        error: "please fill all field",
      })
    }
  }

  useEffect(() => {
    const inputs = document.querySelectorAll(".input__field-input")

    function addcl() {
      let parent = this.parentNode
      parent.classList.add("focus")
    }

    function remcl() {
      let parent = this.parentNode
      if (this.value === "") {
        parent.classList.remove("focus")
      }
    }

    inputs.forEach(input => {
      input.addEventListener("focus", addcl)
      input.addEventListener("blur", remcl)
    })
  }, [])

  return (
    <ContactSection id="contact" className="section">
      <Container>
        <ContactContainer>
          <h2 className="animate">Get in touch</h2>
          <div className="contact__desc animate">Contact me!</div>
          <span
            id="success"
            className="colored animate"
            style={{ display: contactState.sent ? "block" : "none" }}
          >
            Message sent! we will contact you back .
          </span>
          <span
            id="failure"
            className="animate"
            style={{
              color: "#FF5252",
              display:
                contactState.error !== null || contactState.error !== ""
                  ? "block"
                  : "none",
            }}
          >
            {contactState.error}
          </span>
          <form
            className="contact__wrapper animate"
            id="contact-form"
            onSubmit={sendEmail}
          >
            <input type="hidden" name="contact_number" />
            <div className="input__field--grid">
              <div className="input__field animate">
                <label htmlFor="name">Name</label>
                <input
                  onChange={handelChange}
                  value={contactState.name}
                  className="input__field-input"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="input__field animate">
                <label htmlFor="email">Email</label>
                <input
                  value={contactState.email}
                  aria-label="Email"
                  onChange={handelChange}
                  className="input__field-input"
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input__field input__textarea animate">
              <label htmlFor="message">Message</label>
              <textarea
                aria-label="Message"
                value={contactState.message}
                onChange={handelChange}
                className="input__field-input"
                id="message"
                name="message"
              />
            </div>
            <div className="animate">
              <input
                disabled={contactState.disable}
                aria-label="Submit"
                type="submit"
                value="Submit"
                className="btn"
              />
            </div>
          </form>
        </ContactContainer>
      </Container>
    </ContactSection>
  )
}

export default Contact
