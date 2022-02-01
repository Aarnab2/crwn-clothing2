import {useEffect} from 'react'
//import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import '../shop/shop.styles.scss'
import { Route ,Routes} from 'react-router-dom'
//import Category from '../category/category.component'
// import { firestore } from '../../firebase/firebase.utils'
// import { convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
// import { updateCollections } from '../../redux/shop/shop.actions'
import { connect } from 'react-redux'
//import WithSpinner from '../../components/with-spinner/with-spinner.component'
//import { selectIsCollectionFetching , selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../components/collection-overview/collections-overview.container'
import CategoryContainer from '../category/category.container'
// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
//const CategoryWithSpinner = WithSpinner(Category)

const ShopPage = ({fetchCollectionsStart})=>{
//    state = {
//        loading: true
//    }
  // unsubscribeFromSnapshot = null

  useEffect(()=>{
    fetchCollectionsStart()
  },[fetchCollectionsStart])

//    componentDidMount(){
       //alert("shop")
    //   const collectionRef = firestore.collection('collections')
    //    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //        //console.log('fetching collectionSnapshot from firestore ',snapshot)
    //        const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //        console.log("collectionsMap ",collectionsMap)
    //        this.props.updateCollections(collectionsMap)
    //        this.setState({loading:false})
    //    })
    //     collectionRef.get().then(snapshot => {
    //     //console.log('fetching collectionSnapshot from firestore ',snapshot)
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //     console.log("collectionsMap ",collectionsMap)
    //     this.props.updateCollections(collectionsMap)
    //     this.setState({loading:false})
    // })

//     this.props.fetchCollectionsStart()
//    }

    return(
         <div className='shop-page'>
         <Routes>
         <Route path='/'  element={<CollectionOverviewContainer  />}/> 
         <Route path='/:categoryId' element={<CategoryContainer  />}/>
         </Routes>
         </div>
     )
}//element={this.props.currentUser ? (<Navigate replace to='/' />) : (<SignInAndSignUpPage />)}
//isLoading={this.props.fetching}

//const mapStateToProps = state => ({
//fetching: selectIsCollectionFetching(state),
// isLoaded: selectIsCollectionLoaded(state)
// })

const mapDispatchToProps = dispatch =>({
fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage)