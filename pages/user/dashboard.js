import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Account from "../../Components/dashboard_acc";
const DashBoard = () => {
  const router = useRouter();
  const uid = router.query.uid;
  const [data, setData] = useState({
    name: "Sachin Roy",
    age: 22,
    mail: "sachinroy.ee@gmail.com",
    password: "Password",
    contact: "7766818255",
    uid: "6367126268238393",
    members: [
      {
        name: "Prince Kumar",
        age: 21,
        aadhar: "5533 1122 9981 3421",
        uid: "436718925245",
        doses: [
          {
            vaccine: "CovidShield",
            date: "24-01-2020",
            centre: "UPSC Kalyanpur",
          },
          { vaccine: "CovidShield", date: "18-05-2020", centre: "DTC Gujaini" },
        ],
      },
      {
        name: "Shalu Verma",
        age: 24,
        aadhar: "6572 2341 3531 1231",
        uid: "436718925245",
        doses: [
          {
            vaccine: "CovidShield",
            date: "24-01-2020",
            centre: "UPSC Kalyanpur",
          },
          { vaccine: "CovidShield", date: "18-05-2020", centre: "DTC Gujaini" },
        ],
      },
      {
        name: "Kamla Devi",
        age: 47,
        aadhar: "5533 1122 9981 3421",
        uid: "436718925245",
        doses: [
          {
            vaccine: "CovidShield",
            date: "24-01-2020",
            centre: "UPSC Kalyanpur",
          },
        ],
      },
      {
        name: "Pritam Thakur",
        age: 21,
        aadhar: "5533 1122 9981 3421",
        uid: "436718925245",
        doses: [],
      },
    ],
  });
  //   useEffect(() => {
  //     const baseURL = "http://localhost:3001/api/getinfo";
  //     axios.post(baseURL, { uid }).then((response) => {
  //       setData(response);
  //     });
  //   }, []);

  // Above Commented Code will be used for backend Purpose.
  console.log(data);
  const JSONdata = JSON.stringify(data);
  return (
    <>
      <Account>{JSONdata}</Account>
    </>
  );
};

export default DashBoard;
