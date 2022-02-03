import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, mail, password);
    router.push("/login");
    const baseURL = "http://localhost:3001/api/signin";
    //     axios.post(
    //       baseURL,
    //       {
    //         name,
    //         mail,
    //         password,
    //       }.then((response) => {
    //         if (response.error) {
    //           setError(response.error);
    //         } else {
    //           router.push("/login");
    //         }
    //       })
    //     );
    // The Above Commented part of code will be used for Backend and to store credentials in database.
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      {error && (
        <div class="alert alert-danger" role="alert">
          Email Already Exist.
        </div>
      )}

      <div className="position-absolute top-50 start-50 translate-middle">
        <form className="mt-3 mb-3" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name :</label>
            <input
              type="name"
              className="form-control"
              placeholder="Username"
              onChange={handleNameChange}
            />
          </div>
          <div class="form-group ">
            <label for="exampleInputEmail1">Email : </label>
            <input
              type="email"
              className="form-control "
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={handleMailChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group row ">
            <div>
              <label for="exampleInputPassword1">Password :</label>
            </div>
            <div>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
