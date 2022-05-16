import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (<main className={classes.Layout}>
    <Nav />
    <div className='container'>
      {children}
    </div>
    <Footer />
  </main>);
}

export default Layout;