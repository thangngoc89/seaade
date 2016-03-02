import React, { Component, PropTypes } from "react"
import cx from "classnames"
import { Link } from "statinamic/lib/Link"
import Navbar from "react-bootstrap/lib/Navbar"
import Nav from "react-bootstrap/lib/Nav"
import NavDropdown from "react-bootstrap/lib/NavDropdown"

import styles from "./Nav.scss"

export default class NavComponent extends Component {
  static propTypes = {
    docked: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props)

    this.state = {
      collaspe: true,
    }

    this.handleCollaspeToggle = this.handleCollaspeToggle.bind(this)
  }

  handleCollaspeToggle() {
    this.setState({
      collaspe: !this.state.collaspe,
    })
  }

  render() {
    const navClass = cx(styles.wrapper, {
      [styles.docked]: this.props.docked,
    })

    return (
      <Navbar fluid fixedTop className={ navClass }>
        <Navbar.Header>
          <Navbar.Brand>
            <Link
              to="/"
              className={styles.logo}
            >
              SEAADE 2016
            </Link>
          </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li>
              <Link to="/" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/important-dates/" activeClassName="active">Important Dates</Link>
            </li>
            <NavDropdown title="Events">
              <li><Link to="/events/scientific-program/" activeClassName="active">Scientific Program</Link></li>
              <li><Link to="/events/gc-prevention-table" activeClassName="active">GC Prevention Table Clinic Competition</Link></li>
            </NavDropdown>
            <li>
              <Link to="/abstract-submission/" activeClassName="active">Abstract Submission</Link>
            </li>
            <li>
              <Link to="/registration/" activeClassName="active">Registration</Link>
            </li>
            <li>
              <Link to="/general-info/" activeClassName="active">General Info</Link>
            </li>
            <li>
              <Link to="/sponsors/" activeClassName="active">Sponsors</Link>
            </li>
            <li>
              <Link to="/contact/" activeClassName="active">Contact</Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
  }
}
