import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faShieldVirus,
  faVirusSlash,
  faVirus,
  faViruses,
} from "@fortawesome/free-solid-svg-icons";
import Instructions from "./instructions";
import Navbar from "../Components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Account = (props) => {
  const uid = props.children;

  const [data, setData] = useState();

  const baseURL = "http://localhost:3000/Users";
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(baseURL, { uid }).then((response) => {
      console.log(response.data[0]);
      setData(response.data[0]);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const members = data.members;
  const router = useRouter();
  return (
    <div className=" bg-light db1 ">
      <Navbar>{data.name}</Navbar>
      <div className="bg-white db2">
        <h4
          className="text-primary"
          style={{ marginLeft: "50px", paddingTop: "40px" }}
        >
          Account Details
        </h4>
        <div
          style={{ marginBottom: "60px", marginLeft: "50px" }}
          className="position-relative"
        >
          <h5>Account Holder Name : {data.name}</h5>
          <button
            className="btn btn-outline-primary position-absolute top-0 end-0"
            onClick={() => {
              router.push({
                pathname: "/user/issue",
                query: { uid: data.uid, name: data.name },
              });
            }}
          >
            Raise an Issue
          </button>
        </div>
        <h3 className="d-flex justify-content-center">Registered Members</h3>
        {members.map((member) => {
          const status =
            member.doses.length == 0
              ? "Not Vaccinated"
              : member.doses.length == 1
              ? "Partially Vaccinated"
              : "Fully Vaccinated";
          return (
            <div className=" border border-secondary rounded-3 mb-3  bg-white ">
              <div
                style={{ marginLeft: "50px", marginTop: "30px" }}
                className="row"
              >
                <div className="col-md-8">
                  <div>
                    <strong>{`${member.name}`}</strong>
                    {` | Age: ${member.age} | Aadhar: ${member.aadhar}`}
                  </div>
                  <div>{`Reference ID: ${member.uid}`} </div>
                </div>
                <div className="col-md-4">
                  {status == "Not Vaccinated" ? (
                    <FontAwesomeIcon
                      icon={faViruses}
                      size="5x"
                      style={{ color: "red" }}
                    ></FontAwesomeIcon>
                  ) : status == "Partially Vaccinated" ? (
                    <FontAwesomeIcon
                      icon={faVirus}
                      size="5x"
                      style={{ color: "blue" }}
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      icon={faShieldVirus}
                      size="4x"
                      style={{ color: "green" }}
                    ></FontAwesomeIcon>
                  )}
                </div>
              </div>
              <hr></hr>
              <div style={{ marginLeft: "50px", marginBottom: "30px" }}>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                  Vaccination Status: <strong>{status}</strong>
                </div>
                {status == "Not Vaccinated" && (
                  <div>
                    <button className="btn btn-info btn-sm">Schedule 1</button>
                    <button
                      className="btn btn-outline-danger btn-sm "
                      style={{ marginLeft: "5px" }}
                    >
                      Remove Member
                    </button>
                  </div>
                )}
                {status == "Partially Vaccinated" && (
                  <div>
                    <div style={{ color: "green" }}>
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                      Dose1: {member.doses[0].vaccine}
                      <div>
                        {" "}
                        Centre :{member.doses[0].centre} | Date:{" "}
                        {member.doses[0].date}
                      </div>
                    </div>
                    <div>
                      <button
                        className="btn btn-info btn-sm"
                        style={{ marginTop: "20px" }}
                      >
                        Schedule 2
                      </button>
                    </div>
                  </div>
                )}
                {status == "Fully Vaccinated" && (
                  <div>
                    <div style={{ color: "green" }}>
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                      Dose1: {member.doses[0].vaccine}
                      <div>
                        {" "}
                        Centre : {member.doses[0].centre} | Date:{" "}
                        {member.doses[0].date}
                      </div>
                    </div>
                    <hr></hr>
                    <div style={{ color: "green" }}>
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                      Dose2: {member.doses[1].vaccine}
                      <div>
                        {" "}
                        Centre :{member.doses[1].centre} | Date:{" "}
                        {member.doses[1].date}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {data.members.length <= 5 && (
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              router.push({
                pathname: "/user/addMember",
                query: { name: data.name },
              });
            }}
          >
            +Add Members
          </button>
        </div>
      )}
      <div>
        <Instructions></Instructions>
      </div>
    </div>
  );
};

export default Account;

// router.push({
//       pathname: "/user/dashboard",
//       query: { uid: "6367126268238393" }, // Here UID is hardcoded otherwise it will come from backend and value w=would be data.uid
//     });
//   };
