import React, { useState } from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 100px;
`;

const ContactUs = ({ innerref }) => {
  const [fullName, setFullName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !mobileNo || !email || !description) {
      alert("All fields are required.");
    } else {
      alert(
        `Your Full Name is ${fullName}, your mobileno is ${mobileNo}, your email is ${email} and description ${description}`
      );
    }
  };
  return (
    <MainDiv ref={innerref}>
      <h1>Contact Us</h1>
      <div class="card shadow p-3 mt-5 bg-white rounded px-md-5">
        <form onSubmit={onSubmit} className="mb-5">
          <div className="mb-3">
            <label for="nameInput" className="form-label">
              Full Name
            </label>
            <input
              type="name"
              className="form-control"
              id="nameInput"
              placeholder="Example"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label for="phoneInput" className="form-label">
              Mobile No
            </label>
            <input
              type="phone"
              className="form-control"
              id="phoneInput"
              placeholder="+91"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Desciption
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-outline-success">
            Submit
          </button>
        </form>
      </div>
    </MainDiv>
  );
};

export default ContactUs;
