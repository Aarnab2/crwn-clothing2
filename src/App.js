import HomePage from './pages/homepage/homepage.component'
import './pages/homepage/homepage.styles.scss'
import {Route,Routes,Link, useParams} from 'react-router-dom'

import ShopPage from './pages/shop/shop.component'
const HatsPage = (props) =>{
  console.log("props ",useParams())
  return (
  <div>
  <h1>HATS</h1>
  <Link to='123'>Link to hat1</Link>
  </div>
)
}

const HatsDetail = () =>{
  let {hatId} = useParams()
  console.log("props ",hatId)
  return (
  <div><h1>HATS DETAILS</h1></div>
)
  }

function App() {
  return (
   <div>
     <Routes>
     <Route path='/' element={<HomePage age={2}/>}/>
     <Route  path='/hats' element={<HatsPage/>}/>
     <Route  path='/hats/:hatId' element={<HatsDetail/>}/>
     <Route  path='/shop' element={<ShopPage/>}/>
     </Routes>
    
  </div>
  )
}

export default App;
