import React, { Component } from "react"
import styles from "./index.scss"
import notifications from "../../../content/notification.json"
import Link from "phenomic/lib/Link"

export default class Notification extends Component {
  render() {
    return (
      <div>
        {
          notifications.map((noti) => (
            <div key={ noti.link } className={ styles.headWrap }>
              <div className="container">
                <Link to={ noti.link }>
                  { noti.content }
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
