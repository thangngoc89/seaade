import React, { Component } from "react"
import Page from "../Page"
import data from "./data"
import styles from "./Speakers.scss"

class SpeakersPage extends Component {
  render() {
    return (
      <Page
        head={ {
          title: "Keynote Speakers",
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
              <div className={ "col-xs-12 col-md-4 " + styles.imgCol }>
                <img
                  className={ styles.avatar }
                  src={ item.photo }
                />
              </div>
              <div className={ "col-xs-12 col-md-8 " + styles.infoCol }>
                <span className={ styles.name }>{ item.name }</span>
                { item.info.map((node, key) => (
                    <p key={ key }>{ node }</p>
                  ))
                }
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
