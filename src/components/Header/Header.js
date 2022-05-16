import classes from './Header.module.css';

const Header = ({ image, title, children }) => {
  return ( <header className={classes.Header}>
    <img src={image}/>
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  </header> );
}

export default Header;