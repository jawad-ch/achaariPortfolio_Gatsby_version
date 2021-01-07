import React from "react"
import { SingleProject } from "../style/StyledPortfolio"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function Project(props) {
  const { title, bgmp4, github, external } = props

  return (
    <div className="animate_work_box">
      <SingleProject className="work_box animate">
        <video loop={true} autoPlay={true} muted={true} playsInline={true}>
          {/* <source src={bgwebm} type="video/webm" /> */}
          <source src={bgmp4} type="video/mp4" />
        </video>
        <div className="work_links">
          <div>
            <a href={github} rel="noopener noreferrer" target="_blank">
              <FaGithub className="link_icon" />
            </a>
            <a href={external} rel="noopener noreferrer" target="_blank">
              <FaExternalLinkAlt className="link_icon" />
            </a>
          </div>
          <span>{title}</span>
        </div>
      </SingleProject>
    </div>
  )
}

export default Project
