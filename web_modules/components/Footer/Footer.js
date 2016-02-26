import React from "react"
import styles from "./Footer.scss"

class Footer extends React.Component {
  render() {
    return (
      <footer className={ styles.footer }>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className={ styles.info }>
                Copyright © 2016, <a href="http://khoanguyen.me">Khoa Nguyen</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      )
  }
}

export default Footer
