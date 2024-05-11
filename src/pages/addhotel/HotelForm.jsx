import React, { useEffect, useState, useCallback } from 'react';
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
import './hotelform.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel } from '@/redux/hotelSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import { selectCountries } from '@/redux/countrySlice';
import { useNavigate } from 'react-router-dom';

const HotelForm = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  const navigate = useNavigate();
  const countries = useSelector((state) => state.country);

  if (!user) {
    toast.warn('You must be logged in to add hotels');
    navigate('/login');
  }
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    country: '',
    category: '',
    address: '',
  });

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

  if (!user) {
    toast.warn('You must be logged in to add hotels');
    navigate('/login');
  }

  return (
    <Grid className='addHotel'>
      <form onSubmit={handleSubmit}>
        <Typography>Add Hotel</Typography>
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
            {countries.map((country, i) => (
              <MenuItem key={i} value={country}>
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
        <Button type='submit'>Add Hotel</Button>
      </form>
    </Grid>
  );
};

export default HotelForm;
