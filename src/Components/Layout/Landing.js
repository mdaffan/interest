import React from 'react'
import SimpleSlider from '../Slider'
class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="col-md-12 col-sm-12 col-lg-12">
            <h1 className="display-4 text-center">
              Get Your Interest rates here
            </h1>
            <SimpleSlider />
          </div>
        </div>
      </div>
    )
  }
}
export default Landing
