import {
  faBed,
  faJetFighter,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const Header = ({ type }) => {
  const hotel = useSelector((state) => state.hotel);
  const [country, setCountry] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [category, setCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('hotels', {
      state: { country, date, category: selectedCategory },
    });
  };

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>Find your next stay</h1>
            <p className='headerDesc'>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Prosperbooking account
            </p>
            <div className='headerSearch'>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'>{`${format(
                  date[0].startDate,
                  'MM/dd/yyyy'
                )} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className='headerSearchText'>
                  onClick={() => setOpenOptions(!openOptions)}
                  {`${selectedCategory} hotel`}
                </span>
                {openOptions && (
                  <div className='options'>
                    <div className='optionItem'>
                      {hotel?.map((item, i) => (
                        <span
                          className='optionText'
                          key={i}
                          onClick={() => {
                            setCategory(item.category);
                            setSelectedCategory(item.category);
                          }}>
                          {item?.category}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button className='headerBtn' onClick={handleSearch}>
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
