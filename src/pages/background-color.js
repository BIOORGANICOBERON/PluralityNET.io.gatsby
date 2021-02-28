import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import FloatingImage from "../components/floating-image"
import PageTitle from "../components/page-title"
import Layout from "../components/layout"

const BackgroundColor = ({ data, location }) => (
  <Layout
    location={location}
    image={data.coverImage.localFile.childImageSharp.fluid}
    imageTitle={`“${data.coverImage.title}” by ${data.coverImage.credit}`}
    imageBackgroundColor="#11CE3E"
  >
    <PageTitle>Background Color</PageTitle>
    <FloatingImage
      imageMobile={data.floatingImageMobile.localFile.childImageSharp.fixed}
      imageDesktop={data.floatingImage.localFile.childImageSharp.fixed}
      title={`“${data.floatingImage.title}” by ${data.floatingImage.credit} (via namecheap.com)`}
      backgroundColor="#11CE3E"
    />
    <p>
      With the Background Color technique, you can specify a CSS background
      color to fill the space as your images download. For graphic images with a
      predominant color in the foreground or background, a matching color in the
      loading space can create a visually pleasing image load experience.
    </p>
    <p>
      To use the Background Color technique, provide a{` `}
      <code>backgroundColor</code> prop in your floating or fixed image
      component instance. You can use hex color values, RGB values, or any other
      valid CSS background color format.
    </p>

    <Img
      fluid={data.fullWidthImage.localFile.childImageSharp.fluid}
      backgroundColor="#11CE3E"
      title={`“${data.fullWidthImage.title}” by ${data.fullWidthImage.credit}`}
    />
  </Layout>
)

export default BackgroundColor

export const query = graphql`
  query {
    coverImage: PluralityNETImagesYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    floatingImageMobile: PluralityNETImagesYaml(title: { eq: "icon" }) {
      localFile {
        childImageSharp {
          fixed(width: 120) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    floatingImage: PluralityNETImagesYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    fullWidthImage: PluralityNETImagesYaml(title: { eq: "icon" }) {
      credit
      title
      localFile {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`
