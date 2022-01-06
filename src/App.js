import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import Header from './components/header/header.component'

import ShopPage from './pages/shop/shop.component'
import SignInPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

const HatsPage = (props) => {
  console.log("props ", useParams())
  return (
    <div>
      <h1>HATS</h1>
      <Link to='123'>Link to hat1</Link>
    </div>
  )
}

const HatsDetail = () => {
  let { hatId } = useParams()
  console.log("props ", hatId)
  return (
    <div><h1>HATS DETAILS</h1></div>
  )
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log("USER ", user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage age={2} />} />
          <Route path='/hats' element={<HatsPage />} />
          <Route path='/hats/:hatId' element={<HatsDetail />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInPage />} />
        </Routes>

      </div>
    )
  }
}

export default App;
