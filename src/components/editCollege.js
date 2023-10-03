import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import collegeService from '../service/college.service';

const EditCollege = () => {
  const [college, setCollege] = useState({
    id: '',
    name: '', 
    address: '',
    branches: []
  });
  const navigate = useNavigate();
  const [msg, setMsg] = useState('');
  const { id } = useParams(); 

  useEffect(() => {
    collegeService.getCollegeById(id)
      .then((response) => {
        setCollege(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]); 
      console.log(college);
  const handleChange = (e) => {
    const value = e.target.value;
    setCollege({ ...college, [e.target.name]: value });
  };

  const updateCollege = (e) => {
    e.preventDefault();
    collegeService.updateCollegeById(college.id, college)
      .then((response) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-header text-center fs-3'>Edit College</div>
              {msg && <p className='text-success'>{msg}</p>}
              <div className='card-body'>
                <form onSubmit={updateCollege}>
                  <div className='mb-3'>
                    <label>Enter college Name:</label>
                    <input
                      type='text'
                      className='form-control'
                      name="collegeName"
                      value={college.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='mb-3'>
                    <label>Enter Address:</label>
                    <input
                      type='text'
                      className='form-control'
                      name="address"
                      value={college.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                    <input type='Reset' className='btn btn-danger ms-3' value="Reset" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCollege;
