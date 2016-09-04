import React from "react"
import Avatar from "../../../components/Avatar"
import tuan from "./img/tuan.jpg"
import lan from "./img/lan.jpg"
import mohamed from "./img/mohamed.jpg"
import tien from "./img/tien.jpg"

const messages = [
  {
    title: "Prof.",
    name: "Mohamed Ibrahim Abu Hassan",
    subTitle: "President of SEAADE",
    photo: mohamed,
  },
  {
    title: "Assoc. Prof.",
    name: "Tran Diep Tuan",
    subTitle: "President of University of Medicine and Pharmacy, Ho Chi Minh City",
    photo: tuan,
  },
  {
    title: "Assoc. Prof.",
    name: "Ngo Thi Quynh Lan",
    subTitle: "Chairperson of the local organizing committee",
    photo: lan,
  },
  {
    title: "Assoc. Prof.",
    name: "Nguyen Thi Kim Tien",
    subTitle: "Minister of Health, Vietnam",
    photo: tien,
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
                className="col-md-3"
              >
                <Avatar
                  title={ data.title }
                  name={ data.name }
                  subTitle={ data.subTitle }
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
