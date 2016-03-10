import React, { Component } from "react"
import styles from "./Header.scss"
import smoothScroll from "smoothscroll"
import logoseaade from "./logo-seaade.png"
import logokhoa from "./logo-khoa.png"

class HomepageHeader extends Component {
  constructor () {
    super()
    this.handleLearnMoreClick = this.handleLearnMoreClick.bind(this)
  }

  handleLearnMoreClick (e) {
    e.preventDefault()
    const element = document.getElementById("about")
    smoothScroll(element)
  }

  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.photoCredit }>
          photo by Mai Tran
        </div>
        <div className={ styles.intro }>
          <p>
          <img className={styles.logo}
          src={logokhoa}
          />
          </p>
          <h1>The 27 <sup>th</sup> SEAADE annual meeting</h1>
          <h2>"Dental education in ASIA: One community, One vision"</h2>
          <p>
            September 8<sup>th</sup> - 9<sup>th</sup>, 2016 / Ho Chi Minh City, Viet Nam
          </p>
          <div className={ styles.hosted }>
            <p>hosted by Faculty of Odonto-Stomatology</p>
            <p>University of Medicine and Pharmacy, Ho Chi Minh City, Vietnam</p>
          </div>

          <p>
          <img className={styles.logo}
            src={logoseaade}
          />
          </p>
        </div>
      </header>
    )
  }
}

export default HomepageHeader
