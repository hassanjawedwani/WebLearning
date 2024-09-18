import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li><NavLink to="/" className={styles.navbarLink} style={({isActive}) => { return {color: isActive && "red"}}} >Home</NavLink></li>
      <li><NavLink to="/about" className={styles.navbarLink} style={({isActive}) => { return {color: isActive && "red"}}} >About</NavLink></li>
      <li><NavLink to="/jobs" className={styles.navbarLink} style={({isActive}) => { return {color: isActive && "red"}}} >Jobs</NavLink></li>
    </ul>
  )
}

export default Navbar;