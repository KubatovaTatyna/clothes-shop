import Header from "../components/Header/Header";
import headerImage from '../assets/home.gif'

const NotFound = () => {
  return ( <div>
    <Header title="Page not found" image={headerImage}>
      Maybe the page you are looking for was moved of deleted.
    </Header>
  </div> );
}

export default NotFound;