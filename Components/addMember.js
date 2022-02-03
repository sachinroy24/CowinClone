import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
const MemberForm = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [error, setError] = useState("");
  const [aadhar, setAadhar] = useState();
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const baseURL = "http://localhost:3001/api/crud/add";
    // const uid=UUID.random();
    // axios.post(baseURL, {name,age,aadhar,uid,doses:[] }).then((response) => {
    //   if (response.error) {
    //     setError("Something Went Wrong");
    //   } else {
    //    setData(response.data);
    //    router.push("/user/dashboard");
    //   }
    // });
    // Above Commented Code will be used for backend purpose and Adding Member to data

    router.push({
      pathname: "/user/dashboard",
      query: { uid: "6367126268238393" }, // Here UID is hardcoded otherwise it will come from backend and value would be data.uid
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleAadharChange = (e) => {
    setAadhar(e.target.value);
  };
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <h3 className="d-flex justify-content-center">
        Register for Vaccination
      </h3>
      <p>
        Your Photo ID will be verified at the time of your vaccination
        appointment. Please provide the details of the Photo ID you will carry
        for vaccination.
      </p>
      <form className="mt-3 mb-3" onSubmit={handleSubmit}>
        <div class="form-group ">
          <label for="exampleInputEmail1">Name : </label>
          <input
            type="name"
            className="form-control "
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
        </div>
        <div class="form-group row ">
          <div>
            <label for="exampleInputPassword1">Age :</label>
          </div>
          <div>
            <input
              className="form-control"
              placeholder="Age (In Years)"
              onChange={handleAgeChange}
            />
          </div>
        </div>
        <div class="form-group row ">
          <div>
            <label for="exampleInputPassword1">AAdhar :</label>
          </div>
          <div>
            <input
              className="form-control"
              placeholder="Aadhar Number"
              onChange={handleAadharChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-outline-primary mt-3 "
            //   style={{ marginLeft: "300px" }}
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
