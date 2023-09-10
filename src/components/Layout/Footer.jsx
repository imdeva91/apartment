import React from "react";
import { BsGithub, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../Styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer pt-4 d-flex flex-column align-items-center justify-content-center bg-dark text-light p-4">
      <h3>
        Made With
        <img
          src="https://media.tenor.com/fFR5PQSc3pcAAAAj/%E6%81%A5%E3%81%9A%E3%81%8B%E3%81%97%E3%81%84-%E5%AC%89%E3%81%97%E3%81%84.gif"
          alt="love"
          height={60}
          width={80}
          className="mx-3 footer-gif"
        />
        From India
      </h3>
      <h6>All Right Reserved &copy; Deva Rajput - 2022</h6>
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="/">
            <BsGithub color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="/">
            <BsInstagram color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Telegram">
          <Link to="/">
            <BsTelegram color="black" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Youtube">
          <Link to="/">
            <BsYoutube color="black" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;