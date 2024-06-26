import './searchItem.scss';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  return (
    <div className='searchItem'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1'
        alt=''
      />
      <div className='siDesc'>
        <h1>Tower Street Apartments</h1>
        <span className='siDistance'>500m from center</span>
        <span className='siDistance'>{item?.country}</span>
        <span className='siSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='siFeatures'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
      </div>
      <div className='siDetails'>
        <div className='siRating'>
          <span>Excellent</span>
          <button>{item?.category}</button>
        </div>
        <div className='siDetailTexts'>
          <span>$112</span>
          <Link to={`/hotels/${item?.id}`}>
            <button className='siCheckButton'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
