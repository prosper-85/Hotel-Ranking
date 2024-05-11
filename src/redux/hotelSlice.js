import { createSlice } from '@reduxjs/toolkit';

const hotelSlice = createSlice({
  name: 'hotels',
  initialState: [],
  reducers: {
    addHotel: (state, action) => {
      state.push(action.payload);
    },
    editHotel: (state, action) => {
      const { id, ...updatedHotel } = action.payload;
      const index = state.findIndex((hotel) => hotel.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedHotel };
      }
    },
    deleteHotel: (state, action) => {
      return state.filter((hotel) => hotel.id !== action.payload);
    },
    hotelById: (state, action) => {
      return state.hotels.find((hotel) => hotel.id === action.payload);
    },
    selectHotelsByCategoryAndCountry: (state, category, country) => {
      if (!state.hotels) {
        return [];
      }

      return state.hotels.filter((hotel) => {
        if (category && country) {
          return (
            hotel.category.toLowerCase() === category.toLowerCase() &&
            hotel.country === country
          );
        } else if (category) {
          return hotel.category.toLowerCase() === category.toLowerCase();
        } else if (country) {
          return hotel.country === country;
        }
        return true;
      });
    },
  },
});

export const {
  addHotel,
  editHotel,
  deleteHotel,
  hotelById,
  selectHotelsByCategoryAndCountry,
} = hotelSlice.actions;
// export const
// export const
export default hotelSlice.reducer;
