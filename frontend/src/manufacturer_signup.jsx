import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ManufacturerSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    phoneno: "",
    address: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState(""); // State for error messages

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("Form Data:", formData);
      // Replace this with an API call to send data to the backend
    }
  };

  return (
    <div>
      {/* Main Form */}
      <div
        className="d-flex justify-content-center align-items-center bg-light min-vh-100"
        style={{
          backgroundImage: `url('/img1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10 bg-white p-5 rounded shadow-lg">
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#007BFF",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  borderRight: "0.15em solid #007BFF",
                  animation:
                    "typing 3s steps(30) 1s 1 normal both, blink 0.75s step-end infinite",
                }}
              >
                Manufacturer Register
              </h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    <strong>Manufacturer Name</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Manufacturer Name"
                    autoComplete="off"
                    name="username"
                    id="username"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneno" className="form-label">
                    <strong>Phone Number</strong>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    autoComplete="off"
                    name="phoneno"
                    id="phoneno"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    <strong>Address</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="age"
                    id="age"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    <strong>Password</strong>
                  </label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={handleInputChange}
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                      className="position-absolute top-50 end-0 translate-middle-y pe-3"
                      onClick={togglePasswordVisibility}
                      style={{ cursor: "pointer", color: "#007BFF" }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">
                    <strong>Confirm Password</strong>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    name="confirm_password"
                    id="confirm_password"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                  {error && <small className="text-danger">{error}</small>}
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100 rounded-0"
                  onClick={handleSubmit}
                >
                  Register
                </button>
              </form>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link to="/login/manufacturer" className="text-decoration-none">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add the logo at top-left */}
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
        <img
          src="/kym-logo.jpeg"
          alt="KYM Logo"
          style={{
            width: "150px",
            height: "150",
            borderRadius: "50%",
          }}
        />
      </div>

      <style>
        {`
          @keyframes typing {
            from {
              width: 0;
            }
            to {
              width: 20ch;
            }
          }

          @keyframes blink {
            50% {
              border-color: transparent;
            }
          }
        `}
      </style>
    </div>
  );
}

export default ManufacturerSignup;