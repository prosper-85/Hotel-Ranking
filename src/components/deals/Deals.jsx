import { Button } from '@mui/material';
import './deals.scss';

const Deals = () => {
  return (
    <div className='container'>
      <img
        src='https://q-xx.bstatic.com/psb/capla/static/media/gateway_banner.efe9b1ad.jpg'
        alt='@Prosper'
      />
      <div className='wrapper'>
        <h2>Save 15% or more</h2>
        <p>Plan your dream trip with Prosper</p>
        <Button variant='contained'>Explore deals</Button>
      </div>
    </div>
  );
};

export default Deals;
