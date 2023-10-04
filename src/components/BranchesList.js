import React, { useEffect, useState } from 'react'
import collegeService from '../service/college.service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBranch, deletebranch } from '../slice/CollegeSlice';

const BranchesList = () => {
  const { colleges} = useSelector((state) => state.college);
  const dispatch= useDispatch();
    console.log(colleges);
    const[branches,setbranches] =useState([]);
    const { id } = useParams();
    const navigate=useNavigate();
    
   const index = colleges.findIndex(college => college.id == id);
     const branch= colleges[index].branches;
    // console.log(branch);
    // useEffect(() => {
    //     collegeService.getAllBranchesbyClgId(id)
    //       .then((response) => {
            
    //         setbranches(response.data);
    //         //console.log(response.data);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, [id]);
     // console.log(branches);
     
     const handleEdit=(bid) => {
      
      navigate(`/edit-banches/?id=${id}&bid=${bid}`);
     }
      const handleDeleteBranch = async (branchid) => {
        console.log("branch delete");
        collegeService.deleteBranchbyid(id,branchid)
      .then((response) => {
        dispatch(deletebranch(
          {
            id: id,
            bid: branchid,
          }
        ));
        navigate("/branches/"+id);
        
      })
      .catch((error) => {
        console.error('Error posting data:', error);
      });
      };
      
      
  return (
    <div>
      <div className='container'>
      <h1 className='text-center mt-3'> Branches</h1>
      <Link to={"/branches/"+id+"/add-barnch" } className='btn btn-sm btn-success'>Add Branch</Link>
      <table className="table mt-3">
  <thead className="bg-light">
    <tr>
      <th scope="col">S no</th>
      <th scope="col">id</th>
      <th scope="col">colleg id</th>
      <th scope="col">Branch Name</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {branch && branch.map((b, num) => (
    <tr key={b.id}>
      <th scope="row">{num + 1}</th>
      <td>{b.id}</td>
      <td>{id}</td>
      <td>{b.name}</td>
      <button onClick={()=>{handleEdit(b.id)}} className='btn btn-sm btn-primary'>Edit</button>
      
      <button className='btn btn-sm btn-danger ms-2' onClick={(e) => handleDeleteBranch(b.id,e)}>Delete</button>
    </tr>
  ))}
</tbody>

</table>
    </div>
    </div>
  )
}

export default BranchesList
