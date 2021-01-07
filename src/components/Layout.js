import React, { useState, useEffect } from "react";
import { Layout as LayoutStyle, GlobalStyle } from "../style/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";
import LoaderContainer from "./Loader";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const handelLoading = () => {
    setLoading(false);
  };

  const scrollSpy = () => {
    window.addEventListener("scroll", () => {
      let sections = document.querySelectorAll(".section");
      sections.forEach(section => {
        let sectionPosition = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 2;
        if (sectionPosition < screenPosition) {
          let activeLink = document.querySelector(`.navLink.colored`);
          let currentLink = document.querySelector(
            `.navLink[rel*='${section.id}']`
          );
          activeLink.classList.remove("colored");
          currentLink.classList.add("colored");
        }
      });
    });
  };

  const slideUpElements = () => {
    let elements = document.querySelectorAll(".animate");
    const inView = target => {
      const interSecObs = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            const elem = entry.target;
            if (entry.isIntersecting) {
              !elem.classList.contains("slide_up") &&
                elem.classList.add("slide_up");
            }
          });
        },
        { threshold: 0.9 }
      );
      interSecObs.observe(target);
    };
    elements.forEach(inView);
  };

  useEffect(() => {
    window.addEventListener("animationstart", () => {
      handelLoading();
      scrollSpy();
      slideUpElements();
    });

    // })
    return () => {
      window.removeEventListener("animationstart", () => {
        handelLoading();
        scrollSpy();
        slideUpElements();
      });
    };
  }, []);
  if (loading) return <LoaderContainer />;
  return (
    <>
      <GlobalStyle />
      <LayoutStyle>
        <Header />
        {children}
        <Footer />
      </LayoutStyle>
    </>
  );
};

export default Layout;
