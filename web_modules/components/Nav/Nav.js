/* eslint-disable react/no-multi-comp */
import React, { Component, PropTypes } from "react"
import cx from "classnames"
import { Link } from "phenomic/lib/Link"
import Navbar from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
import NavDropdown from "react-bootstrap/lib/NavDropdown"
// import NavItem from "react-bootstrap/lib/NavItem"

import styles from "./Nav.scss"

export default class NavComponent extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  handleCollaspeToggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  handleOnNavItemClick = () => {
    this.setState({
      expanded: false,
    })
  }

  render() {
    const navClass = cx(styles.wrapper, {
      [styles.docked]: this.props.docked,
    })

    const NavItem = ({ to, name }) => ((
      <li>
        <Link
          to={ to }
          activeClassName="active"
          onClick={ this.handleOnNavItemClick }
        >
          { name }
        </Link>
      </li>
    ))

    return (
      <Navbar
        fluid
        fixedTop
        className={ navClass }
        expanded={ this.state.expanded }
        onToggle={ this.handleCollaspeToggle }
      >
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className={ styles.logo }>SEAADE 2016 </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem to="/about-faculty/" name="About Faculty" />
            <NavItem to="/news/pre-meeting/" name="Pre-Meeting" />
            <NavItem to="/events/scientific-program/" name="Scientific Program" />
            <NavDropdown
              id="events"
              title="Events"
            >
              <NavItem to="/events/gc-prevention-table/" name="GC Prevention Table Clinic Competition" />
              <NavItem to="/registration/" name="Registration" />
              <NavItem to="/important-dates/" name="Important Dates" />
              <NavItem to="/speakers/" name="Keynote speakers" />
              <NavItem to="/welcome-messages/" name="Welcome messages" />
              <NavItem to="/abstract-submission/" name="Abstract Submission" />
              <NavItem to="/sponsors/" name="Sponsors" />
            </NavDropdown>
            <NavItem to="/photo-sharing/" name="Photo" />
            <NavDropdown
              id="info"
              title="General Info"
            >
              <NavItem to="/info/travel" name="Travel information" />
              <NavItem to="/info/useful" name="Useful information" />
            </NavDropdown>
            <NavItem to="/contact/" name="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
}
