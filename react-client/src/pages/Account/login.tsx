import React from 'react';
import './styles/login.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginRequest } from '../../actions/Account/login';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';


interface LoginData {
  email: string;
  password: string;
}

 const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required')
    .email('Email is not valid')
    .min(6, 'Email must have at least 6 characters'),
  password: yup.string().required('Password is required')
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/,'Password must contain at least one special character, and uppercase letter')
    .min(6, 'Password  have at least 6 characters'),
});

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = async data => {
    try {
      const response = await loginRequest(data);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='lgn-main-container'>
          <div className="login-container custom-card-1">
      <div className="left-panel">
        <div className="overlay"></div>
      </div>
      <div className="right-panel">
        <div className="login-content">
          <h1 className="title">Event Manager</h1>
          <p className="subtitle">Welcome back! Log in to your account to view today's activity.</p>
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Email" 
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <div className='w100'>
            <div className='flex-col '> 
              <button  className="login-button">Log in</button>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            <div className='flex-col '>
              <button className="login-button" onClick={() => navigate('/register')}>Sign Up</button>
              <a className="forgot-password" onClick={() => navigate('/register')}>Don't have an account?</a>
            </div>

            </div>
           

          </form>
        </div>
      </div>
    </div>

    </div>


  );
};

export default LoginPage;
