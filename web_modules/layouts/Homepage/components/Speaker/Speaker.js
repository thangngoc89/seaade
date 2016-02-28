import React from "react"
import Avatar from "../../../../components/Avatar"

const speakerData = [ 1, 2, 3, 4, 5, 6 ]

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
            speakerData.map((key) => (
              <div
                key={ key }
                className="col-md-4"
              >
                <Avatar
                  name="Professor John Doe"
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
