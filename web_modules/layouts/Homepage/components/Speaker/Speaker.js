import React from "react"
import styles from "./Speaker.scss"
import { Link } from "statinamic/lib/Link"

class HomepageSpeaker extends React.Component {
  render() {
    return (
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="section-title">Keynote speakers</h3>
              <div className={ styles.vid }>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Grj8Z-LH5xI"
                  frameBorder="0"
                  allowFullScreen
                />
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
