/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import Img from "gatsby-image"

import Header from "./header"

import "../index.css"

const Layout = ({ children }) => {
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
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Header />
              <div>
                <main>{children}</main>
                {/* <footer>

              </footer> */}
              </div>
            </div>
          </>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
