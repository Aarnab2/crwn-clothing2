import react from 'react'
import  SHOP_DATA  from './shop-data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends react.Component {
constructor(){
    super()
    this.state = {
        collections: SHOP_DATA
    }
}
    render(){
     return (
         <div className='shop-page'>
         {
            this.state.collections.map(({id,...otherProps})=> <CollectionPreview key={id} {...otherProps}/>)
         }
         </div>
     )
    }
}

export default ShopPage