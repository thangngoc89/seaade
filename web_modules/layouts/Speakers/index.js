import React, { Component } from "react"
import Page from "../Page"
import data from "./data"
import styles from "./Speakers.scss"

class SpeakersPage extends Component {
  render() {
    return (
      <Page
        head={ {
          title: "Speakers",
        } }
        __filename="speakers.md"
        __url="/speakers"
      >
      {
        data.map((item) => (
          <div
            key={ item.name }
            className="row"
          >
            <div className={ styles.row }>
              <div className="col-xs-4">
                <img
                  className={ styles.avatar }
                  src={ item.photo }
                />
              </div>
              <div className={ styles.infoCol }>
                <p className={ styles.name }>{ item.name }</p>
              </div>
            </div>
          </div>
        ))
      }
      </Page>
    )
  }
}

export default SpeakersPage
