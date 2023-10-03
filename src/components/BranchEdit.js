import React, { useState } from 'react'
import collegeService from '../service/college.service';

const BranchEdit = () => {
    const [college, setCollege] = useState({
        name: '',
        
      });
    
      const [msg, setMsg] = useState('');
    
      const handleChange = (e) => {
        const { name, address } = e.target; 
        setCollege({ ...college, name: name , address: address}); 
      };
    
      const submitCollege = (e) => {
        e.preventDefault();
        collegeService.saveCollege(college)
          .then((res) => {
            setMsg("College saved successfully");
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
                  name="collegeName"
                  value={college.collegeName}
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
  )
}

export default BranchEdit
