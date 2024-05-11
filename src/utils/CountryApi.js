import axios from 'axios';

export const fetchCountries = async () => {
  try {
    const response = await axios(
      'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
    );
    const data = await response.data;
    return data.map((country) => country.country);
  } catch (error) {
    console.error('Error fetching countries:', error);
    return [];
  }
};
