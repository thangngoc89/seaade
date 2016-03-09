import React from "react"
import styles from "./Facts.scss"
import Icon from "../../../components/Icon"

class Facts extends React.Component {
  render() {
    return (
      <section className={ styles.facts }>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Icon icon="calendar" size="2rem" />
              <h3>2016<br />September 8 - 9</h3>
            </div>
            <div className="col-sm-6">
              <Icon icon="location" size="2rem" />
              <h3>Ho Chi Minh City<br />Viet Nam</h3>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default Facts
