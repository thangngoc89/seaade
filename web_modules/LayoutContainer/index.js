import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import "../styles/global.styles"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import Modal from "./Modal"
import fbCover from "./cover.jpg"

const scripts = [
  ...process.env.NODE_ENV === "production" && [
    { src: "https://cdn.polyfill.io/v2/polyfill.min.js" },
  ],
]
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    return (
      <div>
        <Helmet
          meta={ [
            { property: "og:site_name", content: pkg.name },
            { property: "og:image", content: "http://seaade2016.vn" + fbCover },
            {
              property: "og:description",
              content: "Hosted by Faculty of Odonto-Stomatology, University of Medicine and Pharmacy, Ho Chi Minh City, Vietnam",
            },
          ] }
          script={ scripts }
        />
        <Nav />
        <Modal />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
