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

const messages = [
  {
    name: "President of SEAADE",
  },
  {
    name: "Presient of University of Medicine and pharmacy, Ho Chi Minh City"
  },
  {
    name: "Chairperson of the local organizing committee",
  },
]

class HomepageWelcomeMessages extends React.Component {
  render() {
    return (
      <section id="speakers" className="section welcome-messages">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Welcome Messages</h3>
            </div>
          </div>
          <div className="row">
          {
            messages.map((data) => (
              <div
                key={data.name}
                className="col-md-4"
              >
                <Avatar name={data.name} />
              </div>
            ))
          }
          </div>
        </div>
      </section>
      )
  }
}

export default HomepageWelcomeMessages
