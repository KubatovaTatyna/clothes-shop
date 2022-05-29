import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Drawer from '../Drawer/Drawer';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';

const Layout = ({ children }) => {
  return (<main className={classes.Layout}>
    <Toolbar />
    <Drawer />
    <div className='container'>
      {children}
    </div>
    <Footer />
  </main>);
}

export default Layout;