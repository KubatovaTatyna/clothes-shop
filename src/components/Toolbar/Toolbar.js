import NavToggle from "../Nav/NavToggle/NavToggle";
import Nav from "../Nav/Nav";
import classes from './Toolbar.module.css'

const Toolbar = () => {
  return (
    <nav className={classes.Toolbar}>
      <div className='container'>
        <Nav />
        <NavToggle />
      </div>
    </nav>
  );
}

export default Toolbar;