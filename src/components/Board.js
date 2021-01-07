import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BoardBox from "./BoardBox"
const Board = () => {
  const [flipped, setFlipped] = useState(false)
  const data = useStaticQuery(graphql`
    {
      shop_left_bottom: file(
        relativePath: { eq: "images/board/shop/shopLB.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shop_right_bottom: file(
        relativePath: { eq: "images/board/shop/shopRB.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shop_left_top: file(
        relativePath: { eq: "images/board/shop/shopLT.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shop_right_top: file(
        relativePath: { eq: "images/board/shop/shopRT.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wallet_left_bottom: file(
        relativePath: { eq: "images/board/wallet/walletLB.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wallet_right_bottom: file(
        relativePath: { eq: "images/board/wallet/walletRB.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wallet_left_top: file(
        relativePath: { eq: "images/board/wallet/walletTL.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wallet_right_top: file(
        relativePath: { eq: "images/board/wallet/walletTR.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div
      className="board"
      aria-hidden="true"
      onMouseEnter={() => setFlipped(state => !state)}
      onMouseLeave={() => setFlipped(state => !state)}
    >
      <div className="board_grid">
        <div className="animate">
          <BoardBox
            frontImg={data.shop_left_top.childImageSharp.fluid}
            backImg={data.wallet_left_top.childImageSharp.fluid}
            flipped={flipped}
          />
        </div>
        <div className="animate">
          <BoardBox
            frontImg={data.shop_right_top.childImageSharp.fluid}
            backImg={data.wallet_right_top.childImageSharp.fluid}
            flipped={flipped}
          />
        </div>
        <div className="animate">
          <BoardBox
            frontImg={data.shop_left_bottom.childImageSharp.fluid}
            backImg={data.wallet_left_bottom.childImageSharp.fluid}
            flipped={flipped}
          />
        </div>
        <div className="animate">
          <BoardBox
            frontImg={data.shop_right_bottom.childImageSharp.fluid}
            backImg={data.wallet_right_bottom.childImageSharp.fluid}
            flipped={flipped}
          />
        </div>
      </div>
    </div>
  )
}

export default Board
