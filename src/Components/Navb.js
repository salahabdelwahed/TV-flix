import React from "react";
import "../CSS/Navbar.css";
import { Button, Form } from "react-bootstrap";

const Navb = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-intro">
          <img src="./images/logo.svg" alt="" />
          <div className="search-btn">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn" variant="danger">Sing In</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navb;
