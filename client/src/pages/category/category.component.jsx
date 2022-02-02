import './category.styles.scss'
import { useParams } from 'react-router-dom'
import {  selectCategory } from '../../redux/shop/shop.selectors'
import CollectionItem from '../../components/collection-item/collection-item.component'
import { useSelector } from 'react-redux'

const Category = ()=>{
     const params = useParams()
    // console.log("paramsCategory ",params )
    const collection = useSelector(selectCategory(params.categoryId))
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

// const mapStateToProps = state => ({
// collections: selectShopCollections(state)
// })

export default Category