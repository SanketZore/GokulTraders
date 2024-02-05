import React, { useState, useEffect } from "react";
import "./FrontPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
// import img from "./images/download.jpeg";
// import img1 from "./images/download1.jpeg";
// import img2 from "./images/download2.jpeg";
// import img3 from "./images/imagesfire.jpeg";
// import img4 from "./images/images.jpeg";
function FrontPage() {
  //---------- POST METHOD ------------
  const [companyName, setCompanyName] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  // const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    // console.log("Clicked");

    axios
      .post("http://localhost:3001/", { companyName, companyAddress })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));

    alert("Customer Added");
    setTimeout(function () {
      window.location.reload();
    }, 500);

    const element = document.getElementById("new-company");
    element.style.display = "none";
  };

  //---------- GET COMPANIES METHOD ------------

  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => {
        setCompany(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //---------- HIDE METHOD ------------

  const hide = () => {
    const element = document.getElementById("new-company");
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  };

  //---------- NAVIGATION METHOD ------------
  // let [id, setId] = useState();
  // console.log(id)
  // const handleClick = () => {
  //   navigate(`/company/${id}`);
  // };

  return (
    <div id="backGround">
      <div className="addUser">
        <button id="addUser" onClick={hide}>
          Add Company
        </button>
      </div>

      <div id="new-company" style={{ display: "none" }}>
        <form className="company-form" action="" onSubmit={Submit}>
          <span className="company">
            <div className="space">Name: </div>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </span>
          <span className="company">
            <div className="space" id="space">
              Address:{" "}
            </div>
            <input
              type="text"
              required
              className="form-control"
              onChange={(e) => setCompanyAddress(e.target.value)}
            />
          </span>
          <div>
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="users">
        <div id="Users">Users</div>

        <div className="coalDisplay">
          <div className="users-cart">
            {company.map((data) => {
              return (
                <Link
                  to={`/company/${data._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="User-Item">
                    <span className="name">
                      <span className="display">Name: </span>{" "}
                      <span id="inline">{data.companyName.slice(0, 60)}</span>
                    </span>
                    <span className="address">
                      <span className="display">Address: </span>
                      <span id="inline">
                        {data.companyAddress.slice(0, 50)}
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="images">
            {/* <img className="hide nfty" src={img} width={200} alt="#" /> */}
            {/* <img  src={img1} width={200} alt="#" /> */}
            {/* <img className="hide nfty" src={img2} width={200} alt="#" /> */}
            {/* <img className="hide nfty" src={img3} width={200} alt="#" /> */}
            {/* <img className="hide nfty" src={img4} width={200} alt="#" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
