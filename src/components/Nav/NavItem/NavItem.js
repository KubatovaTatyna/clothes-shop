import classes from './NavItem.module.css';

const NavItem = ({ url , children, active}) => {
  const classNames = [];
  if(active) {
    classNames.push('active');
  }

  return (
    <li className={classes.NavItem}>
      <a href={url}
      className={classes.active}>{children}</a>
    </li>
  );
}

export default NavItem;