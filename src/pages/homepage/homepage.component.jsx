import Directory from "../../components/directory/directory.component"
import '../homepage/homepage.styles.scss'
import {useParams} from 'react-router-dom'
const HomePage = (props)=>{
    console.log("props1 ",useParams())
    return ( 
    
    <div className='homepage'>
   <Directory/>
    </div>
    )
}
export default HomePage