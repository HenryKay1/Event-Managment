import React from 'react';
import 'cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import Modal from 'react-modal';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { cities, states, countries, zipCodes } from './../../assets/data';

import './styles/register.css';
import { useImageCropper } from './ts/register';
import { schema } from '../../models/user';

Modal.setAppElement('#root');

interface User {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  reenterPassword: string;
  address: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
}

const RegisterPage: React.FC = () => {
  const { image, modalIsOpen, cropperRef, onImageChange, getCroppedImage, setModalIsOpen } = useImageCropper();

  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = data => {
    console.log(data);
  };

  return (
    <div className='rp-container'>
      <div className="register-page custom-card-1">
      {/* Section 1 */}
      <div className='section-1-container'>
        <section className="section1">
          <h1 className="fancy-title">User Registration</h1>
        </section>
      </div>

      <hr className='c-hr-1'></hr>
      {/* Section 2 */}
      <div className='section-2-container'>
      <section className="section2">
        <div className="image-upload" onClick={() => setModalIsOpen(true)}>
          {image ? (
            <img src={image} alt="Uploaded" className="uploaded-image" />
          ) : (
            <FaUserCircle className="default-icon" size={200} />
          )}
          <FaEdit className="edit-icon" title='Edit Image' color='black' size={40}  />
        </div>
        <input
          type="file"
          id="imageUpload"
          style={{ display: 'none' }}
          onChange={onImageChange}
        />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              backgroundColor: 'white', // Set modal background color to white
              width: '50%',
              height: '58%',
              margin: 'auto',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <h2 className="modal-title">Edit Profile Picture</h2>
          <div className="cropper-container">
            <Cropper
              style={{ height: 400, width: '100%' }}
              aspectRatio={1}
              src={image || ''}
              viewMode={1}
              guides={false}
              minCropBoxHeight={100}
              minCropBoxWidth={100}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              ref={cropperRef}
              dragMode="move"
              cropBoxResizable={false}
              cropBoxMovable={false}
              center={true}
              highlight={false}
              zoomOnWheel={false}
            />
            <div className="cropper-mask" />
          </div>
          <div className="modal-buttons">
            <button
              onClick={getCroppedImage}
              disabled={!image} // Disable button if no image
            >
              Crop Image
            </button>
            <button onClick={() => document.getElementById('imageUpload')?.click()}>
              Reupload Image
            </button>
          </div>
        </Modal>
      </section>
      </div>
      <hr className='c-hr-1'></hr>

      {/* Section 3 */}
      <div className='section-3-container'>
      <section className="section3">
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input {...register("firstName")} className="form-control" />
            <p className="text-danger">{errors.firstName?.message}</p>
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input {...register("lastName")} className="form-control" />
            <p className="text-danger">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Username</label>
            <input {...register("username")} className="form-control" />
            <p className="text-danger">{errors.username?.message}</p>
          </div>
          <div className="form-group col-md-6">
            <label>Password</label>
            <input type="password" {...register("password")} className="form-control" />
            <p className="text-danger">{errors.password?.message}</p>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Reenter Password</label>
            <input type="password" {...register("reenterPassword")} className="form-control" />
            <p className="text-danger">{errors.reenterPassword?.message}</p>
          </div>
          <div className="form-group col-md-6">
            <label>Address</label>
            <input {...register("address")} className="form-control" />
            <p className="text-danger">{errors.address?.message}</p>
          </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label>Country</label>
            <select {...register("country")} className="form-control">
              <option key="" value="">Select from dropdown...</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <p className="text-danger">{errors.country?.message}</p>
          </div>
          <div className="form-group col-md-6">
            <label>State</label>
            <select {...register("state")} className="form-control">
            <option key="" value="">Select from dropdown...</option>
              {states.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            <p className="text-danger">{errors.state?.message}</p>
          </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-6">
            <label>City</label>
            <select {...register("city")} className="form-control">
            <option key="" value="">Select from dropdown...</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className="text-danger">{errors.city?.message}</p>
          </div>
          <div className="form-group col-md-6">
            <label>Zip Code</label>
            <select {...register("zipCode")} className="form-control">
            <option key="" value="">Select from dropdown...</option>
              {zipCodes.map(zip => (
                <option key={zip} value={zip}>{zip}</option>
              ))}
            </select>
            <p className="text-danger">{errors.zipCode?.message}</p>
          </div>
        </div>
        <div className='button-container mt-1 flex-even-spacing'>
          <div><button type="submit" className="btn btn-primary">Register</button></div>
          <div>
            <button type="submit" className="btn btn-primary">Login</button>
            <p>Already have an account?</p></div>
        </div>
      </form>
    </section>
      </div>

    </div>
    </div>
  );
};

export default RegisterPage;
