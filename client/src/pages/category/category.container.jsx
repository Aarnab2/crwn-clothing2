import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

import Category from '../category/category.component'
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
isLoading: state => !selectIsCollectionLoaded(state)
})

const CategoryContainer = compose(
connect(mapStateToProps),
WithSpinner  
)(Category)

//const CategoryContainer = connect(mapStateToProps)(WithSpinner(Category))

export default CategoryContainer