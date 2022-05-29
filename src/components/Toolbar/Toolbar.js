import NavToggle from "../Nav/NavToggle/NavToggle";
import Nav from "../Nav/Nav";
import classes from './Toolbar.module.css'

const Toolbar = ({ toggleDrawer }) => {
  return (
    <nav className={classes.Toolbar}>
      <div className='container'>
        <Nav />
        <NavToggle callback={toggleDrawer}/>
      </div>
    </nav>
  );
}

export default Toolbar;