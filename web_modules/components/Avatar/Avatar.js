import React, { PropTypes }  from "react"
import { Link } from "statinamic/lib/Link"
import styles from "./Avatar.scss"

const Avatar = ({ name, link }) => {
  return (
    <div className="speaker">
      <Link to={ link }>
        <figure>
          <img
            className="img-responsive center-block"
            src="https://placehold.it/300x300"
          />
        </figure>
        <h4 className={ styles.name }>{ name }</h4>
      </Link>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
}

Avatar.defaultProps = {
  link: "/",
}

export default Avatar
