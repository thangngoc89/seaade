import React from "react"
import styles from "./Header.scss"
import "smoothscroll"

class HomepageHeader extends React.Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.photoCredit }>
          photo by Mai Tran
        </div>
        <div className={ styles.intro }>
          <h1>The 27 <sup>th</sup> SEAADE annual meeting
          </h1>
          <h2>"Dental education in ASIA: One community, One vision"
          </h2>
          <p>
            September 8<sup>th</sup> - 9<sup>th</sup>, 2016 / Ho Chi Minh City, Viet Nam
          </p>
          <p className={ styles.hosted }>
            hosted by Faculty of Odonto-Stomatology<br/>
            University of Medicine and Pharmacy, Ho Chi Minh City, Vietnam
          </p>
          <a href="#about" className="btn btn-white">Learn more</a>
        </div>
      </header>
    )
  }
}

export default HomepageHeader
