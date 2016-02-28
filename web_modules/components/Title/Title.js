import React, { Component, PropTypes } from "react"
import styles from "./Title.scss"

class Facts extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <section className={ styles.section }>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 center-block">
              <h1 className={ styles.title }>{ this.props.title }</h1>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Facts
