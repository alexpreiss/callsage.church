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
      image: this.generateRandomInteger(1, 6),
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            one: file(relativePath: { eq: "background1.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            two: file(relativePath: { eq: "background2.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            three: file(relativePath: { eq: "background3.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            four: file(relativePath: { eq: "background4.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            five: file(relativePath: { eq: "background5.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            six: file(relativePath: { eq: "background6.png" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => {
          const numberToWord = () => {
            if (this.state.image === 1) {
              return "one"
            } else if (this.state.image === 2) {
              return "two"
            } else if (this.state.image === 3) {
              return "three"
            } else if (this.state.image === 4) {
              return "four"
            } else if (this.state.image === 5) {
              return "five"
            } else if (this.state.image === 6) {
              return "six"
            }
          }

          const imageData = data[numberToWord()].childImageSharp.fluid
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
