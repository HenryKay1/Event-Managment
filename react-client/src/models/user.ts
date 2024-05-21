import * as yup from 'yup';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  reenterPassword: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  username: yup.string()
    .required('Username is required')
    .min(6, 'Username must be at least 6 characters'),
  password: yup
    .string()
    .required('Password is required')
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])/, 'Password must contain an uppercase letter and a special character'),
  reenterPassword: yup
    .string()
    .required('Please reenter your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  address: yup.string().required('City is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  country: yup.string().required('Country is required'),
  zipCode: yup.string().required('ZIP code is required'),
});
