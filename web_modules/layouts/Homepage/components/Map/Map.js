import React from "react"
import styles from "./Map.scss"

class Map extends React.Component {
  render() {
    return (
      <section className={ styles.location }>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3 className="section-title">Event Location</h3>
              <p><strong>The conference will be held at Winsor Plaza Hotel</strong></p>
              <p>18 An Duong Vuong Street, Ward 5, Ho Chi Minh City, VietNam</p>
              <p>Tel: (+84) 8 3833 6688</p>
              <p>Website: <a href="http://windsorplazahotel.com/" target="_blank">http://windsorplazahotel.com/</a></p>
            </div>
            <div className="col-sm-8">
              {
                process.env.NODE_ENV === "production" &&
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6960314527673!2d106.67121901439427!3d10.75789356247819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efb6764e409%3A0xcea0e7a23d10598!2sWindsor+Plaza+Hotel!5e0!3m2!1sen!2s!4v1456676418231"
                  className={ styles.iframe }
                  allowFullScreen
                />
              }
              {
                process.env.NODE_ENV !== "production" &&
                <img
                  src="http://placehold.it/1000x600"
                  className={ styles.iframe }
                />
              }
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Map
