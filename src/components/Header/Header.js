import classes from './Header.module.css';

const Header = ({ image, title, children }) => {
  return ( <header className={classes.Header}>
    <img src={image}/>
  </header> );
}

export default Header;