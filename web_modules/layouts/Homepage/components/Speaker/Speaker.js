import React from "react"

const SpeakerAvatar = () => {
  return (
    <div className="speaker">
      <figure>
        <img
          className="img-responsive center-block"
          src="https://placehold.it/300x300"
        />
      </figure>
      <h4>Professor John Doe</h4>
      <p>from University ...</p>
    </div>
  )
}

const speakerData = [1, 2, 3, 4, 5, 6]

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
                key={key}
                className="col-md-4"
              >
                <SpeakerAvatar />
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
