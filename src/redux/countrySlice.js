import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await axios.get(
      'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    );
    return response.data.map((country) => country.country);
  }
);

const countrySlice = createSlice({
  name: 'countries',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const selectCountries = (state) => state.countries;
export default countrySlice.reducer;
