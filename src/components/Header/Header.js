import classes from './Header.module.css';
import headerImage from '../../assets/header.gif';


const Header = () => {
  const style = {
    backgroundImage: `url(${headerImage})`
  }
  return ( <header className={classes.Header} style={style}>
  </header> );
}

export default Header;