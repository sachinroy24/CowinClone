import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";

const Complaints = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [flip, setFlip] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/complaints")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [flip]);

  if (isLoading) {
    return <div>Bye</div>;
  }

  const deleteAction = (id) => {
    axios
      .delete(`http://localhost:3000/complaints/${id}`)
      .then((response) => {
        setFlip(!flip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar>Sachin Roy</Navbar>
      <div
        style={{
          marginLeft: "200px",
          marginRight: "200px",
          marginTop: "100px",
        }}
      >
        {data.map((complaint) => {
          return (
            <div style={{ marginBottom: "10px" }}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{complaint.area}</h5>
                  <p class="card-text">{complaint.concern}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      deleteAction(complaint.id);
                    }}
                  >
                    Remove Request
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Complaints;
