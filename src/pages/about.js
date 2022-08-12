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
          <div className="bio">
            <h3 id="dynamic-styles">Hi, I'm Julian 👋</h3>
            <figure>
              <Img
                // fluid={data.benchAccounting.childImageSharp.fluid}
                fixed={data.benchAccounting.childImageSharp.fixed}
                className="kg-image-avatar"
              />
            </figure>
          </div>
          <p>
            I'm a <b>designer</b> and <b>web developer</b>.<br></br>I help
            brands deliver a message to their audiences in a clean, creative
            way.
          </p>
          <p>
            {" "}
            Getting involved with products and campaigns is really fun.<br></br>
            <b>Design pieces</b>:
          </p>
          <br></br>
          <ul>
            <li>Product Design</li>
            <li>Social Banners</li>
            <li>Icon sets</li>
            <li>Motion graphics</li>
            <li>3D Environments</li>
          </ul>
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
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
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
