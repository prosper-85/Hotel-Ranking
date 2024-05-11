import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by Category type</h1>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;
