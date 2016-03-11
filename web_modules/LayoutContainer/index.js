import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import "../styles/global.styles"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

import fbCover from "./cover.jpg"

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
            { property: "og:description", content: "Hosted by Faculty of Odonto-Stomatology, University of Medicine and Pharmacy, Ho Chi Minh City, Vietnam" },
          ] }
        />
        <Nav />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
