import React, { Component } from "react"
import Link from "phenomic/lib/Link"
import Modal from "react-bootstrap/lib/Modal"
import Button from "react-bootstrap/lib/Button"
import cookie from "react-cookie"
import "./Modal.scss"

export default class ModalComponent extends Component {
  constructor(props) {
    super(props)

    const state = cookie.load("modal")
    this.state = {
      show: (typeof state === "undefined") ? true : state,
    }
  }

  onHide = () => {
    this.setState({
      show: false,
    })
    cookie.save("modal", false, { path: "/" })
  }

  render() {
    return (
      <Modal
        show={ this.state.show }
        bsSize="large"
        onHide={ this.onHide }
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">
            Important Announcement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The SEAADE 2016 abstracts submission deadline extended until May 30<sup>th</sup>, 2016</p>
          <p>
            <Link
              to="/abstract-submission/"
              onClick={ this.onHide }
            >
              Click here to submit your abstracts online
            </Link>
          </p>
          <a 
              href="https://www.facebook.com/Seaade2016.VN/photos/a.794226357388171.1073741828.787468271397313/835724926571647"
              target="_blank"
          >
              *The invitation letter from President SEAADE*
          </a>
        </Modal.Body>
        <Modal.Footer>

          <Button bsStyle="primary" onClick={ this.onHide }>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
