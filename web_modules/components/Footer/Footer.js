import React from "react"
import styles from "./Footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <p className={ styles.info }>
                Copyright © 2016, <a href="http://khoanguyen.me">Khoa Nguyen</a>
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
              <p className={ styles.fb }>
                Faculty of Odonto-Stomatology, UMP<br/>
                <a href="https://www.facebook.com/Seaade2016.VN/">Follow us on Facebook</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      )
  }
}

export default Footer
