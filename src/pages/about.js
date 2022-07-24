import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `creative developer`,
          `web developer`,
          `designer`,
          `design portfolio`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h5>Hi, I'm Julian 👋</h5>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Julian Mojico</figcaption>
          </figure>
          <h3 id="dynamic-styles">Professional profile</h3>
          <p>
            Visual expressions are fascinating, we all know that. I'm a Designer
            and Web Developer; I use colors, contrasts and movement to
            communicate, to deliver a message. I love crafting design pieces;
            from product designs, event banners to motion graphics and 3D
            animations. Specially creating digital experiences that people enjoy
            using.
            <br></br>I consider myself a communicative person with a great sense
            of teaming.
          </p>
          <p>
            Don't forget to check out my{" "}
            <a target="_blank" href="https://www.linkedin.com/in/julianmojico/">
              linkedin profile.
            </a>{" "}
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "julian.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
