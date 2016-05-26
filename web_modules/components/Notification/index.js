import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
import notifications from "../../../content/notification.json"

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
              <div
                className="container"
                dangerouslySetInnerHTML={ { __html: noti.content } }
              />
            </div>
          ))
        }
      </div>
    )
  }
}
