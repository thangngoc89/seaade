import React, { Component } from "react"
import { PropTypes } from "react"
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

  static propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    __filename: PropTypes.string.isRequired,
    __url: PropTypes.string.isRequired,
    head: PropTypes.object.isRequired,
    body: PropTypes.string.isRequired,
  };

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {
    const {
      __url,
      head,
    } = this.props

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: __url },
      { property: "og:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          title={ metaTitle }
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
