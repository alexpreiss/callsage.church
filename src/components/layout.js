/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import Header from "./header"

import "./index.css"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "background.png" }) {
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
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            fluid={imageData}
            style={{
              width: "100%",
              height: "100vh",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Header />
            <div>
              <main>{children}</main>
              {/* <footer>

              </footer> */}
            </div>
          </BackgroundImage>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
