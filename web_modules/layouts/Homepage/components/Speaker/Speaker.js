import React from "react"
import styles from "./Speaker.scss"

class HomepageSpeaker extends React.Component {
  render() {
    return (
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={ styles.vid }>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Grj8Z-LH5xI"
                  frameborder="0"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HomepageSpeaker
