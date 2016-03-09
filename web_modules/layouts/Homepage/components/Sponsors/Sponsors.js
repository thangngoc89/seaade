import React, { Component } from "react"
import cx from "classnames"

import logoDent from "./logo-dentsply.png"
import logoPs from "./logo-ps.png"
import logoDMC from "./logo-DMC.png"

import styles from "./Sponsors.scss"

class Sponsors extends Component {
  render() {
    const imgDiv = cx("col-sm-12", styles.imgDiv)
    return (
      <section className="section partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Sponsors</h3>
            </div>
          </div>
          <div className="row">
            <div className={ imgDiv }>
              <img
                className={ styles.img }
                src={ logoPs }
              />
              <img
                className={ styles.img }
                src={ logoDent }
              />
              <img
                className={ styles.img }
                src={ logoDMC }
              />
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Sponsors
