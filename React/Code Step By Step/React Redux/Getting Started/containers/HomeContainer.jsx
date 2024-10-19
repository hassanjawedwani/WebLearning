import { connect } from 'react-redux';
import Home from '../components/Home.jsx';
import actions from '../services/actions/actions'; // Import actions as an object
import cardItems from '../services/reducers/reducer.js'; // Assuming the reducer is correct

const mapStateToProps = (state) => ({
  cardData: state.cardItems // Ensure 'cardItems' is correct in the state tree
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: data => dispatch(actions.addToCart(data)), // Correct usage of actions
  removeToCartHandler: data => dispatch(actions.removeToCart()) // Correct action name and dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
