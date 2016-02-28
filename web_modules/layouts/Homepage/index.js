import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"

import Header from "./components/Header"
import About from "./components/About"
import WelcomeMessages from "./components/WelcomeMessages"
import Facts from "./components/Facts"
import Speaker from "./components/Speaker"
import Schedule from "./components/HomepageSchedule"
import Sponsors from "./components/Sponsors"
import Map from "./components/Map"

export default class Page extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      pkg
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
        <Speaker />
        <Schedule />
        <Sponsors />
        <Map />
      </div>
    )
  }
}
