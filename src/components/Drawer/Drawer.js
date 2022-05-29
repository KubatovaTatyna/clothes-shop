import Nav from '../Nav/Nav';
import Logo from '../ui/Logo/Logo';
import classes from './Drawer.module.css';

const Drawer = () => {
  return ( <div className={classes.Drawer}>
    <div className={classes.backdrop}></div>
    <div className={classes.content}>
      <Nav />
    </div>
  </div> );
}

export default Drawer;