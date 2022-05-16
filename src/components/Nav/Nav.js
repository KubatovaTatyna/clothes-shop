import Logo from '../ui/Logo/Logo';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.Nav}>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Categories</a></li>
        <Logo />
        <li><a href='#'>Products</a></li>
        <li><a href='#'>Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;