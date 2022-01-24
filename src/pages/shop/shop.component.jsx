import React from 'react'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import '../shop/shop.styles.scss'
import { Route ,Routes} from 'react-router-dom'
import Category from '../category/category.component'
import { firestore } from '../../firebase/firebase.utils'
import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CategoryWithSpinner = WithSpinner(Category)

class ShopPage extends React.Component{
   state = {
       loading: true
   }
   unsubscribeFromSnapshot = null
   componentDidMount(){
       const collectionRef = firestore.collection('collections')
    //    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //        //console.log('fetching collectionSnapshot from firestore ',snapshot)
    //        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //        console.log("collectionsMap ",collectionsMap)
    //        this.props.updateCollections(collectionsMap)
    //        this.setState({loading:false})
    //    })
        collectionRef.get().then(snapshot => {
        //console.log('fetching collectionSnapshot from firestore ',snapshot)
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        console.log("collectionsMap ",collectionsMap)
        this.props.updateCollections(collectionsMap)
        this.setState({loading:false})
    })
   }

    render(){
        const {loading} = this.state
    return(
         <div className='shop-page'>
         <Routes>
         <Route path='/'  element={<CollectionOverviewWithSpinner isLoading={loading} />}/>
         <Route path='/:categoryId' element={<CategoryWithSpinner isLoading={loading} />}/>
         </Routes>
         </div>
     )
    }
}//element={this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage />)}

const mapDispatchToProps = dispatch =>({
updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)