import React from 'react'
import HomePage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'
import { Route, Routes, Link, useParams, Navigate } from 'react-router-dom'
import Header from './components/header/header.component'

import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import CheckoutPage from './pages/checkout/checkout.component'
import { checkUserSession } from './redux/user/user.actions'
// import { selectCollectionsForOverview } from './redux/shop/shop.selectors'
// import { addCollectionsAndDocuments } from './firebase/firebase.utils'

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

  // constructor() {
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  // unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth) // for saving in firestore

    //     console.log("USER ", userRef)
    //     userRef.onSnapshot(snapshot => { //for saving in state
    //       console.log('snapshot ', snapshot.data())
    //       setCurrentUser({ id: snapshot.id, ...snapshot.data() })

    //     })
    //   }
    //   else
    //     setCurrentUser(userAuth)

    // })

    //addCollectionsAndDocuments("collections", this.props.collectionsArray.map(({ title, items }) => ({ title, items })))

  }

  componentWillUnmount() {
    //this.unsubscribeFromAuth()
  }

  render() {

    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage age={2} />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route path='/signin' element={this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage />)} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>

      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  //collectionsArray: selectCollectionsForOverview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);