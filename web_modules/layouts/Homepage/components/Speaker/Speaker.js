import React from "react"
import Avatar from "../../../../components/Avatar"
// import cherdsak from "./cherdsak.jpg"
// import chooi from "./chooi gait.jpg"
// import dolan from "./dolan terri.jpg"
// import ferillo from "./ferillo.jpg"
// import krassanai from "./krassanai biosketch.jpg"
// import frederick from "./professor frederick.jpg"

const speakerData = [
  {
    name: "A. Professor Cherdsak Iramameerat",
    // photo: cherdsak,
  },
  {
    name: "Professor Toh Chooi Gait",
    // photo: chooi,
  },
  {
    name: "Professor Tereesa A. Dolanand",
    // photo: dolan,
  },
  {
    name: "Professor Patrick J. Ferrillo",
    // photo: ferillo,
  },
  {
    name: "Professor Krassanai Wangrangsimakul",
    // photo: krassanai,
  },
  {
    name: "Professor Frederick Charles Smales",
    // photo: frederick,
  },
]

class HomepageSpeaker extends React.Component {
  render() {
    return (
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Speakers</h3>
            </div>
          </div>
          <div className="row">
          {
            speakerData.map((data) => (
              <div
                key={ data.name }
                className="col-md-4"
              >
                <Avatar
                  name={ data.name }
                  photo={ data.photo }
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

export default HomepageSpeaker
