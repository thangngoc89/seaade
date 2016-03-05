import React, { PropTypes }  from "react"
import { Link } from "statinamic/lib/Link"
import styles from "./Avatar.scss"
import cx from "classnames"

const Avatar = ({ name, link, photo }) => {
  const imgSrc = photo ? photo : "https://placehold.it/300x300"
  const imgClass = cx("img-responsive center-block", styles.img)

  return (
    <div className="speaker">
      <Link to={ link }>
        <figure>
          <img
            className={ imgClass }
            src={ imgSrc }
          />
        </figure>
        {
          name &&
          <h4 className={ styles.name }>{ name }</h4>
        }
      </Link>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
}

Avatar.defaultProps = {
  link: "/",
}

export default Avatar
