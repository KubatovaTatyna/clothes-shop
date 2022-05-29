import Nav from '../Nav/Nav';
import Logo from '../ui/Logo/Logo';
import classes from './Drawer.module.css';

const Drawer = ({ open, toggle }) => {
  const classNames = [classes.Drawer];
  if(open) {
    classNames.push(classes.open)
  }
  return ( <div className={classNames.join(' ')}>
    <div onClick={toggle} className={classes.backdrop}></div>
    <div className={classes.content}>
      <Nav />
    </div>
  </div> );
}

export default Drawer;