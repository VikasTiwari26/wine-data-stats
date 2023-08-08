import Home from "../components/Home";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from '../services/actions/action';

const mapStateToProps = (state: any) => ({
    cartData: state
})
const mapDispatchToProps = (dispatch: any) => ({
    addToCartHandler: (data: any) => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)