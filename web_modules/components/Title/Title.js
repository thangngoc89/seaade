import React, { Component, PropTypes } from "react"
import styles from "./Title.scss"
import Notification from "../Notification"

class Facts extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  render() {
    return (
      <section>
        <div className={ styles.section }>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 center-block">
                <h1 className={ styles.title }>{ this.props.title }</h1>
                {
                  this.props.subtitle &&
                  <h2 className={ styles.subtitle }>{ this.props.subtitle }</h2>
                }
              </div>
            </div>
          </div>
        </div>
        <Notification />
      </section>
      )
  }
}

export default Facts
