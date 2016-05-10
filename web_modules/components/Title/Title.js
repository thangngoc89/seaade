import React, { Component, PropTypes } from "react"
import styles from "./Title.scss"

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
        <div className={ styles.headWrap }>
          <div className="container">
            <span>The SEAADE 2016 abstracts submission deadline extended until May 30<sup>th</sup>, 2016</span>
          </div>
        </div>
      </section>
      )
  }
}

export default Facts
