import { Featured, Header, HotelList } from '@/components';
import './home.scss';
import { Grid } from '@mui/material';

const Home = () => {
  return (
    <Grid>
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className='homeTitle'>Browse by Category type</h1>
        <HotelList />
      </div>
    </Grid>
  );
};

export default Home;
