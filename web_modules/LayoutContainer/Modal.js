import React, { Component } from "react"
import Link from "phenomic/lib/Link"
import Modal from "react-bootstrap/lib/Modal"
import Button from "react-bootstrap/lib/Button"
import cookie from "react-cookie"

export default class ModalComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      show: cookie.load("modal") || true,
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
          <p>The SEAADE 2016 abstracts submission deadline extended until May 30th, 2016</p>
          <p>
            <Link
              to="/abstract-submission/"
              onClick={ this.onHide }
            >
              Click here to submit your abstracts online
            </Link>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ this.onHide }>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
