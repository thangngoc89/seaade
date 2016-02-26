import React from "react"

class HomepageSchedule extends React.Component {
  render() {
    return (
      <section id="schedule" className="section schedule">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Event Schedule</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="schedule-box">
                <div className="time">
                  <time dateTime="09:00">09:00 am</time> - <time dateTime="22:00">10:00 am</time>
                </div>
                <h3>Welcome and intro</h3>
                <p>Mustafizur Khan, SD Asia</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="schedule-box">
                <div className="time">
                  <time dateTime="10:00">10:00 am</time> - <time dateTime="22:00">10:00 am</time>
                </div>
                <h3>Tips and share</h3>
                <p>Mustafizur Khan, SD Asia</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="schedule-box">
                <div className="time">
                  <time dateTime="10:00">10:00 am</time> - <time dateTime="22:00">10:00 am</time>
                </div>
                <h3>View from the top</h3>
                <p>Mustafizur Khan, SD Asia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
  }
}

export default HomepageSchedule