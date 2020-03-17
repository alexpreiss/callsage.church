import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

export default class BackgroundImage extends React.Component {
  constructor() {
    super()
    this.state = {
      phrase: 1,
      image: 1,
    }
  }

  generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  pairedPhrases() {
    return {
      1: "FUCK SHIT UP",
      2: "I CAN MAKE THIS... WAY BETTER",
      3: "CHILDREN OF THE BEAMING LIGHT",
      4: "KISS ME",
      5: "YOU DID A GOOD JOB",
      6: "WTF IS SAGE",
      7: "I LOVE YOU",
      8: "CALL ME",
    }
  }

  componentDidMount() {
    this.setState({
      phrase: this.generateRandomInteger(1, 8),
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            backgroundImg: file(relativePath: { eq: "background.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          // Set ImageData.
          const imageData = data.backgroundImg.childImageSharp.fluid
          return (
            <>
              <Img
                fluid={imageData}
                style={{
                  width: "100%",
                  height: "100vh",
                  position: "fixed",
                }}
              />
              <h2 style={{ position: "fixed", padding: "10px" }}>
                {this.pairedPhrases()[this.state.phrase]}
              </h2>

              {this.props.children}
            </>
          )
        }}
      />
    )
  }
}
