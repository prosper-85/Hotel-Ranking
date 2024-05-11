import { useState } from 'react';
import './login.scss';
import { useDispatch } from 'react-redux';
import { loginUser } from '@/redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCountries } from '@/redux/countrySlice';

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
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className='login'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Welcome</h1>
          <input
            name='username'
            value={formData.username}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={20}
            type='text'
            placeholder='Username'
          />
          <input
            name='password'
            value={formData.password}
            onChange={handleChange}
            type='password'
            required
            placeholder='Password'
          />
          <button type='submit' disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
}

export default Login;
