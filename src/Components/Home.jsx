import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/front-pic.png";

const imageAltText =
  "My dev image";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
      <img
        className="background"
        src={image}
        alt=""
        style={{
          position: "absolute",
          top: 50,
          right: 0,
          bottom: 0,
          left: "70%",
          width: "60%",
          objectFit: "cover",
        }}
      />
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
