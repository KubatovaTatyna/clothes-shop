import Logo from '../ui/Logo/Logo';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url='/'>Home</NavItem>
      <NavItem url='/women'>Women</NavItem>
      <Logo />
      <NavItem url='/men'>Men</NavItem>
      <NavItem url='/kids'>Kids</NavItem>
    </ul>
  );
}

export default Nav;