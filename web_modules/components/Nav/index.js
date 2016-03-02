import React, { Component } from "react"
import Nav from "./Nav"

export default class NavDockable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: false,
    }

    this.dockNav = this.dockNav.bind(this)
  }

  componentDidMount() {
    this.attachNavScroll()
  }

  componentDidUpdate() {
    this.attachNavScroll()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.dockNav)
  }
  attachNavScroll() {
    window.addEventListener("scroll", this.dockNav)
  }

  dockNav() {
    const docked = document.body.scrollTop > 10

    if (this.state.docked !== docked) {
      this.setState({
        docked,
      })
    }
  }

  render () {
    return (
      <Nav docked={this.state.docked} />
    )
  }
}
