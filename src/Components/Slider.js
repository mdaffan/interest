import React from 'react'
import PropTypes from 'prop-types'

class SimpleSlider extends React.Component {
  constructor() {
    super()
    this.state = {
      sliderValue: 500,
      months: 6,
      rate: '',
      payment: ''
    }
  }
  async componentDidUpdate() {
    const data = await fetch(
      `https://ftl-frontend-test.herokuapp.com/interest?amount=${
        this.state.sliderValue
      }&numMonths=${this.state.months}`
    )
    const response = await data.json()
    this.setState({
      rate: response.interestRate,
      payment: response.monthlyPayment.amount
    })
  }

  handleChange = (event, value) => {
    this.setState({ sliderValue: value })
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 col-md-12">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span className="input-group-text" style={{ marginTop: 40 }}>
                  Loan Amount
                </span>
                <span class="input-group-text" style={{ marginTop: 40 }}>
                  ${this.state.sliderValue}
                </span>
              </div>
              <input
                type="range"
                name="sliderValue"
                style={{ marginTop: 40, paddingBottom: 17, paddingTop: 17 }}
                className="custom-range form-control input-group-prepend"
                id="customRange1"
                onChange={this.onChange}
                value={this.state.sliderValue}
                step={1}
                min={500}
                max={5000}
                aria-labelledby="label"
              />
            </div>
          </div>

          <div className="col-lg-6 col-12 col-md-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ marginTop: 40 }}>
                  Months
                </span>
              </div>

              <input
                type="number"
                name="months"
                className="form-control"
                min={6}
                style={{ marginTop: 40 }}
                max={24}
                value={this.state.months}
                step={1}
                onChange={this.onChange}
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-12 col-md-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ marginTop: 40 }}>
                  Interest Rate
                </span>
              </div>
              <input
                className="form-control"
                style={{ marginTop: 40 }}
                value={this.state.rate}
                readOnly
              />
            </div>
          </div>
          <div className="col-lg-6 col-12 col-md-12">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" style={{ marginTop: 40 }}>
                  Monthly Amount
                </span>
              </div>
              <input
                className="form-control"
                style={{ marginTop: 40 }}
                value={this.state.payment}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
}

export default SimpleSlider
