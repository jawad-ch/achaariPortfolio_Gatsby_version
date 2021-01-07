import React from "react"
import { LoopCircleLoading } from "react-loadingg"

const loaderStyle = {
  background: "#1A1A1A",
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 11,
}
const LoaderContainer = () => (
  <div className="loader__container" style={loaderStyle}>
    <LoopCircleLoading color="#02d463" />
  </div>
)
export default LoaderContainer
