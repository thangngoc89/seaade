import React, { PropTypes }  from "react"
import { Link } from "statinamic/lib/Link"
import styles from "./Avatar.scss"
import cx from "classnames"

const Avatar = ({ title, name, link, subTitle, photo }) => {
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
          title &&
          <h4 className={ styles.name }>{ title } </h4>
        }
        {
          name &&
          <h4 className={ styles.name }>{ name }</h4>
        }
        {
          subTitle &&
          <p className={ styles.subTitle }>{ subTitle }</p>
        }
      </Link>
    </div>
  )
}

Avatar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
}

export default Avatar
