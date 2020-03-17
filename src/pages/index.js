import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Youtube from "react-youtube-embed"
import SoundCloudWidget from "react-simple-soundcloud-widget"

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
      <div style={{ marginTop: "75px", width: "50%" }}>
        <SoundCloudWidget url="https://soundcloud.com/callsage/grow" />
      </div>
      <div style={{ marginTop: "15px", width: "50%" }}>
        <SoundCloudWidget url="https://soundcloud.com/callsage/bonus-track-1" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
