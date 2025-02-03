import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo3.jpg";

function HomePage() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = sessionStorage.getItem("userName");
    name ? setUsername(name) : setUsername("User");
  }, []);

  return (
    <div style={{ fontFamily: "Reem Kufi, sans-serif", margin: 0, padding: 0 }}>
      {/* Navbar */}
      <div
        style={{
          backgroundColor: "rgba(1, 14, 22, 0.7)",
          padding: "10px 30px",
          position: "fixed",
          width: "100%",
          height: "80px",
          top: 0,
          left: 0,
          zIndex: 500,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        className="navbar"
      >
        <Link
          to="/contactus"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "30px 50px",
            fontSize: "25px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "yellow";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Contact Us
        </Link>
        <Link
          to="/aboutus"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "30px 50px",
            fontSize: "25px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "yellow";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          About Us
        </Link>
        <Link
          to="/logout"
          style={{
            textDecoration: "none",
            color: "white",
            padding: "30px 50px",
            fontSize: "25px",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "yellow";
            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
            e.target.style.backgroundColor = "transparent";
          }}
        >
          Logout
        </Link>
      </div>

      {/* Main Content */}
      <div
        className="d-flex justify-content-center align-items-center min-vh-100"
        style={{
          backgroundImage: `url('/pill4.PNG')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          margin: 0,
        }}
      >
        <div className="container-fluid text-center">
          <h1
            className="text-white mb-5"
            style={{
              color: "#000",
              fontWeight: "900",
              fontSize: "3.5rem",
              textShadow: "3px 3px 7px rgba(0, 0, 0, 0.8)",
            }}
          >
            Welcome {username}
          </h1>
          <div className="row">
            {[
              { path: "/user/notifications", label: "View Notifications" },
              { path: "/user/maintain-pills", label: "Maintain Pills" },
              { path: "/user/scan-qr", label: "Scan QR" },
              { path: "/user/generate-qr", label: "Generate QR" },
            ].map((button, index) => (
              <div key={index} className="col-12 col-md-6 mb-4">
                <Link
                  to={button.path}
                  className="btn btn-lg w-100"
                  style={{
                    fontSize: "2.0rem",
                    fontWeight: "900",
                    height: "150px",
                    padding: "50px 30px",
                    backgroundColor: "rgba(1, 14, 22, 0.7)",
                    color: "white",
                    border: "2px solid white",
                    transition: "background-color 0.3s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {button.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          height: "150px",
          width: "150px",
          top: "10px",
          left: "10px",
          zIndex: 1000,
        }}
      >
        <Link to="/user/home">
          <img
            src={logo}
            alt="KYM Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "100%",
              margin: "10px",
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
