import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Drawer from '../Drawer/Drawer';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (<main className={classes.Layout}>
    <Toolbar toggleDrawer={toggleDrawer} />
    <Drawer open={drawerOpen} toggle={toggleDrawer} />
    <div className='container'>
      {children}
    </div>
    <Footer />
  </main>);
}

export default Layout;