import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import './hotelform.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel } from '@/redux/hotelSlice';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

const HotelForm = () => {
  const countries = useSelector((state) => state.country);
  const user = useSelector((state) => state.user.user);
  console.log(countries);
  const [isLoading, setIsLoading] = useState(false);
  // if (!user) {
  //   toast.warn('You must be logged in to add hotel');
  //   return <Navigate to='/login' />;
  // }
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
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addHotel(formData));
      toast.success(`Hotel edited successfully`);
      setIsLoading(false);
      setFormData({
        name: '',
        country: '',
        category: '',
        address: '',
      });
    }, 1000);
  };

  return (
    <Grid className='addHotel'>
      <form onSubmit={handleSubmit}>
        <h1>Add Hotel</h1>
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
            fullWidth
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
            fullWidth
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
        <Button
          variant='contained'
          fullWidth
          type='submit'
          disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add Hotel'}
        </Button>
      </form>
    </Grid>
  );
};

export default HotelForm;
