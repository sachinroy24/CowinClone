import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail, password);
    const baseURL = "http://localhost:3001/api/login";
    // axios.post(baseURL, { mail, password }).then((response) => {
    //   if (response.error) {
    //     setError("Incorrect email or password");
    //   } else {
    //     setData(response.data);
    //    router.push("/user/dashboard");
    //   }
    // });
    // Above Commented Code will be used for backend purpose and Authentication.

    router.push({
      pathname: "/user/dashboard",
      query: { uid: "6367126268238393" }, // Here UID is hardcoded otherwise it will come from backend and value w=would be data.uid
    });
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle">
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form className="mt-3 mb-3" onSubmit={handleSubmit}>
          <div class="form-group ">
            <label for="exampleInputEmail1">Email : </label>
            <input
              type="email"
              className="form-control "
              id="exampleInputEmail1"
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
                id="exampleInputPassword1"
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

export default Login;
