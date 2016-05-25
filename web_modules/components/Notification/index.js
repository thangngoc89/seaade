import React, { Component, PropTypes } from "react"
import styles from "./index.scss"

export default class Notification extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  render() {
    return (
      <div className={ styles.headWrap }>
        <div className="container">
          <p>The SEAADE 2016 abstracts submission deadline extended until May 30<sup>th</sup>, 2016</p>
        </div>
      </div>
    )
  }
}
