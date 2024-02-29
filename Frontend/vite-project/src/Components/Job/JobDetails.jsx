import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();
  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/login");
  }
  return (
  <div className="jobDetail page">
    <div className="container">
      <h3>Job Description</h3>
      <div className="banner">
        <p>
          Title:<span> {job.title}</span>
        </p>
        <p>
          Category: <span> {job.category}</span>
        </p>
        <p>
          Country: <span> {job.country}</span>
        </p>
        <p>
          City: <span> {job.city}</span>
        </p>
        <p>
          Location: <span> {job.location}</span>
        </p>
        <p>
          Description: <span> {job.description} </span>
        </p>
        <p>
          Job Posted On: <span> {job.jobPostedOn}</span>
        </p>
        <p>
          Salary:{" "}
          {job.fixedSalary ? (
            <span>{job.fixedSalary}</span>
          ) : (
            <span>
              {job.salaryFrom}-{job.salaryTo}
            </span>
          )}
        </p>
        <p>
          {user && user.role === "Employer" ? (
            <></>
          ) : (
            <Link to={`/application/${job._id}`}>Apply for this Job</Link>
          )}
        </p>
      </div>
    </div>
  </div>
  )
};

export default JobDetails;
