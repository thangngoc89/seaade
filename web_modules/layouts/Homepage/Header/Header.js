import React, { Component } from "react"
import styles from "./Header.scss"
import logoSeaade from "./logo-seaade.png"

class HomepageHeader extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.photoCredit }>
          <a
            href="https://www.flickr.com/photos/140911509@N08/"
            target="_blank"
          >
            photo by Mai Tran
          </a>
        </div>
        <div className={ styles.intro }>

          <h1>SEAADE 2016</h1>

          <h2>"Dental education in ASIA: One community, One vision"</h2>

          <p>
            September 8<sup>th</sup> - 9<sup>th</sup>, 2016 / Ho Chi Minh City, Viet Nam
          </p>

          <div className={ styles.hosted }>
            <p>Hosted by The Faculty of Odonto-Stomatology</p>
            <p>University of Medicine and Pharmacy, Ho Chi Minh City, Vietnam</p>
          </div>

          <img
            className={ styles.logo }
            src={ logoSeaade }
          />
        </div>
      </header>
    )
  }
}

export default HomepageHeader
