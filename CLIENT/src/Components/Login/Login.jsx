import Navigation from "../Navigation/Navigation";
import "./Login.css";
import { React, useContext, useState } from "react";
import Button from "../../Utilities/Button";
import { Form, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { myUserContext } from "../../Utilities/UserContext";

const Login = () => {
  const { user, handleLoginPage, handleSignUpPage, homePageRedirect } =
    useContext(myUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add my login logic here
  };
  return (
    <>
      <header>
        <Navigation
          user={user}
          handleLoginPage={handleLoginPage}
          handleSignUpPage={handleSignUpPage}
          homePageRedirect={homePageRedirect}
        ></Navigation>
      </header>

      <section className="flex-container">
        <div className="login-img">
          <img src="../src/assets/smartcity-remo.png" alt="login" />
        </div>

        {/* <h1> Login Page </h1> */}
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Login Page</Modal.Title>
          </Modal.Header>
          <span>Welcome back! Please enter your details.</span>
          <br />
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <div className="password-input-container">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <div className="password-toggle" onClick={handleShowPassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </Form.Group>

              <Form.Group controlId="rememberMe">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
              </Form.Group>
              <br />

              <Button type="submit" variant="primary">
                Login
              </Button>
            </Form>
          </Modal.Body>
          <br />
          <br />
          <div className="hr-strike">
            <span>Or</span>
          </div>
        </Modal.Dialog>
      </section>
      <section></section>
    </>
  );
};

export default Login;
