import React from "react";
import Layout from "./../components/Layout";
import Hero from "./../components/Hero";
import About from "./../components/About";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";
import SEO from "./../components/SEO";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}
