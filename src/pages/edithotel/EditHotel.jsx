import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from '@mui/material';
import './edithotel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { editHotel } from '@/redux/hotelSlice';
import { fetchCountries } from '@/utils/CountryApi';
import axios from 'axios';
import { data } from '@/utils/dummy';
import { toast } from 'react-toastify';

const EditHotel = () => {
  const hotels = useSelector((state) => state.hotel);
  console.log(hotels);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    category: '',
    address: '',
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // const response = await axios(
        //   'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
        // );
        // const data = await response.data;
        const countryList = data.map((country) => country.country);
        setCountries(countryList);
      } catch (error) {
        toast.error(error || 'Error fetching countries');
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const categories = [
    { id: 1, ratting: '1 Star Ratting' },
    { id: 2, ratting: '2 Star Ratting' },
    { id: 3, ratting: '3 Star Ratting' },
    { id: 4, ratting: '4 Star Ratting' },
    { id: 5, ratting: '5 Star Ratting' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editHotel(formData));
    toast.success(`Hotel edited successfully`);
    setFormData({
      name: '',
      country: '',
      address: '',
    });
  };

  return (
    <Grid className='addHotel'>
      <form onSubmit={handleSubmit}>
        <Typography>Edit Hotel</Typography>
        <TextField
          label='Hotel Name'
          name='name'
          value={formData.name}
          required
          onChange={handleChange}
        />
        <FormControl>
          <InputLabel>Select Country</InputLabel>
          <Select
            name='country'
            value={formData.country}
            required
            onChange={handleChange}>
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Select Category</InputLabel>
          <Select
            name='category'
            value={formData.category}
            required
            onChange={handleChange}>
            {categories.map((category, i) => (
              <MenuItem key={i} value={category.ratting}>
                {category.ratting}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label='Hotel Address'
          name='address'
          value={formData.address}
          required
          onChange={handleChange}
        />
        <button type='submit'>Edit Hotel</button>
      </form>
    </Grid>
  );
};

export default EditHotel;
