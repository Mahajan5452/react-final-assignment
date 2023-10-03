import React, { useState } from 'react';
import collegeService from '../service/college.service';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBranch, addnewBranch } from '../slice/CollegeSlice';

const AddBranch = () => {
  const [branch, setBranch] = useState({
    name: '',
  });
  const { id } = useParams();
  console.log(id)
  const [msg, setMsg] = useState('');
   const dispatch=useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranch({
      ...branch,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const submitBranch = (e) => {
    e.preventDefault();
    collegeService.saveBranch(id,branch) 
      .then((res) => {
        dispatch(addnewBranch({ id: id, branch: branch }));
        setMsg("Branch saved successfully");
        navigate("/branches/"+id);
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
            <div className='card-header text-center fs-3'>Add Branch</div>
            {msg && <p className='text-success'>{msg}</p>}
            <div className='card-body'>
              <form onSubmit={submitBranch}>
                <div className='mb-3'>
                  <label>Enter Branch Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    name="name"
                    value={branch.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className='text-center'>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                  <input type='reset' className='btn btn-danger ms-3' value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBranch;
