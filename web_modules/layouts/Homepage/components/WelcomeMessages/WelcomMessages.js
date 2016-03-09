import React from "react"
import Avatar from "../../../../components/Avatar"
import tuan from "./img/tuan.jpg"
import lan from "./img/lan.jpg"
import mohamed from "./img/mohamed.jpg"

const messages = [
  {
    name: "President of SEAADE",
    photo: mohamed,
  },
  {
    name: "From Tran Diep Tuan The President of University of Medicine and pharmacy, Ho Chi Minh City",

    photo: tuan,
  },
  {
    name: "Chairperson of the local organizing committee",
    photo: lan,
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
                key={ data.name }
                className="col-md-4"
              >
                <Avatar
                  name={ data.name }
                  photo={ data.photo }
                  link={ "/welcome-messages/" }
                />
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
