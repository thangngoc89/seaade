import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import Header from "./Header"
import About from "./About"
import WelcomeMessages from "./WelcomeMessages"
import Facts from "./Facts"
import Sponsors from "./Sponsors"
import Map from "./Map"
import Speakers from "./Speaker"

export default class Page extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg,
    } = this.context.metadata

    const title = "Home - " + pkg.sitename

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:url", content: pkg.homepage },
      { property: "og:description", content: title },
      { name: "description", content: title },
    ]

    return (
      <div>
        <Helmet
          title={ title }
          meta={ meta }
        />
        <Header />
        <About />
        <WelcomeMessages />
        <Facts />
        <Speakers />
        <Sponsors />
        <Map />
      </div>
    )
  }
}
