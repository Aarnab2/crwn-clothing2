import CollectionItem from "../collection-item/collection-item.component"
import '../collection-preview/collection-preview.styles.scss'
import { useNavigate } from "react-router-dom"
const CollectionPreview = ({title,routeName,items})=>{
    const navigate = useNavigate()
    return(
    <div className='collection-preview'>
     <h1 onClick={()=> navigate(`/shop/${routeName}`)}>{title.toUpperCase()}</h1>   
    <div className='preview'>
    {
        items.filter((item,index)=> index<4).map((item)=><CollectionItem key={item.id} item={item}/>)
    }
    </div>
    </div>
)}

export default CollectionPreview