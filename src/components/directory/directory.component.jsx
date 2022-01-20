import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import '../directory/directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { connect } from 'react-redux'
const Directory = ({sections})=> (
      <div className='directory-menu'>
{
    sections.map(({title,id,imageUrl,size,linkUrl}) => <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>)
}
      </div>
)

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps,null)(Directory)