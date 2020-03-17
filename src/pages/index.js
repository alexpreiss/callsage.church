import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Youtube from "react-youtube-embed"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <h2 style={{ position: "fixed", padding: "10px" }}>FUCK SHIT UP</h2>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50%", marginTop: "75px" }}>
        <Youtube id="GKgstTR8MeI" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
