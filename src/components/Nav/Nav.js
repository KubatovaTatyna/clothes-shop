import Logo from '../ui/Logo/Logo';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className='container'>
        <ul>
          <NavItem url='/'>Home</NavItem>
          <NavItem url='/categories'>Categories</NavItem>
          <Logo />
          <NavItem url='/products'>Products</NavItem>
          <NavItem url='/contacts'>Contacts</NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;