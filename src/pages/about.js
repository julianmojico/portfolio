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
            {/* <figcaption>Large imagery is at the heart of this theme</figcaption> */}
          </figure>
          <h3 id="dynamic-styles">Professional profile</h3>
          <p>
            I'm bachelor's in <b>Systems Degree</b> and{" "}
            <b>Creative Developer</b>.<br></br>
            Currenty studying Multimedia Design.
          </p>
          <p>
            I’m a highly motivated person and I love my work.<br></br>
            Specially creating applications that people enjoys and understand.
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
