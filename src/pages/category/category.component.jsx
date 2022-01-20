import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
const Category = ({collections})=>{
    const params = useParams()
    console.log("paramsCategory ",params )
    const collection = collections[params.categoryId]
    const {items,title} = collection
    
    return(
    <div className='category-page'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
    {
    items.map(item => <CollectionItem key={item.id} item={item}/>)
    }
    </div>
    </div>
)}

const mapStateToProps = state => ({
collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(Category)