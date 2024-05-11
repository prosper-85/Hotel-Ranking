import { useState } from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { fetchCountries } from '@/redux/countrySlice';
import { Button, Grid, TextField } from '@mui/material';
import { toast } from 'react-toastify';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      dispatch(loginUser(formData));
      dispatch(fetchCountries());
      toast.success(`Login successfully`);
      setIsLoading(false);
      navigate('/create-hotel');
    }, 1000);
  };

  return (
    <Grid className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Welcome</h1>
        <TextField
          name='username'
          value={formData.username}
          onChange={handleChange}
          required
          minLength={3}
          maxLength={20}
          type='text'
          label='Username'
        />
        <TextField
          name='password'
          value={formData.password}
          onChange={handleChange}
          type='password'
          required
          label='Password'
        />
        <Button
          variant='contained'
          fullWidth
          type='submit'
          disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Grid>
  );
}

export default Login;
