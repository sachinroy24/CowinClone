import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Issue = (props) => {
  const [category, setCategory] = useState();
  const [complaint, setComplaint] = useState();
  const [success, setSuccess] = useState(false);
  const name = props.name;
  const router = useRouter();
  const handleCategoryChange = (e) => {
    setSuccess(false);
    setCategory(e.target.value);
  };
  const handleComplaintChange = (e) => {
    setSuccess(false);
    setComplaint(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    console.log(category, complaint);
    const data = { area: category, concern: complaint };
    const JSONdata = JSON.stringify(data);
    JSONdata = JSONdata.replace(/\//g, "");
    data = JSON.parse(JSONdata);
    console.log(data);

    axios
      .post("http://localhost:3000/complaints", data)
      .then((response) => {
        router.push({
          pathname: "/user/dashboard",
          query: { uid: "6367126268238393" },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(props);
  return (
    <div className="border border-dark db1">
      <Navbar>Sachin Roy</Navbar>
      <div
        className="bg-light border rounded"
        style={{
          width: "50%",
          marginLeft: "25%",
          marginTop: "3%",
          height: "80%",
        }}
      >
        <div
          style={{ marginLeft: "10px", marginRight: "15px", marginTop: "20px" }}
        >
          <h3 className="d-flex justify-content-center">Raise An Issue</h3>
          <p className="text-primary">
            Raise any issue regarding your account with our support team. In
            case your issue is not listed below, you can call on the below
            mentioned numbers and our team will work with you to resolve them.
          </p>
          <form onSubmit={handleSubmit}>
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={handleCategoryChange}
            >
              <option selected>Choose Area of Concern</option>
              <option value="Correction In Vaccine Certificate">
                Correction In Vaccine Certificate
              </option>
              <option value="Merge Two Dose #1 Certificate">
                Merge Two Dose #1 Certificate
              </option>
              <option value="Add Passport Details">Add Passport Details</option>
              <option value="Report Unknown Member In Your Account">
                Report Unknown Member In Your Account
              </option>
              <option value="Report An Bug in Website">
                Report An Bug in Website
              </option>
            </select>
            <div className="input-group">
              <span className="input-group-text">Write your concern</span>
              <textarea
                class="form-control"
                aria-label="With textarea"
                style={{ height: "180px" }}
                onChange={handleComplaintChange}
                value={complaint}
              ></textarea>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-outline-primary">Submit</button>
            </div>
          </form>
          {success && (
            <div class="alert alert-info" role="alert">
              Your Complaint has been submitted. Our representative will contact
              you within next 24 hours.
            </div>
          )}
          <hr></hr>
          <div>
            <div>
              <FontAwesomeIcon icon={faPhoneSquare}></FontAwesomeIcon> Contact
              Us
            </div>
            <div>
              Helpline No. <br></br>+91-11-23978046 (Toll free- 1075)
            </div>

            <div>
              Technical Helpline<br></br> 0120-4783222
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Issue;
