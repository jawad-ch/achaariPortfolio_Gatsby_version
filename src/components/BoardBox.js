import React from "react"
import Img from "gatsby-image"
const BoardBox = ({ frontImg, backImg, title, flipped }) => {
  return (
    <div className="board_wrapper">
      <div className="board_box">
        <div className={`front ${flipped ? "flipped" : ""}`}>
          <Img fluid={frontImg} alt={title} />
        </div>
        <Img
          className={`back ${flipped ? "flipped" : ""}`}
          fluid={backImg}
          alt={title}
        />
      </div>
    </div>
  )
}

export default BoardBox
