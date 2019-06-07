import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    width: '100%'
  },
  slider: {
    padding: '22px 0px'
  },
  text: {
    textAlign: 'center',
    fontSize: '25px'
  }
}

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
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleSlider)
