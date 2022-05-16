import Logo from '../ui/Logo/Logo';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <NavItem url='/home' active>Home</NavItem>
        <NavItem url='/categories'>Categories</NavItem>
        <Logo />
        <NavItem url='/products'>Products</NavItem>
        <NavItem url='/contacts'>Contacts</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;