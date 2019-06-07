import React from 'react'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Landing from './Components/Layout/Landing'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <Landing />
        <Footer />
      </div>
    )
  }
}
export default App
