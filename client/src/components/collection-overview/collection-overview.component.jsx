import '../collection-overview/collection-overview.styles.scss'
import { connect } from 'react-redux'
import { selectCollectionsForOverview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'
//import { useParams } from 'react-router-dom'
const CollectionOverview = ({collections})=>{
    // const params = useParams()
    // console.log("paramsOverview ",params )
    return(
    <div className='collections-overview'>
   {
        collections.map(({id,...otherProps})=> <CollectionPreview key={id} {...otherProps}/>)
    }
   </div>
)}

const mapStateToProps = state => ({
collections: selectCollectionsForOverview(state)
})

export default connect(mapStateToProps)(CollectionOverview)
