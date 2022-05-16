import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const NavItem = ({ url , children}) => {

  return (
    <li className={classes.NavItem}>
      <NavLink to={url}>{children}</NavLink>
    </li>
  );
}

export default NavItem;