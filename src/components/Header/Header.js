import classes from './Header.module.css';

const Header = ({ image, title, children }) => {
  return (
    <header className={classes.Header}>
      <img src={image} />
      <h1>{title}</h1>
      {children}
    </header>);
}

export default Header;