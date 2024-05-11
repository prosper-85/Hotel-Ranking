import './list.css';
import Header from '../../components/header/Header';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import { useSelector } from 'react-redux';

const List = () => {
  const location = useLocation();
  const [country, setCountry] = useState(location.state.country);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [category, setCategory] = useState(location.state.category);

  const hotels = useSelector((state) => state.hotel);
  return (
    <div>
      <Header type='list' />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
              <label>Country</label>
              <input placeholder={country} type='text' />
            </div>
            <div className='lsItem'>
              <label>Category</label>
              <input placeholder={category} type='text' />
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            {hotels.map((item, i) => (
              <SearchItem item={item} key={item.i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
