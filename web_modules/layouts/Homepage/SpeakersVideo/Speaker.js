import React from "react"
import styles from "./Speaker.scss"
import { Link } from "statinamic/lib/Link"
import Youtube from "../../../components/Youtube"

class HomepageSpeaker extends React.Component {
  render() {
    return (
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="section-title">Keynote speakers</h3>
              <div className={ styles.youtube }>
                <Youtube id="Grj8Z-LH5xI" />
              </div>
              <div className={ styles.detail }>
                <Link className="btn btn-lg btn-black" to="/speakers/">
                  View details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HomepageSpeaker
