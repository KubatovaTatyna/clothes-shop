import Logo from '../ui/Logo/Logo';
import classes from './Nav.module.css';
import NavItem from './NavItem/NavItem';

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <div className='container'>
        <ul>
          <NavItem url='/'>Home</NavItem>
          <NavItem url='/women'>Women</NavItem>
          <Logo />
          <NavItem url='/men'>Men</NavItem>
          <NavItem url='/kids'>Kids</NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;