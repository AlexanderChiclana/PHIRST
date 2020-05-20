import React from 'react'
import { HashRouter, Route, withRouter } from 'react-router-dom'
import './App.scss'
import Homepage from './Homepage.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import TeamPage from './TeamPage.js'
import ServicePage from './ServicePage.js'
import TrainingPage from './TrainingPage.js'
import ResearchPage from './ResearchPage.js'
import ScrollToTop from 'react-router-scroll-top'

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="App">
          <Route path="/" render={() => <Navbar />} />
          <Route exact path="/" render={() => <Homepage />} />
          <Route exact path="/team" render={() => <TeamPage />} />
          <Route exact path="/service" render={() => <ServicePage />} />
          <Route exact path="/training" render={() => <TrainingPage />} />
          <Route exact path="/research" render={() => <ResearchPage />} />
          <Route path="/" render={() => <Footer />} />
        </div>
      </ScrollToTop>
    </HashRouter>
  )
}

export default App
