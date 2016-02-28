import React from "react"
import { Link } from "statinamic/lib/Link"
import styles from "./Header.scss"

class HomepageHeader extends React.Component {
  render() {
    return (
      <header className={ styles.header }>
        <div className={ styles.intro }>
          <h1>Dental education in ASEAN</h1>
          <h2>"one community, one vision"</h2>
          <p>
            September 8<sup>th</sup> - 9<sup>th</sup>, 2016 / Ho Chi Minh City, Viet Nam
          </p>
          <Link to="/learn-more" className="btn btn-white">Learn more</Link>
        </div>
      </header>
    )
  }
}

export default HomepageHeader
