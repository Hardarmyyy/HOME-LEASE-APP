import Navigation from "../Navigation/Navigation";
import "./Signup.css";
import { React, useContext, useState } from "react";
import Button from "../../Utilities/Button";
import { Form, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { myUserContext } from "../../Utilities/UserContext";

const Signup = () => {
  const { user, handleLoginPage, handleSignUpPage, homePageRedirect } =
    useContext(myUserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

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
    // Add my signup logic here
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

        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <span>To sign up, fill in your personal details below</span>
          <br />
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>
                  Name
                  <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>
                  Email
                  <span style={{ color: "red" }}> *</span>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>
                  Password
                  <span style={{ color: "red" }}> *</span>
                </Form.Label>
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
                Sign In
              </Button>
            </Form>
          </Modal.Body>
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

export default Signup;
