import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import styles from "./PageError.scss"
import Title from "../../components/Title"

export default class PageError extends Component {
  static propTypes = {
    error: PropTypes.number,
    errorText: PropTypes.string,
  };

  static defaultProps = {
    error: 404,
    errorText: "Page Not Found",
  };

  render() {
    const {
      error,
      errorText,
    } = this.props

    const title =  `${error} - ${errorText}`

    return (
      <div>
        <Helmet title={ title } />
        <Title title={ title } />
        <div className={ styles.container }>
          <div className={ styles.oops }>{ '😱 Oooops!' }</div>
          <div className={ styles.text }>
            <p className={ styles.title }>
              <strong>{ error }</strong>
              { ' ' }
              { errorText }
            </p>
            {
              error === 404 &&
                <div>
                  { 'It seems you find a broken link. ' }
                  { 'Sorry about that. ' }
                  <br />
                  { 'Do not hesitate to report me this page 😁.' }
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
