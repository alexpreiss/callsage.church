import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Youtube from "react-youtube-embed"
import SoundCloudWidget from "react-simple-soundcloud-widget"

import Layout from "../components/layout"
import SEO from "../components/seo"

import instagram from "../images/social-media-icons/instagram.png"
import apple from "../images/social-media-icons/apple.png"
import soundcloud from "../images/social-media-icons/soundcloud.png"
import spotify from "../images/social-media-icons/spotify.png"
import twitter from "../images/social-media-icons/twitter.png"

import "../css/responsive.css"

const IndexPage = () => (
  <Layout>
    <SEO />
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="widget" style={{ marginTop: "75px" }}>
        <Youtube id="GKgstTR8MeI" />
      </div>

      <div className="soundcloud-widget-container">
        <div className="widget">
          <SoundCloudWidget url="https://soundcloud.com/callsage/grow" />
        </div>
        <div className="widget">
          <SoundCloudWidget url="https://soundcloud.com/callsage/bonus-track-1" />
        </div>
      </div>

      <div className="social-media-icons-container">
        <a
          style={{ width: "15%" }}
          href="https://www.instagram.com/callsage.church"
        >
          <img className="media-icon" src={instagram} />
        </a>

        <a style={{ width: "15%" }} href="https://twitter.com/Michael40790623">
          <img className="media-icon" src={twitter} />
        </a>

        <a style={{ width: "15%" }} href="https://soundcloud.com/callsage">
          <img className="media-icon" src={soundcloud} />
        </a>

        <a
          style={{ width: "15%" }}
          href="https://music.apple.com/us/artist/sage/1502779907"
        >
          <img className="media-icon" src={apple} />
        </a>

        <a
          style={{ width: "15%" }}
          href="https://open.spotify.com/artist/79Jfe2eoVugLlnpuOqqjhS"
        >
          <img className="media-icon" src={spotify} />
        </a>
      </div>
    </div>
  </Layout>
)

export default IndexPage
