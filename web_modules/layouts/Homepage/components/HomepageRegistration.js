import React from "react"

class HomepageRegistration extends React.Component {
  render() {
    return (
      <section id="registration" className="section registration">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-title">Registration & Pricing</h3>
            </div>
          </div>
          <form action="#" id="registration-form">
            <div className="row">
              <div className="col-md-12" id="registration-msg" style={ {
                display: "none"
              } }>
                <div className="alert" />
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="First Name" id="fname" name="fname" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Last Name" id="lname" name="lname" required />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Phone" id="cell" name="cell" required />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Address" id="address" name="address" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Zip Code" id="zip" name="zip" required />
                </div>
                <div className="form-group">
                  <select className="form-control" name="city" id="city" required>
                    <option readOnly>City</option>
                    <option>City Name 1</option>
                    <option>City Name 2</option>
                    <option>City Name 3</option>
                    <option>City Name 4</option>
                  </select>
                </div>
                <div className="form-group">
                  <select className="form-control" name="program" id="program" required>
                    <option readOnly>Select Your Program</option>
                    <option>Program Name 1</option>
                    <option>Program Name 2</option>
                    <option>Program Name 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="text-center mt20">
              <button type="submit" className="btn btn-black" id="registration-submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </section>
      )
  }
}

export default HomepageRegistration