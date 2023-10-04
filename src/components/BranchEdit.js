import React, { useEffect, useState } from "react";
import collegeService from "../service/college.service";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBranch } from "../slice/CollegeSlice";

const BranchEdit = () => {
  const [branch, setBranch] = useState({
    id: "",
    name: "",
  });
   const dispatch= useDispatch();
  const [msg, setMsg] = useState("");
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const bid = queryParams.get("bid");
  const navigate = useNavigate();
  console.log(bid, id);
  const handleChange = (e) => {
    const value = e.target.value;
    setBranch({ ...branch, [e.target.name]: value });
  };
  useEffect(() => {
    collegeService
      .getBranchById(id, bid)
      .then((response) => {
        setBranch(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const submitBranch = (e) => {
    e.preventDefault();
    collegeService
      .updateBranchById(id, bid, branch)
      .then((res) => {
        setMsg("branch updated successfully");
        dispatch(updateBranch({ id: id,bid:bid, branch:branch }))
        navigate("/branches/"+id)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3">Add Branch</div>
            {msg && <p className="text-success">{msg}</p>}
            <div className="card-body">
              <form onSubmit={submitBranch}>
                <div className="mb-3">
                  <label>Enter Branch Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue={branch.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <input
                    type="reset"
                    className="btn btn-danger ms-3"
                    value="Reset"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchEdit;
