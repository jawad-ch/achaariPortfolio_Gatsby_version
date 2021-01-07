import React from "react"
import {
  ProjectSection,
  Container,
  ProjectContainer,
} from "../style/StyledPortfolio"
import { projectsData } from "./projectsData"
import Project from "./Project"

function Projects() {
  return (
    <ProjectSection id="work" className="section">
      <Container>
        <ProjectContainer>
          <h2 className="animate">My projects</h2>
          <p className="work_desc animate">Check out my portfolio!</p>
          <div className="work_wrapper">
            {projectsData.map(project => (
              <Project
                key={project.id}
                title={project.name}
                bgmp4={project.publicURL}
                github={project.github}
                external={project.external}
              />
            ))}
          </div>
        </ProjectContainer>
      </Container>
    </ProjectSection>
  )
}

export default Projects
