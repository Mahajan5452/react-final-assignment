import React, { useState } from 'react';
import CollgeService from '../service/college.service'; 

const AddCollege = () => {
  const [college, setCollege] = useState({
    name: "",
    address: "",
    branches: []
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
  
    setCollege({
      ...college,
      [e.target.name]: value  
      
    });
  };

  const submitCollege = (e) => {
    e.preventDefault();
    CollgeService.saveCollege(college)
      .then((res) => {
        setMsg("College saved successfully");
        setCollege({
          name: "",
          address: "",
          branches: []
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center fs-3'>Add College</div>
            {msg && <p className='text-success'>{msg}</p>}
            <div className='card-body'>
              <form onSubmit={submitCollege}>
                <div className='mb-3'>
                  <label>Enter college Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    name="name"
                    value={college.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='mb-3'>
                  <label>Enter Address:</label>
                  <input
                    type='text'
                    className='form-control'
                    name="address"
                    value={college.address}
                    onChange={(e) => handleChange(e)}
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
  );
};

export default AddCollege;
