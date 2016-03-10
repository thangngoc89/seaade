import React, { Component, PropTypes } from "react"
import styles from "./Youtube.scss"
import { WindowResizeListener } from "react-window-resize-listener"

export default class Youtube extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }

    this.handleClick = this.handleClick.bind(this)
    this.setComponentHeight = this.setComponentHeight.bind(this)
  }

  componentDidMount() {
    this.setComponentHeight()
  }

  componentWillReceiveProps() {
    this.setComponentHeight()
  }

  setComponentHeight() {
    const width = this._mainDiv.clientWidth
    const height = (9 / 16) * width
    this._mainDiv.style.height = height + "px"
  }

  handleClick() {
    this.setState({
      loaded: true,
    })
  }

  get embedUrl() {
    return `https://www.youtube.com/embed/${ this.props.id }?autoplay=1&autohide=1`
  }

  get imgUrl() {
    return `//img.youtube.com/vi/${ this.props.id }/maxresdefault.jpg`
  }

  render() {
    return (
      <div
        className={ styles.main }
        ref={ (ref) => this._mainDiv = ref }
        onClick={ () => this.handleClick() }
        style={ {
          backgroundImage: `url("${ this.imgUrl }")`,
        } }
      >
        <WindowResizeListener
          onResize={ () => this.setComponentHeight() }
        />
        {
          this.state.loaded &&
          <iframe
            style={ {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            } }
            src={ this.embedUrl }
            frameBorder="0"
            allowFullScreen
          />
        }
        {
          !this.state.loaded &&
          <div className={ styles.button } />
        }
      </div>
    )
  }
}
