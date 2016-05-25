import React, { Component, PropTypes } from "react"
import styles from "./index.scss"
import notifications from "../../notification.json"

export default class Notification extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
  };

  render() {
    return (
      <div className={ styles.headWrap }>
        <div className="container">
          {
            notifications.map((noti) => (
              <p dangerouslySetInnerHTML={ { __html: noti.content } } />
            ))
          }
        </div>
      </div>
    )
  }
}
