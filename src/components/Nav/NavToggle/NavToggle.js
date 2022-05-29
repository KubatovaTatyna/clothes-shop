import classes from './NavToggle.module.css';

const NavToggle = ( {callback} ) => {
  return (
    <div onClick={callback} className={classes.NavToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
   );
}

export default NavToggle;