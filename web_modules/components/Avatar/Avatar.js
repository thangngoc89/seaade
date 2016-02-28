import React from "react"

const Avatar = ({ name }) => {
  return (
    <div className="speaker">
      <figure>
        <img
          className="img-responsive center-block"
          src="https://placehold.it/300x300"
        />
      </figure>
      <h4>{ name }</h4>
    </div>
  )
}

export default Avatar
