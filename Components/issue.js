import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Issue = (props) => {
  const [category, setCategory] = useState();
  const [complaint, setComplaint] = useState();
  const [success, setSuccess] = useState(false);
  const name = props.name;
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
  };
  return (
    <div className="border border-dark db1">
      <Navbar>{name}</Navbar>
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
              <option value="1">Correction In Vaccine Certificate</option>
              <option value="2">Merge Two Dose #1 Certificate</option>
              <option value="3">Add Passport Details</option>
              <option value="4">Report Unknown Member In Your Account</option>
              <option value="5">Report An Bug in Website</option>
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
