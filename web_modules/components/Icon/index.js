import React, { Component, PropTypes } from "react"

export default class Icon extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.string,
  };

  static defaultProps = {
    size: "1rem",
  };

  render() {
    return (
      <i
        className={ `icon-${this.props.icon}` } 
        style={ { fontSize: this.props.size } }
      />
    )
  }
}
