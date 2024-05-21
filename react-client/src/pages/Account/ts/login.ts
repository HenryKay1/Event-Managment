import { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { loginRequest } from '../../../actions/Account/login';


export interface LoginData {
    email: string;
    password: string;
}
  
export const loginSchema = yup.object().shape({
    email: yup.string().required('Email is required')
      .email('Email is not valid')
      .min(6, 'Email must have at least 6 characters'),
    password: yup.string().required('Password is required')
      .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/,'Password must contain at least one special character, and uppercase letter')
      .min(6, 'Password  have at least 6 characters'),
  });
  export const onSubmit: SubmitHandler<LoginData> = async data => {
    try {
      const response = await loginRequest(data);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  export {}