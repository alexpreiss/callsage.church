/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import BackgroundImage from "../components/backgroundImage"

import "../index.css"

const Layout = ({ children }) => {
  return (
    <BackgroundImage>
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

          <footer>
            <h5
              style={{
                outline: "white",
                display: "flex",
                justifyContent: "center",
                padding: 0,
                margin: 0,
              }}
            >
              FAT BALLS HD
            </h5>

            <h3
              style={{
                outline: "white",
                display: "flex",
                justifyContent: "center",
                padding: 10,
              }}
            >
              SAGE © {new Date().getFullYear()}
            </h3>
          </footer>
        </div>
      </div>
    </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
