import React from "react"
import logoDent from "./logo-dentsply.png"
import logoPs from "./logo-ps.png"
import styles from "./Sponsors.scss"
import logoDMC from "./logo-DMC.png"

class Sponsors extends React.Component {
  render() {
    return (
      <section className="section partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Sponsors</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5">
              <img
                className={ styles.img }
                src={ logoPs }
              />
            </div>
            <div className="col-sm-7">
              <img
                className={ styles.img }
                src={ logoDent }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
            <img className={styles.img}
            src={logoDMC}
            />
            </div>

          </div>
        </div>
      </section>
      )
  }
}

export default Sponsors
