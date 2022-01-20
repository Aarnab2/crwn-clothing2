import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import '../shop/shop.styles.scss'
import { Route ,Routes,useParams} from 'react-router-dom'
import Category from '../category/category.component'

const  ShopPage = ()=>{
    const params = useParams()
    console.log("paramsShop ",params )
    return(
         <div className='shop-page'>
         <Routes>
         <Route path='/'  element={<CollectionOverview/>}/>
         <Route path='/:categoryId' element={<Category/>}/>
         </Routes>
         
         
         </div>
     )
}

export default ShopPage