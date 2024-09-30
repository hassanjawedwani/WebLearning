import { connect } from 'react-redux';
import Header from '../components/Header.jsx';
import cardItems from '../services/reducers/reducer.js'; // Only import what you need

const mapStateToProps = (state) => ({
  cardData: state.cardItems // Ensure 'cardItems' matches the state name in the reducer
});

export default connect(mapStateToProps)(Header); // No need for mapDispatchToProps if it's not used
