import React, { useEffect, useState } from 'react'
import collegeService from '../service/college.service';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCollegeById, getList } from '../slice/CollegeSlice';

const Home = () => {
  const { colleges} = useSelector((state) => state.college);
  console.log(colleges);
const dispatch=useDispatch();
const navigate=useNavigate();
 // const [collegeList,setCollegeList] = useState([]);
  const[msg,setmsg]=useState('');
  useEffect(() => {
    collegeService.getAllColleges().then((response)=>{
      // setCollegeList(response.data);
       dispatch(getList(response.data));
       console.log(response.data);
     }).catch((error) => {
       console.log(error);
     })
  },[]);
  
  console.log(colleges);
  const deleleCollege = (id) => {
    console.log(id);
    collegeService.deleteCollegeById(id).then((response)=>{
      setmsg("Deleted successfully");
      dispatch(deleteCollegeById(id));
      navigate("/")
      
    }).catch((error) => {
      console.log(error);
    })

    console.log(id);
  }
  return (
    <div className='container'>
      <h1 className='text-center mt-3'> Home page</h1>
      {msg && <p className='text-center text-success'>{msg}</p>}
      <table className="table mt-3">
  <thead className="bg-light">
    <tr>
      <th scope="col">S no</th>
      <th scope="col">id</th>
      <th scope="col">collegeName</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {colleges && colleges.map((c, num) => (
    <tr key={c.id}>
      <th scope="row">{num + 1}</th>
      <td>{c.id}</td>
      <td>{c.name}</td>
      <td>{c.address}</td>
      <td><Link to={"/branches/"+c.id} className='btn btn-sm btn-warning'>Branches</Link></td>
      <Link to={"edit-college/" + c.id} className='btn btn-sm btn-primary'>Edit</Link>
      <button className='btn btn-sm btn-danger ms-2' onClick={() => deleleCollege(c.id)}>Delete</button>
    </tr>
  ))}
</tbody>

</table>
    </div>
  )
}

export default Home
