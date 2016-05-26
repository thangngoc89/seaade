import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
import notifications from "../../../content/notification.json"
import Link from "phenomic/lib/Link"

export default class Notification extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  render() {
    return (
      <div>
        {
          notifications.map((noti) => (
            <div className={ styles.headWrap }>
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
