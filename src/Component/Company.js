import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./Company.css";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Company() {
  const navigate = useNavigate;
  const { id } = useParams();
  const [companyName, setCompanyName] = useState();
  const [companyAddress, setCompanyAddress] = useState();
  const [invoiceNo, setInvoiceNo] = useState();
  const [billNo, setBillNo] = useState();
  const [date, setDate] = useState();
  const [rate, setRate] = useState();
  const [weight, setWeight] = useState();
  const [customerData, setCustomerData] = useState([]);

  //------------Get User Data Info------------------------

  let sum = 0;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/company/userInfo/${id}`)
      .then((UserData) => {
        setCustomerData(UserData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //------------Get Pevious Page Data------------------------

  useEffect(() => {
    axios
      .get(`http://localhost:3001/company/companyInfo/${id}`)
      .then((result) => {
        setCompanyName(result.data.companyName);
        setCompanyAddress(result.data.companyAddress);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //------------Hide Info Element------------------------

  const hide = () => {
    const element = document.getElementById("Extended-Data");
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  };

  //------------Save Page Data------------------------

  const Submit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    let custId = id;
    let amount = rate * weight;
    axios
      .post(`http://localhost:3001/company/${id}`, {
        custId,
        invoiceNo,
        billNo,
        date,
        rate,
        weight,
        amount,
      })
      .then((result) => {
        console.log(result);
        alert("Data Added");
      })
      .catch((err) => console.log(err));

    setTimeout(function () {
      window.location.reload();
    }, 500);

    const element = document.getElementById("Extended-Data");
    element.style.display = "none";
  };

  //------------Download PDF------------------------

  const downloadPDF = (compName) => {
    const input = document.getElementById("statement");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(imgData, imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save(`${compName}.pdf`);
    });
  };

  //------------------------Back Button-----------------------

  return (
    <div className="icons">
      <div className="arrow">
        <Link to="/">
          <button className="backArrow">
            <FaArrowLeftLong size="25px" color="black" />
          </button>
        </Link>
      </div>

      <div className="buttons">
        <div id="infoColl">
          <button id="addUser" onClick={() => downloadPDF(companyName)}>
            Download Statement
          </button>

          <button id="addUser" onClick={hide}>
            Delivery Info
          </button>
        </div>
      </div>
      <br />

      <div id="Extended-Data" style={{ display: "none" }}>
        <form className="forms" action="post" onSubmit={Submit}>
          <div>
            <div className="info">
              <span className="new-data">
                <div className="space">Invoice No: </div>
                <input
                  type="text"
                  required
                  onChange={(e) => setInvoiceNo(e.target.value)}
                />
              </span>
              <span className="new-data">
                <div className="space">Bill No: </div>
                <input
                  type="number"
                  min="0"
                  required
                  onChange={(e) => setBillNo(e.target.value)}
                />
              </span>
            </div>

            <div className="info">
              <span className="new-data">
                <div className="space">Weight: </div>
                <input
                  type="number"
                  min="0"
                  required
                  onChange={(e) => setWeight(e.target.value)}
                />
              </span>
              <span className="new-data">
                <div className="space">Rate: </div>
                <input
                  type="number"
                  min="0"
                  required
                  onChange={(e) => setRate(e.target.value)}
                />
              </span>
            </div>
            <div className="info">
              <span className="new-data">
                <div className="space">Date: </div>
                <input type="date" onChange={(e) => setDate(e.target.value)} required/>
              </span>
            </div>
          </div>

          <div>
            <button type="submit" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <br />
      <br />

      <div id="statement">
        <table className="statement">
          <thead>
            <tr>
              <td colspan="6">
                <h3 className="state">STATEMENT</h3>
              </td>
            </tr>

            <tr>
              <td colspan="6">
                <h2 className="owner">M/s. GOKUL TRADERS</h2>
              </td>
            </tr>
            <tr>
              <td colspan="6">
                <h4 className="merchant">charcoal merchant</h4>
              </td>
            </tr>
            <tr>
              <td colspan="6" >{companyAddress}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>INVOICE NO. </th>
              <th colspan="3">P00103</th>
              <th colspan="2">Date: 31-12-2023</th>
            </tr>
            <tr>
              <td colspan="6">
                <span className="compName">Name:- {companyName}</span>
              </td>
            </tr>
            <tr>
              <th style={{ width: "155px" }}>Date</th>
              <th style={{ width: "85px" }}>Particular</th>
              <th style={{ width: "65px" }}>Bill no</th>
              <th style={{ width: "65px" }}>Rate</th>
              <th style={{ width: "75px" }}>Weight</th>
              <th style={{ width: "85px" }}>Amount</th>
            </tr>
            {customerData.map((data) => {
              sum += data.amount;
              return (
                <tr>
                  <td>{data.date.split("T")[0]}</td>
                  <td>charcoal</td>
                  <td>{data.billNo}</td>
                  <td>{data.rate}</td>
                  <td>{data.weight}</td>
                  <td>{data.amount}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5">Total: </td>
              <td>{sum}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
