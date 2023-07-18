import React from "react";
import Footer from "../FooterPage/Footer";
import Navigation from "../Navigation/Navigation";
import { useContext } from "react";
import { myUserContext } from "../../Utilities/UserContext";

const Home = () => {
  const { user, handleLoginPage, handleSignUpPage, homePageRedirect } =
    useContext(myUserContext);

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

      <section>
        <h1> Find your home without breaking a sweat </h1>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Home;
